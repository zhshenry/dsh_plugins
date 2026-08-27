/* Veang Workbench UI. Copyright (C) 2026 Veang Workbench contributors. MIT License. */
import { promises as fs, createReadStream, createWriteStream, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import mammoth from "mammoth";
import { read as readWorkbook, set_cptable, utils as workbookUtils } from "xlsx";
import * as spreadsheetCodepages from "xlsx/dist/cpexcel.full.mjs";

set_cptable(spreadsheetCodepages);

const API_PATH = "/veang-workbench/api";
const ASSET_PATH = "/veang-workbench/asset";
const MAX_TEXT_BYTES = 12 * 1024 * 1024;
const MAX_BODY_BYTES = 14 * 1024 * 1024;
// Uploads stream straight to disk, so they never pass through the readJson body
// cap and need a limit of their own.
export const MAX_UPLOAD_BYTES = 512 * 1024 * 1024;
const MAX_OFFICE_BYTES = 25 * 1024 * 1024;
const MAX_TERMINAL_COMMAND_BYTES = 16 * 1024;
const MAX_BINARY_BYTES = 64 * 1024 * 1024;
const MAX_TERMINAL_OUTPUT_BYTES = 1024 * 1024;
const TERMINAL_TIMEOUT_MS = 120 * 1000;
const CLIENT_PATH = fileURLToPath(new URL("./client.js", import.meta.url));
const BACKGROUND_PATH = fileURLToPath(new URL("../../assets/background.png", import.meta.url));
const DATA_DIR = path.join(process.env.DSH_HOME || path.join(process.env.USERPROFILE || process.env.HOME || process.cwd(), ".dsh"), "veang-workbench");
const WALLPAPER_DIR = path.join(DATA_DIR, "wallpapers");
const SETTINGS_PATH = path.join(DATA_DIR, "settings.json");
const MAX_WALLPAPER_BYTES = 24 * 1024 * 1024;
const WALLPAPER_NAME_PATTERN = /^wallpaper-[a-z0-9-]+\.(png|jpe?g|webp|gif|avif|bmp)$/i;
const WALLPAPER_TYPES = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".avif": "image/avif", ".bmp": "image/bmp" };
// 0.2.0: the client entry is loaded through the official dsh.client manifest
// (package.json dsh.client) — no more boot-graph rewriting via tapIndex.

const contentTypes = new Map([
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".mp4", "video/mp4"],
  [".mov", "video/quicktime"],
  [".webm", "video/webm"],
  [".mp3", "audio/mpeg"],
  [".wav", "audio/wav"],
  [".m4a", "audio/mp4"]
]);

// SVG is an executable document type: served inline from the same origin it can
// run script against the workspace API, so it is downgraded to a download.
const inlineUnsafeTypes = new Set([".svg"]);

export function assetHeadersFor(extension) {
  const declared = contentTypes.get(extension) ?? "application/octet-stream";
  const unsafe = inlineUnsafeTypes.has(extension);
  const headers = {
    "content-type": unsafe ? "application/octet-stream" : declared,
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'; sandbox",
    "cache-control": "private, max-age=0"
  };
  if (unsafe) headers["content-disposition"] = "attachment";
  return headers;
}

function json(res, status, value) {
  const body = JSON.stringify(value);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store"
  });
  res.end(body);
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) throw new Error("request-too-large");
    chunks.push(chunk);
  }
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

// Lexical containment check only: it compares resolved path strings and cannot
// see through symlinks. Do not reach the filesystem with its result — call
// realTargetFrom instead, which layers a realpath check on top. A test in
// tests/security.test.mjs fails the build if a new call site gets this wrong.
function targetFrom(rootValue, relativeValue = "") {
  if (typeof rootValue !== "string" || !path.isAbsolute(rootValue)) throw new Error("invalid-root");
  if (typeof relativeValue !== "string" || relativeValue.includes("\0")) throw new Error("invalid-path");
  const root = path.resolve(rootValue);
  const target = path.resolve(root, relativeValue);
  if (target !== root && !target.startsWith(root + path.sep)) throw new Error("path-outside-workspace");
  return { root, target };
}

function containedBy(root, target) {
  return target === root || target.startsWith(root + path.sep);
}

// The lexical check above compares strings, so a symlink inside the workspace
// pointing outside still passes it. Resolving both sides catches that. The root
// itself is resolved too, so a symlinked workspace root is not mistaken for an
// escape. Missing entries fall back to their nearest existing ancestor, which is
// what a create still needs to be validated against.
async function realTargetFrom(rootValue, relativeValue = "") {
  const { root, target } = targetFrom(rootValue, relativeValue);
  const realRoot = await fs.realpath(root);
  let candidate = target;
  for (;;) {
    try {
      const realTarget = await fs.realpath(candidate);
      const suffix = path.relative(candidate, target);
      const resolved = suffix ? path.join(realTarget, suffix) : realTarget;
      if (!containedBy(realRoot, resolved)) throw new Error("path-outside-workspace");
      return { root, target, realRoot, realTarget: resolved };
    } catch (error) {
      if (error?.message === "path-outside-workspace") throw error;
      if (error?.code !== "ENOENT") throw error;
      const parent = path.dirname(candidate);
      if (parent === candidate) throw new Error("path-outside-workspace");
      candidate = parent;
    }
  }
}

export async function listWorkspaceDirectory(root, relative) {
  const { target } = await realTargetFrom(root, relative);
  const dirents = (await fs.readdir(target, { withFileTypes: true })).slice(0, 2000);
  const entries = await Promise.all(dirents.map(async (entry) => {
    const absolute = path.join(target, entry.name);
    let stat;
    try { stat = await fs.stat(absolute); } catch { stat = null; }
    return {
      name: entry.name,
      path: path.relative(path.resolve(root), absolute),
      directory: entry.isDirectory(),
      symlink: entry.isSymbolicLink(),
      hidden: entry.name.startsWith("."),
      size: stat?.size ?? 0,
      mtimeMs: stat?.mtimeMs ?? 0
    };
  }));
  entries.sort((a, b) => Number(b.directory) - Number(a.directory) || a.name.localeCompare(b.name, undefined, { numeric: true }));
  return entries;
}

