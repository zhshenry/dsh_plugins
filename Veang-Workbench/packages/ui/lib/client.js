/* Veang Workbench UI. Copyright (C) 2026 Veang Workbench contributors. MIT License. */
window.__ModuleLoader__.load({
  id: "veang-workbench",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const React = require("react");
    const ReactDOM = require("react-dom");
    const h = React.createElement;

    const API = "/veang-workbench/api";
    const ASSET = "/veang-workbench/asset";
    const AVATAR_DATA_URL = "data:image/png;base64,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";
    const PRODUCT_NAME = "Veang Workbench";
    const PRODUCT_TITLE = "Veang Workbench";
    function BrandName() {
      return h("span", { style: { fontSize: 28, fontWeight: 400, fontFamily: '"VT323",ui-monospace,SFMono-Regular,Menlo,monospace', color: "var(--dsw-alias-label-primary)", whiteSpace: "nowrap", lineHeight: 1.2 } }, PRODUCT_NAME);
    }
    function BrandMark({ size, className }) {
      return h("img", { src: AVATAR_DATA_URL, width: size, height: size, alt: PRODUCT_NAME, className, style: { borderRadius: "22%", objectFit: "cover", display: "block" } });
    }
    function rebrandDocumentTitle() {
      const desc = Object.getOwnPropertyDescriptor(Document.prototype, "title");
      if (!desc || !desc.set) return;
      Object.defineProperty(Document.prototype, "title", {
        configurable: true,
        enumerable: desc.enumerable,
        get: desc.get,
        set(value) { desc.set.call(this, String(value).replace(/DeepSeek Harness/g, PRODUCT_TITLE)); }
      });
    }
    const bus = new EventTarget();
    const snapshots = new Map();
    const forcedHidden = new Set(["node_modules", ".git", "dist", "build", ".next", ".cache", "coverage", "vendor"]);
    const textExtensions = new Set([
      "md", "mdx", "txt", "json", "jsonl", "yaml", "yml", "toml", "xml", "html", "htm", "css", "scss", "less",
      "js", "jsx", "mjs", "cjs", "ts", "tsx", "vue", "svelte", "py", "rb", "go", "rs", "swift", "java", "kt",
      "c", "h", "cpp", "hpp", "cs", "php", "sh", "zsh", "bash", "fish", "sql", "graphql", "ini", "conf", "env",
      "gitignore", "dockerfile", "makefile", "csv", "log"
    ]);
    const videoExtensions = new Set(["mp4", "mov", "webm"]);
    const audioExtensions = new Set(["mp3", "wav", "m4a"]);
    const imageExtensions = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"]);
    const officeExtensions = new Set(["docx", "xlsx", "xls"]);
    const asepriteExtensions = new Set(["ase", "aseprite"]);
    // 可在像素编辑器里直接编辑（作为单帧单图层导入）的位图格式。
    const pixelEditableImageExtensions = new Set(["png", "jpg", "jpeg", "webp", "bmp"]);

    const css = `
      @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
      .dwu-root,.dwu-root *{box-sizing:border-box}.dwu-root{height:100%;min-height:0;color:var(--dsw-alias-label-primary);font-family:Inter,var(--dsw-font-family),-apple-system,BlinkMacSystemFont,sans-serif}
      .dwu-sidebar{display:grid;grid-template-columns:48px minmax(0,1fr);height:100%;min-height:0;background:var(--dsw-specific-sidebar-fill);overflow:hidden}.dwu-sidebar[data-collapsed=true]{grid-template-columns:36px 0}.dwu-projects{border-right:1px solid var(--dsw-alias-border-l1);padding:8px 6px;display:flex;flex-direction:column;align-items:center;gap:7px;overflow-y:auto}.dwu-projectButton,.dwu-addProject{width:36px;height:36px;flex:none;border:0;border-radius:10px;display:grid;place-items:center;cursor:pointer;color:var(--dsw-alias-label-secondary);background:transparent;font-size:12px;font-weight:650}.dwu-projectButton:hover,.dwu-addProject:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-projectButton[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);box-shadow:inset 2px 0 0 var(--dsw-alias-state-business-primary)}.dwu-addProject{margin-top:auto;font-size:20px;font-weight:400}.dwu-treePanel{min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden}.dwu-treeHead{height:42px;flex:none;display:flex;align-items:center;gap:7px;padding:0 8px 0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-treeTitle{min-width:0;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12px;font-weight:650;text-transform:uppercase;letter-spacing:.04em}.dwu-iconButton{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;display:grid;place-items:center}.dwu-iconButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-tree{flex:1;min-height:0;overflow:auto;padding:6px 4px 16px}.dwu-emptySide{padding:18px 12px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.55}.dwu-treeRow{height:28px;display:flex;align-items:center;gap:5px;border-radius:6px;padding-right:5px;cursor:pointer;font-size:12px;white-space:nowrap;user-select:none}.dwu-treeRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-treeRow[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-label-primary-bluish)}.dwu-chevron{width:14px;flex:none;text-align:center;color:var(--dsw-alias-label-caption);font-size:10px}.dwu-fileGlyph{width:15px;flex:none;text-align:center;color:var(--dsw-alias-label-secondary)}.dwu-treeName{min-width:0;overflow:hidden;text-overflow:ellipsis}.dwu-treeLoading{padding:8px 10px;color:var(--dsw-alias-label-caption);font-size:11px}
      .dwu-zoneTabs{height:34px;flex:none;display:flex;align-items:stretch;padding:0 8px;border-bottom:1px solid var(--dsw-alias-border-l2)}.dwu-zoneTab{flex:none;min-width:64px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:680;letter-spacing:.03em;cursor:pointer;padding:0 10px}.dwu-zoneTab:hover{color:var(--dsw-alias-label-primary)}.dwu-zoneTab[data-active=true]{color:var(--dsw-alias-state-business-primary);border-bottom-color:var(--dsw-alias-state-business-primary)}.dwu-zoneEmpty{padding:18px 14px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.6}.dwu-zoneEngineLabel{margin-left:auto;align-self:center;margin-right:6px;font-size:11px;font-weight:580;color:var(--dsw-alias-label-caption);white-space:nowrap}.dwu-zoneEngine{height:24px;flex:none;align-self:center;margin-right:8px;padding:0 5px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);font-size:11px;font-weight:600;letter-spacing:.02em;cursor:pointer;outline:0;transition:border-color .12s ease,color .12s ease}.dwu-zoneEngine:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-zoneEngine:focus-visible{border-color:var(--dsw-alias-state-business-primary)}.dwu-zoneEngine option{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}.dwu-zoneTabsBar{justify-content:flex-end}.dwu-overlayRoot{position:fixed;bottom:0;z-index:40;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);border-right:1px solid var(--dsw-alias-border-l2);box-shadow:6px 0 24px #00000026;min-width:0;pointer-events:auto}.dwu-overlayBody{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}.dwu-overlayBody>.dwu-workspace{flex:1;min-height:0;height:auto}.dwu-worktreeDock{width:100% !important;border-right:0 !important;border-top:1px solid var(--dsw-alias-border-l2);flex:none;position:relative}.dwu-worktreeDock.dwu-worktreeRail{flex-direction:row;align-items:center;justify-content:center;padding:0}.dwu-worktreeDock .dwu-tree{flex:1}.dwu-heightHandle{position:absolute;top:-3px;left:0;right:0;height:6px;z-index:6;cursor:row-resize;background:transparent;border:0;padding:0}.dwu-heightHandle:after{content:"";position:absolute;top:2px;left:50%;transform:translateX(-50%);width:36px;height:2px;border-radius:2px;background:var(--dsw-alias-border-l3);opacity:.6}.dwu-heightHandle:hover:after{opacity:1;background:var(--dsw-alias-state-business-primary)}.dwu-treeMode{display:flex;gap:2px;align-items:center;margin-left:auto}.dwu-treeModeBtn{width:24px;height:22px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1;cursor:pointer;display:grid;place-items:center}.dwu-treeModeBtn:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-treeModeBtn[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-tilesRoot{flex:1;min-height:0;display:flex;flex-direction:column;overflow:auto;padding:4px 10px 10px}.dwu-crumbs{flex:none;display:flex;align-items:center;gap:2px;flex-wrap:wrap;padding:4px 0 8px;font-size:12px}.dwu-crumb{border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;padding:2px 4px;border-radius:5px;cursor:pointer;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-crumb:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-crumb[data-last=true]{color:var(--dsw-alias-label-primary);font-weight:600}.dwu-crumbSep{color:var(--dsw-alias-label-tertiary);font-size:11px}.dwu-tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:4px;align-content:start}.dwu-tile{display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 4px 7px;border-radius:9px;border:1px solid transparent;cursor:pointer;user-select:none;-webkit-user-select:none}.dwu-tile:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-tile[data-selected=true]{border-color:var(--dsw-alias-border-l3);border-style:dashed}.dwu-tile[data-active=true]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-tile[data-drop=true]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent)}.dwu-tileIcon{font-size:26px;line-height:1;display:grid;place-items:center;min-height:26px;color:var(--dsw-alias-label-secondary)}.dwu-tileThumb{width:100%;height:46px;object-fit:cover;border-radius:6px;display:block;background:var(--dsw-alias-bg-layer-1,transparent)}.dwu-tile[data-active=true] .dwu-tileIcon{color:var(--dsw-alias-state-business-primary)}.dwu-tileName{font-size:11px;line-height:1.35;color:var(--dsw-alias-label-secondary);text-align:center;max-width:100%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all}.dwu-overlayHandle{position:absolute;top:0;bottom:0;right:-5px;width:10px;cursor:col-resize;z-index:50;touch-action:none}.dwu-overlayHandle:after{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:44px;border-radius:8px;background:var(--dsw-alias-button-floating-fill);border:1px solid var(--dsw-alias-border-l2);opacity:0;transition:opacity 150ms ease}.dwu-overlayHandle:hover:after,.dwu-overlayHandle[data-dragging=true]:after{opacity:1}.dwu-zoneFooter{display:flex;gap:6px;width:100%}.dwu-zoneFooterTab{flex:1;min-height:30px;border:0;border-radius:8px;padding:5px 8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;font-weight:620;letter-spacing:.02em;cursor:pointer;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dwu-zoneFooterTab:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-zoneFooterTab[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary)}.dwu-overlayHead{border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-zoneSection{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:100%;padding:0}.dwu-zoneDivider{flex:none;height:1px;background:var(--dsw-alias-border-l1);margin:2px 0}.dwu-zoneHeader{display:flex;align-items:center;gap:8px;padding:0 2px;margin-bottom:2px}.dwu-zoneHeaderIcon{font-size:15px;line-height:1;color:var(--dsw-alias-label-secondary)}.dwu-zoneHeaderTitle{font-size:14px;font-weight:700;letter-spacing:.04em;color:var(--dsw-alias-label-primary);user-select:none}.dwu-zoneList{display:flex;flex-direction:column;gap:8px}.dwu-zoneRow{display:flex;align-items:center;gap:8px;min-height:36px;border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:4px 8px;background:#f8f4ec;box-shadow:0 1px 3px rgba(0,0,0,.08);color:var(--dsw-alias-label-secondary);font:inherit;font-size:13.5px;cursor:pointer;text-align:left;pointer-events:auto}.dwu-zoneRow:hover{background:#f8f4ec;border-color:var(--dsw-alias-state-business-primary);box-shadow:0 2px 6px rgba(0,0,0,.14);color:var(--dsw-alias-label-primary)}.dwu-zoneRow[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,#f8f4ec)}.dwu-zoneRowIcon{flex:none;width:18px;text-align:center;font:600 13px/1 ui-monospace,monospace;color:var(--dsw-alias-label-secondary)}.dwu-zoneRow[data-active=true] .dwu-zoneRowIcon{color:var(--dsw-alias-state-business-primary)}.dwu-zoneRowLabel{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-zoneRow .dwu-statusDot{margin-left:auto;width:7px;height:7px}.dwu-zoneRail{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;width:100%;padding:0}.dwu-zoneRailBox{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;padding:6px 3px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-specific-sidebar-fill)}.dwu-zoneRailBtn{flex:none;width:26px;height:26px;padding:0;display:flex;align-items:center;justify-content:center;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:1;cursor:pointer;pointer-events:auto}.dwu-zoneRailBtn:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary)}.dwu-zoneRailBtn[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 14%,transparent)}.dwu-zoneRailSep{flex-basis:100%;height:1px;background:var(--dsw-alias-border-l1)}.dwu-zoneActions{display:flex;gap:3px;margin-left:auto}.dwu-zoneActionBtn{width:24px;height:24px;flex:none;display:grid;place-items:center;border:0;background:transparent;color:var(--dsw-alias-label-secondary);font-size:13px;cursor:pointer;border-radius:6px}.dwu-zoneActionBtn:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-drawerSearch{display:flex;align-items:center;gap:5px}.dwu-drawerSearchInput{min-width:0;flex:1;height:26px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);padding:0 7px;font-size:12px;outline:0}.dwu-drawerSearchInput:focus{border-color:var(--dsw-alias-state-business-primary)}.dwu-drawerSearchClear{width:22px;height:22px;flex:none;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:12px}.dwu-drawerSearchClear:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-drawerList{min-height:0;overflow:auto}.dwu-drawerEmpty{white-space:pre-line;font-size:12px;color:var(--dsw-alias-label-tertiary);padding:8px 4px;line-height:1.6}.dwu-wsRow{display:flex;align-items:center;gap:8px;min-height:40px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;padding:5px 8px;background:var(--dsw-alias-fill-l1,rgba(255,255,255,.03));cursor:pointer}.dwu-wsRow:hover{background:var(--dsw-alias-fill-l1,rgba(255,255,255,.08));border-color:var(--dsw-alias-state-business-primary)}.dwu-wsIcon{flex:none;width:20px;text-align:center;font-size:16px;line-height:1}.dwu-wsMeta{min-width:0;flex:1;display:grid;gap:1px}.dwu-wsName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;font-weight:600;color:var(--dsw-alias-label-primary)}.dwu-wsFolder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10.5px;color:var(--dsw-alias-label-tertiary)}.dwu-wsBind{flex:none;width:24px;height:24px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:12px}.dwu-wsBind:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-zoneSub{display:flex;flex-direction:column;gap:6px;margin-top:2px;padding-top:8px;border-top:1px solid var(--dsw-alias-border-l1)}.dwu-popBackdrop{position:fixed;inset:0;z-index:88}.dwu-manage,.dwu-emojiPop,.dwu-bindPop{position:fixed;z-index:90;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-base);box-shadow:0 8px 30px #00000040;padding:8px;display:flex;flex-direction:column;gap:4px;max-height:70vh;overflow:auto}.dwu-manageHead{display:flex;align-items:center;justify-content:space-between;padding:2px 2px 6px}.dwu-manageTitle{font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary)}.dwu-manageDone{height:22px;border:0;border-radius:5px;padding:0 8px;background:transparent;color:var(--dsw-alias-state-business-primary);font-size:11px;cursor:pointer}.dwu-manageDone:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRow{display:flex;align-items:center;gap:6px;min-height:32px;border:1px solid transparent;border-radius:7px;padding:2px 4px}.dwu-manageRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRow[data-hidden=true]{opacity:.5}.dwu-manageGrip{flex:none;color:var(--dsw-alias-label-tertiary);cursor:grab;font-size:12px}.dwu-manageIcon{flex:none;width:18px;text-align:center;font-size:14px;cursor:pointer}.dwu-manageName{min-width:0;flex:1;border:0;background:transparent;color:var(--dsw-alias-label-primary);font-size:12px;text-align:left;cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px 3px;border-radius:4px}.dwu-manageName:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRename{min-width:0;flex:1;height:22px;border:1px solid var(--dsw-alias-state-business-primary);border-radius:4px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:12px;padding:0 5px;outline:0}.dwu-manageBtn{flex:none;width:22px;height:22px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;display:grid;place-items:center}.dwu-manageBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-emojiTitle,.dwu-bindTitle{font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary);padding:2px 2px 4px}.dwu-emojiGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:3px}.dwu-emojiCell{width:100%;aspect-ratio:1;display:grid;place-items:center;border:1px solid transparent;border-radius:6px;background:transparent;font-size:17px;cursor:pointer}.dwu-emojiCell:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l2)}.dwu-bindPop{width:280px}.dwu-bindUnbind{height:26px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer;text-align:left;padding:0 6px}.dwu-bindUnbind:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-bindList{display:flex;flex-direction:column;gap:2px;max-height:40vh;overflow:auto}.dwu-bindRow{display:flex;align-items:center;min-height:30px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;text-align:left;padding:0 8px;cursor:pointer;overflow:hidden}.dwu-bindRow:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-bindRow[data-current=true]{color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-bindRowName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-workspace{height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base)}.dwu-workHead{height:42px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-workTitle{font-size:15px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-statusDot{flex:none;width:8px;height:8px;border-radius:50%;background:#7f8998;margin-left:2px}.dwu-statusDot[data-status=busy]{background:#4f8ef7}.dwu-statusDot[data-status=need]{background:#f5c542}.dwu-statusDot[data-status=done]{background:#4ade80}.dwu-statusDot[data-status=idle]{background:#7f8998;opacity:.55}.dwu-bindWrap{position:relative;display:flex;align-items:center}.dwu-bindChip{display:flex;align-items:center;gap:5px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;cursor:pointer;max-width:220px}.dwu-bindChip:hover{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary)}.dwu-bindChip[data-bound=true]{color:var(--dsw-alias-label-primary)}.dwu-bindChipZone{flex:none}.dwu-bindChipTitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-bindCaret{flex:none;font-size:9px;opacity:.7}.dwu-bindMenu{position:absolute;top:calc(100% + 6px);right:0;z-index:302;min-width:240px;max-width:320px;max-height:320px;overflow:auto;background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-base));border:1px solid var(--dsw-alias-border-l2);border-radius:10px;box-shadow:var(--dsw-shadow-lv2,0 8px 24px #00000022);padding:4px}.dwu-bindItem{display:flex;align-items:center;gap:8px;width:100%;height:32px;padding:0 10px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-primary);font-size:12px;cursor:pointer;text-align:left}.dwu-bindItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-bindZone{flex:none;width:18px;text-align:center;font-size:12px}.dwu-bindTitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-bindCheck{flex:none;color:var(--dsw-alias-state-business-primary);font-size:12px}.dwu-bindUnbind{display:block;width:100%;margin-top:4px;height:28px;border:0;border-top:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-tertiary);font-size:11.5px;cursor:pointer;text-align:center}.dwu-bindUnbind:hover{color:var(--dsw-alias-state-error-primary)}.dwu-bindEmpty{padding:10px;color:var(--dsw-alias-label-tertiary);font-size:12px;text-align:center}.dwu-bindBackdrop{position:fixed;inset:0;z-index:301;background:transparent}.dwu-metaChip{flex:none;font-size:10.5px;font-weight:600;color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-fill-l1,rgba(255,255,255,.04));border-radius:5px;padding:1px 6px;white-space:nowrap}.dwu-fileToolbar{flex-wrap:wrap;height:auto;min-height:36px;padding-top:3px;padding-bottom:3px;row-gap:3px}.dwu-mediaZoom{height:100%;overflow:auto;padding:12px;display:flex;background:var(--dsw-alias-bg-layer-1,transparent)}.dwu-mediaZoom img{margin:auto;display:block}.dwu-toolButton[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary)}.dwu-toolSelect{height:26px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);padding:0 4px;font-size:11px;cursor:pointer}.dwu-toolSelect:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-treeModeSelect{height:24px;flex:none;align-self:center;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);padding:0 3px;font-size:11px;cursor:pointer}.dwu-treeModeSelect:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-crumb:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-crumb[data-last]{color:var(--dsw-alias-label-primary);font-weight:650}.dwu-crumb:disabled{opacity:.4;cursor:default}.dwu-splitRoot{position:fixed;bottom:0;z-index:40;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);border-right:1px solid var(--dsw-alias-border-l2);box-shadow:6px 0 24px #00000026;min-width:0;pointer-events:auto}.dwu-splitHead{height:36px;flex:none;display:flex;align-items:center;gap:8px;padding:0 10px 0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-splitTitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:650;color:var(--dsw-alias-label-primary)}.dwu-splitClose{width:24px;height:24px;flex:none;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;display:grid;place-items:center}.dwu-splitClose:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-splitBody{flex:1;min-height:0;display:flex;flex-direction:row;overflow:hidden}.dwu-splitPane{min-width:0;height:100%;display:flex;flex-direction:column;overflow:hidden}.dwu-splitPaneHead{height:30px;flex:none;display:flex;align-items:center;padding:0 10px;border-bottom:1px solid var(--dsw-alias-border-l1);font-size:11px;font-weight:600;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-fill-l1,rgba(255,255,255,.03))}.dwu-splitFrame{flex:1;min-height:0;width:100%;border:0;background:#fff}.dwu-splitEmpty{flex:1;min-height:0;display:grid;place-items:center;color:var(--dsw-alias-label-tertiary);font-size:12px;padding:12px}.dwu-splitDivider{flex:none;width:6px;cursor:col-resize;background:transparent;position:relative}.dwu-splitDivider:after{content:"";position:absolute;top:0;bottom:0;left:2px;width:2px;background:var(--dsw-alias-border-l2);opacity:0;transition:opacity .12s ease}.dwu-splitDivider:hover:after{opacity:1;background:var(--dsw-alias-state-business-primary)}.dwu-workPath{font-size:11px;color:var(--dsw-alias-label-caption);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-tabs{height:38px;flex:none;display:flex;align-items:stretch;overflow-x:auto;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base)}.dwu-tab{min-width:110px;max-width:210px;border:0;border-right:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-secondary);display:flex;align-items:center;gap:7px;padding:0 7px 0 11px;cursor:pointer;font-size:12px}.dwu-tab[data-active=true]{background:var(--dsw-specific-sidebar-fill);color:var(--dsw-alias-label-primary);box-shadow:inset 0 -2px 0 var(--dsw-alias-state-business-primary)}.dwu-tabName{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-dirty{color:var(--dsw-alias-state-business-primary);font-size:14px}.dwu-close{width:20px;height:20px;border:0;background:transparent;border-radius:5px;color:inherit;cursor:pointer;padding:0}.dwu-close:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-body{flex:1;min-height:0;position:relative;overflow:hidden}.dwu-welcome{height:100%;display:grid;place-items:center;padding:32px;color:var(--dsw-alias-label-tertiary);text-align:center}.dwu-welcomeCard{max-width:430px}.dwu-welcomeIcon{font-size:38px;margin-bottom:12px}.dwu-welcomeTitle{color:var(--dsw-alias-label-primary);font-size:18px;font-weight:650;margin-bottom:7px}.dwu-welcomeText{font-size:13px;line-height:1.6}.dwu-filePane{height:100%;min-height:0;display:flex;flex-direction:column}.dwu-fileToolbar{height:36px;flex:none;border-bottom:1px solid var(--dsw-alias-border-l1);display:flex;align-items:center;gap:6px;padding:0 10px}.dwu-fileMeta{min-width:0;flex:1;color:var(--dsw-alias-label-caption);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dwu-toolButton{height:26px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);padding:0 9px;font-size:11px;cursor:pointer}.dwu-toolButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-toolButton:disabled{opacity:.45;cursor:default}.dwu-status{font-size:11px;color:var(--dsw-alias-label-caption)}.dwu-status[data-error=true]{color:var(--dsw-alias-state-error-primary)}.dwu-editorWrap{flex:1;min-height:0;display:flex;overflow:hidden;background:var(--dsw-alias-bg-base)}.dwu-lines{width:48px;flex:none;margin:0;padding:14px 10px 40px 0;text-align:right;overflow:hidden;white-space:pre;color:var(--dsw-alias-label-caption);background:var(--dsw-specific-sidebar-fill);border-right:1px solid var(--dsw-alias-border-l1);font:12px/20px ui-monospace,SFMono-Regular,Menlo,monospace;user-select:none}.dwu-codeArea{flex:1;min-width:0;min-height:0;position:relative;overflow:hidden}.dwu-highlight,.dwu-editor{position:absolute;inset:0;margin:0;border:0;padding:14px 18px 40px;font:13px/20px ui-monospace,SFMono-Regular,Menlo,monospace;tab-size:2;white-space:pre;overflow:auto}.dwu-highlight{pointer-events:none;color:var(--dsw-alias-label-primary);background:transparent;overflow:hidden}.dwu-highlight .kw{color:#c792ea}.dwu-highlight .str{color:#c3e88d}.dwu-highlight .num{color:#f78c6c}.dwu-highlight .com{color:var(--dsw-alias-label-caption);font-style:italic}.dwu-editor{width:100%;height:100%;resize:none;outline:0;background:transparent;color:var(--dsw-alias-label-primary);caret-color:var(--dsw-alias-state-business-primary)}.dwu-editor[data-highlight=true]{color:transparent;-webkit-text-fill-color:transparent}.dwu-editor[data-highlight=true]::selection{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 35%,transparent)}.dwu-editor[data-flash=true]{animation:dwu-flash .9s ease-out}@keyframes dwu-flash{0%{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 13%,transparent)}100%{background:transparent}}.dwu-preview{height:100%;overflow:auto;padding:28px clamp(24px,7vw,84px);font-size:14px;line-height:1.72}.dwu-preview h1,.dwu-preview h2,.dwu-preview h3{line-height:1.25;margin:1.3em 0 .55em}.dwu-preview h1{font-size:28px}.dwu-preview h2{font-size:22px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:7px}.dwu-preview pre{background:var(--dsw-specific-sidebar-fill);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:14px;overflow:auto}.dwu-preview code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--dsw-specific-sidebar-fill);border-radius:4px;padding:1px 4px}.dwu-preview blockquote{border-left:3px solid var(--dsw-alias-state-business-primary);margin-left:0;padding-left:14px;color:var(--dsw-alias-label-secondary)}.dwu-preview a{color:var(--dsw-alias-state-business-primary)}.dwu-frame{width:100%;height:100%;border:0;background:white}.dwu-media{height:100%;display:grid;place-items:center;padding:24px;background:#0e1015}.dwu-media video,.dwu-media audio{max-width:100%;max-height:100%}.dwu-media img{max-width:100%;max-height:100%;object-fit:contain}.dwu-office{height:100%;display:flex;flex-direction:column}.dwu-sheetTabs{height:36px;display:flex;align-items:center;gap:5px;padding:0 8px;border-bottom:1px solid var(--dsw-alias-border-l1);overflow-x:auto}.dwu-sheetTab{height:25px;padding:0 9px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer}.dwu-sheetTab[data-active=true]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-loading,.dwu-error{height:100%;display:grid;place-items:center;padding:28px;color:var(--dsw-alias-label-tertiary);font-size:13px}.dwu-error{color:var(--dsw-alias-state-error-primary)}
      .dwu-tab[data-preview=true] .dwu-tabName{font-style:italic}.dwu-workPath{flex:1}.dwu-main{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}.dwu-terminalToggle{width:30px;height:28px;flex:none;display:grid;place-items:center;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.dwu-terminalToggle:hover,.dwu-terminalToggle[data-active=true]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l3)}.dwu-terminalGlyph{font:700 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace}.dwu-terminal{height:230px;min-height:150px;max-height:48%;flex:none;display:flex;flex-direction:column;border-top:1px solid var(--dsw-alias-border-l2);background:#101216;color:#d7dce5}.dwu-terminalHead{height:34px;flex:none;display:flex;align-items:center;gap:7px;padding:0 9px 0 12px;background:#171a20;border-bottom:1px solid #ffffff12}.dwu-terminalCwd{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:#7f8998}.dwu-terminalAction{height:23px;border:0;border-radius:5px;padding:0 7px;background:transparent;color:#8993a3;font-size:10px;cursor:pointer}.dwu-terminalAction:hover{background:#ffffff12;color:#e7ebf2}.dwu-terminalOutput{flex:1;min-height:0;margin:0;padding:10px 13px;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:12px/18px ui-monospace,SFMono-Regular,Menlo,Monaco,monospace;color:#cfd6e2;user-select:text}.dwu-terminalEntry{margin:0 0 8px}.dwu-terminalCommand{color:#f0f3f8}.dwu-terminalPrompt{color:#63d297}.dwu-terminalResult[data-error=true]{color:#ff9b9b}.dwu-terminalForm{height:38px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px;border-top:1px solid #ffffff12;background:#13161b}.dwu-terminalInput{min-width:0;flex:1;border:0;outline:0;background:transparent;color:#f2f4f8;font:12px/1 ui-monospace,SFMono-Regular,Menlo,Monaco,monospace}.dwu-terminalInput::placeholder{color:#657080}.dwu-terminalInput:disabled{opacity:.58}.dwu-terminalRunning{font:10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:#8fa0b8}
      .dwu-contextDock{width:calc(100% - 32px);max-width:var(--dsh-composer-card-max-width);margin:0 auto -3px;padding:0 6px;display:flex;align-items:center;gap:6px;overflow-x:auto}.dwu-contextLabel{font-size:10px;color:var(--dsw-alias-label-caption);white-space:nowrap}.dwu-chip{height:25px;max-width:170px;flex:none;border:1px solid var(--dsw-alias-border-l2);border-radius:13px;background:var(--dsw-specific-tip);color:var(--dsw-alias-label-secondary);display:flex;align-items:center;gap:5px;padding:0 8px;font-size:10px;cursor:pointer}.dwu-chip[data-enabled=false]{opacity:.48}.dwu-chipName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-chipDot{width:7px;height:7px;border-radius:50%;background:var(--dsw-alias-state-business-primary)}.dwu-chip[data-enabled=false] .dwu-chipDot{background:var(--dsw-alias-label-caption)}.dwu-sessionSwitch{display:flex;align-items:center;gap:4px}.dwu-sessionSelect{height:28px;max-width:150px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);font-size:11px;padding:0 7px}.dwu-sessionNew{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:18px;cursor:pointer}.dwu-sessionNew:hover{background:var(--dsw-alias-interactive-bg-hover)}
      .dwu-tree{padding:7px 5px 18px}.dwu-treeRow{height:32px;gap:4px;padding:0 6px 0 4px;border-radius:7px;font-size:12.5px}.dwu-indentGuides{align-self:stretch;display:grid;grid-auto-flow:column;grid-auto-columns:18px;flex:none}.dwu-indentGuide{height:100%;position:relative}.dwu-indentGuide:after{content:"";position:absolute;top:0;bottom:0;left:8px;width:1px;background:color-mix(in srgb,var(--dsw-alias-label-caption) 38%,transparent)}.dwu-treeRow:hover .dwu-indentGuide:after,.dwu-treeRow[data-active=true] .dwu-indentGuide:after{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 52%,transparent)}.dwu-chevron{width:18px;font-size:13px;line-height:18px}.dwu-fileGlyph{width:19px;height:19px;display:grid;place-items:center;flex:none}.dwu-vscodeIcon{width:18px;height:18px;display:block;overflow:visible}.dwu-treeName{line-height:20px}.dwu-treeRow .dwu-iconButton{opacity:0}.dwu-treeRow:hover .dwu-iconButton,.dwu-treeRow:focus-within .dwu-iconButton{opacity:1}.dwu-treeLoading{font-size:12px;line-height:24px}.dwu-projectButton,.dwu-addProject{position:relative}.dwu-projectButton:active,.dwu-addProject:active,.dwu-iconButton:active{transform:scale(.96)}
      .dwu-contextMenu{position:fixed;z-index:1000;width:218px;max-height:calc(100vh - 12px);overflow-y:auto;padding:5px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;box-shadow:0 12px 34px #00000033;color:var(--dsw-alias-label-primary)}.dwu-menuItem{width:100%;min-height:32px;border:0;border-radius:6px;padding:0 9px;display:flex;align-items:center;gap:9px;text-align:left;background:transparent;color:inherit;font-size:12px;cursor:pointer}.dwu-menuItem:hover,.dwu-menuItem:focus-visible{outline:0;background:var(--dsw-alias-interactive-bg-hover)}.dwu-menuItem[data-danger=true]{color:var(--dsw-alias-state-error-primary)}.dwu-menuIcon{width:25px;flex:none;text-align:center;color:var(--dsw-alias-label-tertiary);font-size:10px}.dwu-menuSeparator{height:1px;margin:4px 5px;background:var(--dsw-alias-border-l1)}
      .dwu-contextDock{width:calc(100% - 24px);min-height:35px;flex:0 0 auto;margin:0 auto 4px;padding:4px 5px;display:flex;align-content:flex-start;align-items:center;flex-wrap:wrap;gap:5px;max-height:88px;overflow-x:hidden;overflow-y:auto;position:relative;z-index:2}.dwu-contextLabel{height:27px;display:flex;align-items:center;font-size:10px;line-height:16px;flex:none}.dwu-chip{height:27px;min-height:27px;max-width:min(210px,calc(100% - 74px));padding:0 7px 0 8px;gap:6px;border-radius:7px;line-height:16px}.dwu-chip:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l3)}.dwu-chipName{min-width:0;flex:1;display:block;line-height:16px}.dwu-chipRemove{font-size:14px;line-height:16px;color:var(--dsw-alias-label-caption)}.dwu-chip:hover .dwu-chipRemove{color:var(--dsw-alias-label-primary)}
      .dwu-projectButton[data-long=true]{font-size:9px;letter-spacing:-.03em;padding:0 2px}.dwu-historyRoot{position:relative;display:flex;align-items:center;gap:6px}.dwu-historyRoot[data-session=true]{transform:translateX(-126px)}.dwu-historyButton,.dwu-newChatButton{width:34px;height:34px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);display:grid;place-items:center;cursor:pointer;box-shadow:0 2px 8px #0000001a;transition:transform 140ms cubic-bezier(.23,1,.32,1),background-color 140ms ease,color 140ms ease,border-color 140ms ease}.dwu-historyButton:hover,.dwu-historyButton[data-open=true],.dwu-newChatButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l3)}.dwu-historyButton:active,.dwu-newChatButton:active{transform:scale(.96)}.dwu-historyIcon,.dwu-newChatIcon{width:18px;height:18px;display:block}.dwu-historyPopover{position:absolute;top:40px;right:0;width:260px;max-height:min(420px,calc(100vh - 76px));display:flex;flex-direction:column;padding:6px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:11px;box-shadow:0 14px 38px #0000003d;transform-origin:top right}.dwu-historyRoot[data-session=true] .dwu-historyPopover{right:-126px}.dwu-historyHead{height:34px;display:flex;align-items:center;gap:7px;padding:0 5px 0 8px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-historyTitle{min-width:0;flex:1;font-size:12px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dwu-historyCount{font-size:10px;color:var(--dsw-alias-label-caption)}.dwu-historyList{min-height:0;overflow-y:auto;padding-top:5px}.dwu-historyEmpty{padding:18px 10px;text-align:center;color:var(--dsw-alias-label-tertiary);font-size:11px}.dwu-historyRow{width:100%;min-height:46px;border:0;border-radius:7px;padding:6px 8px;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:3px 8px;text-align:left;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.dwu-historyRow:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-historyRow[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-label-primary-bluish)}.dwu-historyName{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}.dwu-historyTime{font-size:10px;color:var(--dsw-alias-label-caption);white-space:nowrap}.dwu-historyCurrent{grid-column:1/-1;font-size:9px;color:var(--dsw-alias-state-business-primary)}
      .dwu-markOverlay{position:fixed;z-index:1200;inset:0;display:grid;place-items:center;padding:20px;background:#00000042}.dwu-markDialog{width:min(320px,calc(100vw - 40px));padding:16px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:13px;box-shadow:0 18px 54px #0000004d}.dwu-markTitle{font-size:14px;font-weight:680;margin-bottom:4px}.dwu-markProject{font-size:11px;color:var(--dsw-alias-label-caption);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-markEditor{display:flex;align-items:center;gap:12px;margin:16px 0 8px}.dwu-markPreview{width:44px;height:44px;flex:none;border-radius:11px;display:grid;place-items:center;background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);font-size:11px;font-weight:700}.dwu-markInput{height:38px;min-width:0;flex:1;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-specific-sidebar-fill);color:var(--dsw-alias-label-primary);padding:0 10px;font-size:14px;outline:0}.dwu-markInput:focus{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent)}.dwu-markHint{font-size:10px;color:var(--dsw-alias-label-caption);line-height:1.45}.dwu-markActions{display:flex;justify-content:flex-end;gap:7px;margin-top:15px}.dwu-markAction{height:31px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;padding:0 11px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer}.dwu-markAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-markAction[data-primary=true]{border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-state-business-primary);color:white}.dwu-markAction:active{transform:scale(.97)}
      .dwu-projectActionText{margin:14px 0 4px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.55}.dwu-projectActionPath{padding:8px 9px;border-radius:7px;background:var(--dsw-specific-sidebar-fill);color:var(--dsw-alias-label-caption);font:10px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere}.dwu-projectActionError{margin-top:10px;padding:7px 9px;border-radius:7px;background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 12%,transparent);color:var(--dsw-alias-state-error-primary);font-size:10px;line-height:1.45}.dwu-markAction[data-danger=true]{border-color:var(--dsw-alias-state-error-primary);background:var(--dsw-alias-state-error-primary);color:white}.dwu-markAction:disabled{opacity:.48;cursor:default;transform:none}
      .dwu-projectPicker{position:fixed;z-index:1100;width:300px;max-height:min(430px,calc(100vh - 20px));display:flex;flex-direction:column;padding:6px;background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:12px;box-shadow:0 16px 46px #00000040;color:var(--dsw-alias-label-primary);transform-origin:top left}.dwu-projectPickerHead{height:34px;flex:none;display:flex;align-items:center;padding:0 9px;color:var(--dsw-alias-label-tertiary);font-size:11px;font-weight:650;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-projectPickerList{min-height:0;overflow-y:auto;padding:5px 0}.dwu-projectPickerEmpty{padding:18px 10px;text-align:center;color:var(--dsw-alias-label-tertiary);font-size:11px}.dwu-projectPickerRow{width:100%;min-height:43px;border:0;border-radius:8px;padding:6px 8px;display:grid;grid-template-columns:22px minmax(0,1fr) 18px;align-items:center;gap:7px;text-align:left;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.dwu-projectPickerRow:hover,.dwu-projectPickerRow:focus-visible{outline:0;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-projectPickerRow[data-selected=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-label-primary-bluish)}.dwu-projectPickerFolder{width:20px;height:20px;display:grid;place-items:center}.dwu-projectPickerMeta{min-width:0;display:grid}.dwu-projectPickerName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:580}.dwu-projectPickerPath{margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-caption);font-size:9px}.dwu-projectPickerCheck{color:var(--dsw-alias-state-business-primary);font-size:13px;text-align:center}.dwu-projectPickerActions{flex:none;padding:6px 0 0;border-top:1px solid var(--dsw-alias-border-l1)}.dwu-projectPickerAction{width:100%;height:34px;border:0;border-radius:8px;padding:0 9px;display:flex;align-items:center;gap:9px;text-align:left;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;cursor:pointer}.dwu-projectPickerAction:hover,.dwu-projectPickerAction:focus-visible{outline:0;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-projectPickerAction:active,.dwu-projectPickerRow:active{transform:scale(.985)}.dwu-projectPickerAction:disabled{opacity:.45;cursor:progress;transform:none}.dwu-projectPickerActionIcon{width:20px;height:20px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;display:grid;place-items:center;color:var(--dsw-alias-label-tertiary);font-size:14px}.dwu-projectPickerError{margin:4px 6px 6px;padding:7px 8px;border-radius:7px;background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 12%,transparent);color:var(--dsw-alias-state-error-primary);font-size:10px;line-height:1.4}.dwu-newProjectDialog{width:min(390px,calc(100vw - 40px))}.dwu-newProjectFields{display:grid;gap:13px;margin-top:16px}.dwu-newProjectLabel{display:grid;gap:6px;color:var(--dsw-alias-label-secondary);font-size:11px}.dwu-newProjectInput{height:40px;width:100%;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-specific-sidebar-fill);color:var(--dsw-alias-label-primary);padding:0 11px;font-size:13px;outline:0}.dwu-newProjectInput:focus{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent)}.dwu-newProjectLocation{min-height:42px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-specific-sidebar-fill);display:flex;align-items:center;gap:8px;padding:6px 7px 6px 10px}.dwu-newProjectLocationPath{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-caption);font:10px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace}.dwu-newProjectLocationButton{height:28px;flex:none;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);padding:0 9px;font-size:10px;cursor:pointer}.dwu-newProjectLocationButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-newProjectHint{color:var(--dsw-alias-label-caption);font-size:10px;line-height:1.45}
      .dwu-treeRow[data-selected=true]:not([data-active=true]){background:color-mix(in srgb,var(--dsw-alias-label-primary) 7%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-caption) 35%,transparent)}.dwu-treeRow[data-cut=true]{opacity:.48}.dwu-treeRow[data-drop=true]{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent);box-shadow:inset 0 0 0 1px var(--dsw-alias-state-business-primary)}.dwu-treeRow:focus-visible{outline:1px solid var(--dsw-alias-state-business-primary);outline-offset:-1px}.dwu-tree[data-drop-root=true]{box-shadow:inset 0 0 0 2px var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 6%,transparent)}.dwu-tree[data-busy=true]{cursor:progress}.dwu-fileNotice{position:absolute;left:8px;right:8px;bottom:8px;z-index:8;min-height:34px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-button-floating-fill);box-shadow:0 8px 24px #0000002e;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.45;pointer-events:none}.dwu-treePanel{position:relative}.dwu-treeDropHint{padding:10px 12px;color:var(--dsw-alias-state-business-primary);font-size:11px;text-align:center;border-bottom:1px solid var(--dsw-alias-border-l1)}
      .dwu-historyButton:disabled{opacity:.45;cursor:default;transform:none}
      .dwu-worktree{position:relative;flex:none;height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-specific-sidebar-fill);overflow:hidden;transition:width .16s ease}.dwu-worktree[data-resizing=true]{transition:none}.dwu-widthHandle{position:absolute;top:0;right:0;width:5px;height:100%;z-index:6;cursor:col-resize;background:transparent;border:0;padding:0}.dwu-treePanel{min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden;transition:opacity .15s ease}.dwu-treePanel[data-fading=true]{opacity:0}.dwu-treePanel[data-frozen=true]{flex:none}.dwu-worktreeRail{align-items:center;padding:8px 0;gap:6px}.dwu-railButton{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:14px;animation:dwu-rail-in .15s ease backwards}@keyframes dwu-rail-in{0%{opacity:0;transform:translateX(20px)}}.dwu-railButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-treeExpand{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:14px}.dwu-treeExpand:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-workbenchCollapse{width:28px;height:28px;flex:none;display:grid;place-items:center;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.dwu-workbenchCollapse:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l3)}
      @media (prefers-reduced-motion:reduce){.dwu-projectButton:active,.dwu-addProject:active,.dwu-iconButton:active,.dwu-projectPickerAction:active,.dwu-projectPickerRow:active,.dwu-historyButton:active,.dwu-newChatButton:active{transform:none}}
      .hHd-Xa_brandName{height:auto !important;line-height:1.2 !important}
      .hHd-Xa_brandName *{font-family:"VT323",ui-monospace,SFMono-Regular,Menlo,monospace !important;font-size:28px !important;line-height:1.2 !important;font-weight:400 !important;text-transform:none !important;letter-spacing:0 !important}
      .hHd-Xa_brandMark img{width:36px !important;height:36px !important}
      .hHd-Xa_brandIdentity{height:36px !important}
      .pXSMma_headlineText{font-size:0 !important;line-height:40px !important}
      .pXSMma_headlineText::before{content:"Veang Workbench";font-family:"VT323",ui-monospace,SFMono-Regular,Menlo,monospace !important;font-size:32px !important;line-height:40px !important;letter-spacing:0 !important;vertical-align:middle}
      .pI_x6G_rightToggle{display:none !important}
      .dwu-terminalToggle{display:none !important}
      .VOzbGW_navCell:last-child .VOzbGW_navIcon{display:none !important}
      .VOzbGW_navCell:last-child::before{content:"";flex:none;width:16px;height:16px;background-color:currentColor;--dwu-shirt:url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27none%27%20stroke%3D%27black%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Cpath%20d%3D%27M20.38%203.46%2016%202a4%204%200%200%201-8%200L3.62%203.46a2%202%200%200%200-1.34%202.23l.58%203.47a1%201%200%200%200%20.99.84H6v10a1%201%200%200%200%201%201h10a1%201%200%200%200%201-1V10h2.15a1%201%200%200%200%20.99-.84l.58-3.47a2%202%200%200%200-1.34-2.23z%27%2F%3E%3C%2Fsvg%3E");-webkit-mask:var(--dwu-shirt) center/contain no-repeat;mask:var(--dwu-shirt) center/contain no-repeat}
      .dwu-treeTabs{height:38px;flex:none;display:flex;align-items:stretch;padding:0 6px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-treeTab{flex:1;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:650;cursor:pointer;text-align:left;padding-left:4px}.dwu-treeTab[data-active=true]{color:var(--dsw-alias-label-primary);border-bottom-color:var(--dsw-alias-state-business-primary)}.dwu-dockTitle{flex:none;align-self:center;padding-left:4px;font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary);white-space:nowrap}.dwu-dockPath{flex:1;min-width:0;align-self:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--dsw-alias-label-tertiary);padding:0 6px}.dwu-treeTab:hover{color:var(--dsw-alias-label-primary)}.dwu-treeSearchToggle{width:28px;flex:none;border:0;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;display:grid;place-items:center;font-size:13px;border-radius:6px}.dwu-treeSearchToggle:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-treeRefresh:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-treeIconBtn{width:28px;flex:none;border:0;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;display:grid;place-items:center;font-size:13px;border-radius:6px;font-family:inherit}.dwu-treeIconBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-treeSearch{flex:1;min-width:0;display:flex;align-items:center;gap:5px}.dwu-treeSearchInput{height:26px;min-width:0;flex:1;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);padding:0 7px;font-size:12px;outline:0}.dwu-treeSearchInput:focus{border-color:var(--dsw-alias-state-business-primary)}.dwu-treeSearchClear{width:22px;height:22px;flex:none;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:12px;display:grid;place-items:center}.dwu-treeSearchClear:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-searchRow{height:28px;display:flex;align-items:center;gap:6px;border-radius:6px;padding:0 6px;cursor:pointer;font-size:12px;color:var(--dsw-alias-label-secondary)}.dwu-searchRow:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-searchIcon{flex:none;width:14px;text-align:center;color:var(--dsw-alias-label-caption)}.dwu-searchMeta{min-width:0;flex:1;display:grid}.dwu-searchName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-primary)}.dwu-searchDir{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;color:var(--dsw-alias-label-caption)}.dwu-searchCap{padding:4px 8px 8px;font-size:10px;color:var(--dsw-alias-label-caption)}
      .dwu-gitList{flex:1;min-height:0;overflow-y:auto;padding:6px 4px 16px}.dwu-gitRow{display:flex;align-items:center;gap:6px;min-height:30px;padding:0 6px 0 4px;border-radius:7px;cursor:pointer;font-size:12px}.dwu-gitRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-gitBadge{flex:none;width:20px;height:20px;display:grid;place-items:center;border-radius:5px;font:700 10px/1 ui-monospace,monospace;background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 16%,transparent);color:var(--dsw-alias-state-business-primary)}.dwu-gitBadge[data-status="?"]{background:color-mix(in srgb,var(--dsw-alias-label-caption) 20%,transparent);color:var(--dsw-alias-label-secondary)}.dwu-gitBadge[data-status="D"]{background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 16%,transparent);color:var(--dsw-alias-state-error-primary)}.dwu-gitMeta{min-width:0;flex:1;display:grid}.dwu-gitName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:18px}.dwu-gitDir{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-caption);font-size:10px}.dwu-gitActions{flex:none;display:flex;gap:3px;opacity:0}.dwu-gitRow:hover .dwu-gitActions{opacity:1}.dwu-gitAction{width:22px;height:22px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:13px;line-height:22px;padding:0;display:grid;place-items:center}.dwu-gitAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-gitAction[data-danger=true]:hover{color:var(--dsw-alias-state-error-primary)}
    `;
    const styleId = "veang-workbench-ui/styles";
    if (document.querySelector(`style[data-plugin-css=${JSON.stringify(styleId)}]`) === null) {
      const tag = document.createElement("style");
      tag.dataset.plugin = "veang-workbench-ui";
      tag.dataset.pluginCss = styleId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }

    function extOf(file) {
      const name = file.split("/").pop().toLowerCase();
      if (name === "dockerfile" || name === "makefile") return name;
      const at = name.lastIndexOf(".");
      return at < 0 ? "" : name.slice(at + 1);
    }
    function fileKind(file) {
      const ext = extOf(file);
      if (ext === "md" || ext === "mdx") return "markdown";
      if (textExtensions.has(ext) || (!file.split("/").pop().includes(".") && file.split("/").pop().length < 40)) return "text";
      if (ext === "pdf") return "pdf";
      if (videoExtensions.has(ext)) return "video";
      if (audioExtensions.has(ext)) return "audio";
      if (imageExtensions.has(ext)) return "image";
      if (officeExtensions.has(ext)) return "office";
      if (asepriteExtensions.has(ext)) return "aseprite";
      return "other";
    }
    function fileIconSpec(file) {
      const ext = extOf(file);
      const name = basename(file).toLowerCase();
      if (["js", "jsx", "mjs", "cjs"].includes(ext)) return ["JS", "#d6ba32"];
      if (["ts", "tsx"].includes(ext)) return ["TS", "#3178c6"];
      if (["html", "htm"].includes(ext)) return ["<>", "#e44d26"];
      if (["css", "scss", "less"].includes(ext)) return ["#", "#42a5d9"];
      if (["md", "mdx"].includes(ext)) return ["M", "#519aba"];
      if (["json", "jsonl"].includes(ext)) return ["{}", "#c9a227"];
      if (["yaml", "yml", "toml", "ini", "conf", "env"].includes(ext)) return ["Y", "#cb575d"];
      if (ext === "py") return ["Py", "#3776ab"];
      if (ext === "swift") return ["S", "#f05138"];
      if (ext === "go") return ["Go", "#00add8"];
      if (ext === "rs") return ["Rs", "#a65f38"];
      if (["java", "kt"].includes(ext)) return [ext === "kt" ? "K" : "J", "#e76f00"];
      if (["c", "h", "cpp", "hpp", "cs"].includes(ext)) return [ext.toUpperCase().slice(0, 2), "#659ad2"];
      if (["sh", "zsh", "bash", "fish"].includes(ext)) return [">_", "#4d9f5b"];
      if (ext === "sql") return ["DB", "#d8913b"];
      if (ext === "pdf") return ["P", "#e44747"];
      if (ext === "docx") return ["W", "#2b579a"];
      if (["xlsx", "xls", "csv"].includes(ext)) return ["X", "#217346"];
      if (imageExtensions.has(ext)) return ["▧", "#28a99e"];
      if (asepriteExtensions.has(ext)) return ["◧", "#e8865a"];
      if (videoExtensions.has(ext)) return ["▶", "#a66dd4"];
      if (audioExtensions.has(ext)) return ["♪", "#d66ba0"];
      if (name === "dockerfile") return ["D", "#2496ed"];
      if (name === "makefile") return ["M", "#6d8086"];
      if (["gitignore", "gitconfig"].includes(ext) || name.startsWith(".git")) return ["G", "#f05032"];
      return [ext ? ext.slice(0, 2).toUpperCase() : "·", "#7b8794"];
    }
    function FileIcon({ file, directory = false, expanded = false, size = 18 }) {
      if (directory) return h("svg", { className: "dwu-vscodeIcon", width: size, height: size, viewBox: "0 0 20 20", "aria-hidden": true },
        h("path", { fill: expanded ? "#e6b84d" : "#d6a94b", d: "M1.8 4.2c0-.7.5-1.2 1.2-1.2h5l1.6 1.8H17c.7 0 1.2.5 1.2 1.2v9.6c0 .8-.6 1.4-1.4 1.4H3.2c-.8 0-1.4-.6-1.4-1.4V4.2Z" }),
        expanded && h("path", { fill: "#f1cb68", d: "M2.1 8h15.8l-1.7 8.5H3.5L2.1 8Z" })
      );
      const [label, color] = fileIconSpec(file);
      return h("svg", { className: "dwu-vscodeIcon", width: size, height: size, viewBox: "0 0 20 20", "aria-hidden": true },
        h("path", { fill: color, d: "M4 1.5h8.1L16.5 6v12.5H4V1.5Z" }),
        h("path", { fill: "#fff", opacity: ".3", d: "M12 1.5V6h4.5L12 1.5Z" }),
        h("text", { x: "10.2", y: "14.3", fill: "#fff", textAnchor: "middle", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: label.length > 2 ? "5.1" : "6.5", fontWeight: "800" }, label)
      );
    }
    function basename(value) { return value.split(/[\\/]/).filter(Boolean).pop() ?? value; }
    function apiUrl(op, root, file = "") {
      const params = new URLSearchParams({ op, root, path: file });
      return `${API}?${params}`;
    }
    function assetUrl(root, file) {
      return `${ASSET}?${new URLSearchParams({ root, path: file })}`;
    }
    async function getJson(url, options) {
      const response = await fetch(url, options);
      let value = null;
      const text = (await response.text()).trim();
      if (text) { try { value = JSON.parse(text); } catch { value = null; } }
      if (!response.ok || !value?.ok) {
        throw new Error(value?.error ?? (response.ok ? `服务端返回了空响应（HTTP ${response.status}）` : `HTTP ${response.status}`));
      }
      return value;
    }
    function revealInFinder(root, file) {
      return getJson(apiUrl("reveal", root, file), { method: "POST" });
    }
    function postJson(op, body) {
      return getJson(`${API}?op=${op}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    }
    function gitStatus(root) { return getJson(apiUrl("git-status", root)); }
    function gitStage(root, path) { return postJson("git-stage", { root, path }); }
    function gitUnstage(root, path) { return postJson("git-unstage", { root, path }); }
    function gitDiscard(root, path, untracked) { return postJson("git-discard", { root, path, untracked }); }
    const SKIN_KEY = "dsh.veang.skin";
    const SKIN_DEFAULTS = { appearance: "veang", wallpaper: "builtin", uploads: [], occlusion: 0, blur: 0, sidebar: 85, conversation: 65, workbench: 80 };
    function normalizeSkin(value) {
      const v = (value && typeof value === "object") ? value : {};
      const num = (raw, fallback, min, max) => { const n = Number(raw); return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : fallback; };
      return {
        appearance: v.appearance === "default" ? "default" : "veang",
        wallpaper: v.wallpaper === "builtin" || (typeof v.wallpaper === "string" && /^wallpaper-[a-z0-9-]+\.[a-z0-9]+$/i.test(v.wallpaper)) ? v.wallpaper : "builtin",
        uploads: Array.isArray(v.uploads) ? v.uploads.filter((item) => item && typeof item.fileName === "string" && /^wallpaper-[a-z0-9-]+\.[a-z0-9]+$/i.test(item.fileName)).slice(0, 24).map((item) => ({ fileName: item.fileName, name: String(item.name ?? item.fileName).slice(0, 120) })) : [],
        occlusion: num(v.occlusion, 0, 0, 100),
        blur: num(v.blur, 0, 0, 20),
        sidebar: num(v.sidebar, 85, 0, 100),
        conversation: num(v.conversation, 65, 0, 100),
        workbench: num(v.workbench, 80, 0, 100)
      };
    }
    function wallpaperUrl(fileName) {
      return fileName && fileName !== "builtin" ? `${API}?op=wallpaper-file&name=${encodeURIComponent(fileName)}` : "/veang-workbench/background.png";
    }
    let skinSettings = normalizeSkin(loadJson(SKIN_KEY, SKIN_DEFAULTS));
    let skinStyleElement = null;
    function buildSkinCss(v) {
      if (v.appearance !== "veang") return "";
      const scrim = (v.occlusion / 100).toFixed(2);
      const bg = wallpaperUrl(v.wallpaper);
      const rules = [
        `body{--dsw-alias-border-l1:#00000029 !important;--dsw-alias-border-l2:#0000003d !important;--dsw-alias-border-l2-darkmode-thin:#00000029 !important;--dsw-alias-border-l3:#00000057 !important;--dsw-alias-border-l4:#00000075 !important}`,
        `body{background-image:linear-gradient(rgba(0,0,0,${scrim}),rgba(0,0,0,${scrim})),url("${bg}");background-size:cover,cover;background-position:center,center;background-repeat:no-repeat,no-repeat;background-attachment:fixed,fixed}`,
        `.pI_x6G_frame{background:transparent !important}`,
        `.pI_x6G_sidebarCol{background-color:color-mix(in srgb,var(--dsw-specific-sidebar-fill) ${v.sidebar}%,transparent) !important}`,
        `.pI_x6G_centerCol{background-color:color-mix(in srgb,var(--dsw-alias-bg-base) ${v.conversation}%,transparent) !important}`,
        `.pI_x6G_workbenchCol,.dwu-overlayRoot{background-color:color-mix(in srgb,var(--dsw-alias-bg-base) ${v.workbench}%,transparent) !important}`,
        `.hHd-Xa_root,.wSkVaW_root,.dwu-workspace,.dwu-tabs,.dwu-worktree,.pI_x6G_detailsOverlay{background:transparent !important}`,
        `.hHd-Xa_regionArea,.hHd-Xa_footArea,.hHd-Xa_footerActions,.hHd-Xa_settingsArea,.hHd-Xa_regionArea *,.hHd-Xa_footArea *{background-image:none !important;box-shadow:none !important;-webkit-mask-image:none !important;mask-image:none !important;-webkit-mask:none !important;mask:none !important}`
      ];
      if (v.blur > 0) rules.push(`body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;backdrop-filter:blur(${v.blur}px);-webkit-backdrop-filter:blur(${v.blur}px)}`);
      return rules.join("");
    }
    function applySkinCss(v) {
      if (!skinStyleElement) {
        skinStyleElement = document.createElement("style");
        skinStyleElement.id = "veang-workbench-skin";
        document.head.appendChild(skinStyleElement);
      }
      skinStyleElement.textContent = buildSkinCss(v);
    }
    let skinSaveTimer = null;
    function persistSkin() {
      saveJson(SKIN_KEY, skinSettings);
      if (skinSaveTimer) clearTimeout(skinSaveTimer);
      skinSaveTimer = setTimeout(() => {
        skinSaveTimer = null;
        fetch(`${API}?op=skin-save`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(skinSettings) }).catch(() => {});
      }, 400);
    }
    function commitSkin(partial) {
      skinSettings = normalizeSkin(Object.assign({}, skinSettings, partial));
      applySkinCss(skinSettings);
      persistSkin();
      bus.dispatchEvent(new CustomEvent("skin"));
    }
    applySkinCss(skinSettings);
    fetch(`${API}?op=skin-load`).then((response) => response.json()).then((value) => {
      if (!value || !value.ok) return;
      const remote = normalizeSkin(value.settings);
      if (JSON.stringify(remote) !== JSON.stringify(skinSettings)) {
        skinSettings = remote;
        applySkinCss(skinSettings);
        saveJson(SKIN_KEY, remote);
        bus.dispatchEvent(new CustomEvent("skin"));
      }
    }).catch(() => {});
    function storageKey(root, name) { return `dsh.workspace.${name}:${root}`; }
    function loadJson(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
    }
    function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
    function contextMap(root) {
      const rows = loadJson(storageKey(root, "contexts"), []);
      return new Map(Array.isArray(rows) ? rows.filter((row) => row?.path && row.enabled !== false).map((row) => [row.path, true]) : []);
    }
    function writeContexts(root, map) {
      saveJson(storageKey(root, "contexts"), [...map.keys()].map((path) => ({ path, enabled: true })));
      bus.dispatchEvent(new CustomEvent("contexts", { detail: { root } }));
    }
    async function addContext(root, file) {
      const kind = fileKind(file);
      const currentSnapshot = snapshots.get(root)?.get(file);
      if (!currentSnapshot) {
        if (kind === "text" || kind === "markdown") {
          const value = await getJson(apiUrl("read", root, file));
          updateSnapshot(root, file, { kind, content: value.content, mtimeMs: value.mtimeMs });
        } else {
          updateSnapshot(root, file, { kind });
        }
      }
      const map = contextMap(root);
      if (!map.has(file)) {
        map.set(file, true);
        writeContexts(root, map);
      }
    }
    function setSingleContext(root, file) { writeContexts(root, new Map([[file, true]])); }
    function removeContext(root, file) { const map = contextMap(root); map.delete(file); writeContexts(root, map); }
    function updateSnapshot(root, file, snapshot) {
      let files = snapshots.get(root);
      if (!files) snapshots.set(root, files = new Map());
      files.set(file, snapshot);
    }
    function useBus(name) {
      const [version, setVersion] = React.useState(0);
      React.useEffect(() => {
        const listener = () => setVersion((value) => value + 1);
        bus.addEventListener(name, listener);
        return () => bus.removeEventListener(name, listener);
      }, [name]);
      return version;
    }
    function currentWorkspace(useSessions, useWorkspaces) {
      const sessionState = useSessions((state) => state);
      const workspaces = useWorkspaces((state) => state.items);
      const session = sessionState.current ? sessionState.byId[sessionState.current] : undefined;
      // 无当前会话（首页 / 新对话）→ 不返回工作区，工作台隐藏；不再回退到 workspaces[0]。
      const cwd = session?.cwd ? String(session.cwd).replace(/\\/g, "/").replace(/\/+$/, "") : "";
      const workspace = sessionState.current
        ? workspaces.find((item) => item.sessionIds.includes(sessionState.current))
          ?? workspaces.find((item) => {
            const p = String(item?.path ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
            return p && (cwd === p || cwd.startsWith(`${p}/`));
          })
        : undefined;
      return { sessionState, workspaces, session, workspace };
    }
    // 会话状态 → 光点四态（与 worktable 同款判定：待决 > 完成 > 工作中 > 未绑定）。
    function sessionStatusOf(sessionState) {
      if (!sessionState?.current) return "idle";
      const session = sessionState.byId?.[sessionState.current];
      return session?.pendingInteraction != null ? "need" : session?.completed === true ? "done" : "busy";
    }
    const SESSION_STATUS_TIP = { busy: "对话工作中", need: "等待你决定", done: "对话已完成", idle: "未绑定对话" };

    function fullPath(root, file = "") { return file ? `${root.replace(/\/$/, "")}/${file}` : root; }
    function workspaceFileForHostPath(items, value) {
      if (typeof value !== "string" || !value) return null;
      const full = value.replace(/\\/g, "/").replace(/\/+$/, "");
      const windows = /^[a-z]:\//i.test(full);
      const comparable = windows ? full.toLowerCase() : full;
      const candidates = (Array.isArray(items) ? items : []).map((item) => {
        const root = String(item?.path ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
        return { item, root, comparable: windows ? root.toLowerCase() : root };
      }).filter(({ root }) => root).sort((a, b) => b.root.length - a.root.length);
      const match = candidates.find((entry) => comparable.startsWith(`${entry.comparable}/`));
      return match ? { root: match.item.path, path: full.slice(match.root.length + 1) } : null;
    }
    function copyText(value) {
      if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
      window.prompt("复制路径：", value);
      return Promise.resolve();
    }
    function parentPath(value) { const parts = value.split("/"); parts.pop(); return parts.join("/"); }
    function pathIsWithin(value, prefix) { return value === prefix || value.startsWith(`${prefix}/`); }
    function remapPath(value, source, destination) { return pathIsWithin(value, source) ? destination + value.slice(source.length) : value; }
    function humanFileError(error) {
      const message = error instanceof Error ? error.message : String(error);
      return ({
        "destination-exists": "目标位置已有同名文件，请先重命名或换一个文件夹。",
        "cannot-transfer-into-itself": "不能把文件夹移动或复制到它自己里面。",
        "destination-not-directory": "请选择一个文件夹作为目标位置。",
        "path-outside-workspace": "文件操作不能超出当前项目。",
        "cannot-transfer-workspace-root": "不能移动整个项目根目录。"
      })[message] ?? message;
    }
    async function transferWorkspaceEntry(root, source, destination, mode) {
      const value = await getJson(`${API}?op=transfer`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ root, source, destination, mode }) });
      if (mode === "move" && !value.unchanged) {
        const contexts = contextMap(root);
        if (contexts.size > 0) {
          const next = new Map();
          for (const [file, enabled] of contexts) next.set(remapPath(file, source, value.path), enabled);
          writeContexts(root, next);
        }
        const files = snapshots.get(root);
        if (files) {
          for (const [file, snapshot] of [...files]) {
            if (!pathIsWithin(file, source)) continue;
            files.delete(file); files.set(remapPath(file, source, value.path), snapshot);
          }
        }
        bus.dispatchEvent(new CustomEvent("file-moved", { detail: { root, source, destination: value.path } }));
      }
      bus.dispatchEvent(new CustomEvent("tree-refresh", { detail: { root } }));
      return value;
    }
    async function uploadExternalFiles(root, destination, files) {
      const imported = [];
      for (const file of files) {
        const params = new URLSearchParams({ op: "upload", root, destination, name: file.name, lastModified: String(file.lastModified || 0) });
        imported.push(await getJson(`${API}?${params}`, { method: "POST", headers: { "content-type": file.type || "application/octet-stream" }, body: file }));
      }
      bus.dispatchEvent(new CustomEvent("tree-refresh", { detail: { root } }));
      return imported;
    }
    function ContextMenu({ menu, onClose }) {
      React.useEffect(() => {
        if (!menu) return;
        const close = () => onClose();
        const keydown = (event) => { if (event.key === "Escape") onClose(); };
        window.addEventListener("pointerdown", close);
        window.addEventListener("keydown", keydown);
        window.addEventListener("blur", close);
        window.addEventListener("scroll", close, true);
        return () => {
          window.removeEventListener("pointerdown", close);
          window.removeEventListener("keydown", keydown);
          window.removeEventListener("blur", close);
          window.removeEventListener("scroll", close, true);
        };
      }, [menu, onClose]);
      if (!menu) return null;
      const x = Math.max(6, Math.min(menu.x, window.innerWidth - 226));
      const menuHeight = Math.min(window.innerHeight - 12, menu.items.reduce((height, item) => height + (item.separator ? 9 : 32), 12));
      const y = Math.max(6, Math.min(menu.y, window.innerHeight - menuHeight - 6));
      return h("div", { className: "dwu-contextMenu", role: "menu", style: { left: x, top: y }, onPointerDown: (event) => event.stopPropagation(), onContextMenu: (event) => event.preventDefault() },
        menu.items.map((item, index) => item.separator ? h("div", { key: `separator-${index}`, className: "dwu-menuSeparator" }) : h("button", {
          key: item.label, type: "button", role: "menuitem", className: "dwu-menuItem", "data-danger": item.danger || undefined,
          onClick: () => { onClose(); Promise.resolve().then(item.action).catch((error) => window.alert(error instanceof Error ? error.message : String(error))); }
        }, h("span", { className: "dwu-menuIcon" }, item.icon ?? ""), h("span", null, item.label)))
      );
    }

    function TreeRow({ root, entry, depth, showHidden, active, selected, clipboard, onSelect, onOpen, openPath, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, refreshKey }) {
      const [expanded, setExpanded] = React.useState(false);
      const [children, setChildren] = React.useState(null);
      const [error, setError] = React.useState("");
      React.useEffect(() => { if (entry.directory && expanded) setChildren(null); }, [refreshKey, root]);
      React.useEffect(() => {
        if (!expanded || !entry.directory || children !== null) return;
        let live = true;
        getJson(apiUrl("list", root, entry.path)).then((value) => { if (live) setChildren(value.entries); }, (err) => { if (live) setError(err.message); });
        return () => { live = false; };
      }, [expanded, root, entry.path, entry.directory, children]);
      const click = () => {
        onSelect(entry);
        if (entry.directory) setExpanded((value) => !value);
        else onOpen(entry.path, "preview");
      };
      const filtered = (children ?? []).filter((child) => showHidden || (!child.hidden && !forcedHidden.has(child.name)));
      return h(React.Fragment, null,
        h("div", {
          className: "dwu-treeRow", "data-active": !entry.directory && active === entry.path || undefined, "data-selected": selected === entry.path || undefined,
          "data-cut": clipboard?.root === root && clipboard.mode === "cut" && clipboard.path === entry.path || undefined,
          "data-drop": entry.directory && dropTarget === entry.path || undefined,
          draggable: true, tabIndex: 0, onPointerDown: (event) => event.currentTarget.focus(), onClick: click, onDoubleClick: entry.directory ? undefined : () => onOpen(entry.path, "pinned"), onFocus: () => onSelect(entry), title: entry.directory ? `${entry.path}\n单击展开；可拖拽移动；⌘C/⌘X/⌘V 复制、剪切、粘贴` : `${entry.path}\n单击预览，双击固定；可拖拽移动；⌘C/⌘X/⌘V 复制、剪切、粘贴`,
          onDragStart: (event) => onEntryDragStart(event, entry), onDragEnd: onEntryDragEnd,
          onDragEnter: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); onDropEntry(event, entry.path, "enter"); } : undefined,
          onDragOver: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); event.dataTransfer.dropEffect = Array.from(event.dataTransfer.types).includes("Files") ? "copy" : "move"; } : undefined,
          onDragLeave: entry.directory ? (event) => { if (!event.currentTarget.contains(event.relatedTarget)) onDropEntry(event, entry.path, "leave"); } : undefined,
          onDrop: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); onDropEntry(event, entry.path, "drop"); } : undefined,
          onContextMenu: (event) => { event.preventDefault(); event.stopPropagation(); onEntryMenu(event, entry, { expanded, toggle: () => setExpanded((value) => !value) }); }
        },
          depth > 0 && h("span", { className: "dwu-indentGuides", "aria-hidden": true }, Array.from({ length: depth }, (_, index) => h("span", { key: index, className: "dwu-indentGuide" }))),
          h("span", { className: "dwu-chevron" }, entry.directory ? (expanded ? "▾" : "▸") : ""),
          h("span", { className: "dwu-fileGlyph" }, h(FileIcon, { file: entry.path, directory: entry.directory, expanded })),
          h("span", { className: "dwu-treeName" }, entry.name),
          !entry.directory && h("button", { className: "dwu-iconButton", style: { width: 22, height: 22, marginLeft: "auto" }, title: "用系统默认应用打开", onClick: (event) => { event.stopPropagation(); openPath(`${root}/${entry.path}`); } }, "↗")
        ),
        expanded && entry.directory && (children === null ? h("div", { className: "dwu-treeLoading", style: { paddingLeft: 31 + depth * 18 } }, error || "加载中…") : filtered.map((child) => h(TreeRow, { key: child.path, root, entry: child, depth: depth + 1, showHidden, active, selected, clipboard, onSelect, onOpen, openPath, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, refreshKey })))
      );
    }

    function FileTree({ root, showHidden, active, selected, clipboard, onSelect, onOpen, openPath, refreshKey, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, busy }) {
      const [entries, setEntries] = React.useState(null);
      const [error, setError] = React.useState("");
      React.useEffect(() => {
        let live = true;
        setEntries(null); setError("");
        getJson(apiUrl("list", root)).then((value) => { if (live) setEntries(value.entries); }, (err) => { if (live) setError(err.message); });
        return () => { live = false; };
      }, [root, refreshKey]);
      if (error) return h("div", { className: "dwu-emptySide" }, `目录读取失败：${error}`);
      if (entries === null) return h("div", { className: "dwu-treeLoading" }, "正在读取项目…");
      const filtered = entries.filter((entry) => showHidden || (!entry.hidden && !forcedHidden.has(entry.name)));
      return h("div", {
        className: "dwu-tree", "data-drop-root": dropTarget === "" || undefined, "data-busy": busy || undefined, tabIndex: 0,
        onDragEnter: (event) => { if (!event.target.closest?.(".dwu-treeRow")) onDropEntry(event, "", "enter"); },
        onDragOver: (event) => { if (event.target.closest?.(".dwu-treeRow")) return; event.preventDefault(); event.dataTransfer.dropEffect = Array.from(event.dataTransfer.types).includes("Files") ? "copy" : "move"; },
        onDragLeave: (event) => { if (event.target === event.currentTarget && !event.currentTarget.contains(event.relatedTarget)) onDropEntry(event, "", "leave"); },
        onDrop: (event) => { if (event.target.closest?.(".dwu-treeRow")) return; event.preventDefault(); onDropEntry(event, "", "drop"); }
      }, filtered.map((entry) => h(TreeRow, { key: entry.path, root, entry, depth: 0, showHidden, active, selected, clipboard, onSelect, onOpen, openPath, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, refreshKey })));
    }

    function TreeSearchResults({ root, query, onOpen, openPath }) {
      const [rows, setRows] = React.useState(null);
      const [error, setError] = React.useState("");
      const [truncated, setTruncated] = React.useState(false);
      React.useEffect(() => {
        if (!query) { setRows(null); setError(""); setTruncated(false); return; }
        let live = true;
        setRows(null); setError(""); setTruncated(false);
        const params = new URLSearchParams({ op: "search", root, q: query });
        getJson(`${API}?${params}`).then((value) => {
          if (!live) return;
          setRows(Array.isArray(value.entries) ? value.entries : []);
          setTruncated(!!value.truncated);
        }, (err) => { if (live) setError(err?.message ?? String(err)); });
        return () => { live = false; };
      }, [root, query]);
      if (!query) return null;
      if (error) return h("div", { className: "dwu-emptySide" }, `搜索失败：${error}`);
      if (rows === null) return h("div", { className: "dwu-treeLoading" }, "正在搜索…");
      if (rows.length === 0) return h("div", { className: "dwu-emptySide" }, `没有匹配“${query}”的文件或文件夹。`);
      return h("div", { className: "dwu-tree" },
        truncated && h("div", { className: "dwu-searchCap" }, "结果过多，仅显示前 200 条，请换更具体的关键词。"),
        rows.map((row) => h("div", { key: row.path, className: "dwu-searchRow", title: row.path, onClick: () => (row.directory ? openPath(`${root}/${row.path}`) : onOpen(row.path)) },
          h("span", { className: "dwu-searchIcon" }, row.directory ? "▤" : "◦"),
          h("span", { className: "dwu-searchMeta" },
            h("span", { className: "dwu-searchName" }, row.name),
            h("span", { className: "dwu-searchDir" }, parentPath(row.path))
          )
        ))
      );
    }

    // 图标模式：当前目录的平铺网格 + 面包屑导航（工作台底部的文件浏览）。
    function DirTiles({ root, initialCwd = "", refreshKey, active, clipboard, onSelect, onOpen, openPath, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, busy }) {
      const [cwd, setCwd] = React.useState(initialCwd);
      const [entries, setEntries] = React.useState(null);
      const [error, setError] = React.useState("");
      React.useEffect(() => { setCwd(initialCwd); setEntries(null); setError(""); }, [root, initialCwd]);
      React.useEffect(() => {
        let live = true;
        setEntries(null); setError("");
        getJson(apiUrl("list", root, cwd)).then((value) => { if (live) setEntries(value.entries); }, (err) => { if (live) setError(err.message); });
        return () => { live = false; };
      }, [root, cwd, refreshKey]);
      const crumbs = cwd ? cwd.split("/") : [];
      const filtered = (entries ?? []).filter((entry) => !entry.hidden && !forcedHidden.has(entry.name));
      const sorted = [...filtered].sort((a, b) => (b.directory - a.directory) || a.name.localeCompare(b.name, "zh-Hans-CN"));
      return h("div", {
        className: "dwu-tilesRoot", "data-drop-root": (cwd === "" && dropTarget === "") || dropTarget === cwd || undefined, "data-busy": busy || undefined, tabIndex: 0,
        onDragOver: (event) => { event.preventDefault(); event.dataTransfer.dropEffect = Array.from(event.dataTransfer.types).includes("Files") ? "copy" : "move"; },
        onDrop: (event) => { event.preventDefault(); onDropEntry(event, cwd, "drop"); }
      },
        h("div", { className: "dwu-crumbs" },
          h("button", { type: "button", className: "dwu-crumb", title: "上一级目录", disabled: cwd === "" || undefined, onClick: () => setCwd(parentPath(cwd)) }, "↑"),
          h("button", { type: "button", className: "dwu-crumb", title: "返回项目根目录", onClick: () => setCwd("") }, "项目根目录"),
          crumbs.map((part, index) => h(React.Fragment, { key: index },
            h("span", { className: "dwu-crumbSep" }, "›"),
            h("button", { type: "button", className: "dwu-crumb", "data-last": index === crumbs.length - 1 || undefined, title: `返回 ${part}`, onClick: () => setCwd(crumbs.slice(0, index + 1).join("/")) }, part)
          ))
        ),
        error ? h("div", { className: "dwu-emptySide" }, `目录读取失败：${error}`)
          : entries === null ? h("div", { className: "dwu-treeLoading" }, "正在读取目录…")
          : sorted.length === 0 ? h("div", { className: "dwu-emptySide" }, "这个文件夹是空的。")
          : h("div", { className: "dwu-tiles" }, sorted.map((entry) => h("div", {
            key: entry.path, className: "dwu-tile",
            "data-active": !entry.directory && active === entry.path || undefined,
            "data-selected": clipboard?.root === root && clipboard.mode === "cut" && clipboard.path === entry.path || undefined,
            "data-drop": entry.directory && dropTarget === entry.path || undefined,
            draggable: true, tabIndex: 0,
            title: `${entry.path}${entry.directory ? "（双击进入；可拖拽移动）" : "（单击预览，双击固定）"}`,
            onClick: () => { onSelect(entry); if (!entry.directory) onOpen(entry.path, "preview"); },
            onDoubleClick: entry.directory ? () => setCwd(entry.path) : () => onOpen(entry.path, "pinned"),
            onDragStart: (event) => onEntryDragStart(event, entry), onDragEnd: onEntryDragEnd,
            onDragEnter: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); onDropEntry(event, entry.path, "enter"); } : undefined,
            onDragOver: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); } : undefined,
            onDragLeave: entry.directory ? (event) => { if (!event.currentTarget.contains(event.relatedTarget)) onDropEntry(event, entry.path, "leave"); } : undefined,
            onDrop: entry.directory ? (event) => { event.preventDefault(); event.stopPropagation(); onDropEntry(event, entry.path, "drop"); } : undefined,
            onContextMenu: (event) => { event.preventDefault(); event.stopPropagation(); onEntryMenu(event, entry, { expanded: false, toggle: () => entry.directory && setCwd(entry.path) }); }
          },
            entry.directory
              ? h("span", { className: "dwu-tileIcon", "aria-hidden": true }, "📁")
              : isVisualFile(entry.name)
                ? h("img", { className: "dwu-tileThumb", src: assetUrl(root, entry.path), alt: entry.name, loading: "lazy" })
                : h("span", { className: "dwu-tileIcon", "aria-hidden": true }, h(FileIcon, { file: entry.path, directory: false })),
            h("span", { className: "dwu-tileName" }, entry.name)
          )))
      );
    }

    const treePrefs = {
      collapsed: loadJson("dsh.workspace.treeCollapsed", false),
      showHidden: loadJson("dsh.workspace.showHidden", false),
      width: Math.min(480, Math.max(180, loadJson("dsh.workspace.treeWidth", 232))),
      height: Math.min(860, Math.max(140, loadJson("dsh.workspace.treeHeight", 300))),
      mode: loadJson("dsh.workspace.treeMode", "list") === "icon" ? "icon" : "list",
      refreshKey: 0
    };
    const treePrefsListeners = new Set();
    function emitTreePrefs() { for (const listener of treePrefsListeners) listener(); }
    function subscribeTreePrefs(listener) { treePrefsListeners.add(listener); return () => treePrefsListeners.delete(listener); }
    function toggleTreeCollapsed() { treePrefs.collapsed = !treePrefs.collapsed; saveJson("dsh.workspace.treeCollapsed", treePrefs.collapsed); emitTreePrefs(); }
    // showHidden 不再提供 UI 开关：系统/隐藏目录一律不展示（需求：去掉“隐藏系统目录”按钮）。
    // treePrefs.showHidden 保留读取以兼容旧存储值，但文件树现在强制按隐藏目录过滤。
    function setTreeWidth(px) { treePrefs.width = Math.min(480, Math.max(180, Math.round(px))); saveJson("dsh.workspace.treeWidth", treePrefs.width); emitTreePrefs(); }
    function setTreeHeight(px) { treePrefs.height = Math.min(860, Math.max(140, Math.round(px))); saveJson("dsh.workspace.treeHeight", treePrefs.height); emitTreePrefs(); }
    function setTreeMode(mode) { treePrefs.mode = mode === "icon" ? "icon" : "list"; saveJson("dsh.workspace.treeMode", treePrefs.mode); persistWorkspaceView(); emitTreePrefs(); }
    function bumpTreeRefresh() { treePrefs.refreshKey += 1; emitTreePrefs(); }
    // ── 工作台（zone）注册表：素材 / 代码 / 关系视图 / 八字玄学 ──────────────
    const ZONES = [
      { id: "assets", label: "素材工作台", icon: "🎨", kind: "files", binding: "session" },
      { id: "code", label: "代码工作台", icon: "</>", kind: "files", badgeColor: "#34d399", binding: "session" },
      { id: "graph", label: "游戏关系视图", icon: "🕸️", kind: "graph", binding: "workspace" },
      { id: "bazi", label: "八字玄学", icon: "☯", kind: "bazi", badgeColor: "#a78bfa", binding: "session" }
    ];
    function zoneById(id) { return ZONES.find((z) => z.id === id) ?? ZONES[0]; }
    function isFilesZone(id) { return zoneById(id).kind === "files"; }
    function boundZoneIconOf(sessionId) {
      const bz = boundZoneOf(sessionId);
      return bz ? zoneById(bz).icon : "·";
    }
    const zonePrefs = { zone: loadJson("dsh.workspace.zone", "code") };
    const zonePrefsListeners = new Set();
    function emitZonePrefs() { for (const listener of zonePrefsListeners) listener(); }
    function subscribeZonePrefs(listener) { zonePrefsListeners.add(listener); return () => zonePrefsListeners.delete(listener); }
    function setWorkspaceZone(zone) { zonePrefs.zone = zone; saveJson("dsh.workspace.zone", zone); persistWorkspaceView(); emitZonePrefs(); }
    function useZonePrefs() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeZonePrefs(() => setVersion((value) => value + 1)), []);
      return zonePrefs;
    }
    function useTreePrefs() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeTreePrefs(() => setVersion((value) => value + 1)), []);
      return treePrefs;
    }
    // 方案 1：zone（素材/代码）是「工作区属性」，每个 zone 可绑定一条对话（见下方 zoneBindings）。
    let activeWorkspacePath = "";
    function persistWorkspaceView() {
      if (!activeWorkspacePath) return;
      saveJson(storageKey(activeWorkspacePath, "view"), { zone: zonePrefs.zone, treeMode: treePrefs.mode });
    }
    function applyWorkspacePrefs(path) {
      if (!path || path === activeWorkspacePath) return;
      activeWorkspacePath = path;
      const saved = loadJson(storageKey(path, "view"), null);
      zonePrefs.zone = ZONES.some((z) => z.id === saved?.zone) ? saved.zone : "code";
      treePrefs.mode = saved?.treeMode === "icon" ? "icon" : "list";
      emitZonePrefs();
      emitTreePrefs();
    }
    // zone ↔ 对话绑定（显式，全局）：每个工作台各绑一条会话，切 zone 自动切对话。
    const zoneBindings = loadJson("dsh.workspace.zoneBindings.v2", { assets: null, code: null, graph: null, bazi: null });
    const bindingsListeners = new Set();
    function emitBindings() { for (const listener of bindingsListeners) listener(); }
    function subscribeBindings(listener) { bindingsListeners.add(listener); return () => bindingsListeners.delete(listener); }
    function useBindings() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeBindings(() => setVersion((value) => value + 1)), []);
      return zoneBindings;
    }
    function getBinding(zone) { return zoneBindings[zone] ?? null; }
    function setBinding(zone, sessionId) {
      // 一条会话同时只属于一个 zone：改绑到当前 zone 时，先从其它所有 zone 解绑。
      if (sessionId) {
        for (const z of ZONES) {
          if (z.id !== zone && zoneBindings[z.id] === sessionId) delete zoneBindings[z.id];
        }
        zoneBindings[zone] = sessionId;
      } else {
        delete zoneBindings[zone];
      }
      saveJson("dsh.workspace.zoneBindings.v2", zoneBindings);
      emitBindings();
    }
    function boundZoneOf(sessionId) {
      if (!sessionId) return null;
      for (const z of ZONES) {
        if (getBinding(z.id) === sessionId) return z.id;
      }
      return null;
    }
    // ── 0.2.0 overlay 形态：服务桥 + 几何 + 对话右挤 ──────────────────────────
    // 宿主 services 在 apply() 里订阅后写入模块级 store；组件不走 props.useSessions
    // 宿主包装（worktable 实测部分版本会触发 useSyncExternalStore 崩溃）。
    const hostSessions = { snapshot: { current: undefined, byId: {} }, listeners: new Set() };
    const hostWorkspaces = { snapshot: { items: [], archivedSessionIds: [] }, listeners: new Set() };
    function emitService(store) { for (const listener of store.listeners) listener(); }
    function createServiceHook(store) {
      return function useService(selector) {
        const subscribe = React.useCallback((callback) => { store.listeners.add(callback); return () => store.listeners.delete(callback); }, []);
        const state = React.useSyncExternalStore(subscribe, () => store.snapshot, () => store.snapshot);
        return typeof selector === "function" ? selector(state) : state;
      };
    }
    const useHostSessions = createServiceHook(hostSessions);
    const useHostWorkspaces = createServiceHook(hostWorkspaces);
    // ── 侧栏会话绑定标识：给绑定了工作台的会话行加彩色圆点 ──────────────────
    const SESSION_BADGE_STYLE_ID = "veang-workbench-ui/session-badges";
    function ensureSessionBadgeStyles() {
      if (document.getElementById(SESSION_BADGE_STYLE_ID) !== null) return;
      const tag = document.createElement("style");
      tag.id = SESSION_BADGE_STYLE_ID;
      const rules = ['[role="treeitem"][data-veang-bound]::after{flex:none;margin-left:6px;font-size:12px;line-height:1;opacity:.95}'];
      for (const z of ZONES) {
        const color = z.badgeColor ? `;font-weight:700;color:${z.badgeColor}` : "";
        rules.push(`[role="treeitem"][data-veang-bound="${z.id}"]::after{content:"${z.icon}"${color}}`);
      }
      tag.textContent = rules.join("");
      document.head.appendChild(tag);
    }
    function syncSessionBadges() {
      ensureSessionBadgeStyles();
      const bound = [];
      for (const z of ZONES) {
        const id = getBinding(z.id);
        if (!id) continue;
        const s = hostSessions.snapshot.byId[id];
        const title = s?.displayTitle ?? s?.title ?? id;
        if (title) bound.push({ zone: z.id, title });
      }
      const rows = document.querySelectorAll('[role="treeitem"]');
      for (const row of rows) {
        row.removeAttribute("data-veang-bound");
        row.removeAttribute("title");
        if (bound.length === 0) continue;
        for (const { zone, title } of bound) {
          let hit = false;
          for (const child of Array.from(row.children)) {
            if (child.textContent.trim() === title) { hit = true; break; }
          }
          if (hit) {
            row.setAttribute("data-veang-bound", zone);
            row.setAttribute("title", `已绑定${zoneById(zone).label}`);
            break;
          }
        }
      }
    }
    // 整个工作台 overlay 的可见性与总宽（拖右缘分隔条调）。
    const overlayPrefs = { visible: loadJson("dsh.workspace.overlayVisible", true), width: Math.min(1400, Math.max(420, loadJson("dsh.workspace.overlayWidth", 760))), manualOpen: false };
    const overlayPrefsListeners = new Set();
    function emitOverlayPrefs() { for (const listener of overlayPrefsListeners) listener(); }
    function subscribeOverlayPrefs(listener) { overlayPrefsListeners.add(listener); return () => overlayPrefsListeners.delete(listener); }
    function toggleOverlayVisible() { overlayPrefs.visible = !overlayPrefs.visible; if (!overlayPrefs.visible) overlayPrefs.manualOpen = false; saveJson("dsh.workspace.overlayVisible", overlayPrefs.visible); emitOverlayPrefs(); }
    function setOverlayWidth(px) { overlayPrefs.width = Math.min(1600, Math.max(420, Math.round(px))); saveJson("dsh.workspace.overlayWidth", overlayPrefs.width); emitOverlayPrefs(); }
    function setOverlayManualOpen(open) { const next = !!open; if (overlayPrefs.manualOpen === next) return; overlayPrefs.manualOpen = next; emitOverlayPrefs(); }
    function useOverlayPrefs() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeOverlayPrefs(() => setVersion((value) => value + 1)), []);
      return overlayPrefs;
    }
    // ── 游戏关系视图状态缓存（切换工作台不丢）────────────────────────────
    const graphCache = { selectedRoot: "", data: null, view: { x: 16, y: 16, scale: 1 }, hiddenLabels: {}, engine: "unity" };
    const graphCacheListeners = new Set();
    function emitGraphCache() { for (const listener of graphCacheListeners) listener(); }
    function subscribeGraphCache(listener) { graphCacheListeners.add(listener); return () => graphCacheListeners.delete(listener); }
    function setGraphCache(patch) { Object.assign(graphCache, patch); emitGraphCache(); }
    function useGraphCache() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeGraphCache(() => setVersion((value) => value + 1)), []);
      return graphCache;
    }
    // ── SplitSpec 声明式多栏协议（worktable PRD §12 骨架）─────────────────────────
    // 框架管几何（对话右挤 + 拖宽 + 持久化），领域插件只声明 panes。
    // spec: { id, title, panes: [{ id, title, width:{default,min,max}, content:{kind:'iframe',url}|{kind:'component'} }] }
    const splitState = { spec: null, widths: loadJson("dsh.veang.split.v1", {}) };
    const splitListeners = new Set();
    function emitSplit() { for (const listener of splitListeners) listener(); }
    function subscribeSplit(listener) { splitListeners.add(listener); return () => splitListeners.delete(listener); }
    function useSplitState() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeSplit(() => setVersion((value) => value + 1)), []);
      return splitState;
    }
    function openSplit(spec) {
      if (!spec || !Array.isArray(spec.panes) || spec.panes.length === 0) return;
      splitState.spec = spec;
      if (overlayPrefs.visible) toggleOverlayVisible(); // 打开领域分栏时收起内置工作台，避免双重挤压
      emitSplit();
    }
    function closeSplit() { splitState.spec = null; emitSplit(); }
    function setSplitWidths(projectId, patch) {
      const project = splitState.widths[projectId] ?? (splitState.widths[projectId] = {});
      Object.assign(project, patch);
      saveJson("dsh.veang.split.v1", splitState.widths);
      emitSplit();
    }
    function splitPaneWidth(spec, index) {
      const pane = spec.panes[index];
      const saved = splitState.widths[spec.id]?.[pane.id];
      const width = typeof saved === "number" ? saved : pane.width?.default ?? 280;
      return Math.min(pane.width?.max ?? 900, Math.max(pane.width?.min ?? 200, Math.round(width)));
    }
    // 从挂载点向上找官方侧栏容器（worktable 同款启发式）。
    function findSidebarElement(from) {
      let el = from;
      while (el && el !== document.body) {
        if (typeof el.className === "string" && /SidebarRoot|sidebar/i.test(el.className)) return el;
        if (el.tagName === "ASIDE" || el.tagName === "NAV") return el;
        el = el.parentElement;
      }
      return null;
    }
    // 官方对话根：[data-phase] 元素，children[0]=会话头、children[1]=内容区。
    function findConversationRoot() {
      const candidates = Array.from(document.querySelectorAll("[data-phase]"));
      const ok = (el) => el.tagName !== "TEXTAREA" && el.tagName !== "INPUT" && el.children.length >= 2;
      // 官方会话根始终渲染，但 phase 区分：active=活动会话、settling=切换过渡、hero=首页。
      // 首页（hero）不应有工作台 → 只在 active / settling 时返回根，否则返回 null。
      return candidates.find((el) => ok(el) && el.dataset.phase === "active")
        ?? candidates.find((el) => ok(el) && el.dataset.phase === "settling")
        ?? candidates.find((el) => ok(el) && el.dataset.phase === "hero")
        ?? null;
    }
    // 找到官方会话所在的「中心列」：向上走到某元素的父级是 grid 布局为止。
    // 对话头（标题/对话/轨迹 TAB）和内容区都在这一列里，统一右挤才能把整根对话推到右侧。
    function findConversationColumn(from) {
      let el = from;
      while (el && el.parentElement) {
        if (getComputedStyle(el.parentElement).display === "grid") return el;
        el = el.parentElement;
      }
      return null;
    }
    // 整根中心列 margin-left = 工作台宽度 → 对话（含头行）完整移到右侧，官方原版渲染不动。
    const squeeze = { column: null, savedMarginLeft: "", savedMarginTop: "" };
    function applyConversationSqueeze(px) {
      const root = findConversationRoot();
      if (!root) return null;
      const column = findConversationColumn(root) || root;
      if (squeeze.column !== column) {
        releaseConversationSqueeze();
        squeeze.column = column;
        squeeze.savedMarginLeft = column.style.marginLeft;
        squeeze.savedMarginTop = column.style.marginTop;
      }
      column.style.marginLeft = `${px}px`;
      const colRect = column.getBoundingClientRect();
      return { left: colRect.left - px, top: colRect.top, bottom: colRect.bottom };
    }
    function releaseConversationSqueeze() {
      if (squeeze.column) {
        squeeze.column.style.marginLeft = squeeze.savedMarginLeft;
        squeeze.column.style.marginTop = squeeze.savedMarginTop;
        squeeze.column = null;
      }
    }
    const terminalState = { root: null, open: false };
    const terminalListeners = new Set();
    function emitTerminalState() { for (const listener of terminalListeners) listener(); }
    function subscribeTerminalState(listener) { terminalListeners.add(listener); return () => terminalListeners.delete(listener); }
    function setWorkbenchTerminal(root, value) {
      terminalState.root = root;
      terminalState.open = value;
      if (root) saveJson(storageKey(root, "terminalOpen"), value);
      emitTerminalState();
    }
    function toggleWorkbenchTerminal(root) {
      setWorkbenchTerminal(root, !(terminalState.root === root && terminalState.open));
    }
    function useTerminalState() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeTerminalState(() => setVersion((value) => value + 1)), []);
      return terminalState;
    }
    function WorkbenchCollapseButton({ toggleWorkbench }) {
      return h("button", { type: "button", className: "dwu-workbenchCollapse", onClick: () => toggleWorkbench(), title: "折叠文件工作区（⌘J）", "aria-label": "折叠文件工作区" },
        h("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
          h("rect", { x: 3, y: 3, width: 18, height: 18, rx: 4 }),
          h("line", { x1: 16, y1: 3, x2: 16, y2: 21 })
        )
      );
    }
    // 0.2.0：分区 TAB 已移到官方侧栏底部（sidebar.footer.action 座位，ZoneTabButtons）。
    // 工作台顶部只剩终端 + 游戏引擎；目录名与路径已下移到文件目录面板的顶栏。
    function WorkspaceHeader({ useSessions, useWorkspaces }) {
      const { workspace, sessionState, workspaces } = currentWorkspace(useSessions, useWorkspaces);
      const archivedIds = useWorkspaces((state) => state.archivedSessionIds ?? []);
      const root = workspace?.path;
      const terminalState = useTerminalState();
      const zoneState = useZonePrefs();
      useBindings();
      const [pickerOpen, setPickerOpen] = React.useState(false);
      const [engine, setEngine] = React.useState("html");
      React.useEffect(() => { if (root) setEngine(loadJson(storageKey(root, "engine"), "html")); }, [root]);
      // 文件类工作台（素材/代码）需要工作区；关系视图/八字等即使无工作区也保留头部（标题 + 绑定入口）。
      if (!root && isFilesZone(zoneState.zone)) return null;
      const sessionStatus = sessionStatusOf(sessionState);
      const statusTip = SESSION_STATUS_TIP[sessionStatus];
      const zone = zoneState.zone;
      const zoneDef = zoneById(zone);
      const zoneIcon = zoneDef.icon;
      const boundId = getBinding(zone);
      const boundSession = boundId ? sessionState.byId[boundId] : undefined;
      const boundTitle = boundSession?.title ?? boundSession?.displayTitle ?? boundId ?? "未绑定对话";
      const archivedSet = new Set(archivedIds);
      const allSessions = Object.entries(sessionState.byId ?? {}).map(([id, s]) => {
        const ws = workspaces.find((w) => (w.sessionIds ?? []).includes(id));
        return { id, title: s?.title ?? s?.displayTitle ?? id, wsPath: ws?.path ?? "", archived: archivedSet.has(id) };
      });
      // 兜底：个别归档会话若不在 session 列表里，也补进来（只能显示 id）。
      for (const id of archivedIds) {
        if (!allSessions.some((s) => s.id === id)) allSessions.push({ id, title: id, wsPath: "", archived: true });
      }
      const sessionGroups = (() => {
        const byPath = new Map();
        const archived = [];
        const orphans = [];
        for (const s of allSessions) {
          if (s.archived) { archived.push(s); continue; }
          if (!s.wsPath) { orphans.push(s); continue; }
          if (!byPath.has(s.wsPath)) byPath.set(s.wsPath, []);
          byPath.get(s.wsPath).push(s);
        }
        for (const list of byPath.values()) list.sort((a, b) => a.title.localeCompare(b.title));
        archived.sort((a, b) => a.title.localeCompare(b.title));
        orphans.sort((a, b) => a.title.localeCompare(b.title));
        const paths = [...byPath.keys()];
        paths.sort((a, b) => { const ac = a === root, bc = b === root; if (ac !== bc) return ac ? -1 : 1; return a.localeCompare(b); });
        const groups = paths.map((p) => ({ label: p === root ? "当前工作区" : p, sessions: byPath.get(p) }));
        if (archived.length) groups.push({ label: "归档", sessions: archived });
        if (orphans.length) groups.push({ label: "未关联工作区", sessions: orphans });
        return groups;
      })();
      return h("div", { className: "dwu-workHead dwu-overlayHead" },
        h("span", { className: "dwu-workTitle" }, zoneDef.label),
        h("span", { className: "dwu-statusDot", "data-status": sessionStatus, title: statusTip, "aria-label": statusTip }),
        zoneDef.binding !== "workspace" ? h("div", { className: "dwu-bindWrap" },
          h("button", { type: "button", className: "dwu-bindChip", "data-bound": boundId ? "true" : "false", title: "当前工作台绑定的对话（点击切换/绑定）", onClick: () => setPickerOpen((value) => !value) },
            h("span", { className: "dwu-bindChipZone", "aria-hidden": true }, zoneIcon),
            h("span", { className: "dwu-bindChipTitle" }, boundTitle),
            h("span", { className: "dwu-bindCaret", "aria-hidden": true }, "▾")
          ),
          pickerOpen && h("div", { className: "dwu-bindMenu" },
            allSessions.length === 0
              ? h("div", { className: "dwu-bindEmpty" }, "暂无会话")
              : sessionGroups.map((group) => h(React.Fragment, { key: group.label },
                  h("div", { className: "dwu-bindGroup", style: { padding: "6px 10px 2px", fontSize: "11px", fontWeight: 600, color: "var(--dsw-alias-label-caption)", letterSpacing: ".02em" } }, group.label),
                  group.sessions.map((s) => h("button", {
                    key: s.id, type: "button", className: "dwu-bindItem",
                    onClick: () => { setBinding(zone, s.id); if (!s.archived && serviceBridge.openSession) serviceBridge.openSession(s.id); setPickerOpen(false); }
                  },
                    h("span", { className: "dwu-bindZone", "aria-hidden": true }, boundZoneIconOf(s.id)),
                    h("span", { className: "dwu-bindTitle" }, s.title),
                    boundId === s.id ? h("span", { className: "dwu-bindCheck", "aria-hidden": true }, "✓") : null
                  ))
                )),
            boundId ? h("button", { type: "button", className: "dwu-bindUnbind", onClick: () => { setBinding(zone, null); setPickerOpen(false); } }, "取消绑定") : null
          )
        ) : null,
        pickerOpen && h("div", { className: "dwu-bindBackdrop", onClick: () => setPickerOpen(false) }),
        isFilesZone(zone) ? h(React.Fragment, null,
          h("button", { type: "button", className: "dwu-terminalToggle", "data-active": (terminalState.root === root && terminalState.open) || undefined, "aria-label": "切换终端", "aria-pressed": terminalState.root === root && terminalState.open, title: "切换终端（⌘/Ctrl + `）", onClick: () => toggleWorkbenchTerminal(root) }, h("span", { className: "dwu-terminalGlyph", "aria-hidden": true }, ">_")),
          h("span", { className: "dwu-zoneEngineLabel" }, "游戏引擎："),
          h("select", {
            className: "dwu-zoneEngine", title: "该目录使用的技术/引擎", "aria-label": "该目录使用的技术/引擎",
            value: engine,
            onChange: (event) => { const next = event.target.value; setEngine(next); saveJson(storageKey(root, "engine"), next); bus.dispatchEvent(new CustomEvent("workspace-engine")); }
          }, ["html", "unity", "godot"].map((item) => h("option", { key: item, value: item }, item)))
        ) : null
      );
    }
    // 左下角分区 TAB（官方侧栏 footer 座位，worktable 同款视觉：分隔线 + 小标题 + 列表行/图标块）。
    // 宿主不传 wide 时自测侧栏宽度：窄于 200px 视为折叠窄栏，显示图标块。
    function ZoneTabButtons(props) {
      const zoneState = useZonePrefs();
      const overlayState = useOverlayPrefs();
      const hostRef = React.useRef(null);
      const [selfWide, setSelfWide] = React.useState(null);
      React.useEffect(() => {
        const el = hostRef.current;
        if (!el) return;
        const sidebar = findSidebarElement(el);
        if (!sidebar) return;
        const measure = () => setSelfWide(sidebar.getBoundingClientRect().width >= 200);
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(sidebar);
        return () => ro.disconnect();
      }, []);
      React.useEffect(() => {
        syncSessionBadges();
        const timer = window.setInterval(syncSessionBadges, 900);
        return () => window.clearInterval(timer);
      }, []);
      const wide = typeof props?.wide === "boolean" ? props.wide : selfWide !== false;
      const { workspace, sessionState } = currentWorkspace(useHostSessions, useHostWorkspaces);
      const archivedIds = useHostWorkspaces((state) => state.archivedSessionIds ?? []);
      const root = workspace?.path;
      const workbenchActive = Boolean(workspace?.path) && (boundZoneOf(sessionState.current) !== null || overlayState.manualOpen);
      const sessionStatus = sessionStatusOf(sessionState);
      const statusTip = SESSION_STATUS_TIP[sessionStatus];
      const activate = (zone) => {
        setOverlayManualOpen(true);
        if (!overlayState.visible) toggleOverlayVisible();
        setWorkspaceZone(zone);
        if (zoneById(zone).binding === "workspace") return; // 工作区型工作台不切/清会话
        const bound = getBinding(zone);
        if (bound && bound !== sessionState.current && !archivedIds.includes(bound) && serviceBridge.openSession) serviceBridge.openSession(bound);
        else if (!bound && serviceBridge.clearSession) serviceBridge.clearSession();
      };
      const zoneTabs = ZONES.map((z) => ({ zone: z.id, icon: z.icon, label: z.label }));
      const renderProjectSlot = typeof props?.renderSlot === "function" ? props.renderSlot : null;
      if (!wide) {
        return h("div", { ref: hostRef, className: "dwu-zoneRail" },
          h("div", { className: "dwu-zoneDivider" }),
          h("div", { className: "dwu-zoneRailBox" },
            zoneTabs.map((item) => h("button", {
              key: item.zone, type: "button", className: "dwu-zoneRailBtn", title: item.label, "aria-label": item.label,
              "data-active": (workbenchActive && zoneState.zone === item.zone) || undefined,
              onClick: () => activate(item.zone)
            }, h("span", { "aria-hidden": true }, item.icon)))
          )
        );
      }
      return h("div", { ref: hostRef, className: "dwu-zoneSection" },
        h("div", { className: "dwu-zoneDivider" }),
        h("div", { className: "dwu-zoneHeader" },
          h("span", { className: "dwu-zoneHeaderTitle" }, "工作台")
        ),
        renderProjectSlot ? renderProjectSlot("sidebar.veang.project", { openSplit }) : null,
        h("div", { className: "dwu-zoneList" },
          zoneTabs.map((item) => h("button", {
            key: item.zone, type: "button", className: "dwu-zoneRow", title: `${item.label} · ${statusTip}`,
            "data-active": (workbenchActive && zoneState.zone === item.zone) || undefined,
            onClick: () => activate(item.zone)
          }, h("span", { className: "dwu-zoneRowIcon", "aria-hidden": true }, item.icon), h("span", { className: "dwu-zoneRowLabel" }, item.label), h("span", { className: "dwu-statusDot", "data-status": sessionStatus, title: statusTip, "aria-label": statusTip })))
        )
      );
    }
    // GitPanel（变更面板）已按需求下线：文件树之外不再展示 Git 变更视图。
    // 相关 API 辅助（gitStatus 等）保留，供后续功能复用。
    function WorkbenchTree({ useSessions, useWorkspaces, openPath }) {
      const { workspace } = currentWorkspace(useSessions, useWorkspaces);
      const treePrefsState = useTreePrefs();
      const zoneState = useZonePrefs();
      useBus("workspace-engine");
      const engine = workspace?.path ? loadJson(storageKey(workspace.path, "engine"), "html") : "html";
      const assetRoot = zoneState.zone === "assets" ? assetRootFor(engine) : "";
      const [active, setActive] = React.useState("");
      const [selectedEntry, setSelectedEntry] = React.useState(null);
      const [clipboard, setClipboard] = React.useState(null);
      const [dropTarget, setDropTarget] = React.useState(null);
      const [busy, setBusy] = React.useState(false);
      const [notice, setNotice] = React.useState("");
      const [menu, setMenu] = React.useState(null);
      const [tab, setTab] = React.useState("files");
      const [searchOpen, setSearchOpen] = React.useState(false);
      const [query, setQuery] = React.useState("");
      const [searchQuery, setSearchQuery] = React.useState("");
      const [resizing, setResizing] = React.useState(false);
      const [railSettled, setRailSettled] = React.useState(treePrefsState.collapsed);
      const lastWideWidth = React.useRef(treePrefsState.width);
      React.useEffect(() => {
        if (!treePrefsState.collapsed) { setRailSettled(false); return; }
        const timer = setTimeout(() => setRailSettled(true), 170);
        return () => clearTimeout(timer);
      }, [treePrefsState.collapsed]);
      if (!treePrefsState.collapsed) lastWideWidth.current = treePrefsState.width;
      React.useEffect(() => {
        const trimmed = query.trim();
        if (!trimmed) { setSearchQuery(""); return; }
        const timer = setTimeout(() => setSearchQuery(trimmed.slice(0, 200)), 180);
        return () => clearTimeout(timer);
      }, [query]);
      const startHeightResize = (event) => {
        if (treePrefsState.collapsed) return;
        event.preventDefault();
        setResizing(true);
        const startY = event.clientY;
        const startHeight = treePrefsState.height;
        const move = (moveEvent) => setTreeHeight(startHeight - (moveEvent.clientY - startY));
        const up = () => {
          setResizing(false);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
      };
      const sidebarRef = React.useRef(null);
      const draggingEntry = React.useRef(null);
      const noticeTimer = React.useRef(null);
      const closeMenu = React.useCallback(() => setMenu(null), []);
      const showNotice = React.useCallback((message, duration = 2600) => {
        setNotice(message);
        if (noticeTimer.current) clearTimeout(noticeTimer.current);
        noticeTimer.current = setTimeout(() => setNotice(""), duration);
      }, []);
      React.useEffect(() => () => { if (noticeTimer.current) clearTimeout(noticeTimer.current); }, []);
      React.useEffect(() => { setSelectedEntry(null); setDropTarget(null); }, [workspace?.path]);
      React.useEffect(() => {
        const listener = (event) => { if (event.detail.root === workspace?.path) setActive(event.detail.path); };
        bus.addEventListener("open-file", listener);
        return () => bus.removeEventListener("open-file", listener);
      }, [workspace?.path]);
      React.useEffect(() => {
        const refresh = (event) => { if (event.detail.root === workspace?.path) bumpTreeRefresh(); };
        const moved = (event) => {
          if (event.detail.root !== workspace?.path) return;
          setActive((value) => remapPath(value, event.detail.source, event.detail.destination));
          setSelectedEntry((value) => value && pathIsWithin(value.path, event.detail.source) ? { ...value, path: remapPath(value.path, event.detail.source, event.detail.destination) } : value);
        };
        bus.addEventListener("tree-refresh", refresh); bus.addEventListener("file-moved", moved);
        return () => { bus.removeEventListener("tree-refresh", refresh); bus.removeEventListener("file-moved", moved); };
      }, [workspace?.path]);
      const openFile = (file, mode = "preview") => {
        if (!zoneAllowsFile(zoneState.zone, file)) {
          showNotice(zoneState.zone === "assets" ? "素材工作台只查看图片 / 视频文件" : "代码工作台只查看代码 / 文本文件", 2800);
          return;
        }
        setActive(file);
        bus.dispatchEvent(new CustomEvent("open-file", { detail: { root: workspace.path, path: file, mode, source: "tree" } }));
      };
      const setClipboardEntry = React.useCallback((entry, mode) => {
        if (!workspace || !entry) return;
        setClipboard({ root: workspace.path, path: entry.path, directory: entry.directory, mode });
        showNotice(`${mode === "cut" ? "已剪切" : "已复制"} ${entry.name} · 在目标文件夹按 ⌘V`);
      }, [workspace?.path, showNotice]);
      const runTransfer = React.useCallback(async (source, destination, mode) => {
        if (!workspace || busy) return;
        setBusy(true); setDropTarget(null);
        try {
          const result = await transferWorkspaceEntry(workspace.path, source, destination, mode);
          if (mode === "move" && !result.unchanged) setClipboard((value) => value?.mode === "cut" && value.path === source ? null : value);
          showNotice(result.unchanged ? "文件已经在这个位置。" : `${mode === "move" ? "已移动到" : "已复制到"} ${destination || "项目根目录"}`);
        } catch (error) {
          showNotice(humanFileError(error), 4200);
        } finally { setBusy(false); }
      }, [workspace?.path, busy, showNotice]);
      const pasteIntoSelection = React.useCallback(() => {
        if (!workspace || !clipboard) { showNotice("还没有复制或剪切文件。", 2200); return; }
        if (clipboard.root !== workspace.path) { showNotice("请先回到复制文件所在的项目完成粘贴。", 3200); return; }
        const destination = selectedEntry?.directory ? selectedEntry.path : selectedEntry ? parentPath(selectedEntry.path) : "";
        runTransfer(clipboard.path, destination, clipboard.mode === "cut" ? "move" : "copy");
      }, [workspace?.path, clipboard, selectedEntry, runTransfer, showNotice]);
      React.useEffect(() => {
        const keydown = (event) => {
          if (!(event.metaKey || event.ctrlKey) || event.altKey) return;
          const target = event.target;
          if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable || !sidebarRef.current?.contains(document.activeElement)) return;
          const key = event.key.toLowerCase();
          if (key === "c" && selectedEntry) { event.preventDefault(); setClipboardEntry(selectedEntry, "copy"); }
          else if (key === "x" && selectedEntry) { event.preventDefault(); setClipboardEntry(selectedEntry, "cut"); }
          else if (key === "v") { event.preventDefault(); pasteIntoSelection(); }
        };
        window.addEventListener("keydown", keydown);
        return () => window.removeEventListener("keydown", keydown);
      }, [selectedEntry, setClipboardEntry, pasteIntoSelection]);
      const startEntryDrag = (event, entry) => {
        const payload = { root: workspace.path, path: entry.path, directory: entry.directory };
        draggingEntry.current = payload; setSelectedEntry(entry);
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("application/x-veang-workbench-entry", JSON.stringify(payload));
        event.dataTransfer.setData("text/plain", fullPath(workspace.path, entry.path));
      };
      const endEntryDrag = () => { draggingEntry.current = null; setDropTarget(null); };
      const dropEntry = (event, destination, phase) => {
        if (phase === "enter") { setDropTarget(destination); return; }
        if (phase === "leave") { setDropTarget((value) => value === destination ? null : value); return; }
        setDropTarget(null);
        if (busy) return;
        const transfer = event.dataTransfer;
        const externalFiles = [...(transfer.files ?? [])];
        if (externalFiles.length > 0) {
          const containsDirectory = [...(transfer.items ?? [])].some((item) => item.kind === "file" && item.webkitGetAsEntry?.()?.isDirectory);
          if (containsDirectory) { showNotice("当前支持拖入外部文件；外部文件夹请先在 Finder 中打开后选择文件。", 4200); return; }
          setBusy(true);
          showNotice(`正在导入 ${externalFiles.length} 个文件…`, 120000);
          uploadExternalFiles(workspace.path, destination, externalFiles).then((rows) => showNotice(`已导入 ${rows.length} 个文件到 ${destination || "项目根目录"}`), (error) => showNotice(humanFileError(error), 5000)).finally(() => setBusy(false));
          return;
        }
        let payload = draggingEntry.current;
        try { payload = JSON.parse(transfer.getData("application/x-veang-workbench-entry")) || payload; } catch {}
        if (!payload || payload.root !== workspace.path) { showNotice("只能在同一个项目内拖拽移动文件。", 3200); return; }
        runTransfer(payload.path, destination, "move");
      };
      const entryMenu = (event, entry, directoryState) => {
        setSelectedEntry(entry);
        const absolute = fullPath(workspace.path, entry.path);
        const items = entry.directory ? [
          { label: directoryState.expanded ? "收起文件夹" : "展开文件夹", icon: directoryState.expanded ? "▾" : "▸", action: directoryState.toggle },
          { separator: true },
          { label: "复制", icon: "⌘C", action: () => setClipboardEntry(entry, "copy") },
          { label: "剪切", icon: "⌘X", action: () => setClipboardEntry(entry, "cut") },
          ...(clipboard?.root === workspace.path ? [{ label: "粘贴到此文件夹", icon: "⌘V", action: () => runTransfer(clipboard.path, entry.path, clipboard.mode === "cut" ? "move" : "copy") }] : []),
          { separator: true },
          { label: "复制完整路径", icon: "⌘", action: () => copyText(absolute) }
        ] : [
          { label: "在中间固定打开", icon: "↗", action: () => openFile(entry.path, "pinned") },
          { label: "添加为 AI 参考文件", icon: "+", action: () => addContext(workspace.path, entry.path) },
          { separator: true },
          { label: "复制", icon: "⌘C", action: () => setClipboardEntry(entry, "copy") },
          { label: "剪切", icon: "⌘X", action: () => setClipboardEntry(entry, "cut") },
          ...(clipboard?.root === workspace.path ? [{ label: "粘贴到所在文件夹", icon: "⌘V", action: () => runTransfer(clipboard.path, parentPath(entry.path), clipboard.mode === "cut" ? "move" : "copy") }] : []),
          { separator: true },
          { label: "用系统默认应用打开", icon: "□", action: () => openPath(absolute) },
          { separator: true },
          { label: "复制完整路径", icon: "⌘", action: () => copyText(absolute) }
        ];
        setMenu({ x: event.clientX, y: event.clientY, items });
      };
      if (treePrefsState.collapsed && railSettled) {
        return h("div", { className: "dwu-root dwu-worktree dwu-worktreeDock dwu-worktreeRail", ref: sidebarRef },
          h("button", { type: "button", className: "dwu-railButton", title: "展开文件目录", "aria-label": "展开文件目录", onClick: toggleTreeCollapsed }, "▴")
        );
      }
      const fading = treePrefsState.collapsed;
      return h("div", { className: "dwu-root dwu-worktree dwu-worktreeDock", "data-resizing": resizing || undefined, style: { height: fading ? 34 : treePrefsState.height }, ref: sidebarRef },
        !treePrefsState.collapsed && h("div", { className: "dwu-heightHandle", title: "拖拽调节高度", role: "separator", "aria-orientation": "horizontal", onPointerDown: startHeightResize }),
        h("div", { className: "dwu-treePanel", "data-fading": fading || undefined, "data-frozen": fading || undefined },
          searchOpen ? h("div", { className: "dwu-treeTabs" },
            h("div", { className: "dwu-treeSearch" },
              h("input", { className: "dwu-treeSearchInput", type: "text", value: query, placeholder: "搜索文件名…", "aria-label": "搜索文件名", autoFocus: true, spellCheck: false, onChange: (event) => setQuery(event.target.value), onKeyDown: (event) => { if (event.key === "Escape") { setQuery(""); setSearchOpen(false); } } }),
              h("button", { type: "button", className: "dwu-treeSearchClear", title: "关闭搜索", "aria-label": "关闭搜索", onClick: () => { setQuery(""); setSearchOpen(false); } }, "✕")
            )
          ) : h("div", { className: "dwu-treeTabs" },
            h("span", { className: "dwu-dockTitle" }, workspace.title),
            h("span", { className: "dwu-dockPath", title: workspace.path }, workspace.path),
            h("select", { className: "dwu-treeModeSelect", title: "文件目录显示模式", "aria-label": "文件目录显示模式", value: treePrefsState.mode, onChange: (event) => setTreeMode(event.target.value) },
              h("option", { value: "list" }, "列表模式"),
              h("option", { value: "icon" }, "图标模式")
            ),
            h("button", { type: "button", className: "dwu-treeIconBtn", title: "刷新文件目录", "aria-label": "刷新文件目录", onClick: bumpTreeRefresh }, "↻"),
            h("button", { type: "button", className: "dwu-treeIconBtn", title: "搜索文件名", "aria-label": "搜索文件名", onClick: () => { setSearchOpen(true); setTab("files"); } }, "⌕")
          ),
          workspace ? h(React.Fragment, null,
            searchQuery ? h(TreeSearchResults, { root: workspace.path, query: searchQuery, onOpen: openFile, openPath }) : h(React.Fragment, null,
              (dropTarget !== null || busy) && h("div", { className: "dwu-treeDropHint" }, busy ? "正在处理文件…" : `释放后移动或导入到 ${dropTarget || "项目根目录"}`),
              treePrefsState.mode === "icon"
                ? h(DirTiles, { root: workspace.path, initialCwd: assetRoot, refreshKey: treePrefsState.refreshKey, active, clipboard, onSelect: setSelectedEntry, onOpen: openFile, openPath, onEntryMenu: entryMenu, onEntryDragStart: startEntryDrag, onEntryDragEnd: endEntryDrag, onDropEntry: dropEntry, dropTarget, busy })
                : h(FileTree, { root: workspace.path, showHidden: false, active, selected: selectedEntry?.path, clipboard, onSelect: setSelectedEntry, onOpen: openFile, openPath, refreshKey: treePrefsState.refreshKey, onEntryMenu: entryMenu, onEntryDragStart: startEntryDrag, onEntryDragEnd: endEntryDrag, onDropEntry: dropEntry, dropTarget, busy }),
              notice && h("div", { className: "dwu-fileNotice", role: "status" }, notice)
            )
          ) : h("div", { className: "dwu-emptySide" }, "在左侧选择一个会话后，这里会显示它的文件。")
        ),
        h(ContextMenu, { menu, onClose: closeMenu })
      );
    }

    function escapeHtml(value) {
      return value.replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[char]);
    }
    function highlightedCode(source) {
      const keyword = /^(?:const|let|var|function|class|return|if|else|for|while|switch|case|break|continue|async|await|import|export|from|default|new|try|catch|finally|throw|extends|implements|interface|type|public|private|protected|static|true|false|null|undefined|def|lambda|yield|with|as|in|is|not|and|or|pass|raise|package|func|struct|enum|protocol|guard|defer)$/;
      const pattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*|\b(?:const|let|var|function|class|return|if|else|for|while|switch|case|break|continue|async|await|import|export|from|default|new|try|catch|finally|throw|extends|implements|interface|type|public|private|protected|static|true|false|null|undefined|def|lambda|yield|with|as|in|is|not|and|or|pass|raise|package|func|struct|enum|protocol|guard|defer)\b|\b\d+(?:\.\d+)?\b)/g;
      let out = "", cursor = 0;
      for (const match of source.matchAll(pattern)) {
        out += escapeHtml(source.slice(cursor, match.index));
        const token = match[0];
        const cls = token.startsWith("//") || token.startsWith("/*") || token.startsWith("#") ? "com" : token.startsWith("\"") || token.startsWith("'") || token.startsWith("`") ? "str" : keyword.test(token) ? "kw" : "num";
        out += `<span class="${cls}">${escapeHtml(token)}</span>`;
        cursor = match.index + token.length;
      }
      return out + escapeHtml(source.slice(cursor)) + "\n";
    }
    function safeUrl(value) {
      // Browsers ignore control characters and whitespace when parsing a scheme,
      // so strip them before testing: "java\tscript:" and " javascript:" must not pass.
      const normalized = Array.from(String(value))
        .filter((char) => char.charCodeAt(0) > 0x20 && !/[\s\u00a0\u200b-\u200d\ufeff]/.test(char))
        .join("")
        .toLowerCase();
      const scheme = /^([a-z][a-z0-9+.-]*):/.exec(normalized);
      if (scheme && !["http", "https", "mailto"].includes(scheme[1])) return "#";
      return value;
    }
    function markdownHtml(source) {
      const blocks = [];
      let value = escapeHtml(source).replace(/```([^\n]*)\n([\s\S]*?)```/g, (_, lang, code) => {
        const token = `@@DWU_BLOCK_${blocks.length}@@`;
        blocks.push(`<pre data-language="${lang.trim()}"><code>${code.replace(/\n$/, "")}</code></pre>`);
        return token;
      });
      value = value
        .replace(/^######\s+(.+)$/gm, "<h6>$1</h6>").replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>").replace(/^####\s+(.+)$/gm, "<h4>$1</h4>")
        .replace(/^###\s+(.+)$/gm, "<h3>$1</h3>").replace(/^##\s+(.+)$/gm, "<h2>$1</h2>").replace(/^#\s+(.+)$/gm, "<h1>$1</h1>")
        .replace(/^&gt;\s?(.+)$/gm, "<blockquote>$1</blockquote>")
        .replace(/^[-*]\s+(.+)$/gm, "<li>$1</li>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => `<a href="${escapeHtml(safeUrl(href))}" target="_blank" rel="noreferrer">${text}</a>`)
        .split(/\n{2,}/).map((part) => /^<(h\d|pre|blockquote|li)/.test(part) || /^@@DWU_BLOCK_/.test(part) ? part : `<p>${part.replace(/\n/g, "<br>")}</p>`).join("\n");
      blocks.forEach((block, index) => { value = value.replace(`@@DWU_BLOCK_${index}@@`, block); });
      return value.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/g, (list) => `<ul>${list}</ul>`);
    }

    function OfficePreview({ root, file }) {
      const [data, setData] = React.useState(null);
      const [error, setError] = React.useState("");
      const [sheet, setSheet] = React.useState(0);
      React.useEffect(() => {
        let live = true; setData(null); setError(""); setSheet(0);
        getJson(apiUrl("preview", root, file)).then((value) => { if (live) setData(value); }, (err) => { if (live) setError(err.message); });
        return () => { live = false; };
      }, [root, file]);
      if (error) return h("div", { className: "dwu-error" }, `预览失败：${error}`);
      if (!data) return h("div", { className: "dwu-loading" }, "正在生成预览…");
      const pageCss = `<style>body{font:14px/1.6 -apple-system,BlinkMacSystemFont,sans-serif;color:#1f2328;padding:28px;margin:0}img{max-width:100%}table{border-collapse:collapse;min-width:100%}td,th{border:1px solid #d0d7de;padding:5px 8px;white-space:nowrap}tr:nth-child(even){background:#f6f8fa}h1,h2,h3{line-height:1.25}</style>`;
      if (data.kind === "workbook") {
        const current = data.sheets[sheet] ?? data.sheets[0];
        return h("div", { className: "dwu-office" },
          h("div", { className: "dwu-sheetTabs" }, data.sheets.map((item, index) => h("button", { key: item.name, className: "dwu-sheetTab", "data-active": index === sheet || undefined, onClick: () => setSheet(index) }, item.name))),
          h("iframe", { className: "dwu-frame", sandbox: "allow-same-origin", srcDoc: `${pageCss}${current?.html ?? ""}` })
        );
      }
      return h("iframe", { className: "dwu-frame", sandbox: "allow-same-origin", srcDoc: `${pageCss}${data.html}` });
    }

    // ════════════════════════════════════════════════════════════════════════
    // 像素编辑器：移植自 dsh-aseprite（MIT License, Copyright (c) 2026 Ratevoid）。
    // 内核 = ASE 二进制编解码 + 文档模型（纯 JS、零依赖，浏览器端运行）。
    // ════════════════════════════════════════════════════════════════════════
    const ASE = (() => {
      class ASEError extends Error {
        constructor(message) { super(message); this.name = "ASEError"; }
      }
      class Reader {
        constructor(bytes) { this.b = bytes; this.o = 0; }
        get remaining() { return this.b.length - this.o; }
        u8() { if (this.o + 1 > this.b.length) throw new ASEError("truncated file"); return this.b[this.o++]; }
        u16() { if (this.o + 2 > this.b.length) throw new ASEError("truncated file"); const v = this.b[this.o] | (this.b[this.o + 1] << 8); this.o += 2; return v; }
        s16() { const v = this.u16(); return v >= 0x8000 ? v - 0x10000 : v; }
        u32() { if (this.o + 4 > this.b.length) throw new ASEError("truncated file"); let v = 0; for (let i = 0; i < 4; i++) v |= this.b[this.o + i] << (8 * i); this.o += 4; return v >>> 0; }
        s32() { const v = this.u32(); return v >= 0x80000000 ? v - 0x100000000 : v; }
        skip(n) { if (this.o + n > this.b.length) throw new ASEError("truncated file"); this.o += n; }
        string() { const len = this.u16(); const o = this.o; this.o += len; return new TextDecoder().decode(this.b.subarray(o, o + len)); }
        bytes(n) { if (this.o + n > this.b.length) throw new ASEError("truncated file"); const out = this.b.subarray(this.o, this.o + n); this.o += n; return out; }
      }

      function emptyDoc(width, height, frames = 1, duration = 100) {
        const fr = [];
        for (let i = 0; i < frames; i++) fr.push({ duration });
        return {
          width, height, mode: "rgba",
          frames: fr,
          layers: [{ name: "Layer 1", visible: true, opacity: 255, blendMode: 0 }],
          cels: new Map(),
          palette: [{ r: 0, g: 0, b: 0, a: 255, name: "Black" }, { r: 255, g: 255, b: 255, a: 255, name: "White" }],
          tags: [],
          meta: { colorDepth: 32 }
        };
      }

      function makeCel(doc, frameIdx, layerIdx) {
        const data = new Uint8ClampedArray(doc.width * doc.height * 4);
        const cel = { x: 0, y: 0, w: doc.width, h: doc.height, data };
        doc.cels.set(frameIdx + ":" + layerIdx, cel);
        return cel;
      }
      function getCel(doc, frameIdx, layerIdx) {
        const key = frameIdx + ":" + layerIdx;
        return doc.cels.get(key) ?? makeCel(doc, frameIdx, layerIdx);
      }

      async function inflateAsync(zlibBuffer) {
        if (typeof DecompressionStream === "undefined") throw new ASEError("no DecompressionStream");
        const stream = new Blob([zlibBuffer.slice(0)]).stream().pipeThrough(new DecompressionStream("deflate"));
        return new Uint8Array(await new Response(stream).arrayBuffer());
      }

      function decodePixels(bytes, width, height, depth, palette) {
        const out = new Uint8ClampedArray(width * height * 4);
        let p = 0;
        const n = width * height;
        if (depth === 32) {
          for (let i = 0; i < n; i++) { out[p++] = bytes[i * 4]; out[p++] = bytes[i * 4 + 1]; out[p++] = bytes[i * 4 + 2]; out[p++] = bytes[i * 4 + 3]; }
        } else if (depth === 16) {
          for (let i = 0; i < n; i++) { const v = bytes[i * 2], a = bytes[i * 2 + 1]; out[p++] = v; out[p++] = v; out[p++] = v; out[p++] = a; }
        } else if (depth === 8) {
          for (let i = 0; i < n; i++) { const c = palette[bytes[i]] ?? { r: 0, g: 0, b: 0, a: 255 }; out[p++] = c.r; out[p++] = c.g; out[p++] = c.b; out[p++] = c.a; }
        } else throw new ASEError("unsupported color depth " + depth);
        return out;
      }

      function parseOldPalette(r, into, scale) {
        const packets = r.u16(); let pos = 0;
        for (let i = 0; i < packets; i++) {
          const skip = r.u8(); let n = r.u8(); if (n === 0) n = 256;
          pos += skip;
          for (let j = 0; j < n; j++) into[pos++] = { r: Math.round(r.u8() * scale), g: Math.round(r.u8() * scale), b: Math.round(r.u8() * scale), a: 255, name: "" };
        }
      }
      function parseNewPalette(r, into) {
        r.u32(); const first = r.u32(); const last = r.u32(); r.skip(8);
        for (let i = first; i <= last; i++) {
          const flags = r.u16(); const a = r.bytes(4); let name = "";
          if (flags & 1) name = r.string();
          into[i] = { r: a[0], g: a[1], b: a[2], a: a[3], name };
        }
      }

      async function parseAseprite(input) {
        const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
        const r = new Reader(bytes);
        const fileSize = r.u32();
        const magic = r.u16();
        if (magic !== 0xa5e0) throw new ASEError("not an .aseprite file (magic 0x" + magic.toString(16) + ")");
        const frameCount = r.u16();
        const width = r.u16();
        const height = r.u16();
        if (width === 0 || height === 0) throw new ASEError("sprite has zero dimension");
        const depth = r.u16();
        const flags = r.u32();
        const legacySpeed = r.u16();
        r.skip(8); r.skip(1); r.skip(3); r.skip(2); r.skip(2); r.skip(8); r.skip(84);
        if (r.o !== 128) throw new ASEError("header is " + r.o + " bytes, expected 128");

        const doc = emptyDoc(width, height, frameCount, legacySpeed || 100);
        doc.meta.colorDepth = depth;
        doc.meta.legacySpeed = legacySpeed;

        const layers = [];
        const buffer = Array.from({ length: 256 }, (_, i) => ({ r: i, g: i, b: i, a: 255, name: "" }));
        let sawNewPalette = false;
        doc.palette = [];

        for (let f = 0; f < frameCount; f++) {
          const frameSize = r.u32();
          const frameEnd = r.o + frameSize - 4;
          const frameMagic = r.u16();
          if (frameMagic !== 0xf1fa) throw new ASEError("bad frame magic 0x" + frameMagic.toString(16));
          const oldChunks = r.u16();
          const duration = r.u16();
          r.skip(2);
          const newChunks = r.u32();
          const chunkCount = newChunks !== 0 ? newChunks : oldChunks;
          if (duration > 0) doc.frames[f].duration = duration;

          for (let c = 0; c < chunkCount; c++) {
            const chunkBase = r.o;
            const chunkSize = r.u32();
            const chunkType = r.u16();
            switch (chunkType) {
              case 0x2004: {
                const lflags = r.u16(); const ltype = r.u16(); const childLevel = r.u16();
                r.skip(4); const blendMode = r.u16(); const opacity = r.u8(); r.skip(3);
                const name = r.string();
                if (ltype === 2) r.skip(4);
                if (flags & 4) r.skip(16);
                if (f === 0) layers.push({ name, visible: (lflags & 1) !== 0, opacity, blendMode, childLevel, lflags, type: ltype });
                break;
              }
              case 0x2005: {
                const layerIdx = r.u16(); const x = r.s16(); const y = r.s16();
                r.u8(); const celType = r.u16(); r.s16(); r.skip(5);
                const layer = layers[layerIdx];
                if (!layer) throw new ASEError("cel references missing layer " + layerIdx);
                if (celType === 0) {
                  const w = r.u16(); const h = r.u16();
                  const raw = r.bytes(w * h * (depth / 8));
                  doc.cels.set(f + ":" + layerIdx, { x, y, w, h, data: decodePixels(raw, w, h, depth, buffer) });
                } else if (celType === 1) {
                  const linkFrame = r.u16();
                  const src = doc.cels.get(linkFrame + ":" + layerIdx);
                  if (src) doc.cels.set(f + ":" + layerIdx, { x: src.x, y: src.y, w: src.w, h: src.h, data: new Uint8ClampedArray(src.data) });
                } else if (celType === 2) {
                  const w = r.u16(); const h = r.u16();
                  const byteLen = chunkBase + chunkSize - r.o;
                  if (byteLen < 0) throw new ASEError("compressed cel out of bounds");
                  const compressed = r.bytes(byteLen);
                  const raw = await inflateAsync(compressed);
                  doc.cels.set(f + ":" + layerIdx, { x, y, w, h, data: decodePixels(raw, w, h, depth, buffer) });
                }
                break;
              }
              case 0x2019: {
                sawNewPalette = true;
                parseNewPalette(r, buffer);
                doc.palette = buffer.map((c) => ({ r: c.r, g: c.g, b: c.b, a: c.a, name: c.name }));
                break;
              }
              case 0x0004: if (!sawNewPalette) { parseOldPalette(r, buffer, 1); doc.palette = buffer.map((c) => ({ ...c })); } break;
              case 0x0011: if (!sawNewPalette) { parseOldPalette(r, buffer, 255 / 63); doc.palette = buffer.map((c) => ({ ...c })); } break;
              case 0x2018: {
                const tagCount = r.u16(); r.skip(8);
                for (let t = 0; t < tagCount; t++) {
                  const from = r.u16(); const to = r.u16(); const loopDir = r.u8(); const repeat = r.u16();
                  r.skip(6); const color = { r: r.u8(), g: r.u8(), b: r.u8() }; r.u8(); const name = r.string();
                  doc.tags.push({ from, to, name, loopDir, repeat, color });
                }
                break;
              }
              default: break;
            }
            const consumed = r.o - chunkBase;
            if (consumed < chunkSize) r.skip(chunkSize - consumed);
            else if (consumed > chunkSize) throw new ASEError("chunk " + chunkType.toString(16) + " overran its bounds");
          }
          if (r.o < frameEnd) r.skip(frameEnd - r.o);
          else if (r.o > frameEnd) r.o = frameEnd;
        }

        if (doc.palette.length === 0) doc.palette = [{ r: 0, g: 0, b: 0, a: 255, name: "Black" }, { r: 255, g: 255, b: 255, a: 255, name: "White" }];
        doc.layers = layers;
        if (doc.layers.length === 0) doc.layers = [{ name: "Layer 1", visible: true, opacity: 255, blendMode: 0, childLevel: 0, lflags: 0, type: 0 }];
        return doc;
      }

      const isLE = true;
      class Writer {
        constructor() { this.chunks = []; }
        get length() { return this.chunks.reduce((n, c) => n + c.length, 0); }
        u8(v) { this.chunks.push(Uint8Array.from([v & 0xff])); }
        u16(v) { const b = new Uint8Array(2); new DataView(b.buffer).setUint16(0, v & 0xffff, isLE); this.chunks.push(b); }
        s16(v) { const b = new Uint8Array(2); new DataView(b.buffer).setInt16(0, v, isLE); this.chunks.push(b); }
        u32(v) { const b = new Uint8Array(4); new DataView(b.buffer).setUint32(0, v >>> 0, isLE); this.chunks.push(b); }
        zero(n) { this.chunks.push(new Uint8Array(n)); }
        raw(b) { this.chunks.push(b instanceof Uint8Array ? b : new Uint8Array(b)); }
        string(s) { const bytes = new TextEncoder().encode(s); this.u16(bytes.length); this.raw(bytes); }
        concat() { const out = new Uint8Array(this.length); let o = 0; for (const c of this.chunks) { out.set(c, o); o += c.length; } return out; }
      }

      function buildPaletteChunk(palette) {
        const w = new Writer();
        const list = [];
        for (let i = 0; i < 256; i++) list.push(palette[i] ?? { r: 0, g: 0, b: 0, a: 0, name: "" });
        w.u32(256); w.u32(0); w.u32(255); w.zero(8);
        for (const c of list) {
          const hasName = c.name !== undefined && String(c.name).length > 0;
          w.u16(hasName ? 1 : 0);
          w.u8(c.r & 0xff); w.u8(c.g & 0xff); w.u8(c.b & 0xff); w.u8(c.a & 0xff);
          if (hasName) w.string(String(c.name));
        }
        return { type: 0x2019, data: w.concat() };
      }

      function buildLayerChunk(layer, index) {
        const w = new Writer();
        let lflags = (layer.visible ? 1 : 0);
        if (index === 0 && (layer.lflags & 8)) lflags |= 8;
        w.u16(lflags); w.u16(layer.type ?? 0); w.u16(layer.childLevel ?? 0);
        w.u16(0); w.u16(0); w.u16(layer.blendMode ?? 0); w.u8(layer.opacity ?? 255); w.zero(3);
        w.string(layer.name ?? "Layer " + (index + 1));
        return { type: 0x2004, data: w.concat() };
      }

      function buildCelChunk(cel, layerIdx) {
        const w = new Writer();
        w.u16(layerIdx); w.s16(cel.x); w.s16(cel.y); w.u8(255); w.u16(0);
        w.s16(0); w.zero(5); w.u16(cel.w); w.u16(cel.h); w.raw(cel.data.slice(0));
        return { type: 0x2005, data: w.concat() };
      }

      function buildTagsChunk(tags) {
        if (tags.length === 0) return null;
        const w = new Writer(); w.u16(tags.length); w.zero(8);
        for (const tag of tags) {
          w.u16(tag.from); w.u16(tag.to); w.u8(tag.loopDir ?? 0); w.u16(tag.repeat ?? 0);
          w.zero(6); w.u8(tag.color?.r ?? 128); w.u8(tag.color?.g ?? 128); w.u8(tag.color?.b ?? 128); w.u8(0);
          w.string(tag.name ?? "");
        }
        return { type: 0x2018, data: w.concat() };
      }

      function serializeAseprite(doc) {
        const width = doc.width, height = doc.height, frames = doc.frames.length;
        const frameBodies = [];
        const layerChunks = doc.layers.map((layer, i) => buildLayerChunk(layer, i));
        const paletteChunk = buildPaletteChunk(doc.palette);
        const tagsChunk = buildTagsChunk(doc.tags);
        for (let f = 0; f < frames; f++) {
          const chunks = [];
          if (f === 0) {
            for (const c of layerChunks) chunks.push(c);
            chunks.push(paletteChunk);
            if (tagsChunk) chunks.push(tagsChunk);
          }
          for (let l = 0; l < doc.layers.length; l++) {
            const cel = doc.cels.get(f + ":" + l);
            if (cel) chunks.push(buildCelChunk(cel, l));
          }
          const w = new Writer();
          for (const c of chunks) { w.u32(6 + c.data.length); w.u16(c.type); w.raw(c.data); }
          frameBodies.push(w.concat());
        }
        const totalLen = 128 + frameBodies.reduce((n, b) => n + 16 + b.length, 0);
        const all = new Uint8Array(totalLen);
        const view = new DataView(all.buffer);
        view.setUint32(0, totalLen, isLE);
        view.setUint16(4, 0xa5e0, isLE);
        view.setUint16(6, frames, isLE);
        view.setUint16(8, width, isLE);
        view.setUint16(10, height, isLE);
        view.setUint16(12, 32, isLE);
        view.setUint32(14, 1, isLE);
        view.setUint16(18, doc.frames[0]?.duration ?? 100, isLE);
        let o = 128;
        for (let f = 0; f < frames; f++) {
          const body = frameBodies[f];
          const nChunks = chunkCountFor(body);
          view.setUint32(o, 16 + body.length, isLE);
          view.setUint16(o + 4, 0xf1fa, isLE);
          view.setUint16(o + 6, 0xffff, isLE);
          view.setUint16(o + 8, doc.frames[f].duration ?? 100, isLE);
          view.setUint16(o + 10, 0, isLE);
          view.setUint32(o + 12, nChunks, isLE);
          all.set(body, o + 16);
          o += 16 + body.length;
        }
        return all;
      }

      function chunkCountFor(body) {
        let n = 0, o = 0;
        while (o < body.length) {
          const size = (body[o] | (body[o + 1] << 8) | (body[o + 2] << 16) | (body[o + 3] << 24)) >>> 0;
          if (size < 6) return n;
          o += size; n++;
        }
        return n;
      }

      // ── 文档模型（绘制 / 图层 / 帧 / 导出）──
      function cloneCel(cel) {
        if (!cel) return null;
        return { x: cel.x, y: cel.y, w: cel.w, h: cel.h, data: new Uint8ClampedArray(cel.data) };
      }
      function cloneDoc(doc) {
        const cels = new Map();
        for (const [k, v] of doc.cels) cels.set(k, cloneCel(v));
        return {
          width: doc.width, height: doc.height, mode: doc.mode,
          frames: doc.frames.map((f) => ({ duration: f.duration })),
          layers: doc.layers.map((l) => ({ ...l })),
          cels, palette: doc.palette.map((c) => ({ ...c })),
          tags: doc.tags.map((t) => ({ ...t })), meta: { ...doc.meta }
        };
      }
      function newSprite(width, height, frames = 1, duration = 100, layers = 1) {
        const doc = emptyDoc(width, height, frames, duration);
        doc.layers = [];
        for (let i = 0; i < layers; i++) {
          doc.layers.push({ name: i === 0 ? "Layer 1" : "Layer " + (i + 1), visible: true, opacity: 255, blendMode: 0, childLevel: 0, lflags: 1, type: 0 });
        }
        return doc;
      }
      class History {
        constructor(initial) { this.stack = [cloneDoc(initial)]; this.index = 0; this.cap = 50; }
        snapshot() {
          this.stack = this.stack.slice(0, this.index + 1);
          this.stack.push(cloneDoc(this.stack[this.index]));
          if (this.stack.length > this.cap) this.stack.shift();
          this.index = this.stack.length - 1;
        }
        canUndo() { return this.index > 0; }
        canRedo() { return this.index < this.stack.length - 1; }
        undo() { if (!this.canUndo()) return null; this.index--; return cloneDoc(this.stack[this.index]); }
        redo() { if (!this.canRedo()) return null; this.index++; return cloneDoc(this.stack[this.index]); }
        reset(doc) { this.stack = [cloneDoc(doc)]; this.index = 0; }
      }
      function idx(doc, cel, x, y) { return (y * doc.width + x) * 4; }
      function ensureCel(doc, frameIdx, layerIdx) {
        const key = frameIdx + ":" + layerIdx;
        let cel = doc.cels.get(key);
        if (!cel || cel.w !== doc.width || cel.h !== doc.height) {
          const data = new Uint8ClampedArray(doc.width * doc.height * 4);
          if (cel) {
            for (let y = 0; y < cel.h; y++) for (let x = 0; x < cel.w; x++) {
              const sx = x + cel.x, sy = y + cel.y;
              if (sx < 0 || sx >= doc.width || sy < 0 || sy >= doc.height) continue;
              const si = (y * cel.w + x) * 4, di = (sy * doc.width + sx) * 4;
              data[di] = cel.data[si]; data[di + 1] = cel.data[si + 1]; data[di + 2] = cel.data[si + 2]; data[di + 3] = cel.data[si + 3];
            }
          }
          cel = { x: 0, y: 0, w: doc.width, h: doc.height, data };
          doc.cels.set(key, cel);
        }
        return cel;
      }
      function compositeFrame(doc, frameIdx, into) {
        const w = doc.width, h = doc.height;
        into.fill(0);
        for (let l = 0; l < doc.layers.length; l++) {
          const layer = doc.layers[l];
          if (!layer.visible) continue;
          const cel = doc.cels.get(frameIdx + ":" + l);
          if (!cel) continue;
          const opacity = layer.opacity / 255;
          for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
            const si = (y * w + x) * 4;
            const a = cel.data[si + 3];
            if (a === 0) continue;
            if (opacity >= 1 && a >= 255) {
              into[si] = cel.data[si]; into[si + 1] = cel.data[si + 1]; into[si + 2] = cel.data[si + 2]; into[si + 3] = 255;
              continue;
            }
            const sa = (a * opacity) / 255, da = into[si + 3] / 255, oa = sa + da * (1 - sa);
            if (oa === 0) continue;
            into[si] = Math.round((cel.data[si] * sa + into[si] * da * (1 - sa)) / oa);
            into[si + 1] = Math.round((cel.data[si + 1] * sa + into[si + 1] * da * (1 - sa)) / oa);
            into[si + 2] = Math.round((cel.data[si + 2] * sa + into[si + 2] * da * (1 - sa)) / oa);
            into[si + 3] = Math.round(oa * 255);
          }
        }
        return into;
      }
      function setPixel(doc, frameIdx, layerIdx, x, y, color) {
        if (x < 0 || x >= doc.width || y < 0 || y >= doc.height) return false;
        const cel = ensureCel(doc, frameIdx, layerIdx);
        const i = idx(doc, cel, x, y);
        if (cel.data[i] === color.r && cel.data[i + 1] === color.g && cel.data[i + 2] === color.b && cel.data[i + 3] === color.a) return false;
        cel.data[i] = color.r; cel.data[i + 1] = color.g; cel.data[i + 2] = color.b; cel.data[i + 3] = color.a;
        return true;
      }
      function drawBrush(doc, frameIdx, layerIdx, x, y, color, size = 1) {
        const brush = Math.max(1, Math.round(Number(size) || 1));
        const startX = x - Math.floor((brush - 1) / 2), startY = y - Math.floor((brush - 1) / 2);
        let changed = false;
        for (let yy = startY; yy < startY + brush; yy++) for (let xx = startX; xx < startX + brush; xx++) changed = setPixel(doc, frameIdx, layerIdx, xx, yy, color) || changed;
        return changed;
      }
      function drawLine(doc, frameIdx, layerIdx, x0, y0, x1, y1, color, size = 1) {
        const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
        let err = dx + dy, changed = false;
        for (;;) {
          changed = drawBrush(doc, frameIdx, layerIdx, x0, y0, color, size) || changed;
          if (x0 === x1 && y0 === y1) break;
          const e2 = 2 * err;
          if (e2 >= dy) { err += dy; x0 += sx; }
          if (e2 <= dx) { err += dx; y0 += sy; }
        }
        return changed;
      }
      function drawRect(doc, frameIdx, layerIdx, x0, y0, x1, y1, color, fill, size = 1) {
        const minX = Math.min(x0, x1), maxX = Math.max(x0, x1), minY = Math.min(y0, y1), maxY = Math.max(y0, y1);
        let changed = false;
        for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) {
          if (fill || x === minX || x === maxX || y === minY || y === maxY) changed = drawBrush(doc, frameIdx, layerIdx, x, y, color, size) || changed;
        }
        return changed;
      }
      function floodFill(doc, frameIdx, layerIdx, x, y, color) {
        if (x < 0 || x >= doc.width || y < 0 || y >= doc.height) return false;
        const cel = ensureCel(doc, frameIdx, layerIdx);
        const w = doc.width, h = doc.height;
        const target = [cel.data[(y * w + x) * 4], cel.data[(y * w + x) * 4 + 1], cel.data[(y * w + x) * 4 + 2], cel.data[(y * w + x) * 4 + 3]];
        if (target[0] === color.r && target[1] === color.g && target[2] === color.b && target[3] === color.a) return false;
        const stack = [[x, y]]; let changed = false;
        while (stack.length > 0) {
          const [px, py] = stack.pop();
          if (px < 0 || px >= w || py < 0 || py >= h) continue;
          const i = (py * w + px) * 4;
          if (cel.data[i] !== target[0] || cel.data[i + 1] !== target[1] || cel.data[i + 2] !== target[2] || cel.data[i + 3] !== target[3]) continue;
          cel.data[i] = color.r; cel.data[i + 1] = color.g; cel.data[i + 2] = color.b; cel.data[i + 3] = color.a;
          changed = true;
          stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]);
        }
        return changed;
      }
      function pickPixel(doc, frameIdx, layerIdx, x, y) {
        if (x < 0 || x >= doc.width || y < 0 || y >= doc.height) return null;
        const cel = doc.cels.get(frameIdx + ":" + layerIdx);
        if (!cel) return { r: 0, g: 0, b: 0, a: 0 };
        const i = idx(doc, cel, x, y);
        return { r: cel.data[i], g: cel.data[i + 1], b: cel.data[i + 2], a: cel.data[i + 3] };
      }
      function addLayer(doc, name, index) {
        const layer = { name: name || "Layer " + (doc.layers.length + 1), visible: true, opacity: 255, blendMode: 0, childLevel: 0, lflags: 1, type: 0 };
        if (index === undefined || index < 0) doc.layers.push(layer); else doc.layers.splice(index, 0, layer);
        return doc.layers.length - 1;
      }
      function removeLayer(doc, layerIdx) {
        if (doc.layers.length <= 1) return false;
        doc.layers.splice(layerIdx, 1);
        for (const [k] of [...doc.cels]) {
          if (k.endsWith(":" + layerIdx)) doc.cels.delete(k);
          else {
            const [f, l] = k.split(":").map(Number);
            if (l > layerIdx) { const cel = doc.cels.get(k); doc.cels.delete(k); doc.cels.set(f + ":" + (l - 1), cel); }
          }
        }
        return true;
      }
      function moveLayer(doc, from, to) {
        if (from < 0 || to < 0 || from >= doc.layers.length || to >= doc.layers.length || from === to) return;
        const [layer] = doc.layers.splice(from, 1);
        doc.layers.splice(to, 0, layer);
        const oldKeys = [...doc.cels.entries()];
        doc.cels.clear();
        for (const [k, cel] of oldKeys) {
          const [f, l] = k.split(":").map(Number);
          let nl = l;
          if (l === from) nl = to; else if (l === to) nl = from;
          doc.cels.set(f + ":" + nl, cel);
        }
      }
      function addFrame(doc, after, duration) {
        const dur = duration ?? doc.frames[doc.frames.length - 1]?.duration ?? 100;
        const idx = after === undefined ? doc.frames.length : after + 1;
        doc.frames.splice(idx, 0, { duration: dur });
        const pending = [];
        for (const [k, cel] of doc.cels) { const [f, l] = k.split(":").map(Number); if (f >= idx) pending.push([f + 1 + ":" + l, cel]); }
        for (const [k, cel] of pending) doc.cels.set(k, cel);
        return idx;
      }
      function duplicateFrame(doc, frameIdx) {
        const src = doc.frames[frameIdx];
        const idx = frameIdx + 1;
        doc.frames.splice(idx, 0, { duration: src.duration });
        const pending = [];
        for (const [k, cel] of doc.cels) {
          const [f, l] = k.split(":").map(Number);
          if (f === frameIdx) pending.push([idx + ":" + l, cloneCel(cel)]);
          else if (f >= idx) pending.push([f + 1 + ":" + l, cel]);
        }
        for (const [k, cel] of pending) doc.cels.set(k, cel);
        return idx;
      }
      function removeFrame(doc, frameIdx) {
        if (doc.frames.length <= 1) return false;
        doc.frames.splice(frameIdx, 1);
        const pending = [];
        for (const [k, cel] of doc.cels) { const [f, l] = k.split(":").map(Number); if (f === frameIdx) continue; pending.push([(f > frameIdx ? f - 1 : f) + ":" + l, cel]); }
        doc.cels.clear();
        for (const [k, cel] of pending) doc.cels.set(k, cel);
        return true;
      }
      function moveFrame(doc, from, to) {
        if (from === to) return;
        const [fr] = doc.frames.splice(from, 1);
        doc.frames.splice(to, 0, fr);
        const cels = [];
        for (const [k, cel] of doc.cels) {
          const [f, l] = k.split(":").map(Number);
          let nf = f;
          if (f === from) nf = to; else if (f === to) nf = from;
          cels.push([nf + ":" + l, cel]);
        }
        doc.cels.clear();
        for (const [k, cel] of cels) doc.cels.set(k, cel);
      }
      function frameToPng(doc, frameIdx, scale = 1) {
        const w = doc.width * scale, h = doc.height * scale;
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (scale !== 1) { ctx.imageSmoothingEnabled = false; ctx.scale(scale, scale); }
        const buf = compositeFrame(doc, frameIdx, new Uint8ClampedArray(doc.width * doc.height * 4));
        ctx.putImageData(new ImageData(new Uint8ClampedArray(buf), doc.width, doc.height), 0, 0);
        return canvas.toDataURL("image/png");
      }
      function sheetToPng(doc, scale = 1) {
        const fw = doc.width, fh = doc.height;
        const w = fw * doc.frames.length * scale, h = fh * scale;
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        const tmp = document.createElement("canvas");
        tmp.width = fw; tmp.height = fh;
        const tctx = tmp.getContext("2d");
        for (let f = 0; f < doc.frames.length; f++) {
          const buf = compositeFrame(doc, f, new Uint8ClampedArray(fw * fh * 4));
          tctx.putImageData(new ImageData(new Uint8ClampedArray(buf), fw, fh), 0, 0);
          if (scale === 1) ctx.drawImage(tmp, f * fw, 0);
          else ctx.drawImage(tmp, f * fw * scale, 0, fw * scale, fh * scale);
        }
        return canvas.toDataURL("image/png");
      }

      return {
        ASEError, parseAseprite, serializeAseprite, emptyDoc,
        newSprite, cloneDoc, History, compositeFrame,
        setPixel, drawBrush, drawLine, drawRect, floodFill, pickPixel,
        addLayer, removeLayer, moveLayer,
        addFrame, duplicateFrame, removeFrame, moveFrame,
        frameToPng, sheetToPng
      };
    })();

    // ── 像素编辑器 store ──────────────────────────────────────────────────────
    const PX_T = {
      layers: "图层", frames: "帧", palette: "调色板",
      pencil: "铅笔", eraser: "橡皮", fill: "油漆桶", picker: "取色器", line: "直线", rect: "矩形", select: "框选区域",
      undo: "撤销", redo: "重做", zoomIn: "放大", zoomOut: "缩小", zoom: "缩放", brushSize: "笔刷/橡皮大小",
      save: "保存到工作区", reload: "重新载入", new: "新建 Sprite", exportFrame: "导出当前帧 PNG", exportSheet: "导出 Sprite PNG", trim: "裁透明边界", outlineStroke: "像素描边", resizePanel: "拖拽调整面板宽度", blueprints: "蓝图工作流",
      addLayer: "新建图层", deleteLayer: "删除图层", layerUp: "上移图层", layerDown: "下移图层", toggleVisible: "显示/隐藏",
      play: "播放", onion: "洋葱皮", addFrame: "新增帧", dupFrame: "复制帧", delFrame: "删除帧", duration: "帧时长(ms)",
      customColor: "自定义颜色", addColor: "加入调色板", width: "宽度", height: "高度", frameCount: "帧数", frameDuration: "每帧时长(ms)",
      create: "创建", cancel: "取消", fileName: "文件名", loading: "正在载入…", dirty: "未保存", more: "更多操作",
      askSelect: "框选区域", askFull: "针对全图", ask: "AI", askTitle: "让 AI 调整画面",
      askHint: "AI 会保持像素画风格，只调整你指定的范围。", askEditTitle: "让 AI 改图",
      askEditHint: "AI 会输出像素编辑指令并直接应用到选区，保持像素画风格。",
      askSelection: "选区", askScopeFull: "全图", askApply: "直接改图（应用到画布）",
      askEditWaiting: "等待 AI 返回改图指令…", askEditNoop: "未从 AI 回复中解析到改图指令", askEditTimeout: "等待改图指令超时，请重试",
      askPlaceholder: "描述你想对选区做什么，例如：给角色加一顶红帽子", askSend: "发送",
      askNoSelection: "请先框选区域", askNoConversation: "当前会话不支持提问 AI"
    };
    function pxt(key) { return PX_T[key] ?? key; }

    const PX_DB16 = ["#140c1c", "#442434", "#30346d", "#4e4a4e", "#854c30", "#346524", "#d04648", "#757161", "#597dce", "#d27d2c", "#8595a1", "#6daa2c", "#d2aa99", "#6dc2ca", "#dad45e", "#deeed6"].map((hex, i) => { const n = parseInt(hex.slice(1), 16); return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 255, name: "DB16 #" + i }; });
    const PX_PICO8 = ["#000000", "#1d2b53", "#7e2553", "#008751", "#ab5236", "#5f574f", "#c2c3c7", "#fff1e8", "#ff004d", "#ffa300", "#ffec27", "#00e436", "#29adff", "#83769c", "#ff77a8", "#ffccaa"].map((hex, i) => { const n = parseInt(hex.slice(1), 16); return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 255, name: "PICO-8 #" + i }; });
    function pxDefaultPalette() { return PX_DB16.map((c) => ({ ...c })); }

    function pxMakeInitial() {
      const doc = ASE.newSprite(32, 32, 1, 100, 1);
      doc.palette = pxDefaultPalette();
      return {
        ready: false, loading: false, dirty: false, error: null,
        doc, frame: 0, layer: 0, tool: "pencil",
        color: { r: 0, g: 0, b: 0, a: 255 },
        zoom: 8, brushSize: 1, selection: null, playing: false, onion: false, showNew: false, showBlueprint: false, leftWidth: 180,
        fileName: "sprite.aseprite", savePath: "sprite.aseprite", history: new ASE.History(doc)
      };
    }
    let pxState = pxMakeInitial();
    const pxListeners = new Set();
    function pxSet(patch) { pxState = { ...pxState, ...patch }; pxListeners.forEach((fn) => fn()); }
    function pxUse() {
      return React.useSyncExternalStore(
        (fn) => { pxListeners.add(fn); return () => pxListeners.delete(fn); },
        () => pxState
      );
    }
    function pxClamp() {
      const patch = {};
      if (pxState.frame >= pxState.doc.frames.length) patch.frame = pxState.doc.frames.length - 1;
      if (pxState.layer >= pxState.doc.layers.length) patch.layer = pxState.doc.layers.length - 1;
      if (Object.keys(patch).length > 0) pxSet(patch);
    }
    function pxCommit(mutator, withHistory = true) {
      if (withHistory) pxState.history.snapshot();
      const doc = ASE.cloneDoc(pxState.doc);
      mutator(doc);
      pxSet({ doc, dirty: true });
      pxClamp();
    }

    // ── 文件 I/O ─────────────────────────────────────────────────────────────
    function pxBytesToBase64(bytes) {
      let binary = "";
      const chunk = 0x8000;
      for (let i = 0; i < bytes.length; i += chunk) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
      return btoa(binary);
    }
    function pxSavePathFor(file) {
      const ext = extOf(file);
      if (ext === "ase" || ext === "aseprite") return file;
      const dot = file.lastIndexOf(".");
      return (dot > 0 ? file.slice(0, dot) : file) + ".aseprite";
    }
    function pxLoadImageDoc(blob) {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          try {
            const w = img.naturalWidth, h = img.naturalHeight;
            if (w < 1 || h < 1) throw new Error("empty image");
            if (w * h > 4096 * 4096) throw new Error("image too large");
            const canvas = document.createElement("canvas");
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const idata = ctx.getImageData(0, 0, w, h);
            const doc = ASE.newSprite(w, h, 1, 100, 1);
            doc.cels.set("0:0", { x: 0, y: 0, w, h, data: new Uint8ClampedArray(idata.data) });
            resolve(doc);
          } catch (err) { reject(err); } finally { URL.revokeObjectURL(url); }
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("无法解码该图片")); };
        img.src = url;
      });
    }
    async function pxOpen(root, file) {
      pxSet({ loading: true, error: null });
      try {
        const res = await fetch(assetUrl(root, file));
        if (!res.ok) throw new Error("HTTP " + res.status);
        const ext = extOf(file);
        const savePath = pxSavePathFor(file);
        let doc;
        if (ext === "ase" || ext === "aseprite") {
          const buf = new Uint8Array(await res.arrayBuffer());
          doc = await ASE.parseAseprite(buf);
          for (const [key, cel] of [...doc.cels]) {
            if (cel.w === doc.width && cel.h === doc.height && cel.x === 0 && cel.y === 0) continue;
            const full = new Uint8ClampedArray(doc.width * doc.height * 4);
            for (let y = 0; y < cel.h; y++) for (let x = 0; x < cel.w; x++) {
              const sx = x + cel.x, sy = y + cel.y;
              if (sx < 0 || sx >= doc.width || sy < 0 || sy >= doc.height) continue;
              const si = (y * cel.w + x) * 4, di = (sy * doc.width + sx) * 4;
              full[di] = cel.data[si]; full[di + 1] = cel.data[si + 1]; full[di + 2] = cel.data[si + 2]; full[di + 3] = cel.data[si + 3];
            }
            doc.cels.set(key, { x: 0, y: 0, w: doc.width, h: doc.height, data: full });
          }
        } else {
          doc = await pxLoadImageDoc(await res.blob());
        }
        pxSet({ doc, history: new ASE.History(doc), frame: 0, layer: 0, selection: null, error: null, dirty: false, loading: false, ready: true, fileName: file.split("/").pop(), savePath, playing: false });
      } catch (err) {
        pxSet({ loading: false, error: err instanceof ASE.ASEError ? err.message : String(err?.message ?? err) });
      }
    }
    async function pxSave(root, file, onDirty) {
      const bytes = ASE.serializeAseprite(pxState.doc);
      const base64 = pxBytesToBase64(bytes);
      const target = pxState.savePath || file;
      const value = await getJson(`${API}?op=write-bytes`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ root, path: target, base64 })
      });
      pxSet({ dirty: false, error: null, fileName: target.split("/").pop() });
      onDirty?.(false);
      return value;
    }
    function pxExport(kind) {
      const url = kind === "sheet" ? ASE.sheetToPng(pxState.doc) : ASE.frameToPng(pxState.doc, pxState.frame);
      const stem = pxState.fileName.replace(/\.(asepr?ite|png|jpe?g|webp|bmp)$/i, "");
      const a = document.createElement("a");
      a.href = url;
      a.download = kind === "sheet" ? stem + "-sheet.png" : stem + "-frame" + pxState.frame + ".png";
      a.click();
    }
    function pxRegionToPng(doc, frameIdx, sel, scale) {
      const n = Math.max(1, Math.round(Number(scale) || 8));
      const canvas = document.createElement("canvas");
      canvas.width = sel.w * n; canvas.height = sel.h * n;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      const tmp = document.createElement("canvas");
      tmp.width = doc.width; tmp.height = doc.height;
      const tctx = tmp.getContext("2d");
      const buf = ASE.compositeFrame(doc, frameIdx, new Uint8ClampedArray(doc.width * doc.height * 4));
      tctx.putImageData(new ImageData(new Uint8ClampedArray(buf), doc.width, doc.height), 0, 0);
      ctx.drawImage(tmp, sel.x, sel.y, sel.w, sel.h, 0, 0, sel.w * n, sel.h * n);
      return canvas.toDataURL("image/png");
    }
    function dataUrlToFile(dataUrl, name) {
      const split = dataUrl.indexOf(",");
      const header = split >= 0 ? dataUrl.slice(0, split) : "";
      const payload = split >= 0 ? dataUrl.slice(split + 1) : dataUrl;
      const binary = atob(payload);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const type = (header.match(/data:([^;]+)/) || [])[1] || "image/png";
      return new File([bytes], name, { type });
    }
    function pxHexColor(hex) {
      const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ""));
      if (!m) return null;
      const n = parseInt(m[1], 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 255 };
    }
    function pxParseEditOps(text) {
      if (!text) return null;
      for (let start = 0; start < text.length; start++) {
        if (text[start] !== "[") continue;
        let depth = 0, inStr = false, esc = false, end = -1;
        for (let i = start; i < text.length; i++) {
          const ch = text[i];
          if (inStr) {
            if (esc) esc = false;
            else if (ch === "\\") esc = true;
            else if (ch === '"') inStr = false;
            continue;
          }
          if (ch === '"') { inStr = true; continue; }
          if (ch === "[") depth++;
          else if (ch === "]") { depth--; if (depth === 0) { end = i; break; } }
        }
        if (end < 0) continue;
        try {
          const arr = JSON.parse(text.slice(start, end + 1));
          if (Array.isArray(arr) && arr.length > 0 && arr.some((o) => o && typeof o === "object" && typeof o.op === "string")) return arr;
        } catch (_) {}
        start = end;
      }
      return null;
    }
    function pxImageSet(img, x, y, color) {
      if (x < 0 || x >= img.width || y < 0 || y >= img.height) return false;
      const i = (y * img.width + x) * 4;
      img.data[i] = color.r; img.data[i + 1] = color.g; img.data[i + 2] = color.b; img.data[i + 3] = color.a;
      return true;
    }
    function pxImageLine(img, x0, y0, x1, y1, color, size = 1) {
      const half = Math.max(0, Math.floor((size - 1) / 2));
      let changed = false;
      const plot = (x, y) => { for (let oy = -half; oy <= half; oy++) for (let ox = -half; ox <= half; ox++) if (pxImageSet(img, x + ox, y + oy, color)) changed = true; };
      const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
      let err = dx + dy, x = x0, y = y0;
      while (true) {
        plot(x, y);
        if (x === x1 && y === y1) break;
        const e2 = 2 * err;
        if (e2 >= dy) { err += dy; x += sx; }
        if (e2 <= dx) { err += dx; y += sy; }
      }
      return changed;
    }
    function pxImageRect(img, x0, y0, x1, y1, color, fill) {
      const minX = Math.min(x0, x1), maxX = Math.max(x0, x1), minY = Math.min(y0, y1), maxY = Math.max(y0, y1);
      let changed = false;
      for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) {
        if (fill || x === minX || x === maxX || y === minY || y === maxY) if (pxImageSet(img, x, y, color)) changed = true;
      }
      return changed;
    }
    function pxImageFlood(img, x, y, color) {
      if (x < 0 || x >= img.width || y < 0 || y >= img.height) return false;
      const start = (y * img.width + x) * 4;
      const tr = img.data[start], tg = img.data[start + 1], tb = img.data[start + 2], ta = img.data[start + 3];
      if (tr === color.r && tg === color.g && tb === color.b && ta === color.a) return false;
      const stack = [[x, y]]; let changed = false;
      while (stack.length > 0) {
        const [px, py] = stack.pop();
        if (px < 0 || px >= img.width || py < 0 || py >= img.height) continue;
        const i = (py * img.width + px) * 4;
        if (img.data[i] !== tr || img.data[i + 1] !== tg || img.data[i + 2] !== tb || img.data[i + 3] !== ta) continue;
        img.data[i] = color.r; img.data[i + 1] = color.g; img.data[i + 2] = color.b; img.data[i + 3] = color.a;
        changed = true;
        stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]);
      }
      return changed;
    }
    function pxImageCrop(img, padding) {
      let minX = img.width, minY = img.height, maxX = -1, maxY = -1;
      for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) {
        if (img.data[(y * img.width + x) * 4 + 3] === 0) continue;
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
      if (maxX < 0) return { image: img, changed: false };
      const pad = Math.max(0, Math.min(64, Math.round(Number(padding) || 0)));
      const x0 = Math.max(0, minX - pad), y0 = Math.max(0, minY - pad);
      const x1 = Math.min(img.width - 1, maxX + pad), y1 = Math.min(img.height - 1, maxY + pad);
      const w = x1 - x0 + 1, h = y1 - y0 + 1;
      if (w === img.width && h === img.height && x0 === 0 && y0 === 0) return { image: img, changed: false };
      const data = new Uint8ClampedArray(w * h * 4);
      for (let y = 0; y < h; y++) {
        const src = ((y0 + y) * img.width + x0) * 4, dst = (y * w) * 4;
        data.set(img.data.subarray(src, src + w * 4), dst);
      }
      return { image: { width: w, height: h, data }, changed: true };
    }
    function pxImageOutline(img, thickness, color) {
      const radius = Math.max(1, Math.min(16, Math.round(Number(thickness) || 1)));
      const data = new Uint8ClampedArray(img.data);
      let changed = false;
      for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) {
        const t = (y * img.width + x) * 4;
        if (img.data[t + 3] !== 0) continue;
        let hit = false;
        for (let oy = -radius; oy <= radius && !hit; oy++) for (let ox = -radius; ox <= radius; ox++) {
          if (Math.max(Math.abs(ox), Math.abs(oy)) > radius) continue;
          const nx = x + ox, ny = y + oy;
          if (nx < 0 || nx >= img.width || ny < 0 || ny >= img.height) continue;
          if (img.data[(ny * img.width + nx) * 4 + 3] !== 0) { hit = true; break; }
        }
        if (hit) { data[t] = color.r; data[t + 1] = color.g; data[t + 2] = color.b; data[t + 3] = color.a; changed = true; }
      }
      return { image: { width: img.width, height: img.height, data }, changed };
    }
    function pxSelectionToImage(doc, frame, sel) {
      const buf = ASE.compositeFrame(doc, frame, new Uint8ClampedArray(doc.width * doc.height * 4));
      const data = new Uint8ClampedArray(sel.w * sel.h * 4);
      for (let y = 0; y < sel.h; y++) {
        const src = ((sel.y + y) * doc.width + sel.x) * 4, dst = (y * sel.w) * 4;
        data.set(buf.subarray(src, src + sel.w * 4), dst);
      }
      return { width: sel.w, height: sel.h, data };
    }
    function pxImageToDocInPlace(doc, frame, layer, img, dx, dy) {
      for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) {
        const i = (y * img.width + x) * 4;
        ASE.setPixel(doc, frame, layer, dx + x, dy + y, { r: img.data[i], g: img.data[i + 1], b: img.data[i + 2], a: img.data[i + 3] });
      }
    }
    function pxApplyEditOps(doc, frame, layer, sel, ops) {
      let img = pxSelectionToImage(doc, frame, sel);
      let count = 0;
      const clamp = (v, max) => Math.max(0, Math.min(max, Math.round(Number(v) || 0)));
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        const color = pxHexColor(op.color);
        switch (op.op) {
          case "crop": {
            const r = pxImageCrop(img, op.padding);
            if (r.changed) { img = r.image; count++; }
            break;
          }
          case "outline": {
            if (!color) break;
            const r = pxImageOutline(img, op.thickness, color);
            if (r.changed) { img = r.image; count++; }
            break;
          }
          case "pixel": {
            if (!color) break;
            if (pxImageSet(img, clamp(op.x, img.width - 1), clamp(op.y, img.height - 1), color)) count++;
            break;
          }
          case "line": {
            if (!color) break;
            if (pxImageLine(img, clamp(op.x0, img.width - 1), clamp(op.y0, img.height - 1), clamp(op.x1, img.width - 1), clamp(op.y1, img.height - 1), color, 1)) count++;
            break;
          }
          case "rect": {
            if (!color) break;
            if (pxImageRect(img, clamp(op.x0, img.width - 1), clamp(op.y0, img.height - 1), clamp(op.x1, img.width - 1), clamp(op.y1, img.height - 1), color, op.fill === true)) count++;
            break;
          }
          case "fill": {
            if (!color) break;
            if (pxImageFlood(img, clamp(op.x, img.width - 1), clamp(op.y, img.height - 1), color)) count++;
            break;
          }
        }
      }
      if (img.width === sel.w && img.height === sel.h) {
        pxImageToDocInPlace(doc, frame, layer, img, sel.x, sel.y);
        return { doc, frame, layer, count, resized: false };
      }
      const next = ASE.newSprite(img.width, img.height, 1, doc.frames[frame]?.duration || 100, 1);
      next.palette = doc.palette.map((c) => ({ ...c }));
      pxImageToDocInPlace(next, 0, 0, img, 0, 0);
      return { doc: next, frame: 0, layer: 0, count, resized: true };
    }
    function pxRunImageOps(ops, selOverride) {
      const doc = pxState.doc, frame = pxState.frame, layer = pxState.layer;
      const sel = selOverride || pxState.selection || { x: 0, y: 0, w: doc.width, h: doc.height };
      pxState.history.snapshot();
      const result = pxApplyEditOps(ASE.cloneDoc(doc), frame, layer, sel, ops);
      pxSet({
        doc: result.doc,
        frame: result.resized ? 0 : frame,
        layer: result.resized ? 0 : layer,
        selection: result.resized ? null : pxState.selection,
        dirty: true
      });
      pxClamp();
      return { count: result.count, resized: result.resized };
    }
    function pxTrimTransparent() {
      const r = pxRunImageOps([{ op: "crop", padding: 0 }]);
      pxSet({ error: r.count > 0 ? "已裁剪透明边界" : "选区没有可裁剪的透明空白" });
    }
    function pxOutlineStroke() {
      const r = pxRunImageOps([{ op: "outline", thickness: 1, color: "#000000" }]);
      pxSet({ error: r.count > 0 ? "已添加像素描边" : "选区边缘没有可描边的透明像素" });
    }

    // ── 蓝图工作流引擎 ────────────────────────────────────────────────────────
    const BP_STORAGE_KEY = "veang-workbench:blueprints:v1";
    const BP_MAX_BLUEPRINTS = 64, BP_MAX_NODES = 32, BP_MAX_EDGES = 64;
    const BP_ALLOWED_TYPES = new Set(["input", "crop", "outline", "llm", "output"]);
    function bpNonce() {
      if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
        const v = new Uint32Array(3); crypto.getRandomValues(v);
        return Array.from(v).map((n) => n.toString(36)).join("-");
      }
      return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    }
    function bpText(v, fallback = "", limit = 2400) { return String(v ?? fallback).trim().slice(0, limit); }
    function bpNumber(v, fallback = 0) { const r = Number(v); return Number.isFinite(r) ? r : fallback; }
    function bpColor(v, fallback = [0, 0, 0, 255]) {
      if (Array.isArray(v)) return [0, 1, 2, 3].map((i) => Math.max(0, Math.min(255, Math.round(bpNumber(v[i], fallback[i])))));
      if (typeof v === "string" && /^#[0-9a-f]{6,8}$/i.test(v)) {
        const hex = v.slice(1);
        return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16), hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) : 255];
      }
      return fallback.slice();
    }
    function bpNodeType(node) {
      const raw = bpText(node?.type || node?.op || node?.kind || "input", "input", 30).toLowerCase();
      if (raw === "source" || raw === "input" || raw === "image-input") return "input";
      if (raw === "trim" || raw === "autocrop" || raw === "crop") return "crop";
      if (raw === "border" || raw === "stroke" || raw === "outline") return "outline";
      if (raw === "ai" || raw === "ask" || raw === "llm" || raw === "active") return "llm";
      if (raw === "sink" || raw === "result" || raw === "output") return "output";
      return null;
    }
    const BP_NODE_LABEL = { input: "输入选区", crop: "裁剪透明边界", outline: "像素描边", llm: "AI 局部处理", output: "输出" };
    function bpNodeTitle(type) { return BP_NODE_LABEL[type] || type; }
    function bpNormalizeNode(raw, index) {
      const type = bpNodeType(raw);
      if (!type || !BP_ALLOWED_TYPES.has(type)) return null;
      const id = bpText(raw?.id || type + "-" + (index + 1), type + "-" + (index + 1), 80).replace(/[^a-zA-Z0-9_-]/g, "-");
      const input = raw?.params && typeof raw.params === "object" ? raw.params : {};
      const params = {};
      if (type === "crop") params.padding = Math.max(0, Math.min(64, Math.round(bpNumber(input.padding, 0))));
      if (type === "outline") { params.thickness = Math.max(1, Math.min(16, Math.round(bpNumber(input.thickness, 1)))); params.color = bpColor(input.color); }
      if (type === "llm") params.prompt = bpText(input.prompt || raw?.prompt || "请保持像素画风格，对这张图做局部优化。", "请保持像素画风格，对这张图做局部优化。");
      const position = raw?.position && typeof raw.position === "object" ? raw.position : raw;
      return {
        id, type,
        label: bpText(raw?.label || raw?.name || BP_NODE_LABEL[type], type, 80),
        mode: type === "llm" ? "active" : "passive",
        params,
        position: { x: Math.max(12, Math.min(1400, bpNumber(position?.x, 24 + index * 190))), y: Math.max(12, Math.min(800, bpNumber(position?.y, 36 + (index % 2) * 88))) }
      };
    }
    function bpNormalizeEdge(raw) {
      const from = typeof raw?.from === "object" ? raw.from?.node || raw.from?.id : raw?.from;
      const to = typeof raw?.to === "object" ? raw.to?.node || raw.to?.id : raw?.to;
      if (!from || !to) return null;
      return { from: bpText(from, "", 80), to: bpText(to, "", 80) };
    }
    function bpNormalize(raw) {
      if (!raw || typeof raw !== "object") return null;
      const rawNodes = Array.isArray(raw.nodes) ? raw.nodes.slice(0, BP_MAX_NODES) : [];
      const nodes = []; const ids = new Set();
      for (let i = 0; i < rawNodes.length; i++) {
        const node = bpNormalizeNode(rawNodes[i], i);
        if (!node || ids.has(node.id)) continue;
        ids.add(node.id); nodes.push(node);
      }
      if (nodes.length === 0 || !nodes.some((n) => n.type === "input") || !nodes.some((n) => n.type === "output")) return null;
      const edges = []; const seen = new Set();
      for (const edge of (Array.isArray(raw.edges) ? raw.edges : []).slice(0, BP_MAX_EDGES)) {
        const n = bpNormalizeEdge(edge);
        if (!n || !ids.has(n.from) || !ids.has(n.to) || n.from === n.to) continue;
        const key = n.from + ">" + n.to;
        if (seen.has(key)) continue;
        seen.add(key); edges.push(n);
      }
      const hasActive = nodes.some((n) => n.type === "llm");
      return {
        schemaVersion: 1,
        id: bpText(raw.id, "blueprint-" + bpNonce(), 100).replace(/[^a-zA-Z0-9_-]/g, "-"),
        requestId: bpText(raw.requestId, "", 100),
        name: bpText(raw.name || raw.title, "未命名蓝图", 80),
        description: bpText(raw.description, hasActive ? "需要当前会话 AI 的可复用工作流。" : "不需要 AI 的本地像素工作流。", 360),
        mode: hasActive || raw.mode === "active" ? "active" : "passive",
        nodes, edges,
        createdAt: bpNumber(raw.createdAt, Date.now()),
        updatedAt: Date.now()
      };
    }
    function bpDefaultBlueprints() {
      const make = (id, name, description, nodes, edges) => bpNormalize({ id, name, description, nodes, edges });
      return [
        make("crop-selection", "裁剪透明边界", "自动移除选区四周透明空白。", [
          { id: "input", type: "input", position: { x: 24, y: 60 } },
          { id: "crop", type: "crop", params: { padding: 0 }, position: { x: 230, y: 60 } },
          { id: "output", type: "output", position: { x: 436, y: 60 } }
        ], [{ from: "input", to: "crop" }, { from: "crop", to: "output" }]),
        make("outline-selection", "像素描边", "沿透明边缘生成一圈不覆盖原图的像素描边。", [
          { id: "input", type: "input", position: { x: 24, y: 60 } },
          { id: "outline", type: "outline", params: { thickness: 1, color: "#000000" }, position: { x: 230, y: 60 } },
          { id: "output", type: "output", position: { x: 436, y: 60 } }
        ], [{ from: "input", to: "outline" }, { from: "outline", to: "output" }]),
        make("crop-outline", "裁剪并描边", "先裁剪透明边界，再对结果做像素描边。", [
          { id: "input", type: "input", position: { x: 24, y: 60 } },
          { id: "crop", type: "crop", params: { padding: 0 }, position: { x: 210, y: 24 } },
          { id: "outline", type: "outline", params: { thickness: 1, color: "#000000" }, position: { x: 416, y: 96 } },
          { id: "output", type: "output", position: { x: 622, y: 60 } }
        ], [{ from: "input", to: "crop" }, { from: "crop", to: "outline" }, { from: "outline", to: "output" }]),
        make("ai-pixel-polish", "AI 像素润色", "把当前选区交给当前会话 AI，按蓝图提示进行局部处理。", [
          { id: "input", type: "input", position: { x: 24, y: 60 } },
          { id: "llm", type: "llm", params: { prompt: "请在不改变构图和像素风格的前提下，优化这张局部像素图。" }, position: { x: 230, y: 60 } },
          { id: "output", type: "output", position: { x: 436, y: 60 } }
        ], [{ from: "input", to: "llm" }, { from: "llm", to: "output" }])
      ].filter(Boolean);
    }
    const bpListeners = new Set();
    let bpList = [];
    let bpRevision = 0;
    let bpSnapshot = { list: bpList, revision: bpRevision };
    function bpReadLibrary() {
      try {
        if (typeof localStorage === "undefined") return [];
        const parsed = JSON.parse(localStorage.getItem(BP_STORAGE_KEY) || "[]");
        const list = Array.isArray(parsed) ? parsed : parsed?.blueprints;
        return Array.isArray(list) ? list.map(bpNormalize).filter(Boolean).slice(0, BP_MAX_BLUEPRINTS) : [];
      } catch (_) { return []; }
    }
    function bpWriteLibrary() { try { if (typeof localStorage !== "undefined") localStorage.setItem(BP_STORAGE_KEY, JSON.stringify(bpList)); } catch (_) {} }
    function bpPublish() { bpRevision++; bpSnapshot = { list: bpList, revision: bpRevision }; bpWriteLibrary(); for (const fn of bpListeners) fn(); }
    bpList = bpReadLibrary();
    if (bpList.length === 0) { bpList = bpDefaultBlueprints(); bpWriteLibrary(); }
    bpSnapshot = { list: bpList, revision: bpRevision };
    function useBlueprints() {
      return React.useSyncExternalStore(
        (fn) => { bpListeners.add(fn); return () => bpListeners.delete(fn); },
        () => bpSnapshot
      );
    }
    function bpUpsert(raw) {
      const bp = bpNormalize(raw);
      if (!bp) throw new Error("蓝图格式无效或没有可执行节点");
      const i = bpList.findIndex((item) => item.id === bp.id);
      if (i >= 0) bpList = bpList.map((item, idx) => idx === i ? bp : item);
      else bpList = [...bpList, bp].slice(-BP_MAX_BLUEPRINTS);
      bpPublish();
      return bp;
    }
    function bpRemove(id) {
      const next = bpList.filter((item) => item.id !== id);
      if (next.length === bpList.length) return false;
      bpList = next; bpPublish(); return true;
    }
    function bpImportText(source) {
      const parsed = JSON.parse(source);
      const list = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.blueprints) ? parsed.blueprints : [parsed];
      const imported = list.map(bpNormalize).filter(Boolean);
      if (imported.length === 0) throw new Error("文件中没有有效蓝图");
      for (const bp of imported) bpUpsert(bp);
      return imported;
    }
    function bpExportText() { return JSON.stringify({ schemaVersion: 1, blueprints: bpList }, null, 2); }
    function bpPrompt(task, requestId) {
      return [
        "你是 Veang-Workbench 的蓝图设计器。请把下面的像素画任务设计成一个可复用的 ComfyUI 风格节点工作流。",
        "请求 ID：" + requestId,
        "相关标记：VEANG_BLUEPRINT:" + requestId + "；JSON 的 requestId 必须原样等于该请求 ID。",
        "用户任务：" + bpText(task, "请设计一个像素画处理工作流。", 1200),
        "",
        "安全约束：只允许使用 input、crop、outline、llm、output 五种节点；禁止输出 JavaScript、函数、脚本或任意代码。",
        "crop 参数只能有 padding（0 到 64 的整数）；outline 参数只能有 thickness（1 到 16 的整数）和 color（#RRGGBB 或 #RRGGBBAA）；llm 参数只能有 prompt。",
        "如果不需要模型，把 mode 设为 passive；只要包含 llm 节点就设为 active。",
        "请在回答最后输出唯一一个 dsh-blueprint 代码块，代码块内必须是完整 JSON。",
        "JSON 结构：{schemaVersion:1,requestId:\"" + requestId + "\",id,name,description,mode,nodes:[{id,type,label,params,position:{x,y}}],edges:[{from,to}]}。",
        "蓝图必须包含 input 和 output，并保证 edges 形成从 input 到 output 的有向图。"
      ].join("\n");
    }
    function bpExtractFromText(source) {
      const textSource = String(source || "").slice(0, 1024 * 1024);
      const results = [];
      const fence = "```";
      const pattern = new RegExp(fence + "(?:dsh-blueprint|blueprint(?:-json)?|json(?:\\s+dsh-blueprint)?)\\s*([\\s\\S]*?)" + fence, "gi");
      let match;
      while ((match = pattern.exec(textSource)) !== null) {
        try {
          const parsed = JSON.parse(match[1].trim());
          const bp = bpNormalize(parsed);
          if (bp) results.push(bp);
        } catch (_) {}
      }
      return results;
    }
    function bpExecute(blueprint, image) {
      const normalized = bpNormalize(blueprint);
      if (!normalized) return { ok: false, error: "蓝图格式无效" };
      const nodes = normalized.nodes;
      const byId = new Map(nodes.map((n) => [n.id, n]));
      const incoming = new Map(nodes.map((n) => [n.id, []]));
      for (const edge of normalized.edges) if (incoming.has(edge.to) && byId.has(edge.from)) incoming.get(edge.to).push(edge.from);
      const values = new Map();
      const remaining = new Set(nodes.map((n) => n.id));
      let output = null;
      for (let pass = 0; pass < nodes.length + 2 && remaining.size > 0; pass++) {
        let progressed = false;
        for (const node of nodes) {
          if (!remaining.has(node.id)) continue;
          const parents = incoming.get(node.id) || [];
          if (parents.some((p) => !values.has(p))) continue;
          const input = parents.length > 0 ? values.get(parents[0]) : image;
          if (!input) return { ok: false, error: "节点 " + node.label + " 没有输入图像" };
          let value = input;
          if (node.type === "crop") value = pxImageCrop(input, node.params.padding).image;
          else if (node.type === "outline") {
            const c = node.params.color || [0, 0, 0, 255];
            value = pxImageOutline(input, node.params.thickness, { r: c[0], g: c[1], b: c[2], a: c[3] }).image;
          } else if (node.type === "llm") return { ok: true, kind: "active", image: input, node, prompt: bpText(node.params.prompt, "请保持像素画风格，对这张局部图像做局部优化。", 2400) };
          else if (node.type === "output") output = input;
          values.set(node.id, value);
          remaining.delete(node.id);
          progressed = true;
        }
        if (!progressed) break;
      }
      if (remaining.size > 0) return { ok: false, error: "蓝图连线存在循环或断开的节点" };
      return { ok: true, kind: "passive", image: output || values.get(nodes[nodes.length - 1].id) || image };
    }
    function bpImageToPng(image, scale = 8) {
      const factor = Math.max(1, Math.floor(bpNumber(scale, 8)));
      const canvas = document.createElement("canvas");
      canvas.width = image.width; canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.putImageData(new ImageData(new Uint8ClampedArray(image.data), image.width, image.height), 0, 0);
      if (factor === 1) return canvas.toDataURL("image/png");
      const scaled = document.createElement("canvas");
      scaled.width = image.width * factor; scaled.height = image.height * factor;
      const sc = scaled.getContext("2d");
      sc.imageSmoothingEnabled = false;
      sc.drawImage(canvas, 0, 0, scaled.width, scaled.height);
      return scaled.toDataURL("image/png");
    }
    async function bpRunBlueprint(blueprint) {
      const doc = pxState.doc, frame = pxState.frame, layer = pxState.layer;
      const sel = pxState.selection || { x: 0, y: 0, w: doc.width, h: doc.height };
      const image = pxSelectionToImage(doc, frame, sel);
      const result = bpExecute(blueprint, image);
      if (!result.ok) throw new Error(result.error);
      if (result.kind === "active") {
        if (typeof serviceBridge.askConversation !== "function") throw new Error("当前会话不可用，无法发送给 AI");
        const file = dataUrlToFile(bpImageToPng(result.image, 8), "blueprint-" + blueprint.id + "-frame" + frame + ".png");
        const prompt = [
          "这是一个主动蓝图工作流的输入图像。",
          "蓝图名称：" + blueprint.name,
          "节点提示：" + result.prompt,
          "请只处理附图对应的局部内容，保持像素画风格；不要修改选区外内容。"
        ].join("\n");
        await serviceBridge.askConversation(file, prompt);
        return { active: true };
      }
      pxState.history.snapshot();
      const base = ASE.cloneDoc(doc);
      if (result.image.width === sel.w && result.image.height === sel.h) {
        pxImageToDocInPlace(base, frame, layer, result.image, sel.x, sel.y);
        pxSet({ doc: base, dirty: true });
      } else {
        const next = ASE.newSprite(result.image.width, result.image.height, 1, doc.frames[frame]?.duration || 100, 1);
        next.palette = doc.palette.map((c) => ({ ...c }));
        pxImageToDocInPlace(next, 0, 0, result.image, 0, 0);
        pxSet({ doc: next, frame: 0, layer: 0, selection: null, dirty: true });
      }
      pxClamp();
      return { active: false };
    }

    // ── 工具常量与辅助 ────────────────────────────────────────────────────────
    const PX_TOOL_IDS = ["pencil", "eraser", "fill", "picker", "line", "rect"];
    const PX_ICON_SVG = { className: "ase-icon", width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
    const PX_ICONS = {
      pencil: [["path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }]],
      eraser: [["path", { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }], ["path", { d: "M22 21H7" }], ["path", { d: "m5 11 9 9" }]],
      fill: [["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }], ["path", { d: "m5 2 5 5" }], ["path", { d: "M2 13h15" }], ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]],
      picker: [["path", { d: "m2 22 1-1h3l9-9" }], ["path", { d: "M3 21v-3l9-9" }], ["path", { d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" }]],
      line: [["line", { x1: 4, y1: 13, x2: 13, y2: 4 }], ["circle", { cx: 4, cy: 13, r: 1.3, fill: "currentColor", stroke: "none" }], ["circle", { cx: 13, cy: 4, r: 1.3, fill: "currentColor", stroke: "none" }]],
      rect: [["rect", { x: 4, y: 4, width: 16, height: 16, rx: 1 }]],
      scan: [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]],
      sparkles: [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }]],
      brush: [["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }], ["path", { d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" }]],
      undo: [["path", { d: "M9 14 4 9l5-5" }], ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11" }]],
      redo: [["path", { d: "m15 14 5-5-5-5" }], ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13" }]],
      zoomOut: [["line", { x1: 5, y1: 12, x2: 19, y2: 12 }]],
      zoomIn: [["line", { x1: 12, y1: 5, x2: 12, y2: 19 }], ["line", { x1: 5, y1: 12, x2: 19, y2: 12 }]],
      magnifier: [["circle", { cx: 11, cy: 11, r: 7 }], ["line", { x1: 21, y1: 21, x2: 16.2, y2: 16.2 }]],
      more: [["circle", { cx: 5, cy: 12, r: 1, fill: "currentColor", stroke: "none" }], ["circle", { cx: 12, cy: 12, r: 1, fill: "currentColor", stroke: "none" }], ["circle", { cx: 19, cy: 12, r: 1, fill: "currentColor", stroke: "none" }]],
      reload: [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }]],
      save: [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]],
      new: [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 15h6" }], ["path", { d: "M6 12v6" }]],
      exportFrame: [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { points: "7 10 12 15 17 10" }], ["line", { x1: 12, y1: 15, x2: 12, y2: 3 }]],
      exportSheet: [["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }], ["circle", { cx: 12, cy: 8, r: 2 }], ["rect", { x: 6, y: 2, width: 16, height: 16, rx: 2 }]],
      plus: [["line", { x1: 12, y1: 5, x2: 12, y2: 19 }], ["line", { x1: 5, y1: 12, x2: 19, y2: 12 }]],
      x: [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]],
      eye: [["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }], ["circle", { cx: 12, cy: 12, r: 3 }]],
      eyeOff: [["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24" }], ["path", { d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }], ["path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }], ["line", { x1: 2, y1: 2, x2: 22, y2: 22 }]],
      arrowUp: [["path", { d: "m5 12 7-7 7 7" }], ["path", { d: "M12 19V5" }]],
      arrowDown: [["path", { d: "m19 12-7 7-7-7" }], ["path", { d: "M12 5v14" }]],
      play: [["polygon", { points: "6 3 20 12 6 21 6 3", fill: "currentColor", stroke: "none" }]],
      pause: [["rect", { x: 6, y: 4, width: 4, height: 16, rx: 1, fill: "currentColor", stroke: "none" }], ["rect", { x: 14, y: 4, width: 4, height: 16, rx: 1, fill: "currentColor", stroke: "none" }]],
      copy: [["rect", { x: 8, y: 8, width: 12, height: 12, rx: 2 }], ["path", { d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" }]],
      layers: [["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }], ["path", { d: "m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" }], ["path", { d: "m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" }]],
      chevronDown: [["path", { d: "m6 9 6 6 6-6" }]],
      image: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 2 }], ["circle", { cx: 9, cy: 9, r: 2 }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]],
      wand: [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" }], ["path", { d: "m14 7 3 3" }], ["path", { d: "M5 6v4" }], ["path", { d: "M19 14v4" }], ["path", { d: "M10 2v2" }], ["path", { d: "M7 8H3" }], ["path", { d: "M21 16h-4" }], ["path", { d: "M11 3H9" }]],
      crop: [["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }], ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]],
      outline: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 1 }]],
      workflow: [["rect", { width: 8, height: 8, x: 3, y: 3, rx: 2 }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { width: 8, height: 8, x: 13, y: 13, rx: 2 }]],
    };
    function PXIcon({ name }) {
      const shapes = PX_ICONS[name] || [];
      return h("svg", PX_ICON_SVG, shapes.map(([tag, attrs], i) => h(tag, { key: i, ...attrs })));
    }
    const PX_ZOOM_STEPS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64];
    const PX_BRUSH_SIZES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
    function pxZoomStep(value, direction) {
      const current = Number(value) || 1;
      let index = PX_ZOOM_STEPS.findIndex((n) => n >= current);
      if (index < 0) index = PX_ZOOM_STEPS.length - 1;
      if (PX_ZOOM_STEPS[index] !== current && direction < 0) index--;
      return PX_ZOOM_STEPS[Math.max(0, Math.min(PX_ZOOM_STEPS.length - 1, index + (direction > 0 ? 1 : direction < 0 ? -1 : 0)))];
    }
    function pxClampBrush(value) { return Math.max(1, Math.min(32, Math.round(Number(value) || 1))); }
    function pxSelectionFromPoints(x0, y0, x1, y1, width, height) {
      const left = Math.max(0, Math.min(width - 1, Math.min(x0, x1)));
      const top = Math.max(0, Math.min(height - 1, Math.min(y0, y1)));
      const right = Math.max(left, Math.min(width - 1, Math.max(x0, x1)));
      const bottom = Math.max(top, Math.min(height - 1, Math.max(y0, y1)));
      return { x: left, y: top, w: right - left + 1, h: bottom - top + 1 };
    }

    // ── AI 选区问询 ───────────────────────────────────────────────────────────
    function PixelAskDialog({ selection, full, onClose, onSubmit }) {
      const [prompt, setPrompt] = React.useState("");
      const [applyEdit, setApplyEdit] = React.useState(false);
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState(null);
      const submit = async () => {
        const value = prompt.trim();
        if (!value || busy) return;
        setBusy(true); setError(null);
        try { await onSubmit(value, applyEdit); onClose(); }
        catch (err) { setError(String(err?.message ?? err)); }
        finally { setBusy(false); }
      };
      return h("div", { className: "ase-modal" },
        h("div", { className: "ase-modal-box ase-ask-box" },
          h("div", { className: "ase-modal-title" }, applyEdit ? pxt("askEditTitle") : pxt("askTitle")),
          h("div", { className: "ase-ask-hint" }, applyEdit ? pxt("askEditHint") : pxt("askHint")),
          h("div", { className: "ase-ask-selection" }, (full ? pxt("askScopeFull") : pxt("askSelection")) + ": " + selection.w + "×" + selection.h + (full ? "" : " @ (" + selection.x + "," + selection.y + ")")),
          h("label", { className: "ase-ask-apply" },
            h("input", { type: "checkbox", checked: applyEdit, onChange: (e) => setApplyEdit(e.target.checked) }),
            h("span", {}, pxt("askApply"))
          ),
          h("textarea", { className: "ase-ask-textarea", value: prompt, autoFocus: true, placeholder: pxt("askPlaceholder"), onChange: (e) => setPrompt(e.target.value), onKeyDown: (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") void submit(); } }),
          error ? h("div", { className: "ase-ask-error" }, error) : null,
          h("div", { className: "ase-modal-actions" },
            h("button", { type: "button", className: "ase-btn", disabled: busy, onClick: onClose }, pxt("cancel")),
            h("button", { type: "button", className: "ase-btn ase-btn-primary", disabled: busy || !prompt.trim(), onClick: () => void submit() }, busy ? "…" : pxt("askSend"))
          )
        )
      );
    }

    // ── 蓝图工作流 UI ─────────────────────────────────────────────────────────
    function bpNodePosition(node, index) { return node.position || { x: 24 + index * 190, y: 36 + (index % 2) * 88 }; }
    function bpColorHex(value) {
      const rgba = Array.isArray(value) ? value : [0, 0, 0, 255];
      return "#" + [0, 1, 2].map((i) => Math.max(0, Math.min(255, Math.round(Number(rgba[i]) || 0))).toString(16).padStart(2, "0")).join("");
    }
    function PixelBlueprintNodeControls({ node, onPatch }) {
      const stop = (e) => e.stopPropagation();
      if (node.type === "crop") return h("label", { className: "ase-bp-control", onPointerDown: stop },
        "留白",
        h("input", { type: "number", min: 0, max: 64, value: node.params.padding, onChange: (e) => onPatch({ padding: Math.max(0, Math.min(64, Number(e.target.value) || 0)) }) })
      );
      if (node.type === "outline") return h("div", { className: "ase-bp-control-row", onPointerDown: stop },
        h("label", { className: "ase-bp-control" }, "厚度", h("input", { type: "number", min: 1, max: 16, value: node.params.thickness, onChange: (e) => onPatch({ thickness: Math.max(1, Math.min(16, Number(e.target.value) || 1)) }) })),
        h("input", { type: "color", value: bpColorHex(node.params.color), title: "描边颜色", onChange: (e) => { const n = parseInt(e.target.value.slice(1), 16); onPatch({ color: [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255] }); } })
      );
      if (node.type === "llm") return h("textarea", { className: "ase-bp-prompt", value: node.params.prompt, rows: 2, onPointerDown: stop, onChange: (e) => onPatch({ prompt: e.target.value }) });
      return null;
    }
    function PixelBlueprintGraph({ blueprint, onChange }) {
      const [positions, setPositions] = React.useState(() => Object.fromEntries(blueprint.nodes.map((node, index) => [node.id, bpNodePosition(node, index)])));
      const drag = React.useRef(null);
      const port = React.useRef(null);
      const [portHint, setPortHint] = React.useState("");
      React.useEffect(() => {
        setPositions(Object.fromEntries(blueprint.nodes.map((node, index) => [node.id, bpNodePosition(node, index)])));
        port.current = null; setPortHint("");
      }, [blueprint.id]);
      const endDrag = () => {
        const active = drag.current;
        if (!active) return;
        drag.current = null;
        window.removeEventListener("pointermove", moveDrag);
        window.removeEventListener("pointerup", endDrag);
        if (!active.position) return;
        onChange({ ...blueprint, nodes: blueprint.nodes.map((node) => node.id === active.id ? { ...node, position: active.position } : node) });
      };
      const moveDrag = (e) => {
        const active = drag.current;
        if (!active) return;
        e.preventDefault();
        active.position = { x: Math.max(12, active.start.x + e.clientX - active.x), y: Math.max(12, active.start.y + e.clientY - active.y) };
        setPositions((previous) => ({ ...previous, [active.id]: active.position }));
      };
      const beginDrag = (e, node) => {
        if (e.target?.closest?.("button")) return;
        e.preventDefault();
        const position = positions[node.id] || bpNodePosition(node, 0);
        drag.current = { id: node.id, x: e.clientX, y: e.clientY, start: position, position };
        window.addEventListener("pointermove", moveDrag, { passive: false });
        window.addEventListener("pointerup", endDrag);
      };
      const choosePort = (nodeId, side) => {
        const chosen = port.current;
        if (!chosen) {
          port.current = { nodeId, side };
          setPortHint(side === "out" ? "已选择输出端口，请点击另一个节点的输入端口。" : "已选择输入端口，请点击另一个节点的输出端口。");
          return;
        }
        if (chosen.nodeId === nodeId || chosen.side === side) { port.current = null; setPortHint(""); return; }
        const from = chosen.side === "out" ? chosen.nodeId : nodeId;
        const to = chosen.side === "in" ? chosen.nodeId : nodeId;
        const exists = blueprint.edges.some((edge) => edge.from === from && edge.to === to);
        port.current = null;
        setPortHint(exists ? "这条连线已经存在。" : "连线已添加。");
        if (!exists) onChange({ ...blueprint, edges: [...blueprint.edges, { from, to }] });
      };
      React.useEffect(() => () => {
        window.removeEventListener("pointermove", moveDrag);
        window.removeEventListener("pointerup", endDrag);
      }, []);
      const maxX = Math.max(760, ...blueprint.nodes.map((node, index) => (positions[node.id] || bpNodePosition(node, index)).x + 190));
      const maxY = Math.max(280, ...blueprint.nodes.map((node, index) => (positions[node.id] || bpNodePosition(node, index)).y + 112));
      const byId = new Map(blueprint.nodes.map((node) => [node.id, node]));
      return h("div", { className: "ase-bp-graph-wrap" },
        h("div", { className: "ase-bp-graph-hint" }, portHint || "拖动节点标题移动；点击输出端口，再点击输入端口创建连线。"),
        h("div", { className: "ase-bp-graph", style: { width: maxX, height: maxY } },
          h("svg", { className: "ase-bp-edges", width: maxX, height: maxY, viewBox: "0 0 " + maxX + " " + maxY },
            blueprint.edges.map((edge, index) => {
              const fromNode = byId.get(edge.from), toNode = byId.get(edge.to);
              if (!fromNode || !toNode) return null;
              const from = positions[fromNode.id] || bpNodePosition(fromNode, 0);
              const to = positions[toNode.id] || bpNodePosition(toNode, 0);
              const x1 = from.x + 172, y1 = from.y + 48, x2 = to.x + 8, y2 = to.y + 48;
              return h("path", { key: index, d: "M " + x1 + " " + y1 + " C " + (x1 + 48) + " " + y1 + " " + (x2 - 48) + " " + y2 + " " + x2 + " " + y2, className: "ase-bp-edge" });
            })
          ),
          blueprint.nodes.map((node, index) => {
            const position = positions[node.id] || bpNodePosition(node, index);
            return h("div", {
              key: node.id,
              className: "ase-bp-node ase-bp-node-" + node.mode,
              style: { left: position.x, top: position.y },
              onPointerDown: (e) => beginDrag(e, node)
            },
              h("button", { type: "button", className: "ase-bp-port ase-bp-port-in", title: "输入端口", onClick: (e) => { e.stopPropagation(); choosePort(node.id, "in"); } }, "◀"),
              h("div", { className: "ase-bp-node-head" },
                h("span", { className: "ase-bp-node-type" }, node.mode === "active" ? "主动" : "被动"),
                h("strong", {}, node.label || bpNodeTitle(node.type))
              ),
              h("div", { className: "ase-bp-node-body" },
                h("div", { className: "ase-bp-node-summary" }, node.type === "llm" ? node.params.prompt : bpNodeTitle(node.type)),
                h(PixelBlueprintNodeControls, { node, onPatch: (patch) => onChange({ ...blueprint, nodes: blueprint.nodes.map((item) => item.id === node.id ? { ...item, params: { ...item.params, ...patch } } : item) }) })
              ),
              h("button", { type: "button", className: "ase-bp-port ase-bp-port-out", title: "输出端口", onClick: (e) => { e.stopPropagation(); choosePort(node.id, "out"); } }, "▶")
            );
          })
        )
      );
    }
    function PixelBlueprintCreateDialog({ onClose, onSubmit }) {
      const [task, setTask] = React.useState("");
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState("");
      const submit = async () => {
        if (!task.trim()) return;
        setBusy(true); setError("");
        try { await onSubmit(task.trim()); onClose(); }
        catch (err) { setError(String(err?.message || err)); }
        finally { setBusy(false); }
      };
      return h("div", { className: "ase-bp-create-overlay" },
        h("div", { className: "ase-modal-box ase-bp-create-box" },
          h("div", { className: "ase-modal-title" }, "AI 创建蓝图"),
          h("div", { className: "ase-ask-hint" }, "描述一项完整的像素处理任务，AI 会生成节点、参数和连线，并自动保存到蓝图库。"),
          h("textarea", { className: "ase-ask-textarea", value: task, autoFocus: true, placeholder: "例如：先裁剪透明边界，再用深色像素描边；不要调用 AI。", onChange: (e) => setTask(e.target.value), onKeyDown: (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") void submit(); } }),
          error ? h("div", { className: "ase-ask-error" }, error) : null,
          h("div", { className: "ase-modal-actions" },
            h("button", { type: "button", className: "ase-btn", disabled: busy, onClick: onClose }, pxt("cancel")),
            h("button", { type: "button", className: "ase-btn ase-btn-primary", disabled: busy || !task.trim(), onClick: () => void submit() }, busy ? "…" : "发送给 AI")
          )
        )
      );
    }
    function PixelBlueprintPanel({ onClose }) {
      const library = useBlueprints();
      const [selectedId, setSelectedId] = React.useState(library.list[0]?.id || "");
      const [createOpen, setCreateOpen] = React.useState(false);
      const [status, setStatus] = React.useState("");
      const [pending, setPending] = React.useState(null);
      const pendingTimer = React.useRef(null);
      React.useEffect(() => {
        if (!library.list.some((item) => item.id === selectedId)) setSelectedId(library.list[0]?.id || "");
      }, [library.revision, selectedId]);
      const selected = library.list.find((item) => item.id === selectedId) || library.list[0];
      const update = (next) => {
        try { const saved = bpUpsert(next); setSelectedId(saved.id); return saved; }
        catch (err) { setStatus(String(err?.message || err)); return null; }
      };
      const run = async () => {
        if (!selected) return;
        setStatus("");
        try {
          const r = await bpRunBlueprint(selected);
          setStatus(r.active ? "已发送到当前会话 AI。" : "被动蓝图已应用。");
        } catch (err) { setStatus(String(err?.message || err)); }
      };
      const exportLibrary = () => {
        const blob = new Blob([bpExportText()], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "veang-blueprints.json"; a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      };
      const importLibrary = async (file) => {
        try {
          const imported = bpImportText(await file.text());
          setSelectedId(imported[0].id);
          setStatus("已自动导入 " + imported.length + " 个蓝图。");
        } catch (err) { setStatus("导入失败：" + String(err?.message || err)); }
      };
      const deleteSelected = () => {
        if (!selected) return;
        bpRemove(selected.id);
        setStatus("已删除蓝图。");
      };
      const askCreate = async (task) => {
        if (typeof serviceBridge.askConversation !== "function") throw new Error("当前会话不可用，无法请求 AI 创建蓝图");
        const requestId = bpNonce();
        const baseline = typeof serviceBridge.readAssistantText === "function" ? serviceBridge.readAssistantText() : "";
        setStatus("已发送蓝图设计请求，等待 AI 返回…");
        await serviceBridge.askConversation(null, bpPrompt(task, requestId));
        setPending({ requestId, baseline, elapsed: 0 });
      };
      React.useEffect(() => {
        if (!pending) return;
        pendingTimer.current = setInterval(() => {
          const next = { ...pending, elapsed: pending.elapsed + 1500 };
          if (next.elapsed > 90000) {
            clearInterval(pendingTimer.current);
            setPending(null);
            setStatus("等待 AI 返回蓝图超时，请重试。");
            return;
          }
          if (typeof serviceBridge.readAssistantText !== "function") return;
          const text = serviceBridge.readAssistantText();
          if (!text || text === pending.baseline) return;
          const matches = bpExtractFromText(text).filter((bp) => bp.requestId === pending.requestId);
          if (matches.length === 0) return;
          clearInterval(pendingTimer.current);
          setPending(null);
          for (const bp of matches) bpUpsert(bp);
          setSelectedId(matches[0].id);
          setStatus("AI 已创建蓝图：" + matches[0].name);
        }, 1500);
        return () => { if (pendingTimer.current) clearInterval(pendingTimer.current); };
      }, [pending]);
      return h("div", { className: "ase-modal ase-blueprint-modal" },
        h("div", { className: "ase-modal-box ase-blueprint-box" },
          h("div", { className: "ase-blueprint-head" },
            h("div", {}, h("strong", {}, "蓝图工作流"), h("span", { className: "ase-bp-subtitle" }, " · ComfyUI 风格节点复用")),
            h("div", { className: "ase-tool-group" },
              h("button", { type: "button", className: "ase-btn ase-mini", title: "AI 创建蓝图", onClick: () => setCreateOpen(true) }, h(PXIcon, { name: "sparkles" }), h("span", {}, " AI 创建")),
              h("button", { type: "button", className: "ase-btn ase-mini", title: "导出蓝图库", onClick: exportLibrary }, h(PXIcon, { name: "exportSheet" })),
              h("label", { className: "ase-btn ase-mini", title: "导入蓝图库" }, h(PXIcon, { name: "reload" }), h("input", { type: "file", accept: ".json,application/json", style: { display: "none" }, onChange: (e) => { const file = e.target.files?.[0]; if (file) void importLibrary(file); e.target.value = ""; } })),
              h("button", { type: "button", className: "ase-btn ase-mini", onClick: onClose }, h(PXIcon, { name: "x" }))
            )
          ),
          h("div", { className: "ase-blueprint-layout" },
            h("div", { className: "ase-bp-library" },
              h("div", { className: "ase-panel-head" }, "我的蓝图", h("span", { className: "ase-bp-count" }, String(library.list.length))),
              h("div", { className: "ase-bp-library-list" }, library.list.map((item) =>
                h("button", { key: item.id, type: "button", className: "ase-bp-library-item" + (item.id === selected?.id ? " ase-active" : ""), onClick: () => setSelectedId(item.id) },
                  h("span", { className: "ase-bp-library-mode ase-bp-library-mode-" + item.mode }, item.mode === "active" ? "主动" : "被动"),
                  h("strong", {}, item.name),
                  h("small", {}, item.description)
                )
              ))
            ),
            h("div", { className: "ase-bp-workbench" }, selected
              ? h(React.Fragment, {},
                  h("div", { className: "ase-bp-workbench-head" },
                    h("div", {}, h("strong", {}, selected.name), h("div", { className: "ase-bp-description" }, selected.description)),
                    h("div", { className: "ase-tool-group" },
                      h("button", { type: "button", className: "ase-btn ase-btn-primary", onClick: () => void run() }, selected.mode === "active" ? "运行并询问 AI" : "运行蓝图"),
                      h("button", { type: "button", className: "ase-btn ase-danger", onClick: deleteSelected }, "删除")
                    )
                  ),
                  h(PixelBlueprintGraph, { blueprint: selected, onChange: update }),
                  h("div", { className: "ase-bp-footer" }, status || (selected.mode === "active" ? "主动蓝图会把图像交给当前会话 LLM。" : "被动蓝图完全在浏览器本地运行，不调用 LLM。"))
                )
              : h("div", { className: "ase-bp-empty" }, "还没有蓝图，点击“AI 创建”。")
            )
          ),
          createOpen ? h(PixelBlueprintCreateDialog, { onClose: () => setCreateOpen(false), onSubmit: askCreate }) : null
        )
      );
    }

    // ── 工具栏 ────────────────────────────────────────────────────────────────
    function PixelToolbar({ root, file, onDirty, onAskSelect, onAskFull }) {
      const s = pxUse();
      const save = async () => {
        try { await pxSave(root, file, onDirty); }
        catch (err) { pxSet({ error: String(err?.message ?? err) }); }
      };
      const [menuOpen, setMenuOpen] = React.useState(false);
      const menuRef = React.useRef(null);
      const [askMenuOpen, setAskMenuOpen] = React.useState(false);
      const askMenuRef = React.useRef(null);
      React.useEffect(() => {
        const onDoc = (e) => {
          if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
          if (askMenuOpen && askMenuRef.current && !askMenuRef.current.contains(e.target)) setAskMenuOpen(false);
        };
        document.addEventListener("pointerdown", onDoc);
        return () => document.removeEventListener("pointerdown", onDoc);
      }, [menuOpen, askMenuOpen]);
      return h("div", { className: "ase-toolbar" },
        h("div", { ref: menuRef, className: "ase-menu-wrap" },
          h("button", { type: "button", className: "ase-btn" + (menuOpen ? " ase-active" : ""), title: pxt("more"), onClick: () => setMenuOpen((v) => !v) }, h(PXIcon, { name: "more" })),
          menuOpen ? h("div", { className: "ase-menu ase-menu-left" },
            [
              { icon: "reload", label: pxt("reload"), run: () => pxOpen(root, file) },
              { icon: "save", label: pxt("save"), run: save },
              { icon: "new", label: pxt("new"), run: () => pxSet({ showNew: true }) },
              { icon: "exportFrame", label: pxt("exportFrame"), run: () => pxExport("frame") },
              { icon: "exportSheet", label: pxt("exportSheet"), run: () => pxExport("sheet") },
              { icon: "crop", label: pxt("trim"), run: pxTrimTransparent },
              { icon: "outline", label: pxt("outlineStroke"), run: pxOutlineStroke }
            ].map((a, i) => h("button", { key: i, type: "button", className: "ase-menu-item", onClick: () => { setMenuOpen(false); a.run(); } },
              h("span", { className: "ase-menu-icon" }, h(PXIcon, { name: a.icon })),
              h("span", {}, a.label)
            ))
          ) : null
        ),
        h("span", { className: "ase-divider" }),
        h("div", { className: "ase-tool-group" },
          PX_TOOL_IDS.map((id) => h("button", { key: id, type: "button", className: "ase-btn ase-tool" + (s.tool === id ? " ase-active" : ""), title: pxt(id), onClick: () => pxSet({ tool: id }) }, h(PXIcon, { name: id })))
        ),
        h("div", { className: "ase-tool-group ase-brush-control" },
          h("span", { className: "ase-brush-label" }, h(PXIcon, { name: "brush" })),
          h("select", { className: "ase-brush-select", value: s.brushSize, title: pxt("brushSize"), "aria-label": pxt("brushSize"), onChange: (e) => pxSet({ brushSize: pxClampBrush(e.target.value) }) },
            (PX_BRUSH_SIZES.includes(s.brushSize) ? PX_BRUSH_SIZES : [...PX_BRUSH_SIZES, s.brushSize].sort((a, b) => a - b)).map((n) => h("option", { key: n, value: n }, n + "px"))
          )
        ),
        h("span", { className: "ase-divider" }),
        h("div", { className: "ase-tool-group" },
          h("button", { type: "button", className: "ase-btn", title: pxt("undo"), disabled: !s.history.canUndo(), onClick: () => { const d = s.history.undo(); if (d) pxSet({ doc: d, dirty: true }); } }, h(PXIcon, { name: "undo" })),
          h("button", { type: "button", className: "ase-btn", title: pxt("redo"), disabled: !s.history.canRedo(), onClick: () => { const d = s.history.redo(); if (d) pxSet({ doc: d, dirty: true }); } }, h(PXIcon, { name: "redo" }))
        ),
        h("span", { className: "ase-divider" }),
        h("div", { className: "ase-tool-group ase-zoom-group" },
          h("span", { className: "ase-zoom-label" }, h(PXIcon, { name: "magnifier" })),
          h("select", { className: "ase-zoom-select", value: s.zoom, title: pxt("zoom"), "aria-label": pxt("zoom"), onChange: (e) => pxSet({ zoom: Number(e.target.value) || 1 }) },
            (PX_ZOOM_STEPS.includes(s.zoom) ? PX_ZOOM_STEPS : [...PX_ZOOM_STEPS, s.zoom].sort((a, b) => a - b)).map((n) => h("option", { key: n, value: n }, "×" + n))
          )
        ),
        h("span", { className: "ase-divider" }),
        h("div", { className: "ase-tool-group ase-ai-group" },
          h("div", { ref: askMenuRef, className: "ase-menu-wrap" },
            h("button", { type: "button", className: "ase-btn ase-ai-ask" + (askMenuOpen ? " ase-active" : ""), title: pxt("ask"), onClick: () => setAskMenuOpen((v) => !v) },
              h(PXIcon, { name: "sparkles" }),
              h("span", {}, pxt("ask")),
              h(PXIcon, { name: "chevronDown" })
            ),
            askMenuOpen ? h("div", { className: "ase-menu" },
              [
                { icon: "scan", label: pxt("askSelect"), run: () => { if (onAskSelect) onAskSelect(); } },
                { icon: "image", label: pxt("askFull"), run: () => { if (onAskFull) onAskFull(); } }
              ].map((a, i) => h("button", { key: i, type: "button", className: "ase-menu-item", onClick: () => { setAskMenuOpen(false); a.run(); } },
                h("span", { className: "ase-menu-icon" }, h(PXIcon, { name: a.icon })),
                h("span", {}, a.label)
              ))
            ) : null
          )
        ),
        h("div", { className: "ase-tool-group" },
          h("button", { type: "button", className: "ase-btn", title: pxt("blueprints"), onClick: () => pxSet({ showBlueprint: true }) }, h(PXIcon, { name: "workflow" }), h("span", {}, "蓝图"))
        ),
        h("div", { className: "ase-spacer" }),
        h("span", { className: "ase-file-name" }, s.doc.width + "×" + s.doc.height + " · " + s.doc.frames.length + "f · " + s.doc.layers.length + "L" + (s.dirty ? " · " + pxt("dirty") : ""))
      );
    }

    // ── 画布 ──────────────────────────────────────────────────────────────────
    function pxRenderCanvas(canvas, doc, frame, onion) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = doc.width, h = doc.height;
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      if (onion && frame > 0) {
        const prev = ASE.compositeFrame(doc, frame - 1, new Uint8ClampedArray(w * h * 4));
        ctx.globalAlpha = 0.35;
        ctx.putImageData(new ImageData(new Uint8ClampedArray(prev), w, h), 0, 0);
        ctx.globalAlpha = 1;
      }
      const cur = ASE.compositeFrame(doc, frame, new Uint8ClampedArray(w * h * 4));
      ctx.putImageData(new ImageData(new Uint8ClampedArray(cur), w, h), 0, 0);
    }

    function PixelCanvas() {
      const s = pxUse();
      const canvasRef = React.useRef(null);
      const overlayRef = React.useRef(null);
      const drag = React.useRef(null);
      const hoverRef = React.useRef(null);
      React.useEffect(() => { pxRenderCanvas(canvasRef.current, s.doc, s.frame, s.onion); }, [s.doc, s.frame, s.onion, s.layer]);

      const pixelAt = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(s.doc.width - 1, Math.floor((e.clientX - rect.left) / rect.width * s.doc.width)));
        const y = Math.max(0, Math.min(s.doc.height - 1, Math.floor((e.clientY - rect.top) / rect.height * s.doc.height)));
        return [x, y];
      };
      const drawHover = (ctx, hov) => {
        const size = (s.tool === "pencil" || s.tool === "eraser" || s.tool === "line" || s.tool === "rect") ? s.brushSize : 1;
        const x0 = hov.x - Math.floor((size - 1) / 2);
        const y0 = hov.y - Math.floor((size - 1) / 2);
        // 外圈深色描边（位于 size 区域外侧一圈，提供对比度）
        ctx.fillStyle = "rgba(0,0,0,.55)";
        ctx.fillRect(x0 - 1, y0 - 1, size + 2, 1);
        ctx.fillRect(x0 - 1, y0 + size, size + 2, 1);
        ctx.fillRect(x0 - 1, y0, 1, size);
        ctx.fillRect(x0 + size, y0, 1, size);
        // 内圈白色描边（紧贴 size×size 区域边界，精确 1 像素粗）
        ctx.fillStyle = "rgba(255,255,255,.9)";
        ctx.fillRect(x0, y0, size, 1);
        ctx.fillRect(x0, y0 + size - 1, size, 1);
        ctx.fillRect(x0, y0, 1, size);
        ctx.fillRect(x0 + size - 1, y0, 1, size);
      };
      const redrawOverlay = () => {
        const ov = overlayRef.current;
        if (!ov) return;
        const ctx = ov.getContext("2d");
        const w = s.doc.width, h = s.doc.height;
        if (ov.width !== w) ov.width = w;
        if (ov.height !== h) ov.height = h;
        ctx.clearRect(0, 0, w, h);
        const selection = s.selection;
        if (selection) {
          ctx.fillStyle = "rgba(77,159,255,.16)";
          ctx.fillRect(selection.x, selection.y, selection.w, selection.h);
          ctx.strokeStyle = "rgba(77,159,255,.95)";
          ctx.lineWidth = 1;
          ctx.setLineDash([1, 1]);
          ctx.strokeRect(selection.x + 0.5, selection.y + 0.5, selection.w, selection.h);
          ctx.setLineDash([]);
        }
        const hov = hoverRef.current;
        if (hov && !drag.current) drawHover(ctx, hov);
      };
      React.useEffect(() => { redrawOverlay(); }, [s.selection, s.doc.width, s.doc.height, s.brushSize, s.tool]);
      const onHoverMove = (e) => {
        if (drag.current) return;
        const [x, y] = pixelAt(e);
        if (hoverRef.current && hoverRef.current.x === x && hoverRef.current.y === y) return;
        hoverRef.current = { x, y };
        redrawOverlay();
      };
      const onHoverLeave = () => {
        hoverRef.current = null;
        redrawOverlay();
      };

      const drawPreview = (d) => {
        const ov = overlayRef.current;
        if (!ov) return;
        const ctx = ov.getContext("2d");
        const w = s.doc.width, h = s.doc.height;
        if (ov.width !== w) ov.width = w;
        if (ov.height !== h) ov.height = h;
        ctx.clearRect(0, 0, w, h);
        if (d.selecting) {
          const sel = pxSelectionFromPoints(d.startX, d.startY, d.curX, d.curY, w, h);
          ctx.fillStyle = "rgba(77,159,255,.16)";
          ctx.fillRect(sel.x, sel.y, sel.w, sel.h);
          ctx.strokeStyle = "rgba(77,159,255,.95)";
          ctx.lineWidth = 1;
          ctx.setLineDash([1, 1]);
          ctx.strokeRect(sel.x + 0.5, sel.y + 0.5, sel.w, sel.h);
          ctx.setLineDash([]);
          return;
        }
        const c = s.color;
        ctx.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a / 255 + ")";
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = Math.max(1, s.brushSize);
        ctx.lineCap = "square";
        if (s.tool === "line") {
          ctx.beginPath();
          ctx.moveTo(d.startX + 0.5, d.startY + 0.5);
          ctx.lineTo(d.curX + 0.5, d.curY + 0.5);
          ctx.stroke();
        } else if (s.tool === "rect") {
          const x = Math.min(d.startX, d.curX), y = Math.min(d.startY, d.curY);
          ctx.strokeRect(x + 0.5, y + 0.5, Math.abs(d.curX - d.startX), Math.abs(d.curY - d.startY));
        }
      };

      const move = (e) => {
        const d = drag.current;
        if (!d) return;
        e.preventDefault();
        const coalesced = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [];
        const samples = coalesced.length > 0 ? coalesced : [e];
        if (s.tool === "select") {
          const sample = samples[samples.length - 1];
          const [x, y] = pixelAt(sample);
          if (x !== d.curX || y !== d.curY) { d.curX = x; d.curY = y; drawPreview(d); }
          return;
        }
        let moved = false;
        const color = s.tool === "eraser" ? { r: 0, g: 0, b: 0, a: 0 } : s.color;
        for (const sample of samples) {
          const [x, y] = pixelAt(sample);
          if (x === d.curX && y === d.curY) continue;
          const prevX = d.curX, prevY = d.curY;
          d.curX = x; d.curY = y; moved = true;
          if (s.tool === "pencil" || s.tool === "eraser") ASE.drawLine(d.working, s.frame, s.layer, prevX, prevY, x, y, color, s.brushSize);
        }
        if (!moved) return;
        if (s.tool === "pencil" || s.tool === "eraser") {
          if (!d.raf) {
            d.raf = window.requestAnimationFrame(() => { d.raf = 0; if (drag.current === d) pxRenderCanvas(canvasRef.current, d.working, s.frame, s.onion); });
          }
        } else if (s.tool === "line" || s.tool === "rect") drawPreview(d);
      };
      const end = (e) => {
        const d = drag.current;
        drag.current = null;
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
        if (!d) return;
        if (d.raf) { window.cancelAnimationFrame(d.raf); d.raf = 0; }
        try { if (canvasRef.current?.hasPointerCapture?.(d.pointerId)) canvasRef.current.releasePointerCapture(d.pointerId); } catch (_) {}
        if (s.tool === "select") { pxSet({ selection: pxSelectionFromPoints(d.startX, d.startY, d.curX, d.curY, s.doc.width, s.doc.height) }); return; }
        if (s.tool === "pencil" || s.tool === "eraser") {
          pxRenderCanvas(canvasRef.current, d.working, s.frame, s.onion);
          pxSet({ doc: d.working, dirty: true });
        } else if (s.tool === "line" || s.tool === "rect") {
          const doc = ASE.cloneDoc(d.working);
          if (s.tool === "line") ASE.drawLine(doc, s.frame, s.layer, d.startX, d.startY, d.curX, d.curY, s.color, s.brushSize);
          else ASE.drawRect(doc, s.frame, s.layer, d.startX, d.startY, d.curX, d.curY, s.color, false, s.brushSize);
          pxSet({ doc, dirty: true });
          redrawOverlay();
        }
      };
      const begin = (e) => {
        if (e.button !== 0) return;
        hoverRef.current = null;
        e.preventDefault();
        const [x, y] = pixelAt(e);
        const color = s.color;
        if (s.tool === "picker") {
          const p = ASE.pickPixel(s.doc, s.frame, s.layer, x, y);
          if (p) pxSet({ color: p });
          return;
        }
        if (s.tool === "fill") { pxCommit((d) => ASE.floodFill(d, s.frame, s.layer, x, y, color)); return; }
        if (s.tool === "select") {
          pxSet({ selection: null });
          drag.current = { startX: x, startY: y, curX: x, curY: y, selecting: true, pointerId: e.pointerId, raf: 0 };
          try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
          drawPreview(drag.current);
          window.addEventListener("pointermove", move, { passive: false });
          window.addEventListener("pointerup", end);
          window.addEventListener("pointercancel", end);
          return;
        }
        pxState.history.snapshot();
        const working = ASE.cloneDoc(s.doc);
        if (s.tool === "pencil" || s.tool === "eraser") ASE.drawBrush(working, s.frame, s.layer, x, y, s.tool === "eraser" ? { r: 0, g: 0, b: 0, a: 0 } : color, s.brushSize);
        drag.current = { startX: x, startY: y, curX: x, curY: y, working, pointerId: e.pointerId, raf: 0 };
        redrawOverlay();
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
        if (s.tool === "pencil" || s.tool === "eraser") pxRenderCanvas(canvasRef.current, working, s.frame, s.onion);
        window.addEventListener("pointermove", move, { passive: false });
        window.addEventListener("pointerup", end);
        window.addEventListener("pointercancel", end);
      };
      React.useEffect(() => () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
        if (drag.current?.raf) window.cancelAnimationFrame(drag.current.raf);
      }, []);

      const size = { width: s.doc.width * s.zoom, height: s.doc.height * s.zoom };
      return h("div", { className: "ase-canvas-wrap", style: { width: size.width, height: size.height } },
        h("div", { className: "ase-canvas-checker", style: { width: size.width, height: size.height, backgroundSize: (s.zoom * 2) + "px " + (s.zoom * 2) + "px", backgroundPosition: "0 0" } }),
        h("canvas", { ref: canvasRef, className: "ase-canvas", style: { width: size.width, height: size.height }, onPointerDown: begin, onPointerMove: onHoverMove, onPointerLeave: onHoverLeave, onContextMenu: (e) => e.preventDefault() }),
        h("canvas", { ref: overlayRef, className: "ase-canvas ase-overlay", style: { width: size.width, height: size.height, pointerEvents: "none" } }),
        s.doc.width > 24 || s.doc.height > 24 ? h("div", { className: "ase-canvas-grid", style: { width: size.width, height: size.height, backgroundSize: s.zoom + "px " + s.zoom + "px" } }) : null
      );
    }

    // ── 图层面板 ──────────────────────────────────────────────────────────────
    function PixelLayersPanel() {
      const s = pxUse();
      const layers = [...s.doc.layers].reverse();
      return h("div", { className: "ase-panel ase-layers" },
        h("div", { className: "ase-panel-head" }, h("span", {}, pxt("layers")), h("button", { type: "button", className: "ase-btn ase-mini", title: pxt("addLayer"), onClick: () => pxCommit((d) => ASE.addLayer(d, undefined, d.layers.length)) }, h(PXIcon, { name: "plus" }))),
        h("div", { className: "ase-layer-list" },
          layers.map((layer, i) => {
            const idx = s.doc.layers.length - 1 - i;
            return h("div", { key: idx, className: "ase-layer-row" + (idx === s.layer ? " ase-active" : ""), onClick: () => pxSet({ layer: idx }) },
              h("button", { type: "button", className: "ase-mini ase-eye", title: pxt("toggleVisible"), onClick: (e) => { e.stopPropagation(); pxCommit((d) => { d.layers[idx].visible = !d.layers[idx].visible; }); } }, layer.visible ? h(PXIcon, { name: "eye" }) : h(PXIcon, { name: "eyeOff" })),
              h("span", { className: "ase-layer-name" }, layer.name),
              h("button", { type: "button", className: "ase-mini", title: pxt("layerUp"), disabled: idx >= s.doc.layers.length - 1, onClick: (e) => { e.stopPropagation(); pxCommit((d) => ASE.moveLayer(d, idx, idx + 1)); pxSet({ layer: idx + 1 }); } }, h(PXIcon, { name: "arrowUp" })),
              h("button", { type: "button", className: "ase-mini", title: pxt("layerDown"), disabled: idx <= 0, onClick: (e) => { e.stopPropagation(); pxCommit((d) => ASE.moveLayer(d, idx, idx - 1)); pxSet({ layer: idx - 1 }); } }, h(PXIcon, { name: "arrowDown" })),
              h("button", { type: "button", className: "ase-mini ase-danger", title: pxt("deleteLayer"), disabled: s.doc.layers.length <= 1, onClick: (e) => { e.stopPropagation(); pxCommit((d) => ASE.removeLayer(d, idx)); pxSet({ layer: Math.max(0, idx - 1) }); } }, h(PXIcon, { name: "x" }))
            );
          })
        )
      );
    }

    // ── 帧面板 ────────────────────────────────────────────────────────────────
    function PixelFramesPanel() {
      const s = pxUse();
      React.useEffect(() => {
        if (!s.playing) return;
        const timer = setInterval(() => { const next = (s.frame + 1) % s.doc.frames.length; pxSet({ frame: next }); }, Math.max(16, s.doc.frames[s.frame]?.duration ?? 100));
        return () => clearInterval(timer);
      }, [s.playing, s.frame, s.doc]);
      return h("div", { className: "ase-panel ase-frames" },
        h("div", { className: "ase-panel-head" },
          h("span", {}, pxt("frames")),
          h("button", { type: "button", className: "ase-btn ase-mini", title: pxt("play"), onClick: () => pxSet({ playing: !s.playing }) }, s.playing ? h(PXIcon, { name: "pause" }) : h(PXIcon, { name: "play" })),
          h("button", { type: "button", className: "ase-btn ase-mini" + (s.onion ? " ase-active" : ""), title: pxt("onion"), onClick: () => pxSet({ onion: !s.onion }) }, h(PXIcon, { name: "layers" })),
          h("button", { type: "button", className: "ase-btn ase-mini", title: pxt("dupFrame"), onClick: () => pxCommit((d) => { const i = ASE.duplicateFrame(d, s.frame); pxSet({ frame: i }); }) }, h(PXIcon, { name: "copy" })),
          h("button", { type: "button", className: "ase-btn ase-mini", title: pxt("addFrame"), onClick: () => pxCommit((d) => { const i = ASE.addFrame(d, s.frame); pxSet({ frame: i }); }) }, h(PXIcon, { name: "plus" })),
          h("button", { type: "button", className: "ase-btn ase-mini ase-danger", title: pxt("delFrame"), disabled: s.doc.frames.length <= 1, onClick: () => pxCommit((d) => ASE.removeFrame(d, s.frame)) }, h(PXIcon, { name: "x" }))
        ),
        h("div", { className: "ase-frame-list" },
          s.doc.frames.map((frame, i) => h("div", { key: i, className: "ase-frame-chip" + (i === s.frame ? " ase-active" : ""), onClick: () => pxSet({ frame: i, playing: false }) },
            h("span", { className: "ase-frame-num" }, String(i)),
            h("input", { type: "number", min: 1, max: 10000, value: frame.duration, title: pxt("duration"), onClick: (e) => e.stopPropagation(), onChange: (e) => pxCommit((d) => { d.frames[i].duration = Math.max(1, Number(e.target.value) || 100); }) })
          ))
        )
      );
    }

    // ── 调色板 ────────────────────────────────────────────────────────────────
    function PixelPalettePanel() {
      const s = pxUse();
      const [custom, setCustom] = React.useState("#000000");
      const css = (c) => "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a / 255 + ")";
      const loadExtra = () => pxCommit((d) => { for (const c of PX_PICO8) d.palette.push({ ...c }); });
      return h("div", { className: "ase-panel ase-palette" },
        h("div", { className: "ase-panel-head" },
          h("span", {}, pxt("palette")),
          h("input", { type: "color", value: custom, title: pxt("customColor"), onChange: (e) => { const v = e.target.value; setCustom(v); const n = parseInt(v.slice(1), 16); pxSet({ color: { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 255 } }); } }),
          h("button", { type: "button", className: "ase-btn ase-mini", title: pxt("addColor"), onClick: () => pxCommit((d) => { d.palette.push({ ...s.color, name: "" }); }) }, h(PXIcon, { name: "plus" })),
          h("button", { type: "button", className: "ase-btn ase-mini ase-icon-label", title: "追加 PICO-8 调色板", onClick: loadExtra }, h(PXIcon, { name: "plus" }), h("span", {}, "16"))
        ),
        h("div", { className: "ase-swatches" },
          s.doc.palette.map((c, i) => h("button", { key: i, type: "button", className: "ase-swatch" + (s.color.r === c.r && s.color.g === c.g && s.color.b === c.b && s.color.a === c.a ? " ase-active" : ""), style: { background: css(c) }, title: c.name || "#" + i, onClick: () => pxSet({ color: { r: c.r, g: c.g, b: c.b, a: c.a } }) }))
        ),
        h("div", { className: "ase-current" },
          h("span", { className: "ase-current-swatch", style: { background: css(s.color) } }),
          h("span", { className: "ase-current-hex" }, "rgba(" + s.color.r + "," + s.color.g + "," + s.color.b + "," + Math.round(s.color.a / 255 * 100) + "%)")
        )
      );
    }

    // ── 新建对话框 ────────────────────────────────────────────────────────────
    function PixelNewDialog({ onClose }) {
      const [w, setW] = React.useState(32);
      const [hh, setH] = React.useState(32);
      const [frames, setFrames] = React.useState(1);
      const [dur, setDur] = React.useState(100);
      const create = () => {
        const doc = ASE.newSprite(Math.max(1, w | 0), Math.max(1, hh | 0), Math.max(1, frames | 0), Math.max(1, dur | 0), 1);
        doc.palette = pxDefaultPalette();
        pxSet({ doc, history: new ASE.History(doc), frame: 0, layer: 0, selection: null, showNew: false, playing: false, dirty: true, fileName: "sprite.aseprite" });
      };
      return h("div", { className: "ase-modal" },
        h("div", { className: "ase-modal-box" },
          h("div", { className: "ase-modal-title" }, pxt("new")),
          h("label", {}, pxt("width"), h("input", { type: "number", min: 1, max: 512, value: w, onChange: (e) => setW(e.target.value) })),
          h("label", {}, pxt("height"), h("input", { type: "number", min: 1, max: 512, value: hh, onChange: (e) => setH(e.target.value) })),
          h("label", {}, pxt("frameCount"), h("input", { type: "number", min: 1, max: 256, value: frames, onChange: (e) => setFrames(e.target.value) })),
          h("label", {}, pxt("frameDuration"), h("input", { type: "number", min: 1, max: 10000, value: dur, onChange: (e) => setDur(e.target.value) })),
          h("div", { className: "ase-modal-actions" },
            h("button", { type: "button", className: "ase-btn", onClick: onClose }, pxt("cancel")),
            h("button", { type: "button", className: "ase-btn ase-btn-primary", onClick: create }, pxt("create"))
          )
        )
      );
    }

    // ── 主编排 ────────────────────────────────────────────────────────────────
    function PixelEditor({ root, file, onDirty }) {
      pxEnsureStyles();
      const s = pxUse();
      const centerRef = React.useRef(null);
      const panRef = React.useRef(null);
      React.useEffect(() => { void pxOpen(root, file); }, [root, file]);
      React.useEffect(() => { onDirty?.(s.dirty); }, [s.dirty]);
      const [askOpen, setAskOpen] = React.useState(false);
      const [askFull, setAskFull] = React.useState(false);
      const [pendingSelect, setPendingSelect] = React.useState(false);
      const [editWaiting, setEditWaiting] = React.useState(false);
      const editBaseline = React.useRef("");
      const editElapsed = React.useRef(0);
      const editScope = React.useRef(null);
      const startAskSelect = () => {
        setAskFull(false);
        if (pxState.selection) { setAskOpen(true); pxSet({ error: null }); }
        else { setPendingSelect(true); pxSet({ tool: "select", error: "请在画布上拖拽框选区域" }); }
      };
      const startAskFull = () => { setAskFull(true); setPendingSelect(false); setAskOpen(true); };
      React.useEffect(() => {
        if (pendingSelect && s.selection) { setPendingSelect(false); setAskOpen(true); pxSet({ error: null }); }
      }, [s.selection, pendingSelect]);
      const submitAsk = async (request, applyEdit) => {
        const doc = pxState.doc;
        const sel = askFull ? { x: 0, y: 0, w: doc.width, h: doc.height } : pxState.selection;
        if (!sel) throw new Error(pxt("askNoSelection"));
        if (typeof serviceBridge.askConversation !== "function") throw new Error(pxt("askNoConversation"));
        const imageUrl = pxRegionToPng(doc, pxState.frame, sel, 8);
        const file = dataUrlToFile(imageUrl, "pixel-" + (askFull ? "full" : "selection") + "-frame" + pxState.frame + ".png");
        if (applyEdit) {
          const prompt = [
            "这是像素画精灵当前帧的选区截图（已放大 8 倍，每个像素清晰可见）。",
            "选区大小：" + sel.w + "×" + sel.h + "。请把选区左上角视为坐标原点 (0,0)，x 向右、y 向下。",
            "请直接修改选区，只输出一个 JSON 数组（不要 markdown 代码块、不要任何解释文字）。每个元素是一条编辑指令，只允许以下六种：",
            '{"op":"crop","padding":0} 裁剪选区四周的透明空白（padding 为保留边距，0-8）',
            '{"op":"outline","thickness":1,"color":"#000000"} 沿非透明边缘描一圈像素边',
            '{"op":"pixel","x":0,"y":0,"color":"#rrggbb"} 画一个像素',
            '{"op":"line","x0":0,"y0":0,"x1":3,"y1":3,"color":"#rrggbb"} 画直线',
            '{"op":"rect","x0":0,"y0":0,"x1":4,"y1":4,"color":"#rrggbb"} 画矩形边框',
            '{"op":"fill","x":2,"y":2,"color":"#rrggbb"} 从该点泛洪填充同色区域',
            "颜色用 #rrggbb 十六进制；坐标必须是整数。crop/outline 会改变选区内容，crop 之后坐标以裁剪后的新选区为准。",
            "具体要求：" + request
          ].join("\n");
          editBaseline.current = typeof serviceBridge.readAssistantText === "function" ? serviceBridge.readAssistantText() : "";
          editElapsed.current = 0;
          editScope.current = sel;
          setEditWaiting(true);
          await serviceBridge.askConversation(file, prompt);
          return;
        }
        const scopeDesc = askFull
          ? "整幅画面（尺寸：" + doc.width + "×" + doc.height + "）。"
          : "局部选区（原图尺寸：" + doc.width + "×" + doc.height + "；选区左上角：(" + sel.x + "," + sel.y + ")；选区大小：" + sel.w + "×" + sel.h + "）。";
        const prompt = [
          "这是像素画精灵当前帧的截图。" + scopeDesc,
          askFull
            ? "请针对整幅画面进行调整，保持像素画风格。"
            : "请只针对附图中的选区进行局部调整，保持像素画风格，不要改动选区外内容。",
          "具体要求：" + request
        ].join("\n");
        await serviceBridge.askConversation(file, prompt);
      };
      React.useEffect(() => {
        if (!editWaiting) return;
        const timer = setInterval(() => {
          editElapsed.current += 1500;
          if (editElapsed.current > 90000) {
            clearInterval(timer);
            setEditWaiting(false);
            pxSet({ error: pxt("askEditTimeout") });
            return;
          }
          if (typeof serviceBridge.readAssistantText !== "function") return;
          const text = serviceBridge.readAssistantText();
          if (!text || text === editBaseline.current) return;
          const ops = pxParseEditOps(text);
          if (!ops || ops.length === 0) return;
          clearInterval(timer);
          setEditWaiting(false);
          const applied = pxRunImageOps(ops, editScope.current).count;
          pxSet({ error: applied > 0 ? ("AI 改图已应用 " + applied + " 条指令") : pxt("askEditNoop") });
        }, 1500);
        return () => clearInterval(timer);
      }, [editWaiting]);
      // 滚轮缩放：用原生非被动监听，才能 preventDefault 阻止容器滚动。
      React.useEffect(() => {
        const el = centerRef.current;
        if (!el) return;
        const onWheel = (e) => {
          e.preventDefault();
          pxSet({ zoom: pxZoomStep(pxState.zoom, e.deltaY < 0 ? 1 : -1) });
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
      }, []);
      const startPan = (e) => {
        if (e.button !== 2) return;
        e.preventDefault();
        const el = centerRef.current;
        if (!el) return;
        panRef.current = { x: e.clientX, y: e.clientY, sl: el.scrollLeft, st: el.scrollTop };
        window.addEventListener("pointermove", movePan);
        window.addEventListener("pointerup", endPan);
        window.addEventListener("pointercancel", endPan);
      };
      const movePan = (e) => {
        const p = panRef.current;
        const el = centerRef.current;
        if (!p || !el) return;
        el.scrollLeft = p.sl - (e.clientX - p.x);
        el.scrollTop = p.st - (e.clientY - p.y);
      };
      const endPan = () => {
        panRef.current = null;
        window.removeEventListener("pointermove", movePan);
        window.removeEventListener("pointerup", endPan);
        window.removeEventListener("pointercancel", endPan);
      };
      React.useEffect(() => () => {
        window.removeEventListener("pointermove", movePan);
        window.removeEventListener("pointerup", endPan);
        window.removeEventListener("pointercancel", endPan);
      }, []);
      const [resizing, setResizing] = React.useState(false);
      const beginResize = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX;
        const startWidth = pxState.leftWidth;
        setResizing(true);
        const move = (ev) => {
          ev.preventDefault();
          pxSet({ leftWidth: Math.max(120, Math.min(480, startWidth + (ev.clientX - startX))) });
        };
        const up = () => {
          setResizing(false);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          window.removeEventListener("pointercancel", up);
        };
        window.addEventListener("pointermove", move, { passive: false });
        window.addEventListener("pointerup", up);
        window.addEventListener("pointercancel", up);
      };
      return h("div", { className: "dwu-filePane", "data-px-root": "" },
        h(PixelToolbar, { root, file, onDirty, onAskSelect: startAskSelect, onAskFull: startAskFull }),
        s.error != null ? h("div", { className: "ase-error" }, h("span", {}, s.error), h("button", { type: "button", className: "ase-btn ase-mini", onClick: () => pxSet({ error: null }) }, h(PXIcon, { name: "x" }))) : null,
        s.loading ? h("div", { className: "ase-loading" }, pxt("loading")) : null,
        h("div", { className: "ase-body", style: { gridTemplateColumns: s.leftWidth + "px 12px minmax(0, 1fr)" } },
          h("div", { className: "ase-left" }, h(PixelPalettePanel), h(PixelLayersPanel), h(PixelFramesPanel)),
          h("div", { className: "ase-resize-handle" + (resizing ? " ase-resizing" : ""), title: pxt("resizePanel"), onPointerDown: beginResize }),
          h("div", { ref: centerRef, className: "ase-center", onPointerDown: startPan, onContextMenu: (e) => e.preventDefault() },
            h("div", { className: "ase-center-stage" },
              h(PixelCanvas)
            )
          )
        ),
        s.showNew ? h(PixelNewDialog, { onClose: () => pxSet({ showNew: false }) }) : null,
        askOpen && (askFull || s.selection) ? h(PixelAskDialog, { selection: askFull ? { x: 0, y: 0, w: s.doc.width, h: s.doc.height } : s.selection, full: askFull, onClose: () => setAskOpen(false), onSubmit: submitAsk }) : null,
        s.showBlueprint ? h(PixelBlueprintPanel, { onClose: () => pxSet({ showBlueprint: false }) }) : null
      );
    }

    // ── 像素编辑器样式 ────────────────────────────────────────────────────────
    const PX_STYLE_ID = "veang-workbench/pixel-editor";
    function pxEnsureStyles() {
      if (typeof document === "undefined") return;
      if (document.getElementById(PX_STYLE_ID) !== null) return;
      const style = document.createElement("style");
      style.id = PX_STYLE_ID;
      style.dataset.plugin = "veang-workbench";
      style.textContent = `
[data-px-root] {
  --ase-border: var(--dsw-alias-border-l2, rgba(128,128,128,.25));
  --ase-text: var(--dsw-alias-label-primary, inherit);
  --ase-text-dim: var(--dsw-alias-label-secondary, rgba(128,128,128,.8));
  --ase-bg: var(--dsw-alias-bg-layer-1, #0e1116);
  --ase-accent: var(--dsw-alias-brand-primary, #4d9fff);
  --ase-danger: var(--dsw-alias-state-error-primary, #f85149);
  box-sizing: border-box; color: var(--ase-text); font-size: 13px; line-height: 1.5;
  display: flex; flex-direction: column; min-height: 0; height: 100%;
}
[data-px-root] *, [data-px-root] *::before, [data-px-root] *::after { box-sizing: border-box; }
.ase-toolbar { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-bottom: 1px solid var(--ase-border); flex-wrap: wrap; flex: none; }
.ase-tool-group { display: inline-flex; align-items: center; gap: 4px; }
.ase-divider { width: 1px; align-self: stretch; background: var(--ase-border); flex: none; margin: 0 3px; }
.ase-menu-wrap { position: relative; display: inline-flex; }
.ase-menu { position: absolute; top: calc(100% + 4px); right: 0; z-index: 60; min-width: 178px; background: var(--ase-bg); border: 1px solid var(--ase-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,.32); padding: 4px; display: flex; flex-direction: column; }
.ase-menu-left { right: auto; left: 0; }
.ase-menu-item { display: flex; align-items: center; gap: 8px; width: 100%; text-align: left; background: transparent; color: var(--ase-text); border: 0; border-radius: 5px; padding: 6px 10px; font-size: 13px; cursor: pointer; white-space: nowrap; }
.ase-menu-item:hover { background: color-mix(in srgb, var(--ase-accent) 14%, transparent); }
.ase-menu-icon { width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; flex: none; }
.ase-icon { display: block; }
.ase-spacer { flex: 1; }
.ase-file-name { color: var(--ase-text-dim); font-size: 12px; max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ase-btn { background: transparent; color: var(--ase-text); border: 1px solid var(--ase-border); border-radius: 6px; padding: 3px 9px; font-size: 13px; cursor: pointer; white-space: nowrap; line-height: 1.4; }
.ase-btn:hover:not(:disabled) { border-color: var(--ase-accent); color: var(--ase-accent); }
.ase-btn:disabled { opacity: .4; cursor: default; }
.ase-btn-primary { background: var(--ase-accent); border-color: var(--ase-accent); color: #fff; font-weight: 600; }
.ase-tool.ase-active { border-color: var(--ase-accent); color: var(--ase-accent); background: color-mix(in srgb, var(--ase-accent) 12%, transparent); }
.ase-btn.ase-active { border-color: var(--ase-accent); color: var(--ase-accent); background: color-mix(in srgb, var(--ase-accent) 12%, transparent); }
.ase-icon-label { display: inline-flex; align-items: center; gap: 4px; }
.ase-mini { padding: 0 5px; font-size: 12px; }
.ase-danger:hover:not(:disabled) { border-color: var(--ase-danger); color: var(--ase-danger); }
.ase-zoom-label { color: var(--ase-text-dim); display: inline-flex; align-items: center; }
.ase-zoom-select { padding: 2px 4px; font-size: 12px; color: var(--ase-text); background: var(--ase-bg); border: 1px solid var(--ase-border); border-radius: 5px; cursor: pointer; }
.ase-zoom-select:hover { border-color: color-mix(in srgb, var(--ase-text) 30%, var(--ase-border)); }
.ase-zoom-select option { background: var(--ase-bg); color: var(--ase-text); }
.ase-brush-control { gap: 5px; }
.ase-brush-label { color: var(--ase-text-dim); font-size: 15px; }
.ase-brush-select { padding: 2px 4px; font-size: 12px; color: var(--ase-text); background: var(--ase-bg); border: 1px solid var(--ase-border); border-radius: 5px; cursor: pointer; }
.ase-brush-select:hover { border-color: color-mix(in srgb, var(--ase-text) 30%, var(--ase-border)); }
.ase-brush-select option { background: var(--ase-bg); color: var(--ase-text); }
.ase-error { display: flex; align-items: center; gap: 8px; padding: 6px 10px; font-size: 12px; color: var(--ase-danger); border-bottom: 1px solid var(--ase-border); background: color-mix(in srgb, var(--ase-danger) 10%, transparent); flex: none; }
.ase-loading { padding: 10px; color: var(--ase-text-dim); font-size: 12px; flex: none; }
.ase-body { display: grid; grid-template-columns: 180px 12px minmax(0, 1fr); grid-template-rows: minmax(0, 1fr); gap: 0; padding: 8px; min-height: 0; flex: 1; overflow: hidden; position: relative; }
.ase-resize-handle { cursor: col-resize; align-self: stretch; position: relative; border-radius: 2px; touch-action: none; }
.ase-resize-handle::after { content: ""; position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: 1px; background: var(--ase-border); }
.ase-resize-handle:hover, .ase-resize-handle.ase-resizing { background: color-mix(in srgb, var(--ase-accent) 16%, transparent); }
.ase-resize-handle:hover::after, .ase-resize-handle.ase-resizing::after { background: var(--ase-accent); }
.ase-left { display: flex; flex-direction: column; gap: 8px; min-width: 0; overflow-y: auto; }
.ase-center { min-width: 0; min-height: 0; overflow: auto; overscroll-behavior: contain; border: 1px solid var(--ase-border); border-radius: 8px; background: color-mix(in srgb, var(--ase-text) 4%, transparent); }
.ase-center-stage { box-sizing: border-box; width: max-content; min-width: 100%; min-height: 100%; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }
.ase-hint { color: var(--ase-text-dim); font-size: 12px; }
.ase-panel { border: 1px solid var(--ase-border); border-radius: 6px; overflow: hidden; display: flex; flex-direction: column; flex: none; }
.ase-panel-head { display: flex; align-items: center; gap: 6px; padding: 4px 8px; font-size: 12px; font-weight: 600; color: var(--ase-text-dim); border-bottom: 1px solid var(--ase-border); }
.ase-panel-head .ase-btn { margin-left: auto; }
.ase-panel-head .ase-btn + .ase-btn { margin-left: 0; }
.ase-layer-list { overflow-y: auto; max-height: 180px; padding: 4px; }
.ase-layer-row { display: flex; align-items: center; gap: 4px; padding: 3px 6px; border-radius: 5px; cursor: pointer; font-size: 12px; }
.ase-layer-row:hover { background: color-mix(in srgb, var(--ase-text) 6%, transparent); }
.ase-layer-row.ase-active { background: color-mix(in srgb, var(--ase-accent) 15%, transparent); }
.ase-layer-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ase-eye { background: none; border: none; cursor: pointer; font-size: 12px; padding: 0 2px; }
.ase-frame-list { overflow-y: auto; max-height: 220px; padding: 6px; display: flex; flex-wrap: wrap; gap: 6px; align-content: flex-start; }
.ase-frame-chip { flex: none; border: 1px solid var(--ase-border); border-radius: 6px; padding: 4px 6px; display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; background: transparent; }
.ase-frame-chip.ase-active { border-color: var(--ase-accent); }
.ase-frame-chip input { width: 58px; font-size: 11px; background: transparent; color: var(--ase-text); border: 1px solid var(--ase-border); border-radius: 4px; padding: 1px 3px; }
.ase-frame-num { font-size: 11px; color: var(--ase-text-dim); }
.ase-swatches { display: grid; grid-template-columns: repeat(8, 1fr); gap: 3px; padding: 6px; }
.ase-swatch { aspect-ratio: 1; border-radius: 4px; cursor: pointer; border: 1px solid rgba(0,0,0,.35); padding: 0; }
.ase-swatch.ase-active { outline: 2px solid var(--ase-accent); outline-offset: 1px; }
.ase-current { display: flex; align-items: center; gap: 6px; padding: 4px 8px; font-size: 11px; color: var(--ase-text-dim); }
.ase-current-swatch { width: 18px; height: 18px; border-radius: 4px; border: 1px solid rgba(0,0,0,.35); }
.ase-canvas-wrap { position: relative; flex: none; display: block; }
.ase-canvas-checker { position: absolute; inset: 0; background-color: rgba(255,255,255,.92); background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Crect width='1' height='1' fill='%23808080' fill-opacity='.28'/%3E%3Crect x='1' y='1' width='1' height='1' fill='%23808080' fill-opacity='.28'/%3E%3C/svg%3E"); background-position: 0 0; background-repeat: repeat; background-size: 16px 16px; }
.ase-canvas { position: relative; display: block; image-rendering: pixelated; image-rendering: crisp-edges; touch-action: none; }
.ase-overlay { position: absolute; inset: 0; }
.ase-canvas-grid { position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(to right, rgba(128,128,128,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,.18) 1px, transparent 1px); background-size: 16px 16px; }
.ase-modal { position: absolute; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.45); }
.ase-modal-box { background: var(--ase-bg); border: 1px solid var(--ase-border); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; gap: 10px; min-width: 260px; }
.ase-modal-title { font-weight: 600; }
.ase-modal-box label { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: 13px; }
.ase-modal-box input { width: 110px; background: transparent; color: var(--ase-text); border: 1px solid var(--ase-border); border-radius: 5px; padding: 3px 6px; }
.ase-modal-actions { display: flex; justify-content: flex-end; gap: 8px; }
.ase-ask-box { min-width: 380px; max-width: 90%; }
.ase-ask-hint { font-size: 12px; color: var(--ase-text-dim); }
.ase-ask-selection { font-size: 12px; color: var(--ase-text-dim); font-variant-numeric: tabular-nums; }
.ase-ask-apply { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--ase-text); cursor: pointer; user-select: none; }
.ase-ask-apply input { accent-color: var(--ase-accent); cursor: pointer; }
.ase-ask-textarea { width: 100%; min-height: 90px; resize: vertical; background: transparent; color: var(--ase-text); border: 1px solid var(--ase-border); border-radius: 6px; padding: 8px; font-size: 13px; font-family: inherit; }
.ase-ask-error { font-size: 12px; color: var(--ase-danger); }
.ase-ai-ask { display: inline-flex; align-items: center; gap: 5px; color: var(--ase-accent); border-color: color-mix(in srgb, var(--ase-accent) 35%, transparent); }
.ase-ai-ask:hover:not(:disabled) { background: color-mix(in srgb, var(--ase-accent) 14%, transparent); }
.ase-ai-ask:disabled { opacity: .45; cursor: default; }
.ase-blueprint-box { width: min(1040px, calc(100% - 24px)); height: min(92%, 680px); min-height: 420px; max-width: none; overflow: hidden; position: relative; }
.ase-blueprint-head, .ase-bp-workbench-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.ase-blueprint-head { flex: none; }
.ase-bp-subtitle, .ase-bp-description { color: var(--ase-text-dim); font-size: 12px; font-weight: 400; }
.ase-blueprint-layout { display: grid; grid-template-columns: 218px minmax(0, 1fr); gap: 10px; min-height: 0; flex: 1; }
.ase-bp-library { min-width: 0; min-height: 0; border: 1px solid var(--ase-border); border-radius: 7px; overflow: hidden; display: flex; flex-direction: column; }
.ase-bp-library-list { min-height: 0; overflow: auto; padding: 5px; display: flex; flex-direction: column; gap: 4px; }
.ase-bp-library-item { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: 100%; padding: 8px; border: 1px solid transparent; border-radius: 6px; background: transparent; color: var(--ase-text); text-align: left; cursor: pointer; }
.ase-bp-library-item:hover, .ase-bp-library-item.ase-active { border-color: var(--ase-accent); background: color-mix(in srgb, var(--ase-accent) 10%, transparent); }
.ase-bp-library-item strong { font-size: 12px; }
.ase-bp-library-item small { color: var(--ase-text-dim); font-size: 11px; line-height: 1.35; }
.ase-bp-library-mode { font-size: 10px; padding: 1px 4px; border-radius: 3px; background: color-mix(in srgb, var(--ase-text-dim) 18%, transparent); }
.ase-bp-library-mode-active { color: #ffb86b; }
.ase-bp-library-mode-passive { color: #7dd3fc; }
.ase-bp-count { float: right; color: var(--ase-text-dim); font-size: 11px; }
.ase-bp-workbench { min-width: 0; min-height: 0; display: flex; flex-direction: column; gap: 8px; }
.ase-bp-workbench-head { flex: none; }
.ase-bp-workbench-head strong { font-size: 14px; }
.ase-bp-graph-wrap { min-height: 0; flex: 1; overflow: auto; border: 1px solid var(--ase-border); border-radius: 7px; background: color-mix(in srgb, var(--ase-bg) 88%, #000 12%); }
.ase-bp-graph-hint { position: sticky; top: 0; z-index: 3; padding: 5px 8px; color: var(--ase-text-dim); font-size: 11px; background: color-mix(in srgb, var(--ase-bg) 88%, transparent); border-bottom: 1px solid var(--ase-border); }
.ase-bp-graph { position: relative; min-width: 760px; min-height: 280px; }
.ase-bp-edges { position: absolute; inset: 0; pointer-events: none; overflow: visible; }
.ase-bp-edge { fill: none; stroke: color-mix(in srgb, var(--ase-accent) 70%, transparent); stroke-width: 2; }
.ase-bp-node { position: absolute; width: 180px; min-height: 88px; border: 1px solid var(--ase-border); border-radius: 7px; background: var(--ase-bg); box-shadow: 0 4px 12px rgba(0,0,0,.24); cursor: grab; user-select: none; z-index: 2; }
.ase-bp-node:active { cursor: grabbing; }
.ase-bp-node-active { border-color: color-mix(in srgb, #ffb86b 65%, var(--ase-border)); }
.ase-bp-node-passive { border-color: color-mix(in srgb, #7dd3fc 55%, var(--ase-border)); }
.ase-bp-node-head { display: flex; align-items: center; gap: 5px; padding: 7px 10px; border-bottom: 1px solid var(--ase-border); }
.ase-bp-node-type { font-size: 10px; color: var(--ase-text-dim); }
.ase-bp-node-body { padding: 7px 10px; color: var(--ase-text-dim); font-size: 11px; line-height: 1.35; max-height: 92px; overflow: hidden; }
.ase-bp-node-summary { max-height: 32px; overflow: hidden; margin-bottom: 5px; }
.ase-bp-control-row { display: flex; align-items: center; gap: 5px; }
.ase-bp-control { display: inline-flex; align-items: center; gap: 4px; color: var(--ase-text-dim); font-size: 10px; }
.ase-bp-control input[type=number] { width: 38px; padding: 1px 3px; color: var(--ase-text); background: transparent; border: 1px solid var(--ase-border); border-radius: 3px; font-size: 10px; }
.ase-bp-control-row input[type=color] { width: 26px; height: 20px; padding: 0; border: 1px solid var(--ase-border); background: transparent; }
.ase-bp-prompt { width: 100%; resize: vertical; min-height: 30px; padding: 3px; color: var(--ase-text); background: transparent; border: 1px solid var(--ase-border); border-radius: 3px; font: 10px/1.3 inherit; }
.ase-bp-port { position: absolute; z-index: 4; width: 17px; height: 17px; padding: 0; border: 1px solid var(--ase-border); border-radius: 50%; background: var(--ase-bg); color: var(--ase-text-dim); font-size: 9px; line-height: 14px; cursor: crosshair; }
.ase-bp-port:hover { color: var(--ase-accent); border-color: var(--ase-accent); }
.ase-bp-port-in { left: -9px; top: 40px; }
.ase-bp-port-out { right: -9px; top: 40px; }
.ase-bp-footer { flex: none; color: var(--ase-text-dim); font-size: 11px; min-height: 18px; }
.ase-bp-empty { display: grid; place-items: center; min-height: 240px; color: var(--ase-text-dim); }
.ase-bp-create-overlay { position: absolute; inset: 0; z-index: 5; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.32); }
.ase-bp-create-box { width: min(520px, calc(100% - 24px)); }
@media (max-width: 720px) { .ase-body { grid-template-columns: minmax(140px, 26%) minmax(0, 1fr); gap: 6px; padding: 6px; } }
`;
      document.head.appendChild(style);
    }

    // 图片查看器：元信息（尺寸/格式/大小）+ 缩放 + 快捷操作。
    function ImageViewer({ root, file }) {
      const ext = extOf(file).toUpperCase();
      const [mode, setMode] = React.useState("fit"); // fit | 1 | zoom
      const [scale, setScale] = React.useState(1);
      const [dims, setDims] = React.useState(null);
      const [size, setSize] = React.useState(null);
      React.useEffect(() => { setMode("fit"); setScale(1); setDims(null); setSize(null); }, [root, file]);
      React.useEffect(() => {
        let live = true;
        getJson(apiUrl("stat", root, file)).then((value) => { if (live && value?.size != null) setSize(value.size); }, () => {});
        return () => { live = false; };
      }, [root, file]);
      const zoomBy = (factor) => { setMode("zoom"); setScale((value) => Math.min(8, Math.max(0.05, value * factor))); };
      const applyMode = (next) => { setMode(next); if (next === "1" || next === "fit") setScale(1); };
      const onWheel = (event) => { if (!(event.ctrlKey || event.metaKey)) return; event.preventDefault(); setMode("zoom"); setScale((value) => Math.min(8, Math.max(0.05, value * (event.deltaY < 0 ? 1.1 : 0.9)))); };
      const imgStyle = mode === "fit" ? { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } : { width: dims ? `${Math.round(dims.w * scale)}px` : undefined, maxWidth: "none" };
      return h("div", { className: "dwu-filePane" },
        h("div", { className: "dwu-fileToolbar" },
          dims ? h("span", { className: "dwu-metaChip" }, `${dims.w}×${dims.h}`) : null,
          size != null ? h("span", { className: "dwu-metaChip" }, humanSize(size)) : null,
          h("span", { className: "dwu-metaChip" }, ext),
          h("select", { className: "dwu-toolSelect", "aria-label": "缩放模式", value: mode, onChange: (event) => applyMode(event.target.value) },
            h("option", { value: "fit" }, "适配"),
            h("option", { value: "1" }, "1:1"),
            h("option", { value: "zoom" }, "缩放")
          ),
          h("button", { className: "dwu-toolButton", onClick: () => zoomBy(1 / 1.25) }, "−"),
          h("button", { className: "dwu-toolButton", onClick: () => zoomBy(1.25) }, "+"),
          h("button", { className: "dwu-toolButton", onClick: () => copyText(fullPath(root, file)) }, "复制路径"),
          h("button", { className: "dwu-toolButton", onClick: () => addContext(root, file) }, "设为AI参考")
        ),
        h("div", { className: "dwu-mediaZoom", onWheel },
          h("img", { src: assetUrl(root, file), alt: file, style: imgStyle, draggable: false, onLoad: (event) => { const img = event.currentTarget; if (img.naturalWidth) setDims({ w: img.naturalWidth, h: img.naturalHeight }); } })
        )
      );
    }

    function FilePane({ root, file, onDirty }) {
      const kind = fileKind(file);
      const [content, setContent] = React.useState("");
      const [mtimeMs, setMtimeMs] = React.useState(0);
      const [dirty, setDirty] = React.useState(false);
      const [status, setStatus] = React.useState("");
      const [error, setError] = React.useState("");
      const [preview, setPreview] = React.useState(false);
      const [flash, setFlash] = React.useState(false);
      const linesRef = React.useRef(null);
      const highlightRef = React.useRef(null);
      const isText = kind === "text" || kind === "markdown";
      const syntaxHighlight = kind === "text" && !["txt", "log", "csv"].includes(extOf(file));
      const byteSize = React.useMemo(() => { try { return new Blob([content]).size; } catch { return content.length; } }, [content]);
      const load = React.useCallback((external = false) => {
        if (!isText) return;
        setError("");
        getJson(apiUrl("read", root, file)).then((value) => {
          setContent(value.content); setMtimeMs(value.mtimeMs); setDirty(false); onDirty(false); setStatus(external ? "已同步 AI/磁盘改动" : "");
          updateSnapshot(root, file, { kind, content: value.content, mtimeMs: value.mtimeMs });
          if (external) { setFlash(true); setTimeout(() => setFlash(false), 950); }
        }, (err) => setError(err.message));
      }, [root, file, isText, kind, onDirty]);
      React.useEffect(() => { setContent(""); setMtimeMs(0); setDirty(false); setPreview(false); setStatus(""); load(false); }, [load]);
      React.useEffect(() => {
        if (!isText) { updateSnapshot(root, file, { kind }); return; }
        const timer = setInterval(() => {
          if (dirty) return;
          getJson(apiUrl("stat", root, file)).then((value) => { if (mtimeMs && Math.abs(value.mtimeMs - mtimeMs) > 1) load(true); }).catch(() => {});
        }, 2500);
        return () => clearInterval(timer);
      }, [root, file, isText, dirty, mtimeMs, load, kind]);
      const save = React.useCallback(async () => {
        if (!isText || !dirty) return;
        setStatus("保存中…");
        try {
          const value = await getJson(`${API}?op=write`, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ root, path: file, content, expectedMtimeMs: mtimeMs }) });
          setMtimeMs(value.mtimeMs); setDirty(false); onDirty(false); setStatus("已保存"); updateSnapshot(root, file, { kind, content, mtimeMs: value.mtimeMs });
        } catch (err) { setStatus(err.message === "file-changed-on-disk" ? "磁盘文件已变化，请先重新载入" : `保存失败：${err.message}`); }
      }, [isText, dirty, root, file, content, mtimeMs, onDirty, kind]);
      React.useEffect(() => {
        const onKey = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") { event.preventDefault(); save(); } };
        window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
      }, [save]);
      const toolbar = h("div", { className: "dwu-fileToolbar" },
        h("div", { className: "dwu-fileMeta", title: `${root}/${file}` }, file),
        isText && h("span", { className: "dwu-metaChip" }, languageName(file)),
        isText && h("span", { className: "dwu-metaChip" }, `${content.split("\n").length} 行`),
        isText && h("span", { className: "dwu-metaChip" }, humanSize(byteSize)),
        status && h("span", { className: "dwu-status", "data-error": /失败|变化/.test(status) || undefined }, status),
        kind === "markdown" && h("button", { className: "dwu-toolButton", onClick: () => setPreview((value) => !value) }, preview ? "源码" : "预览"),
        isText && h("button", { className: "dwu-toolButton", onClick: () => copyText(content) }, "复制全文"),
        isText && h("button", { className: "dwu-toolButton", onClick: () => addContext(root, file) }, "设为AI参考"),
        isText && h("button", { className: "dwu-toolButton", onClick: () => load(false) }, "重新载入"),
        isText && h("button", { className: "dwu-toolButton", disabled: !dirty, onClick: save }, "保存 ⌘S")
      );
      if (error) return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-error" }, `读取失败：${error}`));
      if (kind === "markdown" && preview) return h("div", { className: "dwu-filePane" }, toolbar, h("article", { className: "dwu-preview", dangerouslySetInnerHTML: { __html: markdownHtml(content) } }));
      if (isText) {
        const lineNumbers = Array.from({ length: Math.max(1, content.split("\n").length) }, (_, index) => index + 1).join("\n");
        return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-editorWrap" },
          h("pre", { ref: linesRef, className: "dwu-lines" }, lineNumbers),
          h("div", { className: "dwu-codeArea" },
            syntaxHighlight && h("pre", { ref: highlightRef, className: "dwu-highlight", "aria-hidden": true, dangerouslySetInnerHTML: { __html: highlightedCode(content) } }),
            h("textarea", { className: "dwu-editor", "data-highlight": syntaxHighlight || undefined, "data-flash": flash || undefined, spellCheck: false, value: content, onScroll: (event) => { if (linesRef.current) linesRef.current.scrollTop = event.currentTarget.scrollTop; if (highlightRef.current) { highlightRef.current.scrollTop = event.currentTarget.scrollTop; highlightRef.current.scrollLeft = event.currentTarget.scrollLeft; } }, onChange: (event) => { const next = event.target.value; setContent(next); setDirty(true); onDirty(true); setStatus(""); updateSnapshot(root, file, { kind, content: next, mtimeMs }); } })
          )
        ));
      }
      if (kind === "pdf") return h("div", { className: "dwu-filePane" }, toolbar, h("iframe", { className: "dwu-frame", src: assetUrl(root, file), title: file }));
      if (kind === "video") return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-media" }, h("video", { src: assetUrl(root, file), controls: true, preload: "metadata" }, "当前视频编码无法在浏览器中播放。")));
      if (kind === "audio") return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-media" }, h("audio", { src: assetUrl(root, file), controls: true, preload: "metadata" })));
      if (kind === "image") return pixelEditableImageExtensions.has(extOf(file)) ? h(PixelEditor, { root, file, onDirty }) : h(ImageViewer, { root, file });
      if (kind === "aseprite") return h(PixelEditor, { root, file, onDirty });
      if (kind === "office") return h("div", { className: "dwu-filePane" }, toolbar, h(OfficePreview, { root, file }));
      return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeIcon" }, "◇"), h("div", { className: "dwu-welcomeTitle" }, "暂不支持内嵌预览"), h("div", { className: "dwu-welcomeText" }, "可以在左侧文件树点击 ↗，使用系统默认应用打开。"))));
    }

    function TerminalPanel({ root, onClose }) {
      const [command, setCommand] = React.useState("");
      const [cwd, setCwd] = React.useState(root);
      const [entries, setEntries] = React.useState([]);
      const [running, setRunning] = React.useState(false);
      const outputRef = React.useRef(null);
      const inputRef = React.useRef(null);
      React.useEffect(() => { inputRef.current?.focus(); }, []);
      React.useEffect(() => {
        const node = outputRef.current;
        if (node) node.scrollTop = node.scrollHeight;
      }, [entries]);
      const run = async (event) => {
        event.preventDefault();
        const value = command.trim();
        if (!value || running) return;
        const id = `${Date.now()}-${Math.random()}`;
        setCommand("");
        setRunning(true);
        setEntries((previous) => [...previous, { id, command: value, output: "", code: null }]);
        try {
          const result = await getJson(`${API}?op=terminal`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ root, cwd, command: value })
          });
          if (typeof result.cwd === "string" && result.cwd) setCwd(result.cwd);
          setEntries((previous) => previous.map((entry) => entry.id === id ? { ...entry, output: result.output, code: result.code } : entry));
        } catch (error) {
          setEntries((previous) => previous.map((entry) => entry.id === id ? { ...entry, output: `终端错误：${error.message}`, code: 1 } : entry));
        } finally {
          setRunning(false);
          setTimeout(() => inputRef.current?.focus(), 0);
        }
      };
      return h("section", { className: "dwu-terminal", "aria-label": "项目终端" },
        h("div", { className: "dwu-terminalHead" },
          h("span", { className: "dwu-terminalCwd", title: cwd }, cwd),
          h("button", { type: "button", className: "dwu-terminalAction", disabled: entries.length === 0, onClick: () => setEntries([]) }, "清空"),
          h("button", { type: "button", className: "dwu-terminalAction", "aria-label": "关闭终端", onClick: onClose }, "×")
        ),
        h("div", { ref: outputRef, className: "dwu-terminalOutput", role: "log", "aria-live": "polite" },
          entries.length === 0 && h("div", { className: "dwu-terminalEntry" }, h("span", { className: "dwu-terminalPrompt" }, "❯ "), "在当前项目目录运行命令"),
          entries.map((entry) => h("div", { key: entry.id, className: "dwu-terminalEntry" },
            h("div", { className: "dwu-terminalCommand" }, h("span", { className: "dwu-terminalPrompt" }, "❯ "), entry.command),
            entry.output && h("div", { className: "dwu-terminalResult", "data-error": entry.code !== null && entry.code !== 0 || undefined }, entry.output),
            entry.code !== null && entry.code !== 0 && h("div", { className: "dwu-terminalResult", "data-error": true }, `[退出代码 ${entry.code}]`)
          ))
        ),
        h("form", { className: "dwu-terminalForm", onSubmit: run },
          h("span", { className: "dwu-terminalPrompt" }, "❯"),
          h("input", { ref: inputRef, className: "dwu-terminalInput", value: command, disabled: running, autoComplete: "off", spellCheck: false, placeholder: running ? "命令运行中…" : "输入命令并按回车", onChange: (event) => setCommand(event.target.value) }),
          running && h("span", { className: "dwu-terminalRunning" }, "运行中")
        )
      );
    }

    function ZonePlaceholder({ zone }) {
      const def = zoneById(zone);
      return h("div", { className: "dwu-root dwu-workspace" },
        h("div", { className: "dwu-welcome" },
          h("div", { className: "dwu-welcomeCard" },
            h("div", { className: "dwu-welcomeIcon" }, def.icon),
            h("div", { className: "dwu-welcomeTitle" }, def.label),
            h("div", { className: "dwu-welcomeText" }, "该工作台正在开发中…")
          )
        )
      );
    }
    function GraphPanel({ root }) {
      const workspaces = useHostWorkspaces((state) => state.items ?? []);
      const wsPaths = workspaces.map((w) => w.path).filter(Boolean);
      useGraphCache();
      const selectedRoot = graphCache.selectedRoot;
      const data = graphCache.data;
      const view = graphCache.view;
      const hiddenLabels = graphCache.hiddenLabels;
      const engine = graphCache.engine;
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState("");
      const [dragging, setDragging] = React.useState(false);
      const viewRef = React.useRef(view);
      viewRef.current = view;
      const dragRef = React.useRef(null);
      const movedRef = React.useRef(false);
      const canvasRef = React.useRef(null);
      const [hovered, setHovered] = React.useState(null);
      const [query, setQuery] = React.useState("");
      const [onlyUnreferenced, setOnlyUnreferenced] = React.useState(false);
      const [selected, setSelected] = React.useState(null);

      // 首次进入且无缓存工作区时，跟随当前会话工作区
      React.useEffect(() => {
        if (!graphCache.selectedRoot && root) setGraphCache({ selectedRoot: root });
      }, []);

      const load = React.useCallback(() => {
        if (!selectedRoot) return undefined;
        let cancelled = false;
        setLoading(true); setError("");
        getJson(apiUrl("graph", selectedRoot)).then((value) => {
          if (cancelled) return;
          setGraphCache({ data: value }); setLoading(false);
        }).catch((err) => { if (!cancelled) { setError(String(err?.message ?? err)); setLoading(false); } });
        return () => { cancelled = true; };
      }, [selectedRoot]);

      React.useEffect(() => { if (!graphCache.data) load(); }, [load]);

      React.useEffect(() => {
        const el = canvasRef.current;
        if (!el) return;
        const onWheel = (event) => {
          event.preventDefault();
          const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
          const v = graphCache.view;
          setGraphCache({ view: { ...v, scale: Math.min(3, Math.max(0.25, v.scale * factor)) } });
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
      }, []);

      const layout = React.useMemo(() => {
        if (!data || !data.nodes) return {};
        const map = {};
        const columns = { source: [], container: [], asset: [] };
        for (const n of data.nodes) {
          const role = n.role === "container" || n.role === "asset" ? n.role : "source";
          columns[role].push(n);
        }
        const X = { source: 10, container: 340, asset: 670 };
        const top = 14, rowH = 30;
        for (const role of ["source", "container", "asset"]) {
          columns[role].forEach((n, i) => { map[n.id] = { x: X[role], y: top + i * rowH, role }; });
        }
        return map;
      }, [data]);

      const onPointerDown = (event) => {
        movedRef.current = false;
        dragRef.current = { x: event.clientX, y: event.clientY, vx: viewRef.current.x, vy: viewRef.current.y };
        setDragging(true);
        try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* ignore */ }
      };
      const onPointerMove = (event) => {
        const d = dragRef.current;
        if (!d) return;
        const dx = event.clientX - d.x, dy = event.clientY - d.y;
        if (!movedRef.current && Math.abs(dx) + Math.abs(dy) > 3) movedRef.current = true;
        if (movedRef.current) setGraphCache({ view: { x: d.vx + dx, y: d.vy + dy, scale: graphCache.view.scale } });
      };
      const onPointerUp = () => { dragRef.current = null; setDragging(false); };
      const openNode = (filePath) => {
        if (movedRef.current) return;
        if (serviceBridge.openPath) serviceBridge.openPath(`${selectedRoot}/${filePath}`).catch(() => {});
      };

      const codeCount = data ? data.nodes.filter((n) => n.role !== "asset").length : 0;
      const assetCount = data ? data.nodes.filter((n) => n.role === "asset").length : 0;
      const edgeCount = data ? data.edges.length : 0;
      const strongEdgeCount = data ? data.edges.filter((e) => e.method !== "stem").length : 0;

      const adj = React.useMemo(() => {
        const map = new Map();
        for (const e of data?.edges ?? []) {
          if (!map.has(e.from)) map.set(e.from, new Set());
          if (!map.has(e.to)) map.set(e.to, new Set());
          map.get(e.from).add(e.to);
          map.get(e.to).add(e.from);
        }
        return map;
      }, [data]);

      // 入度：节点被引用的次数（零引用素材 = 无入边的素材节点）
      const inDegree = React.useMemo(() => {
        const map = new Map();
        for (const e of data?.edges ?? []) map.set(e.to, (map.get(e.to) ?? 0) + 1);
        return map;
      }, [data]);

      const nodeById = React.useMemo(() => {
        const map = new Map();
        for (const n of data?.nodes ?? []) map.set(n.id, n);
        return map;
      }, [data]);

      // 可见性管道：分类过滤 → 搜索（含一跳邻居）→ 只看未引用素材
      const q = query.trim().toLowerCase();
      let visibleNodes = data ? data.nodes.filter((n) => !hiddenLabels[n.categoryLabel]) : [];
      if (q) {
        const matched = new Set();
        for (const n of visibleNodes) if (n.name.toLowerCase().includes(q)) matched.add(n.id);
        const expanded = new Set(matched);
        for (const e of data?.edges ?? []) {
          if (matched.has(e.from)) expanded.add(e.to);
          if (matched.has(e.to)) expanded.add(e.from);
        }
        visibleNodes = visibleNodes.filter((n) => expanded.has(n.id));
      }
      if (onlyUnreferenced) {
        visibleNodes = visibleNodes.filter((n) => n.role === "asset" && (inDegree.get(n.id) ?? 0) === 0);
      }
      const visibleIds = new Set(visibleNodes.map((n) => n.id));
      const visibleEdges = data ? data.edges.filter((e) => visibleIds.has(e.from) && visibleIds.has(e.to)) : [];
      const unreferencedAssetCount = data ? data.nodes.filter((n) => n.role === "asset" && (inDegree.get(n.id) ?? 0) === 0).length : 0;

      const selectedNode = selected ? nodeById.get(selected) : null;
      const selectedIn = selected ? (data?.edges ?? []).filter((e) => e.to === selected) : [];
      const selectedOut = selected ? (data?.edges ?? []).filter((e) => e.from === selected) : [];
      const refRow = (id) => {
        const n = nodeById.get(id);
        if (!n) return null;
        return h("button", {
          key: id, type: "button",
          onClick: () => setSelected(id),
          title: `${n.categoryLabel} · ${n.path}`,
          style: { display: "flex", alignItems: "center", gap: 6, width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "4px 6px", borderRadius: 4, cursor: "pointer", fontSize: 11, color: "var(--dsw-alias-label-primary)" }
        },
          h("span", { style: { width: 8, height: 8, borderRadius: 2, background: n.color, flex: "none" } }),
          h("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, n.name)
        );
      };

      const related = React.useMemo(() => {
        if (!hovered) return null;
        const set = new Set([hovered]);
        for (const neighbor of adj.get(hovered) ?? []) set.add(neighbor);
        return set;
      }, [hovered, adj]);

      return h("div", { className: "dwu-root dwu-workspace", style: { display: "flex", flexDirection: "column" } },
        h("div", { style: { flex: "none", display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderBottom: "1px solid var(--dsw-alias-border-l2)" } },
          h("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)" } }, "工作区"),
          h("select", {
            style: { height: 26, maxWidth: 260, border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: "var(--dsw-alias-bg-base)", color: "var(--dsw-alias-label-primary)", fontSize: 11, padding: "0 6px" },
            value: selectedRoot,
            onChange: (event) => { setGraphCache({ selectedRoot: event.target.value, data: null }); }
          },
            wsPaths.length === 0 ? h("option", { value: "" }, "暂无工作区") : wsPaths.map((p) => h("option", { key: p, value: p }, basename(p) || p))),
          h("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)" } }, "引擎"),
          h("select", {
            style: { height: 26, border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: "var(--dsw-alias-bg-base)", color: "var(--dsw-alias-label-primary)", fontSize: 11, padding: "0 6px" },
            value: engine,
            onChange: (event) => setGraphCache({ engine: event.target.value }),
            title: "解析规则引擎（当前仅 Unity）"
          },
            h("option", { value: "unity" }, "Unity")),
          h("input", {
            type: "text", placeholder: "搜索文件名…", value: query,
            onChange: (event) => setQuery(event.target.value),
            style: { height: 26, width: 140, border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: "var(--dsw-alias-bg-base)", color: "var(--dsw-alias-label-primary)", fontSize: 11, padding: "0 8px" }
          }),
          h("button", {
            type: "button",
            onClick: () => setOnlyUnreferenced((v) => !v),
            title: "只看没有任何引用（入边）的素材",
            style: { height: 26, padding: "0 10px", border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: onlyUnreferenced ? "var(--dsw-alias-state-business-tertiary)" : "transparent", color: onlyUnreferenced ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 11, whiteSpace: "nowrap" }
          }, `未引用 ${unreferencedAssetCount}`),
          h("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)" } }, `代码 ${codeCount} · 素材 ${assetCount} · 强引用 ${strongEdgeCount} · 启发 ${edgeCount - strongEdgeCount}${data?.truncated ? " · 已截断" : ""}`),
          h("button", { type: "button", style: { marginLeft: "auto", height: 26, padding: "0 10px", border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: "transparent", color: "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 11 }, onClick: load }, "重新解析")
        ),
        data && data.legend && data.legend.length > 0 && h("div", { style: { flex: "none", display: "flex", flexWrap: "wrap", gap: "4px 14px", padding: "6px 12px", borderBottom: "1px solid var(--dsw-alias-border-l2)" } },
          data.legend.map((item) => {
            const isHidden = Boolean(hiddenLabels[item.label]);
            return h("button", {
              key: item.label, type: "button",
              onClick: () => setGraphCache({ hiddenLabels: { ...graphCache.hiddenLabels, [item.label]: !graphCache.hiddenLabels[item.label] } }),
              title: isHidden ? `显示 ${item.label}` : `隐藏 ${item.label}`,
              style: { display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--dsw-alias-label-secondary)", background: "transparent", border: "none", padding: 0, cursor: "pointer", opacity: isHidden ? 0.4 : 1 }
            },
              h("span", { style: { width: 9, height: 9, borderRadius: 3, background: isHidden ? "transparent" : item.color, border: isHidden ? `1px solid ${item.color}` : "none", flex: "none" } }),
              h("span", { style: { textDecoration: isHidden ? "line-through" : "none" } }, `${item.label} ${item.count}`)
            );
          }),
          h("span", { style: { color: "var(--dsw-alias-border-l2)", margin: "0 2px" } }, "|"),
          h("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--dsw-alias-label-secondary)" }, title: "GUID / Resources.Load / Addressables" },
            h("span", { style: { width: 16, height: 0, borderTop: "2px solid var(--dsw-alias-state-business-primary)", display: "inline-block" } }),
            "强关联"
          ),
          h("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--dsw-alias-label-secondary)" }, title: "文件名匹配" },
            h("span", { style: { width: 16, height: 0, borderTop: "1px dashed var(--dsw-alias-border-l3)", display: "inline-block" } }),
            "启发式"
          )
        ),
        h("div", { style: { flex: 1, minHeight: 0, display: "flex" } },
          h("div", {
            ref: canvasRef,
            style: { flex: 1, minWidth: 0, position: "relative", overflow: "hidden", cursor: dragging ? "grabbing" : "grab", touchAction: "none" },
            onPointerDown, onPointerMove, onPointerUp, onPointerLeave: onPointerUp
          },
          !selectedRoot ? h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeIcon" }, "🕸️"), h("div", { className: "dwu-welcomeTitle" }, "请选择工作区"), h("div", { className: "dwu-welcomeText" }, "在上方选择一个工作区，游戏关系视图将解析其中的代码与素材关系。")))
          : loading ? h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeText" }, "解析关系中…")))
          : error ? h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeText" }, error)))
          : !data || !data.nodes.length ? h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeText" }, "未发现代码或素材文件")))
          : h("svg", { width: "100%", height: "100%", style: { display: "block" } },
            h("g", { transform: `translate(${view.x},${view.y}) scale(${view.scale})` },
              visibleEdges.map((edge) => {
                const from = layout[edge.from], to = layout[edge.to];
                if (!from || !to) return null;
                const widthFor = (role) => (role === "source" ? 160 : 150);
                const x1 = from.x > to.x ? from.x : from.x + widthFor(from.role);
                const x2 = from.x > to.x ? to.x + widthFor(to.role) : to.x;
                const y1 = from.y + 13, y2 = to.y + 13;
                const mx = (x1 + x2) / 2;
                const edgeActive = !hovered || edge.from === hovered || edge.to === hovered;
                const strong = edge.method !== "stem";
                const methodLabel = edge.method === "guid" ? "GUID" : edge.method === "resources" ? "Resources.Load" : edge.method === "addressables" ? "Addressables" : "文件名匹配";
                return h("path", {
                  key: `${edge.from}::${edge.to}`, d: `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`,
                  fill: "none",
                  stroke: strong ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-border-l3)",
                  strokeWidth: hovered && edgeActive ? 1.5 : 1,
                  strokeDasharray: strong ? undefined : "3 3",
                  opacity: hovered ? (edgeActive ? 0.9 : 0.06) : (strong ? 0.8 : 0.5),
                  title: strong ? `强关联 · ${methodLabel}` : "启发式 · 文件名匹配"
                });
              }),
              visibleNodes.map((node) => {
                const pos = layout[node.id];
                if (!pos) return null;
                const role = node.role === "container" || node.role === "asset" ? node.role : "source";
                const isSource = role === "source";
                const w = isSource ? 160 : 150;
                const label = node.name;
                const shown = label.length > (isSource ? 24 : 22) ? label.slice(0, (isSource ? 24 : 22) - 1) + "…" : label;
                const nodeColor = node.color || (isSource ? "#60a5fa" : "#f59e0b");
                const unreferenced = node.role === "asset" && (inDegree.get(node.id) ?? 0) === 0;
                const active = !hovered || (related && related.has(node.id));
                const isSelected = selected === node.id;
                return h("g", {
                  key: node.id, transform: `translate(${pos.x},${pos.y})`,
                  style: { cursor: "pointer", opacity: hovered ? (active ? 1 : 0.15) : 1, transition: "opacity .12s" },
                  onClick: () => { if (movedRef.current) return; setSelected(isSelected ? null : node.id); },
                  onMouseEnter: () => setHovered(node.id),
                  onMouseLeave: () => setHovered(null),
                  title: `${node.categoryLabel} · ${node.path}${unreferenced ? " · 未引用" : ""}`
                },
                  h("rect", { x: 0, y: 0, width: w, height: 26, rx: 6, fill: unreferenced ? "#f8717118" : `${nodeColor}24`, stroke: isSelected ? "var(--dsw-alias-state-business-primary)" : unreferenced ? "#f87171" : nodeColor, strokeWidth: isSelected ? 2 : (hovered && active ? 1.6 : 1) }),
                  h("text", { x: 8, y: 17, fontSize: 11, fill: "var(--dsw-alias-label-primary)", style: { pointerEvents: "none" } }, shown)
                );
              })
            )
          )
          ),
          selectedNode && h("div", { className: "dwu-workspace", style: { flex: "none", width: 280, minHeight: 0, overflow: "auto", borderLeft: "1px solid var(--dsw-alias-border-l2)", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 10 } },
            h("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
              h("span", { style: { width: 10, height: 10, borderRadius: 3, background: selectedNode.color, flex: "none" } }),
              h("span", { style: { fontSize: 12, fontWeight: 650, color: "var(--dsw-alias-label-primary)", wordBreak: "break-all" } }, selectedNode.name),
              h("button", { type: "button", onClick: () => setSelected(null), title: "关闭", style: { marginLeft: "auto", border: "none", background: "transparent", color: "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 13, padding: "0 2px" } }, "✕")
            ),
            h("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)", wordBreak: "break-all" } }, selectedNode.path),
            h("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-secondary)" } }, `${selectedNode.categoryLabel}${selectedNode.role === "asset" && (inDegree.get(selectedNode.id) ?? 0) === 0 ? " · 未引用" : ""}`),
            h("button", { type: "button", onClick: () => openNode(selectedNode.path), style: { height: 26, padding: "0 12px", border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 6, background: "transparent", color: "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 11, alignSelf: "flex-start" } }, "打开文件"),
            h("div", { style: { fontSize: 11, fontWeight: 650, color: "var(--dsw-alias-label-primary)", marginTop: 4 } }, `被引用 ${selectedIn.length}`),
            selectedIn.length === 0 ? h("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)" } }, "无")
              : selectedIn.map((e) => refRow(e.from)),
            h("div", { style: { fontSize: 11, fontWeight: 650, color: "var(--dsw-alias-label-primary)", marginTop: 4 } }, `引用了 ${selectedOut.length}`),
            selectedOut.length === 0 ? h("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-caption)" } }, "无")
              : selectedOut.map((e) => refRow(e.to))
          )
        )
      );
    }
    function WorkspaceSurface({ useSessions, useWorkspaces }) {
      const { workspace } = currentWorkspace(useSessions, useWorkspaces);
      const root = workspace?.path;
      const zoneState = useZonePrefs();
      const terminalState = useTerminalState();
      const [tabs, setTabs] = React.useState([]);
      const [active, setActive] = React.useState("");
      const [dirty, setDirty] = React.useState({});
      const [previewTab, setPreviewTabState] = React.useState("");
      const tabsRef = React.useRef([]);
      const previewTabRef = React.useRef("");
      const dirtyRef = React.useRef({});
      dirtyRef.current = dirty;
      const setPreviewTab = React.useCallback((file) => {
        previewTabRef.current = file;
        setPreviewTabState(file);
        if (root) saveJson(storageKey(root, "previewTab"), file);
      }, [root]);
      React.useEffect(() => {
        if (!root) { tabsRef.current = []; previewTabRef.current = ""; setTabs([]); setActive(""); setPreviewTabState(""); setWorkbenchTerminal(null, false); return; }
        const saved = loadJson(storageKey(root, "tabs"), []);
        const existing = Array.isArray(saved) ? saved.filter((item) => typeof item === "string").slice(0, 20) : [];
        const tabModelVersion = loadJson(storageKey(root, "tabModelVersion"), 0);
        const next = tabModelVersion >= 2 ? existing : existing.slice(0, 1);
        if (tabModelVersion < 2) { saveJson(storageKey(root, "tabs"), next); saveJson(storageKey(root, "tabModelVersion"), 2); }
        const savedPreview = tabModelVersion >= 2 ? loadJson(storageKey(root, "previewTab"), "") : next[0] ?? "";
        const restoredPreview = typeof savedPreview === "string" && next.includes(savedPreview) ? savedPreview : "";
        tabsRef.current = next; previewTabRef.current = restoredPreview;
        setTabs(next); setActive(next[0] ?? "");
        setPreviewTabState(restoredPreview);
        setWorkbenchTerminal(root, loadJson(storageKey(root, "terminalOpen"), false) === true);
      }, [root]);
      React.useEffect(() => {
        const listener = (event) => {
          const detail = event.detail;
          if (!detail?.root || !detail?.path || detail.root !== root) return;
          if (!zoneAllowsFile(zoneState.zone, detail.path)) return;
          const previous = tabsRef.current;
          let next = previous;
          if (detail.mode === "preview") {
            if (!previous.includes(detail.path)) {
              const currentPreview = previewTabRef.current;
              const replaceable = currentPreview && previous.includes(currentPreview) && !dirtyRef.current[currentPreview];
              next = replaceable ? previous.map((file) => file === currentPreview ? detail.path : file) : [...previous, detail.path];
              setPreviewTab(detail.path);
            }
          } else {
            if (!previous.includes(detail.path)) next = [...previous, detail.path];
            if (previewTabRef.current === detail.path) setPreviewTab("");
          }
          if (next !== previous) { tabsRef.current = next; setTabs(next); saveJson(storageKey(root, "tabs"), next); }
          setActive(detail.path);
        };
        bus.addEventListener("open-file", listener); return () => bus.removeEventListener("open-file", listener);
      }, [root, setPreviewTab, zoneState.zone]);
      React.useEffect(() => {
        const listener = (event) => {
          const detail = event.detail;
          if (!root || detail.root !== root) return;
          setTabs((previous) => {
            const next = [...new Set(previous.map((file) => remapPath(file, detail.source, detail.destination)))];
            tabsRef.current = next; saveJson(storageKey(root, "tabs"), next); return next;
          });
          if (previewTabRef.current) setPreviewTab(remapPath(previewTabRef.current, detail.source, detail.destination));
          setActive((file) => remapPath(file, detail.source, detail.destination));
          setDirty((previous) => Object.fromEntries(Object.entries(previous).map(([file, value]) => [remapPath(file, detail.source, detail.destination), value])));
        };
        bus.addEventListener("file-moved", listener); return () => bus.removeEventListener("file-moved", listener);
      }, [root, setPreviewTab]);
      React.useEffect(() => { if (root && active) bus.dispatchEvent(new CustomEvent("active-file", { detail: { root, path: active } })); }, [root, active]);
      const markActiveDirty = React.useCallback((value) => {
        if (!active) return;
        if (value && previewTabRef.current === active) setPreviewTab("");
        setDirty((current) => current[active] === value ? current : { ...current, [active]: value });
      }, [active, setPreviewTab]);
      const close = (file) => {
        if (dirty[file] && !window.confirm(`${basename(file)} 尚未保存，仍要关闭吗？`)) return;
        setTabs((previous) => {
          const index = previous.indexOf(file); const next = previous.filter((item) => item !== file); saveJson(storageKey(root, "tabs"), next);
          tabsRef.current = next;
          if (previewTabRef.current === file) setPreviewTab("");
          if (active === file) setActive(next[Math.min(index, next.length - 1)] ?? ""); return next;
        });
      };
      React.useEffect(() => {
        const onKey = (event) => {
          if ((event.ctrlKey || event.metaKey) && event.key === "`") {
            event.preventDefault();
            toggleWorkbenchTerminal(root);
          }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
      }, [terminalState.open, root]);
      if (!root) return h("div", { className: "dwu-root dwu-workspace" }, h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeIcon" }, "⌘"), h("div", { className: "dwu-welcomeTitle" }, "选择一个项目开始"), h("div", { className: "dwu-welcomeText" }, "在左侧会话列表打开一个工作区；文件会在这里以标签页编辑或预览，AI 对话保留在中间。"))));
      return h("div", { className: "dwu-root dwu-workspace" },
        tabs.length > 0 && h("div", { className: "dwu-tabs" }, tabs.map((file) => h("button", { key: file, className: "dwu-tab", "data-active": file === active || undefined, "data-preview": file === previewTab || undefined, title: file === previewTab ? `${file}\n预览标签；双击固定` : file, onClick: () => setActive(file), onDoubleClick: () => { if (previewTabRef.current === file) setPreviewTab(""); } }, h(FileIcon, { file, size: 16 }), h("span", { className: "dwu-tabName" }, basename(file)), dirty[file] ? h("span", { className: "dwu-dirty" }, "●") : null, h("span", { className: "dwu-close", onClick: (event) => { event.stopPropagation(); close(file); } }, "×")))),
        h("div", { className: "dwu-main" },
          h("div", { className: "dwu-body" }, active ? h(FilePane, { key: `${root}:${active}`, root, file: active, onDirty: markActiveDirty }) : h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeIcon" }, zoneById(zoneState.zone).icon), h("div", { className: "dwu-welcomeTitle" }, zoneById(zoneState.zone).label), h("div", { className: "dwu-welcomeText" }, zoneState.zone === "assets" ? "从文件树选择文件。支持图片和视频的编辑预览。" : "从文件树选择文件。支持文本与 Markdown 编辑、PDF、Word、Excel 的编辑和预览。")))),
          terminalState.root === root && terminalState.open && h(TerminalPanel, { key: root, root, onClose: () => setWorkbenchTerminal(root, false) })
        )
      );
    }

    // 素材扩展名：文件树「图标模式」下，图片/视频文件显示缩略图（其余用文件类型图标）。
    const VISUAL_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico", "avif", "tif", "tiff", "mp4", "webm", "mov", "m4v", "avi", "mkv"]);
    function isVisualFile(name) { const dot = name.lastIndexOf("."); return dot > 0 && VISUAL_EXTS.has(name.slice(dot + 1).toLowerCase()); }
    function humanSize(bytes) {
      if (!Number.isFinite(bytes) || bytes < 0) return "";
      const units = ["B", "KB", "MB", "GB", "TB"];
      let value = bytes; let unit = 0;
      while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit += 1; }
      return `${value >= 100 || unit === 0 ? Math.round(value) : value.toFixed(1)} ${units[unit]}`;
    }
    // 引擎 → 素材根目录（素材工作台文件树默认定位）。
    function assetRootFor(engine) {
      if (engine === "unity") return "Assets/ArtSource";
      if (engine === "godot") return "Assets";
      return "";
    }
    // zone 允许打开的文件：素材=图片/视频；代码=文本/代码/Markdown；其它 zone 不限制。
    function zoneAllowsFile(zone, file) {
      if (zone === "assets") return isVisualFile(file) || fileKind(file) === "aseprite";
      if (zone === "code") { const kind = fileKind(file); return kind === "text" || kind === "markdown"; }
      return true;
    }
    // 扩展名 → 语言名（代码查看器元信息用）。
    const LANGUAGE_NAMES = { js: "JavaScript", jsx: "JavaScript", mjs: "JavaScript", cjs: "JavaScript", ts: "TypeScript", tsx: "TypeScript", py: "Python", rb: "Ruby", go: "Go", rs: "Rust", java: "Java", kt: "Kotlin", c: "C", cpp: "C++", cc: "C++", h: "C/C++ 头文件", cs: "C#", php: "PHP", swift: "Swift", sh: "Shell", bash: "Shell", zsh: "Shell", html: "HTML", htm: "HTML", css: "CSS", scss: "SCSS", less: "Less", json: "JSON", yaml: "YAML", yml: "YAML", toml: "TOML", xml: "XML", sql: "SQL", md: "Markdown", mdx: "MDX", vue: "Vue", svelte: "Svelte", lua: "Lua", dart: "Dart", r: "R", scala: "Scala", elm: "Elm", ex: "Elixir", erl: "Erlang", hs: "Haskell", clj: "Clojure", proto: "Protobuf", gradle: "Gradle" };
    function languageName(file) { const ext = extOf(file); return LANGUAGE_NAMES[ext] ?? (ext ? ext.toUpperCase() : "文本"); }

    function ContextDock({ useSessions }) {
      useBus("contexts");
      const sessions = useSessions((state) => state);
      const session = sessions.current ? sessions.byId[sessions.current] : undefined;
      const root = session?.cwd;
      if (!root) return null;
      const contexts = [...contextMap(root).keys()];
      if (contexts.length === 0) return null;
      return h("div", { className: "dwu-contextDock" }, h("span", { className: "dwu-contextLabel" }, "参考文件"), contexts.map((file) => h("button", { key: file, type: "button", className: "dwu-chip", title: `点击移除 · ${file}`, onClick: () => removeContext(root, file) }, h("span", { className: "dwu-chipDot" }), h("span", { className: "dwu-chipName" }, basename(file)), h("span", { className: "dwu-chipRemove", "aria-hidden": true }, "×"))));
    }

    function SkinSlider(props) {
      return h("div", { style: { marginBottom: 14 } }, [
        h("label", { style: { fontSize: 12, display: "block", marginBottom: 6, color: "var(--dsw-alias-label-secondary)" } }, `${props.label}：${props.value}${props.suffix}`),
        h("input", { type: "range", min: props.min, max: props.max, value: props.value, style: { width: "100%" }, onChange: (e) => props.onChange(Number(e.target.value)) })
      ]);
    }
    function SkinChoice(props) {
      return h("div", { style: { display: "flex", gap: 8 } },
        props.options.map((opt) => {
          const active = opt.value === props.value;
          return h("button", {
            key: opt.value, type: "button", onClick: () => props.onChange(opt.value),
            style: {
              flex: 1, height: 34, border: `1px solid ${active ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-border-l2)"}`,
              borderRadius: 8, background: active ? "var(--dsw-alias-state-business-tertiary)" : "transparent",
              color: active ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-label-secondary)",
              cursor: "pointer", fontSize: 12, fontWeight: active ? 650 : 500
            }
          }, opt.label);
        })
      );
    }
    function SkinCenterSection() {
      useBus("skin");
      const [status, setStatus] = React.useState("");
      const v = skinSettings;
      const commit = (partial) => { commitSkin(partial); setStatus(""); };
      const handleFile = (e) => {
        const file = e.target.files && e.target.files[0];
        e.target.value = "";
        if (!file) return;
        setStatus("正在上传…");
        fetch(`${API}?op=wallpaper-upload&name=${encodeURIComponent(file.name)}`, { method: "POST", body: file })
          .then((response) => response.json())
          .then((value) => {
            if (!value || !value.ok) throw new Error(value && value.error ? value.error : "上传失败");
            commitSkin({ wallpaper: value.fileName, uploads: v.uploads.concat([{ fileName: value.fileName, name: file.name }]) });
            setStatus("已上传并应用：" + file.name);
          })
          .catch((err) => setStatus("上传失败：" + (err && err.message ? err.message : String(err))));
      };
      const removeUpload = (idx) => {
        const removed = v.uploads[idx];
        commit({ uploads: v.uploads.filter((_item, k) => k !== idx), wallpaper: removed && v.wallpaper === removed.fileName ? "builtin" : v.wallpaper });
        if (removed) postJson("wallpaper-delete", { fileName: removed.fileName }).catch(() => {});
      };
      const veangActive = v.appearance === "veang";
      const currentUrl = wallpaperUrl(v.wallpaper);
      const children = [
        h("div", { style: { fontSize: 16, fontWeight: 650, marginBottom: 16 } }, "皮肤中心"),
        h("div", { style: { fontSize: 12, marginBottom: 6, color: "var(--dsw-alias-label-secondary)" } }, "外观"),
        h(SkinChoice, { options: [{ value: "default", label: "默认原皮" }, { value: "veang", label: "Veang 主题" }], value: v.appearance, onChange: (x) => commit({ appearance: x }) })
      ];
      if (veangActive) {
        children.push(
          h("div", { style: { fontSize: 12, margin: "16px 0 6px", color: "var(--dsw-alias-label-secondary)" } }, "背景图片"),
          h("div", { style: { height: 110, borderRadius: 8, overflow: "hidden", border: "1px solid var(--dsw-alias-border-l2)", marginBottom: 8, background: "var(--dsw-specific-sidebar-fill)" } },
            h("img", { src: currentUrl, alt: "当前背景", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })
          ),
          h("div", { style: { display: "flex", gap: 8, marginBottom: 8 } }, [
            h("label", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: 34, border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 8, background: "transparent", color: "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 12 } }, [
              "上传图片…",
              h("input", { type: "file", accept: "image/*", style: { display: "none" }, onChange: handleFile })
            ]),
            v.wallpaper !== "builtin" ? h("button", { type: "button", onClick: () => commit({ wallpaper: "builtin" }), style: { height: 34, padding: "0 12px", border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 8, background: "transparent", color: "var(--dsw-alias-label-secondary)", cursor: "pointer", fontSize: 12 } }, "恢复内置") : null
          ]),
          status ? h("div", { style: { fontSize: 11, marginBottom: 8, color: /失败/.test(status) ? "var(--dsw-alias-state-error-primary)" : "var(--dsw-alias-label-caption)" } }, status) : null,
          h("div", { style: { fontSize: 12, margin: "6px 0 6px", color: "var(--dsw-alias-label-secondary)" } }, "历史上传"),
          v.uploads.length > 0 ? h("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(92px, 1fr))", gap: 8, marginBottom: 4 } },
            v.uploads.map((item, idx) => {
              const active = v.wallpaper === item.fileName;
              return h("div", { key: item.fileName, title: item.name, onClick: () => commit({ wallpaper: item.fileName }), style: { position: "relative", height: 58, borderRadius: 6, overflow: "hidden", border: `1px solid ${active ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-border-l2)"}`, cursor: "pointer", boxSizing: "border-box" } }, [
                h("img", { src: wallpaperUrl(item.fileName), alt: item.name, style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }),
                h("button", { type: "button", title: "删除", onClick: (e) => { e.stopPropagation(); removeUpload(idx); }, style: { position: "absolute", top: 3, right: 3, width: 18, height: 18, borderRadius: 9, border: "none", background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 12, lineHeight: "18px", cursor: "pointer", padding: 0 } }, "×")
              ]);
            })
          ) : h("div", { style: { fontSize: 11, marginBottom: 4, color: "var(--dsw-alias-label-caption)" } }, "暂无上传（点上方「上传图片…」添加）"),
          h("div", { style: { fontSize: 12, margin: "18px 0 6px", color: "var(--dsw-alias-label-secondary)" } }, "面板透明度"),
          h(SkinSlider, { label: "背景遮挡", value: v.occlusion, suffix: "", min: 0, max: 100, onChange: (x) => commit({ occlusion: x }) }),
          h(SkinSlider, { label: "背景模糊", value: v.blur, suffix: "px", min: 0, max: 20, onChange: (x) => commit({ blur: x }) }),
          h(SkinSlider, { label: "侧栏不透明度", value: v.sidebar, suffix: "%", min: 0, max: 100, onChange: (x) => commit({ sidebar: x }) }),
          h(SkinSlider, { label: "对话区不透明度", value: v.conversation, suffix: "%", min: 0, max: 100, onChange: (x) => commit({ conversation: x }) }),
          h(SkinSlider, { label: "工作区不透明度", value: v.workbench, suffix: "%", min: 0, max: 100, onChange: (x) => commit({ workbench: x }) })
        );
      } else {
        children.push(h("div", { style: { fontSize: 12, marginTop: 16, lineHeight: 1.6, color: "var(--dsw-alias-label-tertiary)" } }, "默认原皮已启用，不使用任何自定义外观。"));
      }
      return h("div", { style: { padding: "4px 0" } }, children);
    }

    // 0.2.0 overlay 工作台：官方 shell.overlay 座位渲染，官方对话挤到右侧。
    const serviceBridge = { openPath: null, openSession: null, askConversation: null, readAssistantText: null, clearSession: null };
    function VeangOverlay() {
      const overlayState = useOverlayPrefs();
      const hostRef = React.useRef(null);
      const [geo, setGeo] = React.useState(null);
      const { workspace, sessionState } = currentWorkspace(useHostSessions, useHostWorkspaces);
      const zoneState = useZonePrefs();
      const hasWorkspace = Boolean(workspace?.path);
      const boundZone = boundZoneOf(sessionState.current);
      const showWorkbench = overlayState.manualOpen || (hasWorkspace && boundZone !== null);
      // 工作区切换：载入该工作区的视图状态（素材/代码、列表/图标）。
      React.useEffect(() => { if (workspace?.path) applyWorkspacePrefs(workspace.path); }, [workspace?.path]);
      // 反向关联：切对话 → 若该对话绑定了某个 zone，自动切工作台（只在「工作区+会话」真正切换时触发一次，
      // 避免把用户手动切到另一个 zone 又立刻拉回绑定 zone）。
      const zoneSyncRef = React.useRef("");
      React.useEffect(() => {
        const root = workspace?.path ?? "";
        const current = sessionState.current ?? "";
        const key = `${root}::${current}`;
        if (zoneSyncRef.current === key) return;
        zoneSyncRef.current = key;
        if (current) setOverlayManualOpen(false);
        const bound = boundZoneOf(current);
        if (bound) setWorkspaceZone(bound);
      }, [sessionState.current, workspace?.path]);
      const remeasure = React.useCallback(() => {
        const width = overlayPrefs.visible && showWorkbench ? overlayPrefs.width : 0;
        const info = applyConversationSqueeze(width);
        // 无活动会话根（首页 / 新对话）→ 不渲染工作台，也不留对话列挤压。
        if (!info) { releaseConversationSqueeze(); setGeo(null); return; }
        setGeo((prev) => (prev && prev.left === info.left && prev.top === info.top && prev.bottom === info.bottom && prev.width === width ? prev : { left: info.left, top: info.top, bottom: info.bottom, width }));
      }, [showWorkbench]);
      React.useEffect(() => {
        if (!overlayState.visible || !showWorkbench) { releaseConversationSqueeze(); setGeo(null); return; }
        remeasure();
        const observers = [];
        const sidebar = findSidebarElement(hostRef.current ?? document.body);
        if (sidebar) { const ro = new ResizeObserver(remeasure); ro.observe(sidebar); observers.push(ro); }
        const conv = findConversationRoot();
        let mo = null;
        const column = conv ? findConversationColumn(conv) : null;
        if (column) { const roCol = new ResizeObserver(remeasure); roCol.observe(column); observers.push(roCol); }
        if (conv) {
          const ro2 = new ResizeObserver(remeasure); ro2.observe(conv); observers.push(ro2);
          mo = new MutationObserver(() => { if (findConversationRoot() === conv) remeasure(); });
          mo.observe(conv, { attributes: true, attributeFilter: ["style"] });
        }
        const onWindowResize = () => remeasure();
        window.addEventListener("resize", onWindowResize);
        // 兜底：会话根出现/消失（新对话 → 首页，或首页 → 打开会话）时重新锚定。
        let convPresence = !!conv;
        const bodyMo = new MutationObserver(() => {
          const present = !!findConversationRoot();
          if (present !== convPresence) { convPresence = present; remeasure(); }
        });
        bodyMo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-phase"] });
        return () => {
          bodyMo.disconnect();
          window.removeEventListener("resize", onWindowResize);
          if (mo) mo.disconnect();
          for (const ro of observers) ro.disconnect();
          releaseConversationSqueeze();
        };
      }, [overlayState.visible, showWorkbench, remeasure]);
      // 宽度拖动后立刻重挤对话并同步几何（remeasure 直接读 overlayPrefs 最新值）。
      React.useEffect(() => { if (overlayState.visible && showWorkbench) remeasure(); }, [overlayState.width, overlayState.visible, showWorkbench, remeasure]);
      const [dragging, setDragging] = React.useState(false);
      // 皮肤背景兜底：内联计算工作区底色（壁纸上叠加主题色×不透明度），避免依赖注入 CSS 的级联。
      const [, setSkinTick] = React.useState(0);
      React.useEffect(() => { const onSkin = () => setSkinTick((value) => value + 1); bus.addEventListener("skin", onSkin); return () => bus.removeEventListener("skin", onSkin); }, []);
      const overlayBackground = skinSettings.appearance === "veang"
        ? `color-mix(in srgb, var(--dsw-alias-bg-base) ${skinSettings.workbench}%, transparent)`
        : "var(--dsw-alias-bg-base)";
      // 首页（未打开任何工作区）不显示文件工作区。
      if (!overlayState.visible || !showWorkbench || !geo) return null;
      const startResize = (event) => {
        event.preventDefault();
        const startX = event.clientX;
        const startWidth = overlayPrefs.width;
        setDragging(true);
        const move = (moveEvent) => setOverlayWidth(startWidth + moveEvent.clientX - startX);
        const up = () => {
          setDragging(false);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
      };
      const zoneDef = zoneById(zoneState.zone);
      const bodyChildren = zoneDef.kind === "files"
        ? [h(WorkspaceSurface, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces }), h(WorkbenchTree, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces, openPath: (path) => { if (serviceBridge.openPath) serviceBridge.openPath(path).catch(() => {}); } })]
        : zoneDef.kind === "graph"
          ? h(GraphPanel, { root: workspace?.path })
          : h(ZonePlaceholder, { zone: zoneDef.id });
      return h("div", { ref: hostRef, className: "dwu-overlayRoot", "data-dragging": dragging || undefined, style: { left: geo.left, top: geo.top, height: geo.bottom - geo.top, width: overlayState.width, backgroundColor: overlayBackground } },
        h(WorkspaceHeader, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces }),
        h("div", { className: "dwu-overlayBody" }, bodyChildren),
        h("div", { className: "dwu-overlayHandle", "data-dragging": dragging || undefined, title: "拖拽调整工作区宽度", role: "separator", "aria-orientation": "vertical", onPointerDown: startResize })
      );
    }

    // SplitSpec 多栏渲染：领域插件声明 panes，这里只管几何（右挤对话 + 拖宽 + 持久化）。
    function VeangSplit() {
      const split = useSplitState();
      const spec = split.spec;
      const hostRef = React.useRef(null);
      const [geo, setGeo] = React.useState(null);
      const remeasure = React.useCallback(() => {
        if (!spec) { releaseConversationSqueeze(); setGeo(null); return; }
        const total = spec.panes.reduce((sum, _pane, index) => sum + splitPaneWidth(spec, index), 0);
        const info = applyConversationSqueeze(total);
        setGeo(info ? { left: info.left, top: info.top, bottom: info.bottom } : null);
      }, [spec, split.widths]);
      React.useEffect(() => {
        if (!spec) { releaseConversationSqueeze(); setGeo(null); return; }
        remeasure();
        const root = findConversationRoot();
        let ro = null;
        if (root) { ro = new ResizeObserver(remeasure); ro.observe(root); }
        const onResize = () => remeasure();
        const onKey = (event) => { if (event.key === "Escape") closeSplit(); };
        window.addEventListener("resize", onResize);
        window.addEventListener("keydown", onKey);
        return () => {
          window.removeEventListener("resize", onResize);
          window.removeEventListener("keydown", onKey);
          if (ro) ro.disconnect();
          releaseConversationSqueeze();
        };
      }, [spec, remeasure]);
      if (!spec || !geo) return null;
      const startDivider = (index, event) => {
        event.preventDefault();
        const pane = spec.panes[index];
        const startX = event.clientX;
        const startW = splitPaneWidth(spec, index);
        const move = (moveEvent) => {
          const width = Math.min(pane.width?.max ?? 900, Math.max(pane.width?.min ?? 200, Math.round(startW + moveEvent.clientX - startX)));
          setSplitWidths(spec.id, { [pane.id]: width });
        };
        const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
      };
      return h("div", { ref: hostRef, className: "dwu-splitRoot", style: { left: geo.left, top: geo.top, height: geo.bottom - geo.top } },
        h("div", { className: "dwu-splitHead" },
          h("span", { className: "dwu-splitTitle" }, spec.title ?? spec.id),
          h("button", { type: "button", className: "dwu-splitClose", title: "关闭（Esc）", "aria-label": "关闭", onClick: closeSplit }, "✕")
        ),
        h("div", { className: "dwu-splitBody" },
          spec.panes.map((pane, index) => h(React.Fragment, { key: pane.id },
            h("div", { className: "dwu-splitPane", style: { width: splitPaneWidth(spec, index) } },
              h("div", { className: "dwu-splitPaneHead" }, pane.title),
              pane.content?.kind === "iframe" && pane.content?.url
                ? h("iframe", { className: "dwu-splitFrame", src: safeUrl(pane.content.url), title: pane.title, sandbox: "allow-scripts allow-same-origin allow-forms allow-popups" })
                : h("div", { className: "dwu-splitEmpty" }, "（组件内容预留）")
            ),
            index < spec.panes.length - 1 && h("div", { className: "dwu-splitDivider", title: "拖拽调整栏宽", role: "separator", "aria-orientation": "vertical", onPointerDown: (event) => startDivider(index, event) })
          ))
        )
      );
    }

    const inject = ["slots", "sessions", "workspaces"];
    function apply(ctx) {
      const decorate = (sessionId, text) => {
        const session = ctx.sessions.list.getSnapshot().byId[sessionId];
        const root = session?.cwd;
        if (!root) return text;
        const enabled = [...contextMap(root)].filter(([, value]) => value).map(([file]) => file);
        if (enabled.length === 0) return text;
        let remaining = 36000;
        const files = snapshots.get(root);
        const sections = enabled.map((file) => {
          const snapshot = files?.get(file);
          if (!snapshot || typeof snapshot.content !== "string" || remaining <= 0) return `- ${file}`;
          const content = snapshot.content.slice(0, Math.min(12000, remaining)); remaining -= content.length;
          return `\n<file path="${file}">\n${content}\n</file>`;
        }).join("\n");
        return `${text}\n\n<workspace_context root="${root}">\n以下文件由用户在工作区中启用为本次对话上下文：\n${sections}\n</workspace_context>`;
      };
      window.__DSH_WORKSPACE_CONTEXT__ = { decorate };
      ctx.effect(() => () => { if (window.__DSH_WORKSPACE_CONTEXT__?.decorate === decorate) delete window.__DSH_WORKSPACE_CONTEXT__; }, "workspace context bridge");
      // 服务桥：宿主 sessions/workspaces 快照写入模块级 store，overlay 组件直接订阅。
      const pushSessions = () => { hostSessions.snapshot = ctx.sessions.list.getSnapshot() ?? { current: undefined, byId: {} }; emitService(hostSessions); };
      const pushWorkspaces = () => { hostWorkspaces.snapshot = ctx.workspaces.list.getSnapshot() ?? { items: [] }; emitService(hostWorkspaces); };
      pushSessions();
      pushWorkspaces();
      ctx.effect(() => {
        const disposeSessions = ctx.sessions.list.subscribe(pushSessions);
        const disposeWorkspaces = ctx.workspaces.list.subscribe(pushWorkspaces);
        return () => { disposeSessions(); disposeWorkspaces(); };
      }, "service bridge");
      const originalOpenPath = ctx.workspaces.openPath.__veangWorkbenchOriginal ?? ctx.workspaces.openPath;
      const nativeOpenPath = (path) => originalOpenPath.call(ctx.workspaces, path);
      serviceBridge.openPath = nativeOpenPath;
      serviceBridge.openSession = (sessionId) => { if (typeof ctx.sessions.open === "function") ctx.sessions.open(sessionId); };
      serviceBridge.clearSession = () => { if (typeof ctx.sessions.clear === "function") ctx.sessions.clear(); };
      serviceBridge.askConversation = (file, prompt) => {
        const sessionId = hostSessions.snapshot.current;
        if (!sessionId) throw new Error("当前没有活动会话，无法提问 AI");
        const actx = ctx.sessions.scope(sessionId);
        if (!actx) throw new Error("无法获取会话上下文");
        const conversation = actx.get("conversation");
        if (!conversation) throw new Error("当前会话不支持对话");
        const input = conversation.input.for(actx);
        const attachments = file ? conversation.createDraftImages([file]) : [];
        if (attachments.length > 0 && !input.addImages(attachments.map((a) => a.id))) {
          conversation.releaseDraftImages(attachments);
          throw new Error("当前会话暂时不能添加图片附件");
        }
        input.setDraft(prompt);
        input.submit();
      };
      serviceBridge.readAssistantText = () => {
        const sessionId = hostSessions.snapshot.current;
        if (!sessionId) return "";
        try {
          const face = ctx.sessions.list.getSnapshot().byId[sessionId];
          if (!face || typeof face.getSnapshot !== "function") return "";
          const snap = face.getSnapshot() || {};
          const nodes = Array.isArray(snap.nodes) ? snap.nodes : [];
          for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            if (node?.kind !== "assistant") continue;
            if (node.partial === true || node.finalized === false || node.status === "streaming") continue;
            const text = (node.blocks || []).filter((b) => b && b.kind === "text").map((b) => String(b.text || "")).join("\n");
            if (text) return text;
          }
        } catch (_) {}
        return "";
      };
      ctx.effect(() => () => { if (serviceBridge.openPath === nativeOpenPath) serviceBridge.openPath = null; serviceBridge.openSession = null; serviceBridge.askConversation = null; serviceBridge.readAssistantText = null; serviceBridge.clearSession = null; }, "service bridge cleanup");
      const routeConversationFile = async (path) => {
        const match = workspaceFileForHostPath(ctx.workspaces.list.getSnapshot().items, path);
        if (match) {
          try {
            const stat = await getJson(apiUrl("stat", match.root, match.path));
            if (!stat.directory) {
              bus.dispatchEvent(new CustomEvent("open-file", { detail: { root: match.root, path: match.path, mode: "pinned", source: "ai", context: "keep" } }));
              return;
            }
          } catch {}
        }
        return nativeOpenPath(path);
      };
      routeConversationFile.__veangWorkbenchOriginal = originalOpenPath;
      ctx.workspaces.openPath = routeConversationFile;
      ctx.effect(() => () => { if (ctx.workspaces.openPath === routeConversationFile) ctx.workspaces.openPath = originalOpenPath; }, "AI file tab routing");
      rebrandDocumentTitle();
      ctx.slots.inject("shell.overlay", () => ctx.slots.register({ name: "shell.overlay", id: "veang-workbench-overlay", order: 100 }, VeangOverlay), "veang-workbench: overlay workspace");
      ctx.slots.inject("shell.overlay", () => ctx.slots.register({ name: "shell.overlay", id: "veang-workbench-split", order: 90 }, VeangSplit), "veang-workbench: split workspace");
      ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
        name: "sidebar.footer.action",
        id: "veang-workbench-zonetabs",
        order: 50,
        children: {
          "sidebar.veang.project": { kind: "list", scope: "root" }
        },
      }, ZoneTabButtons), "veang-workbench: zone tabs");
      ctx.slots.inject("sidebar.brand.name", () => ctx.slots.register({ name: "sidebar.brand.name", priority: -100 }, BrandName));
      ctx.slots.inject("sidebar.brand.mark", () => ctx.slots.register({ name: "sidebar.brand.mark", priority: -100 }, BrandMark));
      ctx.slots.inject("conversation.hero.brand.mark", () => ctx.slots.register({ name: "conversation.hero.brand.mark", priority: -100 }, BrandMark));
      ctx.slots.inject("conversation.input.dock", () => ctx.slots.register({ name: "conversation.input.dock", id: "workspace-context", order: -20 }, ContextDock));
      ctx.slots.inject("settings.section", () => ctx.slots.register({ name: "settings.section", id: "veang-skin-center", order: 120, label: "皮肤中心" }, SkinCenterSection));
    }
    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
