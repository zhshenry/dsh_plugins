import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const clientPath = path.join(root, "packages", "ui", "lib", "client.js");

// 从 client.js 里抽出 ASE 内核 IIFE（移植自 dsh-aseprite，MIT License, Copyright (c) 2026 Ratevoid）。
const src = await readFile(clientPath, "utf8");
const start = src.indexOf("const ASE = (() => {");
const end = src.indexOf("})();", start);
if (start < 0 || end < 0) throw new Error("ASE IIFE not found in client.js");
const ASE = (0, eval)(src.slice(start + "const ASE = ".length, end + "})();".length));
if (typeof ASE?.serializeAseprite !== "function" || typeof ASE?.parseAseprite !== "function") {
  throw new Error("ASE kernel missing serialize/parse");
}

test("aseprite serialize/parse/composite round-trip", async () => {
  const doc = ASE.newSprite(16, 16, 2, 120, 2);
  ASE.setPixel(doc, 0, 0, 12, 12, { r: 255, g: 0, b: 0, a: 255 }); // 红点，远离其它图形
  ASE.drawLine(doc, 0, 0, 1, 1, 8, 8, { r: 0, g: 255, b: 0, a: 255 }); // 绿线
  ASE.floodFill(doc, 1, 1, 0, 0, { r: 0, g: 0, b: 255, a: 255 }); // 第2帧第2图层整层蓝
  ASE.drawRect(doc, 0, 0, 4, 4, 6, 6, { r: 255, g: 255, b: 0, a: 255 }, false); // 黄框
  doc.layers[0].name = "底色";

  const parsed = await ASE.parseAseprite(ASE.serializeAseprite(doc));

  assert.equal(parsed.width, 16);
  assert.equal(parsed.height, 16);
  assert.equal(parsed.frames.length, 2);
  assert.equal(parsed.layers.length, 2);
  assert.equal(parsed.layers[0].name, "底色");
  assert.equal(parsed.frames[0].duration, 120);

  const px = (d, f, l, x, y) => ASE.pickPixel(d, f, l, x, y);
  const assertPx = (p, r, g, b, a) => {
    assert.equal(p.r, r);
    assert.equal(p.g, g);
    assert.equal(p.b, b);
    assert.equal(p.a, a);
  };
  assertPx(px(parsed, 0, 0, 12, 12), 255, 0, 0, 255);
  assertPx(px(parsed, 0, 0, 8, 8), 0, 255, 0, 255);
  assertPx(px(parsed, 1, 1, 0, 0), 0, 0, 255, 255);
  assertPx(px(parsed, 0, 0, 4, 4), 255, 255, 0, 255);

  // 图层可见性：隐藏 layer1 后 composite 仍只含 layer0。
  parsed.layers[1].visible = false;
  const buf = ASE.compositeFrame(parsed, 0, new Uint8ClampedArray(16 * 16 * 4));
  const i = (12 * 16 + 12) * 4;
  assert.equal(buf[i], 255);
  assert.equal(buf[i + 1], 0);
  assert.equal(buf[i + 2], 0);
  assert.equal(buf[i + 3], 255);

  // 二次往返
  const parsed2 = await ASE.parseAseprite(ASE.serializeAseprite(parsed));
  assert.equal(parsed2.width, 16);
  assert.equal(parsed2.frames.length, 2);
  assert.equal(parsed2.layers.length, 2);
});