export async function searchWorkspaceFiles(root, query, limit = 200) {
  const { target } = await realTargetFrom(root, "");
  const needle = String(query).toLowerCase();
  const rootAbs = path.resolve(root);
  const results = [];
  const skipDirs = new Set([".git", "node_modules", ".pnpm-store", ".dsh-vision-toolkit", "dist", "build", "out", "coverage", "__pycache__", ".venv", "venv", "target", ".next", ".cache", "vendor"]);
  let visited = 0;
  let truncated = false;
  const walk = async (dir, depth) => {
    if (results.length >= limit || visited > 600 || depth > 10) return;
    visited += 1;
    const dirents = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of dirents) {
      if (results.length >= limit) { truncated = true; return; }
      const name = entry.name;
      const absolute = path.join(dir, name);
      if (name.toLowerCase().includes(needle)) {
        results.push({ name, path: path.relative(rootAbs, absolute).replace(/\\/g, "/"), directory: entry.isDirectory(), hidden: name.startsWith(".") });
      }
      if (entry.isDirectory()) {
        if (skipDirs.has(name)) continue;
        await walk(absolute, depth + 1);
      }
    }
  };
  await walk(target, 0);
  results.sort((a, b) => Number(b.directory) - Number(a.directory) || a.path.localeCompare(b.path, undefined, { numeric: true }));
  return { entries: results, truncated: truncated && results.length >= limit, visited };
}

export async function readWorkspaceText(root, relative) {
  const { target } = await realTargetFrom(root, relative);
  const stat = await fs.stat(target);
  if (!stat.isFile()) throw new Error("not-a-file");
  if (stat.size > MAX_TEXT_BYTES) throw new Error("text-file-too-large");
  return { content: await fs.readFile(target, "utf8"), size: stat.size, mtimeMs: stat.mtimeMs };
}

export async function statWorkspaceFile(root, relative) {
  const { target } = await realTargetFrom(root, relative);
  const stat = await fs.stat(target);
  return { size: stat.size, mtimeMs: stat.mtimeMs, directory: stat.isDirectory() };
}

// ── 关系视图（图谱）：解析「代码 → 素材」引用 ─────────────────────────────
const GRAPH_SKIP_DIRS = new Set([".git", "node_modules", ".pnpm-store", "dist", "build", "out", "coverage", "__pycache__", ".venv", "venv", "target", ".next", ".cache", "vendor", ".idea", ".vscode", "obj", "bin", "Library"]);
const GRAPH_CODE_EXTS = new Set(["js", "jsx", "mjs", "cjs", "ts", "tsx", "py", "rb", "go", "rs", "java", "kt", "c", "cpp", "cc", "h", "hpp", "cs", "php", "swift", "sh", "bash", "zsh", "html", "htm", "css", "scss", "less", "json", "yaml", "yml", "toml", "xml", "sql", "md", "mdx", "vue", "svelte", "lua", "dart", "r", "scala", "elm", "ex", "erl", "hs", "clj", "proto", "gradle", "gd", "tscn", "hlsl", "glsl", "shader", "cginc", "unity", "prefab", "mat", "csproj", "sln", "fs", "fsx"]);
const GRAPH_ASSET_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico", "avif", "tif", "tiff", "aseprite", "ase", "mp4", "webm", "mov", "m4v", "avi", "mkv", "mp3", "wav", "ogg", "flac", "ttf", "otf", "woff", "woff2", "fbx", "gltf", "glb", "obj", "blend", "psd", "tga", "dds", "ktx", "ktx2", "exr", "hdr", "atlas", "sprite"]);
const GRAPH_MAX_CODE = 600;
const GRAPH_MAX_ASSETS = 800;
const GRAPH_MAX_EDGES = 3000;
const GRAPH_MAX_CODE_BYTES = 512 * 1024;

function graphExt(name) {
  const base = name.split(/[\\/]/).pop().toLowerCase();
  if (base === "dockerfile" || base === "makefile") return base;
  const at = base.lastIndexOf(".");
  return at < 0 ? "" : base.slice(at + 1);
}
function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

// 素材 / 代码 子分类：用于图谱着色与图例。
const GRAPH_ASSET_CATEGORIES = [
  { key: "image", label: "图片/纹理", color: "#f59e0b", role: "asset", exts: ["png", "jpg", "jpeg", "gif", "webp", "bmp", "ico", "avif", "tif", "tiff", "psd", "tga", "dds", "ktx", "ktx2", "exr", "hdr"] },
  { key: "audio", label: "音频", color: "#a78bfa", role: "asset", exts: ["mp3", "wav", "ogg", "flac", "m4a"] },
  { key: "video", label: "视频", color: "#f472b6", role: "asset", exts: ["mp4", "webm", "mov", "m4v", "avi", "mkv"] },
  { key: "model", label: "3D 模型", color: "#22d3ee", role: "asset", exts: ["fbx", "gltf", "glb", "obj", "blend"] },
  { key: "font", label: "字体", color: "#2dd4bf", role: "asset", exts: ["ttf", "otf", "woff", "woff2"] },
  { key: "sprite", label: "精灵/动画", color: "#4ade80", role: "asset", exts: ["aseprite", "ase", "atlas", "sprite"] }
];
const GRAPH_CODE_CATEGORIES = [
  { key: "script", label: "脚本", color: "#60a5fa", role: "source", exts: ["js", "jsx", "mjs", "cjs", "ts", "tsx", "py", "rb", "go", "rs", "java", "kt", "c", "cpp", "cc", "h", "hpp", "cs", "php", "swift", "sh", "bash", "zsh", "lua", "dart", "r", "scala", "elm", "ex", "erl", "hs", "clj", "proto", "fs", "fsx", "gd"] },
  { key: "config", label: "配置", color: "#94a3b8", role: "source", exts: ["json", "yaml", "yml", "toml", "xml", "ini", "cfg", "conf", "env", "csproj", "sln", "gradle"] },
  { key: "shader", label: "着色器", color: "#c084fc", role: "source", exts: ["hlsl", "glsl", "shader", "cginc"] },
  { key: "markup", label: "标记/样式", color: "#fbbf24", role: "source", exts: ["html", "htm", "css", "scss", "less", "md", "mdx", "vue", "svelte", "sql"] },
  { key: "scene", label: "场景/预制", color: "#818cf8", role: "container", exts: ["unity", "prefab", "tscn", "tres", "scene", "scn"] },
  { key: "material", label: "材质", color: "#38bdf8", role: "container", exts: ["mat"] }
];
function classifyAsset(ext) {
  for (const cat of GRAPH_ASSET_CATEGORIES) if (cat.exts.includes(ext)) return cat;
  return { key: "other", label: "其他素材", color: "#94a3b8", role: "asset", exts: [] };
}
function classifyCode(ext) {
  for (const cat of GRAPH_CODE_CATEGORIES) if (cat.exts.includes(ext)) return cat;
  return { key: "other", label: "其他代码", color: "#64748b", role: "source", exts: [] };
}

export async function buildRelationGraph(root) {
  const { realRoot } = await realTargetFrom(root, "");
  const files = [];
  let visited = 0;
  const walk = async (dir, depth) => {
    if (visited > 2000 || depth > 14) return;
    visited += 1;
    const dirents = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of dirents) {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (GRAPH_SKIP_DIRS.has(entry.name)) continue;
        await walk(absolute, depth + 1);
      } else if (entry.isFile()) {
        files.push({ path: path.relative(realRoot, absolute).replace(/\\/g, "/"), name: entry.name, ext: graphExt(entry.name) });
      }
    }
  };
  await walk(realRoot, 0);

  const assetFiles = [];
  const codeFiles = [];
  const metaFiles = [];
  for (const f of files) {
    if (f.ext === "meta") { metaFiles.push(f); continue; }
    if (GRAPH_ASSET_EXTS.has(f.ext)) {
      if (assetFiles.length < GRAPH_MAX_ASSETS) { const cat = classifyAsset(f.ext); assetFiles.push({ ...f, category: cat.key, categoryLabel: cat.label, color: cat.color, role: cat.role }); }
    } else if (GRAPH_CODE_EXTS.has(f.ext)) {
      if (codeFiles.length < GRAPH_MAX_CODE) { const cat = classifyCode(f.ext); codeFiles.push({ ...f, category: cat.key, categoryLabel: cat.label, color: cat.color, role: cat.role }); }
    }
  }

  const assetByStem = new Map();
  for (const a of assetFiles) {
    const stem = a.name.replace(/\.[^.]+$/, "").toLowerCase();
    if (stem.length < 3) continue;
    if (!assetByStem.has(stem)) assetByStem.set(stem, []);
    assetByStem.get(stem).push(a);
  }
  const stems = [...assetByStem.keys()];
  const pattern = stems.length ? new RegExp(stems.map(escapeRegExp).join("|"), "g") : null;

  // Unity：.meta 的 guid → 节点（素材 + 代码都索引，供「场景→脚本/材质/贴图」强关联）
  const nodeByPath = new Map();
  for (const cf of codeFiles) nodeByPath.set(cf.path, cf);
  for (const a of assetFiles) nodeByPath.set(a.path, a);
  const guidIndex = new Map();
  for (const mf of metaFiles) {
    const target = nodeByPath.get(mf.path.replace(/\.meta$/, ""));
    if (!target) continue;
    try {
      const text = await fs.readFile(path.join(realRoot, mf.path), "utf8");
      const m = /^guid:\s*([0-9a-fA-F]{32})/m.exec(text);
      if (m) guidIndex.set(m[1].toLowerCase(), target);
    } catch { /* ignore */ }
  }
  // 小写路径索引 → 节点，供 Addressables 按路径/地址解析
  const pathIndex = new Map();
  for (const [p, n] of nodeByPath) pathIndex.set(p.toLowerCase(), n);

  // Unity：Resources.Load("key") → 素材路径（key 相对 Resources 目录、去扩展名）
  const resourcesIndex = new Map();
  for (const a of assetFiles) {
    const marker = "/Resources/";
    const idx = a.path.indexOf(marker);
    if (idx < 0) continue;
    const key = a.path.slice(idx + marker.length).replace(/\.[^.]+$/, "").toLowerCase();
    if (key.length < 2) continue;
    if (!resourcesIndex.has(key)) resourcesIndex.set(key, a);
  }

  // 边去重：同一对节点只保留最强的方法（guid > resources > stem）
  const edgeMap = new Map();
  const METHOD_RANK = { guid: 4, resources: 3, addressables: 3, stem: 1 };
  const addEdge = (from, to, method) => {
    if (!from || !to || from === to) return;
    const key = `${from}::${to}`;
    const prev = edgeMap.get(key);
    if (!prev || METHOD_RANK[method] > METHOD_RANK[prev.method]) edgeMap.set(key, { from, to, method });
  };
  for (const cf of codeFiles) {
    if (edgeMap.size >= GRAPH_MAX_EDGES) break;
    let content = "";
    try {
      const stat = await fs.stat(path.join(realRoot, cf.path));
      if (stat.size > GRAPH_MAX_CODE_BYTES) continue;
      content = await fs.readFile(path.join(realRoot, cf.path), "utf8");
    } catch { continue; }
    const lower = content.toLowerCase();

    // 1) Unity GUID 强关联：代码/场景/预制/材质里出现的素材 guid
    const guidHits = new Set();
    const guidRe = /[0-9a-f]{32}/g;
    let gm;
    while ((gm = guidRe.exec(lower)) !== null && guidHits.size < 120) guidHits.add(gm[0]);
    for (const guid of guidHits) {
      const target = guidIndex.get(guid);
      if (target) addEdge(cf.path, target.path, "guid");
      if (edgeMap.size >= GRAPH_MAX_EDGES) break;
    }
    if (edgeMap.size >= GRAPH_MAX_EDGES) break;

    // 2) Resources.Load 强关联
    const resHits = new Set();
    const resRe = /resources\.load(?:<[^>]*>)?\s*\(\s*["']([^"']+)["']/g;
    let rm;
    while ((rm = resRe.exec(lower)) !== null && resHits.size < 40) resHits.add(rm[1].toLowerCase());
    for (const key of resHits) {
      const target = resourcesIndex.get(key);
      if (target) addEdge(cf.path, target.path, "resources");
      if (edgeMap.size >= GRAPH_MAX_EDGES) break;
    }
    if (edgeMap.size >= GRAPH_MAX_EDGES) break;

    // 2.5) Addressables 强关联：key 可为 guid / 资源路径 / 资源名
    const addrHits = new Set();
    const addrRe = /addressables\.(?:loadassetasync|loadassetsasync|instantiateasync|loadsceneasync)(?:<[^>]*>)?\s*\(\s*["']([^"']+)["']/g;
    let am;
    while ((am = addrRe.exec(lower)) !== null && addrHits.size < 40) addrHits.add(am[1]);
    for (const key of addrHits) {
      let target = guidIndex.get(key.toLowerCase());
      if (!target) target = pathIndex.get(key.toLowerCase());
      if (!target) {
        const stem = key.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
        target = (assetByStem.get(stem) ?? [])[0];
      }
      if (target) addEdge(cf.path, target.path, "addressables");
      if (edgeMap.size >= GRAPH_MAX_EDGES) break;
    }
    if (edgeMap.size >= GRAPH_MAX_EDGES) break;

    // 3) 文件名启发式（弱关联，兜底）
    if (pattern) {
      const hitStems = new Set();
      pattern.lastIndex = 0;
      let m;
      while ((m = pattern.exec(lower)) !== null && hitStems.size < 40) hitStems.add(m[0]);
      for (const stem of hitStems) {
        for (const a of assetByStem.get(stem) ?? []) {
          addEdge(cf.path, a.path, "stem");
          if (edgeMap.size >= GRAPH_MAX_EDGES) break;
        }
        if (edgeMap.size >= GRAPH_MAX_EDGES) break;
      }
    }
  }
  const edges = [...edgeMap.values()];

  const nodes = [];
  const nodeSet = new Set();
  for (const cf of codeFiles) { if (!nodeSet.has(cf.path)) { nodeSet.add(cf.path); nodes.push({ id: cf.path, path: cf.path, name: cf.name, role: cf.role, category: cf.category, categoryLabel: cf.categoryLabel, color: cf.color }); } }
  for (const a of assetFiles) { if (!nodeSet.has(a.path)) { nodeSet.add(a.path); nodes.push({ id: a.path, path: a.path, name: a.name, role: "asset", category: a.category, categoryLabel: a.categoryLabel, color: a.color }); } }

  // 图例：按分类定义顺序（代码在前、素材在后），只列出实际出现的分类。
  const legend = [];
  const legendMap = new Map();
  for (const n of nodes) {
    const entry = legendMap.get(n.categoryLabel) ?? { label: n.categoryLabel, color: n.color, role: n.role, count: 0 };
    entry.count += 1;
    legendMap.set(n.categoryLabel, entry);
  }
  const order = [...GRAPH_CODE_CATEGORIES.map((c) => c.label), ...GRAPH_ASSET_CATEGORIES.map((c) => c.label)];
  legend.push(...[...legendMap.values()].sort((a, b) => {
    const ai = order.indexOf(a.label), bi = order.indexOf(b.label);
    return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
  }));

  return { nodes, edges, legend, truncated: visited > 800 || codeFiles.length >= GRAPH_MAX_CODE || assetFiles.length >= GRAPH_MAX_ASSETS };
}

async function revealInFinder(root, relative) {
  const { target } = await realTargetFrom(root, relative);
  await fs.access(target);
  await new Promise((resolve, reject) => {
    const child = spawn("open", ["-R", target], { stdio: "ignore" });
    child.once("error", reject);
    child.once("exit", (code) => code === 0 ? resolve() : reject(new Error("finder-reveal-failed")));
  });
  return { path: target };
}

export async function writeWorkspaceText(root, relative, content, expectedMtimeMs) {
  if (typeof content !== "string") throw new Error("invalid-content");
  if (Buffer.byteLength(content) > MAX_TEXT_BYTES) throw new Error("text-file-too-large");
  const { target } = await realTargetFrom(root, relative);
  const before = await fs.stat(target);
  if (!before.isFile()) throw new Error("not-a-file");
  if (typeof expectedMtimeMs === "number" && Math.abs(before.mtimeMs - expectedMtimeMs) > 1) {
    const error = new Error("file-changed-on-disk");
    error.code = "FILE_CHANGED";
    throw error;
  }
  await fs.writeFile(target, content, "utf8");
  const after = await fs.stat(target);
  return { size: after.size, mtimeMs: after.mtimeMs };
}

export async function writeWorkspaceBytes(root, relative, base64, expectedMtimeMs) {
  if (typeof base64 !== "string" || base64.length === 0) throw new Error("invalid-content");
  const bytes = Buffer.from(base64, "base64");
  if (bytes.length > MAX_BINARY_BYTES) throw new Error("file-too-large");
  const { target } = await realTargetFrom(root, relative);
  let before = null;
  try { before = await fs.stat(target); } catch (err) { if (err?.code !== "ENOENT") throw err; }
  if (before && !before.isFile()) throw new Error("not-a-file");
  if (before && typeof expectedMtimeMs === "number" && Math.abs(before.mtimeMs - expectedMtimeMs) > 1) {
    const error = new Error("file-changed-on-disk");
    error.code = "FILE_CHANGED";
    throw error;
  }
  await fs.writeFile(target, bytes);
  const after = await fs.stat(target);
  return { size: after.size, mtimeMs: after.mtimeMs };
}

function safeEntryName(value) {
  if (typeof value !== "string" || value.length === 0 || value.includes("\0") || path.basename(value) !== value || value === "." || value === "..") throw new Error("invalid-name");
  return value;
}

async function exists(target) {
  try { await fs.access(target); return true; } catch { return false; }
}

async function uniqueTarget(directory, name) {
  const direct = path.join(directory, name);
  if (!(await exists(direct))) return direct;
  const parsed = path.parse(name);
  for (let index = 1; index < 10000; index += 1) {
    const suffix = index === 1 ? " 副本" : ` 副本 ${index}`;
    const candidate = path.join(directory, `${parsed.name}${suffix}${parsed.ext}`);
    if (!(await exists(candidate))) return candidate;
  }
  throw new Error("too-many-name-conflicts");
}

export async function transferWorkspaceEntry(rootValue, sourceValue, destinationValue, mode) {
  if (mode !== "copy" && mode !== "move") throw new Error("invalid-transfer-mode");
  const sourceResult = await realTargetFrom(rootValue, sourceValue);
  const destinationResult = await realTargetFrom(rootValue, destinationValue ?? "");
  if (sourceResult.target === sourceResult.root) throw new Error("cannot-transfer-workspace-root");
  const sourceStat = await fs.lstat(sourceResult.target);
  const destinationStat = await fs.stat(destinationResult.target);
  if (!destinationStat.isDirectory()) throw new Error("destination-not-directory");
  if (sourceStat.isDirectory() && (destinationResult.target === sourceResult.target || destinationResult.target.startsWith(sourceResult.target + path.sep))) throw new Error("cannot-transfer-into-itself");
  const name = path.basename(sourceResult.target);
  const directTarget = path.join(destinationResult.target, name);
  if (mode === "move" && directTarget === sourceResult.target) return { path: path.relative(sourceResult.root, sourceResult.target), unchanged: true };
  const finalTarget = mode === "copy" ? await uniqueTarget(destinationResult.target, name) : directTarget;
  if (mode === "move" && await exists(finalTarget)) {
    const error = new Error("destination-exists");
    error.code = "DESTINATION_EXISTS";
    throw error;
  }
  if (mode === "copy") await fs.cp(sourceResult.target, finalTarget, { recursive: true, force: false, errorOnExist: true, preserveTimestamps: true });
  else await fs.rename(sourceResult.target, finalTarget);
  return { path: path.relative(sourceResult.root, finalTarget), directory: sourceStat.isDirectory() };
}

export async function uploadWorkspaceFile(req, rootValue, destinationValue, nameValue, lastModifiedValue) {
  const destinationResult = await realTargetFrom(rootValue, destinationValue ?? "");
  const destinationStat = await fs.stat(destinationResult.target);
  if (!destinationStat.isDirectory()) throw new Error("destination-not-directory");
  const name = safeEntryName(nameValue);
  const finalTarget = await uniqueTarget(destinationResult.target, name);
  const temporaryTarget = path.join(destinationResult.target, `.dsh-upload-${randomUUID()}.tmp`);
  try {
    const declared = Number(req.headers?.["content-length"]);
    if (Number.isFinite(declared) && declared > MAX_UPLOAD_BYTES) throw new Error("upload-too-large");
    // content-length is advisory, so the byte count is enforced as the body streams.
    let received = 0;
    const limit = new Transform({
      transform(chunk, _encoding, callback) {
        received += chunk.length;
        if (received > MAX_UPLOAD_BYTES) return callback(new Error("upload-too-large"));
        callback(null, chunk);
      }
    });
    await pipeline(req, limit, createWriteStream(temporaryTarget, { flags: "wx" }));
    await fs.rename(temporaryTarget, finalTarget);
    const lastModified = Number(lastModifiedValue);
    if (Number.isFinite(lastModified) && lastModified > 0) {
      const when = new Date(lastModified);
      await fs.utimes(finalTarget, when, when).catch(() => {});
    }
  } catch (error) {
    await fs.unlink(temporaryTarget).catch(() => {});
    throw error;
  }
  const stat = await fs.stat(finalTarget);
  return { path: path.relative(destinationResult.root, finalTarget), size: stat.size, mtimeMs: stat.mtimeMs };
}

export function assertSameOrigin(req) {
  const site = req.headers["sec-fetch-site"];
  if (typeof site === "string" && site !== "same-origin" && site !== "none") throw new Error("cross-origin-request");
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (typeof origin === "string" && typeof host === "string" && new URL(origin).host !== host) throw new Error("cross-origin-request");
}

export async function runTerminalCommand(rootValue, commandValue, cwdValue = "") {
  const { root } = targetFrom(rootValue, "");
  if (typeof cwdValue !== "string" || cwdValue.includes("\0")) throw new Error("invalid-terminal-cwd");
  // targetFrom rejects anything resolving outside the workspace; an absolute cwd
  // inside the root stays usable because path.resolve ignores the root argument.
  const { target } = await realTargetFrom(root, cwdValue);
  const stat = await fs.stat(target);
  if (!stat.isDirectory()) throw new Error("invalid-terminal-cwd");
  if (typeof commandValue !== "string" || commandValue.trim().length === 0) throw new Error("invalid-command");
  if (Buffer.byteLength(commandValue) > MAX_TERMINAL_COMMAND_BYTES) throw new Error("command-too-long");

  const windows = process.platform === "win32";
  const shell = windows ? process.env.ComSpec || "cmd.exe" : process.env.SHELL && path.isAbsolute(process.env.SHELL) ? process.env.SHELL : "/bin/sh";
  const cwdMarker = `__VEANG_WORKBENCH_CWD_${randomUUID()}__`;
  const script = windows
    ? `${commandValue}\r\nset "__dwu_exit=%errorlevel%"\r\necho ${cwdMarker}%CD%\r\nexit /b %__dwu_exit%`
    : `${commandValue}\n__dwu_exit=$?\nprintf '\\n${cwdMarker}%s\\n' "$PWD"\nexit "$__dwu_exit"`;
  const args = windows ? ["/d", "/s", "/c", script] : ["-lc", script];

  return await new Promise((resolve, reject) => {
    const child = spawn(shell, args, {
      cwd: target,
      env: { ...process.env, PWD: target },
      stdio: ["ignore", "pipe", "pipe"]
    });
    const stdoutChunks = [];
    const stderrChunks = [];
    let outputBytes = 0;
    let truncated = false;
    let timedOut = false;
    let settled = false;
    let timeout;

    const append = (chunks, chunk) => {
      if (truncated) return;
      const buffer = Buffer.from(chunk);
      const remaining = MAX_TERMINAL_OUTPUT_BYTES - outputBytes;
      if (remaining <= 0) {
        truncated = true;
        child.kill("SIGTERM");
        return;
      }
      const accepted = buffer.subarray(0, remaining);
      chunks.push(accepted);
      outputBytes += accepted.length;
      if (accepted.length < buffer.length) {
        truncated = true;
        child.kill("SIGTERM");
      }
    };

    child.stdout.on("data", (chunk) => append(stdoutChunks, chunk));
    child.stderr.on("data", (chunk) => append(stderrChunks, chunk));
    child.once("error", (error) => {
      settled = true;
      clearTimeout(timeout);
      reject(error);
    });
    child.once("close", (code, signal) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      let stdout = Buffer.concat(stdoutChunks).toString("utf8");
      const stderr = Buffer.concat(stderrChunks).toString("utf8");
      let cwd = target;
      const markerIndex = stdout.lastIndexOf(cwdMarker);
      if (markerIndex >= 0) {
        const reported = stdout.slice(markerIndex + cwdMarker.length).split(/\r?\n/, 1)[0].trim();
        // The command may cd anywhere; only adopt the reported directory when it
        // stays inside the workspace, otherwise fall back to the starting cwd.
        if (path.isAbsolute(reported)) {
          const resolved = path.resolve(reported);
          if (resolved === root || resolved.startsWith(root + path.sep)) cwd = resolved;
        }
        stdout = stdout.slice(0, markerIndex).replace(/\r?\n$/, "");
      }
      let output = stdout + (stdout && stderr && !/\r?\n$/.test(stdout) ? "\n" : "") + stderr;
      if (truncated) output += "\n[输出超过 1 MB，命令已停止]";
      if (timedOut) output += "\n[运行超过 120 秒，命令已停止]";
      resolve({ output, cwd, code: typeof code === "number" ? code : 1, signal: signal ?? undefined, truncated, timedOut });
    });
    timeout = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
      setTimeout(() => { if (!settled) child.kill("SIGKILL"); }, 1500).unref();
    }, TERMINAL_TIMEOUT_MS);
    timeout.unref();
  });
}

async function runGit(rootValue, args) {
  const { target } = await realTargetFrom(rootValue, "");
  return await new Promise((resolve, reject) => {
    const child = spawn("git", args, { cwd: target, stdio: ["ignore", "pipe", "pipe"] });
    const stdoutChunks = [];
    const stderrChunks = [];
    let outputBytes = 0;
    const append = (chunks, chunk) => {
      if (outputBytes >= MAX_TERMINAL_OUTPUT_BYTES) return;
      const buffer = Buffer.from(chunk);
      const remaining = MAX_TERMINAL_OUTPUT_BYTES - outputBytes;
      const accepted = buffer.subarray(0, remaining);
      chunks.push(accepted);
      outputBytes += accepted.length;
    };
    child.stdout.on("data", (chunk) => append(stdoutChunks, chunk));
    child.stderr.on("data", (chunk) => append(stderrChunks, chunk));
    child.once("error", reject);
    child.once("close", (code) => {
      const stdout = Buffer.concat(stdoutChunks).toString("utf8");
      const stderr = Buffer.concat(stderrChunks).toString("utf8");
      if (code !== 0) {
        const error = new Error(stderr.trim() || `git 退出码 ${code}`);
        error.code = "GIT_ERROR";
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

async function gitStatusEntries(rootValue) {
  const output = await runGit(rootValue, ["status", "--porcelain=v1"]);
  return output.split("\n").filter(Boolean).map((line) => {
    const x = line[0];
    const y = line[1];
    const rest = line.slice(3);
    if (rest.includes(" -> ")) {
      const [oldPath, newPath] = rest.split(" -> ");
      return { x, y, path: newPath, originalPath: oldPath };
    }
    return { x, y, path: rest };
  });
}

async function loadSkinSettingsFile() {
  try { return JSON.parse(await fs.readFile(SETTINGS_PATH, "utf8")); } catch { return {}; }
}

function clampSkinNumber(value, fallback, min, max) {
  const num = Number(value);
  return Number.isFinite(num) ? Math.min(max, Math.max(min, Math.round(num))) : fallback;
}

function sanitizeSkinSettings(raw) {
  const value = (raw && typeof raw === "object") ? raw : {};
  return {
    appearance: value.appearance === "default" ? "default" : "veang",
    wallpaper: value.wallpaper === "builtin" || (typeof value.wallpaper === "string" && WALLPAPER_NAME_PATTERN.test(value.wallpaper)) ? value.wallpaper : "builtin",
    uploads: Array.isArray(value.uploads)
      ? value.uploads.filter((item) => item && typeof item.fileName === "string" && WALLPAPER_NAME_PATTERN.test(item.fileName)).slice(0, 24)
          .map((item) => ({ fileName: item.fileName, name: String(item.name ?? item.fileName).slice(0, 120) }))
      : [],
    occlusion: clampSkinNumber(value.occlusion, 0, 0, 100),
    blur: clampSkinNumber(value.blur, 0, 0, 20),
    sidebar: clampSkinNumber(value.sidebar, 85, 0, 100),
    conversation: clampSkinNumber(value.conversation, 65, 0, 100),
    workbench: clampSkinNumber(value.workbench, 80, 0, 100)
  };
}

async function saveSkinSettingsFile(value) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(SETTINGS_PATH, JSON.stringify(value, null, 2), "utf8");
  return value;
}

async function uploadWallpaperFile(req, nameValue) {
  await fs.mkdir(WALLPAPER_DIR, { recursive: true });
  const ext = path.extname(safeEntryName(String(nameValue || "wallpaper.png"))).toLowerCase();
  if (!(ext in WALLPAPER_TYPES)) throw new Error("unsupported-wallpaper-type");
  const fileName = `wallpaper-${Date.now().toString(36)}-${randomUUID().slice(0, 8)}${ext}`;
  const temporaryTarget = path.join(WALLPAPER_DIR, `.tmp-${randomUUID()}`);
  const finalTarget = path.join(WALLPAPER_DIR, fileName);
  try {
    let received = 0;
    const limit = new Transform({
      transform(chunk, _encoding, callback) {
        received += chunk.length;
        if (received > MAX_WALLPAPER_BYTES) return callback(new Error("wallpaper-too-large"));
        callback(null, chunk);
      }
    });
    await pipeline(req, limit, createWriteStream(temporaryTarget, { flags: "wx" }));
    await fs.rename(temporaryTarget, finalTarget);
  } catch (error) {
    await fs.unlink(temporaryTarget).catch(() => {});
    throw error;
  }
  return { fileName };
}

function wallpaperTarget(nameValue) {
  if (typeof nameValue !== "string" || !WALLPAPER_NAME_PATTERN.test(nameValue)) return null;
  const target = path.resolve(WALLPAPER_DIR, nameValue);
  return target.startsWith(path.resolve(WALLPAPER_DIR) + path.sep) ? target : null;
}

export async function previewDocument(root, relative) {
  const { target } = await realTargetFrom(root, relative);
  const ext = path.extname(target).toLowerCase();
  const stat = await fs.stat(target);
  if (!stat.isFile()) throw new Error("not-a-file");
  if (stat.size > MAX_OFFICE_BYTES) throw new Error("office-file-too-large");
  if (ext === ".docx") {
    const result = await mammoth.convertToHtml({ path: target });
    return {
      kind: "html",
      html: result.value,
      warnings: result.messages.map((message) => message.message)
    };
  }
  if (ext === ".xlsx" || ext === ".xls") {
    const workbook = readWorkbook(await fs.readFile(target), { type: "buffer", cellDates: true });
    return {
      kind: "workbook",
      sheets: workbook.SheetNames.map((name) => ({ name, html: workbookUtils.sheet_to_html(workbook.Sheets[name], { id: `sheet-${name}` }) }))
    };
  }
  throw new Error("preview-not-supported");
}

async function handleApi(req, res) {
  const url = new URL(req.url ?? API_PATH, "http://127.0.0.1");
  const op = url.searchParams.get("op") ?? "";
  try {
    if (req.method === "GET" && op === "list") {
      json(res, 200, { ok: true, entries: await listWorkspaceDirectory(url.searchParams.get("root"), url.searchParams.get("path") ?? "") });
      return;
    }
    if (req.method === "GET" && op === "search") {
      const query = (url.searchParams.get("q") ?? "").trim();
      if (!query || query.length > 200) { json(res, 200, { ok: true, entries: [] }); return; }
      json(res, 200, { ok: true, ...(await searchWorkspaceFiles(url.searchParams.get("root"), query)) });
      return;
    }
    if (req.method === "GET" && op === "read") {
      json(res, 200, { ok: true, ...(await readWorkspaceText(url.searchParams.get("root"), url.searchParams.get("path"))) });
      return;
    }
    if (req.method === "GET" && op === "stat") {
      json(res, 200, { ok: true, ...(await statWorkspaceFile(url.searchParams.get("root"), url.searchParams.get("path"))) });
      return;
    }
    if (req.method === "GET" && op === "graph") {
      json(res, 200, { ok: true, ...(await buildRelationGraph(url.searchParams.get("root"))) });
      return;
    }
    if (req.method === "GET" && op === "preview") {
      json(res, 200, { ok: true, ...(await previewDocument(url.searchParams.get("root"), url.searchParams.get("path"))) });
      return;
    }
    if (req.method === "POST" && op === "reveal") {
      assertSameOrigin(req);
      json(res, 200, { ok: true, ...(await revealInFinder(url.searchParams.get("root"), url.searchParams.get("path"))) });
      return;
    }
    if ((req.method === "PUT" || req.method === "POST") && op === "write") {
      assertSameOrigin(req);
      const body = await readJson(req);
      json(res, 200, { ok: true, ...(await writeWorkspaceText(body.root, body.path, body.content, body.expectedMtimeMs)) });
      return;
    }
    if ((req.method === "PUT" || req.method === "POST") && op === "write-bytes") {
      assertSameOrigin(req);
      const body = await readJson(req);
      json(res, 200, { ok: true, ...(await writeWorkspaceBytes(body.root, body.path, body.base64, body.expectedMtimeMs)) });
      return;
    }
    if (req.method === "POST" && op === "transfer") {
      assertSameOrigin(req);
      const body = await readJson(req);
      json(res, 200, { ok: true, ...(await transferWorkspaceEntry(body.root, body.source, body.destination, body.mode)) });
      return;
    }
    if (req.method === "POST" && op === "upload") {
      assertSameOrigin(req);
      json(res, 200, { ok: true, ...(await uploadWorkspaceFile(req, url.searchParams.get("root"), url.searchParams.get("destination") ?? "", url.searchParams.get("name"), url.searchParams.get("lastModified"))) });
      return;
    }
    if (req.method === "POST" && op === "terminal") {
      assertSameOrigin(req);
      const body = await readJson(req);
      json(res, 200, { ok: true, ...(await runTerminalCommand(body.root, body.command, body.cwd)) });
      return;
    }
    if (req.method === "GET" && op === "git-status") {
      try {
        json(res, 200, { ok: true, entries: await gitStatusEntries(url.searchParams.get("root")) });
      } catch (error) {
        if (/not a git repository/i.test(String(error?.message))) json(res, 200, { ok: true, notRepo: true, entries: [] });
        else json(res, 400, { ok: false, error: error instanceof Error ? error.message : String(error) });
      }
      return;
    }
    if (req.method === "POST" && op === "git-stage") {
      assertSameOrigin(req);
      const body = await readJson(req);
      await runGit(body.root, ["add", "--", body.path]);
      json(res, 200, { ok: true });
      return;
    }
    if (req.method === "POST" && op === "git-unstage") {
      assertSameOrigin(req);
      const body = await readJson(req);
      await runGit(body.root, ["reset", "HEAD", "--", body.path]);
      json(res, 200, { ok: true });
      return;
    }
    if (req.method === "POST" && op === "git-discard") {
      assertSameOrigin(req);
      const body = await readJson(req);
      if (body.untracked) {
        const { target } = await realTargetFrom(body.root, body.path);
        await fs.unlink(target);
      } else {
        await runGit(body.root, ["restore", "--staged", "--worktree", "--", body.path]);
      }
      json(res, 200, { ok: true });
      return;
    }
    if (req.method === "GET" && op === "skin-load") {
      json(res, 200, { ok: true, settings: sanitizeSkinSettings(await loadSkinSettingsFile()) });
      return;
    }
    if (req.method === "POST" && op === "skin-save") {
      assertSameOrigin(req);
      const body = await readJson(req);
      json(res, 200, { ok: true, settings: await saveSkinSettingsFile(sanitizeSkinSettings(body)) });
      return;
    }
    if (req.method === "POST" && op === "wallpaper-upload") {
      assertSameOrigin(req);
      json(res, 200, { ok: true, ...(await uploadWallpaperFile(req, url.searchParams.get("name"))) });
      return;
    }
    if (req.method === "POST" && op === "wallpaper-delete") {
      assertSameOrigin(req);
      const body = await readJson(req);
      const target = wallpaperTarget(body.fileName);
      if (target) await fs.unlink(target).catch(() => {});
      json(res, 200, { ok: true });
      return;
    }
    if (req.method === "GET" && op === "wallpaper-file") {
      const target = wallpaperTarget(url.searchParams.get("name"));
      if (!target) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        res.end("wallpaper not found");
        return;
      }
      res.writeHead(200, { "content-type": WALLPAPER_TYPES[path.extname(target).toLowerCase()], "cache-control": "public, max-age=31536000, immutable" });
      createReadStream(target).pipe(res);
      return;
    }
    json(res, 404, { ok: false, error: "unknown-operation" });
  } catch (error) {
    const code = error?.message === "cross-origin-request" ? 403 : error?.code === "FILE_CHANGED" || error?.code === "DESTINATION_EXISTS" ? 409 : error?.message === "text-file-too-large" || error?.message === "request-too-large" || error?.message === "command-too-long" ? 413 : 400;
    json(res, code, { ok: false, error: error instanceof Error ? error.message : String(error) });
  }
}

async function handleAsset(req, res) {
  const url = new URL(req.url ?? ASSET_PATH, "http://127.0.0.1");
  try {
    const { target } = await realTargetFrom(url.searchParams.get("root"), url.searchParams.get("path"));
    const stat = await fs.stat(target);
    if (!stat.isFile()) throw new Error("not-a-file");
    const assetHeaders = assetHeadersFor(path.extname(target).toLowerCase());
    const range = req.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) {
        res.writeHead(416, { "content-range": `bytes */${stat.size}` });
        res.end();
        return;
      }
      const start = match[1] === "" ? Math.max(0, stat.size - Number(match[2])) : Number(match[1]);
      const end = match[1] === "" ? stat.size - 1 : Math.min(stat.size - 1, match[2] === "" ? stat.size - 1 : Number(match[2]));
      if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= stat.size) {
        res.writeHead(416, { "content-range": `bytes */${stat.size}` });
        res.end();
        return;
      }
      res.writeHead(206, {
        ...assetHeaders,
        "content-length": end - start + 1,
        "content-range": `bytes ${start}-${end}/${stat.size}`,
        "accept-ranges": "bytes"
      });
      createReadStream(target, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, {
      ...assetHeaders,
      "content-length": stat.size,
      "accept-ranges": "bytes"
    });
    createReadStream(target).pipe(res);
  } catch (error) {
    json(res, 404, { ok: false, error: error instanceof Error ? error.message : String(error) });
  }
}

function handleClient(_req, res) {
  const body = readFileSync(CLIENT_PATH);
  res.writeHead(200, {
    "content-type": "text/javascript; charset=utf-8",
    "content-length": body.length,
    "cache-control": "no-cache"
  });
  res.end(body);
}

function handleBackground(_req, res) {
  try {
    const body = readFileSync(BACKGROUND_PATH);
    res.writeHead(200, {
      "content-type": "image/png",
      "content-length": body.length,
      "cache-control": "public, max-age=31536000, immutable"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("background not found");
  }
}

// 0.2.0: no index rewriting at all — the host loads the client entry through
// the official dsh.client manifest declared in package.json.
export const inject = ["webServer"];

export function apply(ctx) {
  ctx.effect(() => {
    const disposeApi = ctx.webServer.register({ kind: "exact", path: API_PATH, handler: handleApi });
    const disposeAsset = ctx.webServer.register({ kind: "exact", path: ASSET_PATH, handler: handleAsset });
    const disposeClient = ctx.webServer.register({ kind: "exact", path: "/veang-workbench/client.js", handler: handleClient });
    const disposeBackground = ctx.webServer.register({ kind: "exact", path: "/veang-workbench/background.png", handler: handleBackground });
    return () => {
      disposeBackground();
      disposeClient();
      disposeAsset();
      disposeApi();
    };
  }, "veang-workbench-ui routes");
}
