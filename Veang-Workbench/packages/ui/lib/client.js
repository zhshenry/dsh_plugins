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
    const imageExtensions = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg"]);
    const officeExtensions = new Set(["docx", "xlsx", "xls"]);

    const css = `
      @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
      .dwu-root,.dwu-root *{box-sizing:border-box}.dwu-root{height:100%;min-height:0;color:var(--dsw-alias-label-primary);font-family:Inter,var(--dsw-font-family),-apple-system,BlinkMacSystemFont,sans-serif}
      .dwu-sidebar{display:grid;grid-template-columns:48px minmax(0,1fr);height:100%;min-height:0;background:var(--dsw-specific-sidebar-fill);overflow:hidden}.dwu-sidebar[data-collapsed=true]{grid-template-columns:36px 0}.dwu-projects{border-right:1px solid var(--dsw-alias-border-l1);padding:8px 6px;display:flex;flex-direction:column;align-items:center;gap:7px;overflow-y:auto}.dwu-projectButton,.dwu-addProject{width:36px;height:36px;flex:none;border:0;border-radius:10px;display:grid;place-items:center;cursor:pointer;color:var(--dsw-alias-label-secondary);background:transparent;font-size:12px;font-weight:650}.dwu-projectButton:hover,.dwu-addProject:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-projectButton[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);box-shadow:inset 2px 0 0 var(--dsw-alias-state-business-primary)}.dwu-addProject{margin-top:auto;font-size:20px;font-weight:400}.dwu-treePanel{min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden}.dwu-treeHead{height:42px;flex:none;display:flex;align-items:center;gap:7px;padding:0 8px 0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-treeTitle{min-width:0;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12px;font-weight:650;text-transform:uppercase;letter-spacing:.04em}.dwu-iconButton{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;display:grid;place-items:center}.dwu-iconButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-tree{flex:1;min-height:0;overflow:auto;padding:6px 4px 16px}.dwu-emptySide{padding:18px 12px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.55}.dwu-treeRow{height:28px;display:flex;align-items:center;gap:5px;border-radius:6px;padding-right:5px;cursor:pointer;font-size:12px;white-space:nowrap;user-select:none}.dwu-treeRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-treeRow[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-label-primary-bluish)}.dwu-chevron{width:14px;flex:none;text-align:center;color:var(--dsw-alias-label-caption);font-size:10px}.dwu-fileGlyph{width:15px;flex:none;text-align:center;color:var(--dsw-alias-label-secondary)}.dwu-treeName{min-width:0;overflow:hidden;text-overflow:ellipsis}.dwu-treeLoading{padding:8px 10px;color:var(--dsw-alias-label-caption);font-size:11px}
      .dwu-zoneTabs{height:34px;flex:none;display:flex;align-items:stretch;padding:0 8px;border-bottom:1px solid var(--dsw-alias-border-l2)}.dwu-zoneTab{flex:none;min-width:64px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:680;letter-spacing:.03em;cursor:pointer;padding:0 10px}.dwu-zoneTab:hover{color:var(--dsw-alias-label-primary)}.dwu-zoneTab[data-active=true]{color:var(--dsw-alias-state-business-primary);border-bottom-color:var(--dsw-alias-state-business-primary)}.dwu-zoneEmpty{padding:18px 14px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.6}.dwu-zoneEngineLabel{margin-left:auto;align-self:center;margin-right:6px;font-size:11px;font-weight:580;color:var(--dsw-alias-label-caption);white-space:nowrap}.dwu-zoneEngine{height:24px;flex:none;align-self:center;margin-right:8px;padding:0 5px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);font-size:11px;font-weight:600;letter-spacing:.02em;cursor:pointer;outline:0;transition:border-color .12s ease,color .12s ease}.dwu-zoneEngine:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-zoneEngine:focus-visible{border-color:var(--dsw-alias-state-business-primary)}.dwu-zoneEngine option{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}.dwu-zoneTabsBar{justify-content:flex-end}.dwu-overlayRoot{position:fixed;bottom:0;z-index:40;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);border-right:1px solid var(--dsw-alias-border-l2);box-shadow:6px 0 24px #00000026;min-width:0;pointer-events:auto}.dwu-overlayBody{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}.dwu-overlayBody>.dwu-workspace{flex:1;min-height:0;height:auto}.dwu-worktreeDock{width:100% !important;border-right:0 !important;border-top:1px solid var(--dsw-alias-border-l2);flex:none;position:relative}.dwu-worktreeDock.dwu-worktreeRail{flex-direction:row;align-items:center;justify-content:center;padding:0}.dwu-worktreeDock .dwu-tree{flex:1}.dwu-heightHandle{position:absolute;top:-3px;left:0;right:0;height:6px;z-index:6;cursor:row-resize;background:transparent;border:0;padding:0}.dwu-heightHandle:after{content:"";position:absolute;top:2px;left:50%;transform:translateX(-50%);width:36px;height:2px;border-radius:2px;background:var(--dsw-alias-border-l3);opacity:.6}.dwu-heightHandle:hover:after{opacity:1;background:var(--dsw-alias-state-business-primary)}.dwu-treeMode{display:flex;gap:2px;align-items:center;margin-left:auto}.dwu-treeModeBtn{width:24px;height:22px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1;cursor:pointer;display:grid;place-items:center}.dwu-treeModeBtn:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-treeModeBtn[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-tilesRoot{flex:1;min-height:0;display:flex;flex-direction:column;overflow:auto;padding:4px 10px 10px}.dwu-crumbs{flex:none;display:flex;align-items:center;gap:2px;flex-wrap:wrap;padding:4px 0 8px;font-size:12px}.dwu-crumb{border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;padding:2px 4px;border-radius:5px;cursor:pointer;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-crumb:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-crumb[data-last=true]{color:var(--dsw-alias-label-primary);font-weight:600}.dwu-crumbSep{color:var(--dsw-alias-label-tertiary);font-size:11px}.dwu-tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:4px;align-content:start}.dwu-tile{display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 4px 7px;border-radius:9px;border:1px solid transparent;cursor:pointer;user-select:none;-webkit-user-select:none}.dwu-tile:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-tile[data-selected=true]{border-color:var(--dsw-alias-border-l3);border-style:dashed}.dwu-tile[data-active=true]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-tile[data-drop=true]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 18%,transparent)}.dwu-tileIcon{font-size:26px;line-height:1;display:grid;place-items:center;min-height:26px;color:var(--dsw-alias-label-secondary)}.dwu-tileThumb{width:100%;height:46px;object-fit:cover;border-radius:6px;display:block;background:var(--dsw-alias-bg-layer-1,transparent)}.dwu-tile[data-active=true] .dwu-tileIcon{color:var(--dsw-alias-state-business-primary)}.dwu-tileName{font-size:11px;line-height:1.35;color:var(--dsw-alias-label-secondary);text-align:center;max-width:100%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all}.dwu-overlayHandle{position:absolute;top:0;bottom:0;right:-5px;width:10px;cursor:col-resize;z-index:50;touch-action:none}.dwu-overlayHandle:after{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:44px;border-radius:8px;background:var(--dsw-alias-button-floating-fill);border:1px solid var(--dsw-alias-border-l2);opacity:0;transition:opacity 150ms ease}.dwu-overlayHandle:hover:after,.dwu-overlayHandle[data-dragging=true]:after{opacity:1}.dwu-zoneFooter{display:flex;gap:6px;width:100%}.dwu-zoneFooterTab{flex:1;min-height:30px;border:0;border-radius:8px;padding:5px 8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;font-weight:620;letter-spacing:.02em;cursor:pointer;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dwu-zoneFooterTab:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-zoneFooterTab[data-active=true]{background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary)}.dwu-overlayHead{border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-zoneSection{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:100%;padding:0}.dwu-zoneDivider{flex:none;height:1px;background:var(--dsw-alias-border-l1);margin:2px 0}.dwu-zoneHeader{display:flex;align-items:center;gap:8px;padding:0 2px;margin-bottom:2px}.dwu-zoneHeaderIcon{font-size:15px;line-height:1;color:var(--dsw-alias-label-secondary)}.dwu-zoneHeaderTitle{font-size:14px;font-weight:700;letter-spacing:.04em;color:var(--dsw-alias-label-primary);user-select:none}.dwu-zoneList{display:flex;flex-direction:column;gap:8px}.dwu-zoneRow{display:flex;align-items:center;gap:8px;min-height:36px;border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:4px 8px;background:#f8f4ec;box-shadow:0 1px 3px rgba(0,0,0,.08);color:var(--dsw-alias-label-secondary);font:inherit;font-size:13.5px;cursor:pointer;text-align:left;pointer-events:auto}.dwu-zoneRow:hover{background:#f8f4ec;border-color:var(--dsw-alias-state-business-primary);box-shadow:0 2px 6px rgba(0,0,0,.14);color:var(--dsw-alias-label-primary)}.dwu-zoneRow[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,#f8f4ec)}.dwu-zoneRowIcon{flex:none;width:18px;text-align:center;font:600 13px/1 ui-monospace,monospace;color:var(--dsw-alias-label-secondary)}.dwu-zoneRow[data-active=true] .dwu-zoneRowIcon{color:var(--dsw-alias-state-business-primary)}.dwu-zoneRowLabel{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-zoneRow .dwu-statusDot{margin-left:auto;width:7px;height:7px}.dwu-zoneRail{box-sizing:border-box;display:flex;flex-direction:column;gap:6px;width:100%;padding:0}.dwu-zoneRailBox{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;padding:6px 3px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-specific-sidebar-fill)}.dwu-zoneRailBtn{flex:none;width:26px;height:26px;padding:0;display:flex;align-items:center;justify-content:center;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:1;cursor:pointer;pointer-events:auto}.dwu-zoneRailBtn:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary)}.dwu-zoneRailBtn[data-active=true]{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 14%,transparent)}.dwu-zoneRailSep{flex-basis:100%;height:1px;background:var(--dsw-alias-border-l1)}.dwu-zoneActions{display:flex;gap:3px;margin-left:auto}.dwu-zoneActionBtn{width:24px;height:24px;flex:none;display:grid;place-items:center;border:0;background:transparent;color:var(--dsw-alias-label-secondary);font-size:13px;cursor:pointer;border-radius:6px}.dwu-zoneActionBtn:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.dwu-drawerSearch{display:flex;align-items:center;gap:5px}.dwu-drawerSearchInput{min-width:0;flex:1;height:26px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);padding:0 7px;font-size:12px;outline:0}.dwu-drawerSearchInput:focus{border-color:var(--dsw-alias-state-business-primary)}.dwu-drawerSearchClear{width:22px;height:22px;flex:none;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:12px}.dwu-drawerSearchClear:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-drawerList{min-height:0;overflow:auto}.dwu-drawerEmpty{white-space:pre-line;font-size:12px;color:var(--dsw-alias-label-tertiary);padding:8px 4px;line-height:1.6}.dwu-wsRow{display:flex;align-items:center;gap:8px;min-height:40px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;padding:5px 8px;background:var(--dsw-alias-fill-l1,rgba(255,255,255,.03));cursor:pointer}.dwu-wsRow:hover{background:var(--dsw-alias-fill-l1,rgba(255,255,255,.08));border-color:var(--dsw-alias-state-business-primary)}.dwu-wsIcon{flex:none;width:20px;text-align:center;font-size:16px;line-height:1}.dwu-wsMeta{min-width:0;flex:1;display:grid;gap:1px}.dwu-wsName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;font-weight:600;color:var(--dsw-alias-label-primary)}.dwu-wsFolder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10.5px;color:var(--dsw-alias-label-tertiary)}.dwu-wsBind{flex:none;width:24px;height:24px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer;font-size:12px}.dwu-wsBind:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-zoneSub{display:flex;flex-direction:column;gap:6px;margin-top:2px;padding-top:8px;border-top:1px solid var(--dsw-alias-border-l1)}.dwu-popBackdrop{position:fixed;inset:0;z-index:88}.dwu-manage,.dwu-emojiPop,.dwu-bindPop{position:fixed;z-index:90;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-base);box-shadow:0 8px 30px #00000040;padding:8px;display:flex;flex-direction:column;gap:4px;max-height:70vh;overflow:auto}.dwu-manageHead{display:flex;align-items:center;justify-content:space-between;padding:2px 2px 6px}.dwu-manageTitle{font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary)}.dwu-manageDone{height:22px;border:0;border-radius:5px;padding:0 8px;background:transparent;color:var(--dsw-alias-state-business-primary);font-size:11px;cursor:pointer}.dwu-manageDone:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRow{display:flex;align-items:center;gap:6px;min-height:32px;border:1px solid transparent;border-radius:7px;padding:2px 4px}.dwu-manageRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRow[data-hidden=true]{opacity:.5}.dwu-manageGrip{flex:none;color:var(--dsw-alias-label-tertiary);cursor:grab;font-size:12px}.dwu-manageIcon{flex:none;width:18px;text-align:center;font-size:14px;cursor:pointer}.dwu-manageName{min-width:0;flex:1;border:0;background:transparent;color:var(--dsw-alias-label-primary);font-size:12px;text-align:left;cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px 3px;border-radius:4px}.dwu-manageName:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-manageRename{min-width:0;flex:1;height:22px;border:1px solid var(--dsw-alias-state-business-primary);border-radius:4px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:12px;padding:0 5px;outline:0}.dwu-manageBtn{flex:none;width:22px;height:22px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;display:grid;place-items:center}.dwu-manageBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-emojiTitle,.dwu-bindTitle{font-size:12px;font-weight:700;color:var(--dsw-alias-label-primary);padding:2px 2px 4px}.dwu-emojiGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:3px}.dwu-emojiCell{width:100%;aspect-ratio:1;display:grid;place-items:center;border:1px solid transparent;border-radius:6px;background:transparent;font-size:17px;cursor:pointer}.dwu-emojiCell:hover{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l2)}.dwu-bindPop{width:280px}.dwu-bindUnbind{height:26px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer;text-align:left;padding:0 6px}.dwu-bindUnbind:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-bindList{display:flex;flex-direction:column;gap:2px;max-height:40vh;overflow:auto}.dwu-bindRow{display:flex;align-items:center;min-height:30px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;text-align:left;padding:0 8px;cursor:pointer;overflow:hidden}.dwu-bindRow:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-bindRow[data-current=true]{color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}.dwu-bindRowName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-workspace{height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base)}.dwu-workHead{height:42px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-workTitle{font-size:15px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-statusDot{flex:none;width:8px;height:8px;border-radius:50%;background:#7f8998;margin-left:2px}.dwu-statusDot[data-status=busy]{background:#4f8ef7}.dwu-statusDot[data-status=need]{background:#f5c542}.dwu-statusDot[data-status=done]{background:#4ade80}.dwu-statusDot[data-status=idle]{background:#7f8998;opacity:.55}.dwu-bindWrap{position:relative;display:flex;align-items:center}.dwu-bindChip{display:flex;align-items:center;gap:5px;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;cursor:pointer;max-width:220px}.dwu-bindChip:hover{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary)}.dwu-bindChip[data-bound=true]{color:var(--dsw-alias-label-primary)}.dwu-bindChipZone{flex:none}.dwu-bindChipTitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-bindCaret{flex:none;font-size:9px;opacity:.7}.dwu-bindMenu{position:absolute;top:calc(100% + 6px);right:0;z-index:302;min-width:240px;max-width:320px;max-height:320px;overflow:auto;background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-base));border:1px solid var(--dsw-alias-border-l2);border-radius:10px;box-shadow:var(--dsw-shadow-lv2,0 8px 24px #00000022);padding:4px}.dwu-bindItem{display:flex;align-items:center;gap:8px;width:100%;height:32px;padding:0 10px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-primary);font-size:12px;cursor:pointer;text-align:left}.dwu-bindItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-bindZone{flex:none;width:18px;text-align:center;font-size:12px}.dwu-bindTitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-bindCheck{flex:none;color:var(--dsw-alias-state-business-primary);font-size:12px}.dwu-bindUnbind{display:block;width:100%;margin-top:4px;height:28px;border:0;border-top:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-tertiary);font-size:11.5px;cursor:pointer;text-align:center}.dwu-bindUnbind:hover{color:var(--dsw-alias-state-error-primary)}.dwu-bindEmpty{padding:10px;color:var(--dsw-alias-label-tertiary);font-size:12px;text-align:center}.dwu-bindBackdrop{position:fixed;inset:0;z-index:301;background:transparent}.dwu-splitRoot{position:fixed;bottom:0;z-index:40;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);border-right:1px solid var(--dsw-alias-border-l2);box-shadow:6px 0 24px #00000026;min-width:0;pointer-events:auto}.dwu-splitHead{height:36px;flex:none;display:flex;align-items:center;gap:8px;padding:0 10px 0 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}.dwu-splitTitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:650;color:var(--dsw-alias-label-primary)}.dwu-splitClose{width:24px;height:24px;flex:none;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font-size:12px;display:grid;place-items:center}.dwu-splitClose:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-splitBody{flex:1;min-height:0;display:flex;flex-direction:row;overflow:hidden}.dwu-splitPane{min-width:0;height:100%;display:flex;flex-direction:column;overflow:hidden}.dwu-splitPaneHead{height:30px;flex:none;display:flex;align-items:center;padding:0 10px;border-bottom:1px solid var(--dsw-alias-border-l1);font-size:11px;font-weight:600;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-fill-l1,rgba(255,255,255,.03))}.dwu-splitFrame{flex:1;min-height:0;width:100%;border:0;background:#fff}.dwu-splitEmpty{flex:1;min-height:0;display:grid;place-items:center;color:var(--dsw-alias-label-tertiary);font-size:12px;padding:12px}.dwu-splitDivider{flex:none;width:6px;cursor:col-resize;background:transparent;position:relative}.dwu-splitDivider:after{content:"";position:absolute;top:0;bottom:0;left:2px;width:2px;background:var(--dsw-alias-border-l2);opacity:0;transition:opacity .12s ease}.dwu-splitDivider:hover:after{opacity:1;background:var(--dsw-alias-state-business-primary)}.dwu-workPath{font-size:11px;color:var(--dsw-alias-label-caption);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-tabs{height:38px;flex:none;display:flex;align-items:stretch;overflow-x:auto;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base)}.dwu-tab{min-width:110px;max-width:210px;border:0;border-right:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-secondary);display:flex;align-items:center;gap:7px;padding:0 7px 0 11px;cursor:pointer;font-size:12px}.dwu-tab[data-active=true]{background:var(--dsw-specific-sidebar-fill);color:var(--dsw-alias-label-primary);box-shadow:inset 0 -2px 0 var(--dsw-alias-state-business-primary)}.dwu-tabName{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dwu-dirty{color:var(--dsw-alias-state-business-primary);font-size:14px}.dwu-close{width:20px;height:20px;border:0;background:transparent;border-radius:5px;color:inherit;cursor:pointer;padding:0}.dwu-close:hover{background:var(--dsw-alias-interactive-bg-hover)}.dwu-body{flex:1;min-height:0;position:relative;overflow:hidden}.dwu-welcome{height:100%;display:grid;place-items:center;padding:32px;color:var(--dsw-alias-label-tertiary);text-align:center}.dwu-welcomeCard{max-width:430px}.dwu-welcomeIcon{font-size:38px;margin-bottom:12px}.dwu-welcomeTitle{color:var(--dsw-alias-label-primary);font-size:18px;font-weight:650;margin-bottom:7px}.dwu-welcomeText{font-size:13px;line-height:1.6}.dwu-filePane{height:100%;min-height:0;display:flex;flex-direction:column}.dwu-fileToolbar{height:36px;flex:none;border-bottom:1px solid var(--dsw-alias-border-l1);display:flex;align-items:center;gap:6px;padding:0 10px}.dwu-fileMeta{min-width:0;flex:1;color:var(--dsw-alias-label-caption);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dwu-toolButton{height:26px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);padding:0 9px;font-size:11px;cursor:pointer}.dwu-toolButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-toolButton:disabled{opacity:.45;cursor:default}.dwu-status{font-size:11px;color:var(--dsw-alias-label-caption)}.dwu-status[data-error=true]{color:var(--dsw-alias-state-error-primary)}.dwu-editorWrap{flex:1;min-height:0;display:flex;overflow:hidden;background:var(--dsw-alias-bg-base)}.dwu-lines{width:48px;flex:none;margin:0;padding:14px 10px 40px 0;text-align:right;overflow:hidden;white-space:pre;color:var(--dsw-alias-label-caption);background:var(--dsw-specific-sidebar-fill);border-right:1px solid var(--dsw-alias-border-l1);font:12px/20px ui-monospace,SFMono-Regular,Menlo,monospace;user-select:none}.dwu-codeArea{flex:1;min-width:0;min-height:0;position:relative;overflow:hidden}.dwu-highlight,.dwu-editor{position:absolute;inset:0;margin:0;border:0;padding:14px 18px 40px;font:13px/20px ui-monospace,SFMono-Regular,Menlo,monospace;tab-size:2;white-space:pre;overflow:auto}.dwu-highlight{pointer-events:none;color:var(--dsw-alias-label-primary);background:transparent;overflow:hidden}.dwu-highlight .kw{color:#c792ea}.dwu-highlight .str{color:#c3e88d}.dwu-highlight .num{color:#f78c6c}.dwu-highlight .com{color:var(--dsw-alias-label-caption);font-style:italic}.dwu-editor{width:100%;height:100%;resize:none;outline:0;background:transparent;color:var(--dsw-alias-label-primary);caret-color:var(--dsw-alias-state-business-primary)}.dwu-editor[data-highlight=true]{color:transparent;-webkit-text-fill-color:transparent}.dwu-editor[data-highlight=true]::selection{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 35%,transparent)}.dwu-editor[data-flash=true]{animation:dwu-flash .9s ease-out}@keyframes dwu-flash{0%{background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 13%,transparent)}100%{background:transparent}}.dwu-preview{height:100%;overflow:auto;padding:28px clamp(24px,7vw,84px);font-size:14px;line-height:1.72}.dwu-preview h1,.dwu-preview h2,.dwu-preview h3{line-height:1.25;margin:1.3em 0 .55em}.dwu-preview h1{font-size:28px}.dwu-preview h2{font-size:22px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:7px}.dwu-preview pre{background:var(--dsw-specific-sidebar-fill);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:14px;overflow:auto}.dwu-preview code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--dsw-specific-sidebar-fill);border-radius:4px;padding:1px 4px}.dwu-preview blockquote{border-left:3px solid var(--dsw-alias-state-business-primary);margin-left:0;padding-left:14px;color:var(--dsw-alias-label-secondary)}.dwu-preview a{color:var(--dsw-alias-state-business-primary)}.dwu-frame{width:100%;height:100%;border:0;background:white}.dwu-media{height:100%;display:grid;place-items:center;padding:24px;background:#0e1015}.dwu-media video,.dwu-media audio{max-width:100%;max-height:100%}.dwu-media img{max-width:100%;max-height:100%;object-fit:contain}.dwu-office{height:100%;display:flex;flex-direction:column}.dwu-sheetTabs{height:36px;display:flex;align-items:center;gap:5px;padding:0 8px;border-bottom:1px solid var(--dsw-alias-border-l1);overflow-x:auto}.dwu-sheetTab{height:25px;padding:0 9px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer}.dwu-sheetTab[data-active=true]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dwu-loading,.dwu-error{height:100%;display:grid;place-items:center;padding:28px;color:var(--dsw-alias-label-tertiary);font-size:13px}.dwu-error{color:var(--dsw-alias-state-error-primary)}
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
    function DirTiles({ root, refreshKey, active, clipboard, onSelect, onOpen, openPath, onEntryMenu, onEntryDragStart, onEntryDragEnd, onDropEntry, dropTarget, busy }) {
      const [cwd, setCwd] = React.useState("");
      const [entries, setEntries] = React.useState(null);
      const [error, setError] = React.useState("");
      React.useEffect(() => { setCwd(""); setEntries(null); setError(""); }, [root]);
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
          h("button", { type: "button", className: "dwu-crumb", onClick: () => setCwd("") }, "项目根目录"),
          crumbs.map((part, index) => h(React.Fragment, { key: index },
            h("span", { className: "dwu-crumbSep" }, "›"),
            h("button", { type: "button", className: "dwu-crumb", "data-last": index === crumbs.length - 1 || undefined, onClick: () => setCwd(crumbs.slice(0, index + 1).join("/")) }, part)
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
            title: `${entry.path}${entry.directory ? "（单击进入；可拖拽移动）" : "（单击预览，双击固定）"}`,
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
      zonePrefs.zone = saved?.zone === "assets" ? "assets" : "code";
      treePrefs.mode = saved?.treeMode === "icon" ? "icon" : "list";
      emitZonePrefs();
      emitTreePrefs();
    }
    // zone ↔ 对话绑定（显式）：每个工作区存 { assets: sessionId, code: sessionId }，切 zone 自动切对话。
    const zoneBindings = loadJson("dsh.workspace.zoneBindings.v1", {});
    const bindingsListeners = new Set();
    function emitBindings() { for (const listener of bindingsListeners) listener(); }
    function subscribeBindings(listener) { bindingsListeners.add(listener); return () => bindingsListeners.delete(listener); }
    function useBindings() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeBindings(() => setVersion((value) => value + 1)), []);
      return zoneBindings;
    }
    function getBinding(path, zone) { return zoneBindings[path]?.[zone] ?? null; }
    function setBinding(path, zone, sessionId) {
      if (!zoneBindings[path]) zoneBindings[path] = {};
      // 一条会话同时只属于一个 zone：改绑到当前 zone 时，先把它从另一个 zone 解绑，
      // 否则「A 同时绑素材和代码」会让反向关联永远命中 assets（先判断的），导致看起来改绑无效。
      const otherZone = zone === "assets" ? "code" : "assets";
      if (sessionId && zoneBindings[path][otherZone] === sessionId) delete zoneBindings[path][otherZone];
      if (sessionId) zoneBindings[path][zone] = sessionId; else delete zoneBindings[path][zone];
      if (Object.keys(zoneBindings[path]).length === 0) delete zoneBindings[path];
      saveJson("dsh.workspace.zoneBindings.v1", zoneBindings);
      emitBindings();
    }
    // ── 0.2.0 overlay 形态：服务桥 + 几何 + 对话右挤 ──────────────────────────
    // 宿主 services 在 apply() 里订阅后写入模块级 store；组件不走 props.useSessions
    // 宿主包装（worktable 实测部分版本会触发 useSyncExternalStore 崩溃）。
    const hostSessions = { snapshot: { current: undefined, byId: {} }, listeners: new Set() };
    const hostWorkspaces = { snapshot: { items: [] }, listeners: new Set() };
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
    // 整个工作台 overlay 的可见性与总宽（拖右缘分隔条调）。
    const overlayPrefs = { visible: loadJson("dsh.workspace.overlayVisible", true), width: Math.min(1400, Math.max(420, loadJson("dsh.workspace.overlayWidth", 760))) };
    const overlayPrefsListeners = new Set();
    function emitOverlayPrefs() { for (const listener of overlayPrefsListeners) listener(); }
    function subscribeOverlayPrefs(listener) { overlayPrefsListeners.add(listener); return () => overlayPrefsListeners.delete(listener); }
    function toggleOverlayVisible() { overlayPrefs.visible = !overlayPrefs.visible; saveJson("dsh.workspace.overlayVisible", overlayPrefs.visible); emitOverlayPrefs(); }
    function setOverlayWidth(px) { overlayPrefs.width = Math.min(1600, Math.max(420, Math.round(px))); saveJson("dsh.workspace.overlayWidth", overlayPrefs.width); emitOverlayPrefs(); }
    function useOverlayPrefs() {
      const [, setVersion] = React.useState(0);
      React.useEffect(() => subscribeOverlayPrefs(() => setVersion((value) => value + 1)), []);
      return overlayPrefs;
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
      const root = workspace?.path;
      const terminalState = useTerminalState();
      const zoneState = useZonePrefs();
      useBindings();
      const [pickerOpen, setPickerOpen] = React.useState(false);
      if (!root) return null;
      const sessionStatus = sessionStatusOf(sessionState);
      const statusTip = SESSION_STATUS_TIP[sessionStatus];
      const zone = zoneState.zone;
      const zoneIcon = zone === "assets" ? "🎨" : "</>";
      const boundId = getBinding(root, zone);
      const boundSession = boundId ? sessionState.byId[boundId] : undefined;
      const boundTitle = boundSession?.title || boundId || "未绑定对话";
      const wsSessions = (workspace?.sessionIds ?? []).map((id) => ({ id, title: sessionState.byId[id]?.title ?? id }));
      return h("div", { className: "dwu-workHead dwu-overlayHead" },
        h("span", { className: "dwu-workTitle" }, zone === "assets" ? "素材工作台" : "代码工作台"),
        h("span", { className: "dwu-statusDot", "data-status": sessionStatus, title: statusTip, "aria-label": statusTip }),
        h("div", { className: "dwu-bindWrap" },
          h("button", { type: "button", className: "dwu-bindChip", "data-bound": boundId ? "true" : "false", title: "当前工作台绑定的对话（点击切换/绑定）", onClick: () => setPickerOpen((value) => !value) },
            h("span", { className: "dwu-bindChipZone", "aria-hidden": true }, zoneIcon),
            h("span", { className: "dwu-bindChipTitle" }, boundTitle),
            h("span", { className: "dwu-bindCaret", "aria-hidden": true }, "▾")
          ),
          pickerOpen && h("div", { className: "dwu-bindMenu" },
            wsSessions.length === 0
              ? h("div", { className: "dwu-bindEmpty" }, "该工作区暂无会话")
              : wsSessions.map((s) => h("button", {
                key: s.id, type: "button", className: "dwu-bindItem",
                onClick: () => { setBinding(root, zone, s.id); if (serviceBridge.openSession) serviceBridge.openSession(s.id); setPickerOpen(false); }
              },
                h("span", { className: "dwu-bindZone", "aria-hidden": true }, getBinding(root, "assets") === s.id ? "🎨" : getBinding(root, "code") === s.id ? "</>" : "·"),
                h("span", { className: "dwu-bindTitle" }, s.title),
                boundId === s.id ? h("span", { className: "dwu-bindCheck", "aria-hidden": true }, "✓") : null
              )),
            boundId ? h("button", { type: "button", className: "dwu-bindUnbind", onClick: () => { setBinding(root, zone, null); setPickerOpen(false); } }, "取消绑定") : null
          )
        ),
        pickerOpen && h("div", { className: "dwu-bindBackdrop", onClick: () => setPickerOpen(false) }),
        h("button", { type: "button", className: "dwu-terminalToggle", "data-active": (terminalState.root === root && terminalState.open) || undefined, "aria-label": "切换终端", "aria-pressed": terminalState.root === root && terminalState.open, title: "切换终端（⌘/Ctrl + `）", onClick: () => toggleWorkbenchTerminal(root) }, h("span", { className: "dwu-terminalGlyph", "aria-hidden": true }, ">_")),
        h("span", { className: "dwu-zoneEngineLabel" }, "游戏引擎："),
        h("select", {
          className: "dwu-zoneEngine", title: "该目录使用的技术/引擎", "aria-label": "该目录使用的技术/引擎",
          value: loadJson(storageKey(root, "engine"), "html"),
          onChange: (event) => { saveJson(storageKey(root, "engine"), event.target.value); bus.dispatchEvent(new CustomEvent("workspace-engine")); }
        }, ["html", "unity", "godot"].map((engine) => h("option", { key: engine, value: engine }, engine)))
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
      const wide = typeof props?.wide === "boolean" ? props.wide : selfWide !== false;
      const { workspace, sessionState } = currentWorkspace(useHostSessions, useHostWorkspaces);
      const root = workspace?.path;
      const sessionStatus = sessionStatusOf(sessionState);
      const statusTip = SESSION_STATUS_TIP[sessionStatus];
      const activate = (zone) => {
        if (!overlayState.visible) toggleOverlayVisible();
        setWorkspaceZone(zone);
        const bound = root ? getBinding(root, zone) : null;
        if (bound && bound !== sessionState.current && serviceBridge.openSession) serviceBridge.openSession(bound);
      };
      const zoneTabs = [
        { zone: "assets", icon: "🎨", label: "素材工作台" },
        { zone: "code", icon: "</>", label: "代码工作台" }
      ];
      const renderProjectSlot = typeof props?.renderSlot === "function" ? props.renderSlot : null;
      if (!wide) {
        return h("div", { ref: hostRef, className: "dwu-zoneRail" },
          h("div", { className: "dwu-zoneDivider" }),
          h("div", { className: "dwu-zoneRailBox" },
            zoneTabs.map((item) => h("button", {
              key: item.zone, type: "button", className: "dwu-zoneRailBtn", title: item.label, "aria-label": item.label,
              "data-active": (zoneState.zone === item.zone) || undefined,
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
            "data-active": (zoneState.zone === item.zone) || undefined,
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
          { label: "在 Finder 中显示", icon: "⌖", action: () => revealInFinder(workspace.path, entry.path) },
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
          { label: "在 Finder 中显示", icon: "⌖", action: () => revealInFinder(workspace.path, entry.path) },
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
            h("div", { className: "dwu-treeMode", role: "group", "aria-label": "文件目录显示模式" },
              h("button", { type: "button", className: "dwu-treeModeBtn", "data-active": treePrefsState.mode === "list" || undefined, title: "列表模式", "aria-pressed": treePrefsState.mode === "list", onClick: () => setTreeMode("list") }, "☰"),
              h("button", { type: "button", className: "dwu-treeModeBtn", "data-active": treePrefsState.mode === "icon" || undefined, title: "图标模式", "aria-pressed": treePrefsState.mode === "icon", onClick: () => setTreeMode("icon") }, "▦")
            ),
            h("button", { type: "button", className: "dwu-treeIconBtn", title: "刷新文件目录", "aria-label": "刷新文件目录", onClick: bumpTreeRefresh }, "↻"),
            h("button", { type: "button", className: "dwu-treeIconBtn", title: "搜索文件名", "aria-label": "搜索文件名", onClick: () => { setSearchOpen(true); setTab("files"); } }, "⌕")
          ),
          workspace ? h(React.Fragment, null,
            searchQuery ? h(TreeSearchResults, { root: workspace.path, query: searchQuery, onOpen: openFile, openPath }) : h(React.Fragment, null,
              (dropTarget !== null || busy) && h("div", { className: "dwu-treeDropHint" }, busy ? "正在处理文件…" : `释放后移动或导入到 ${dropTarget || "项目根目录"}`),
              treePrefsState.mode === "icon"
                ? h(DirTiles, { root: workspace.path, refreshKey: treePrefsState.refreshKey, active, clipboard, onSelect: setSelectedEntry, onOpen: openFile, openPath, onEntryMenu: entryMenu, onEntryDragStart: startEntryDrag, onEntryDragEnd: endEntryDrag, onDropEntry: dropEntry, dropTarget, busy })
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
        status && h("span", { className: "dwu-status", "data-error": /失败|变化/.test(status) || undefined }, status),
        kind === "markdown" && h("button", { className: "dwu-toolButton", onClick: () => setPreview((value) => !value) }, preview ? "源码" : "预览"),
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
      if (kind === "image") return h("div", { className: "dwu-filePane" }, toolbar, h("div", { className: "dwu-media" }, h("img", { src: assetUrl(root, file), alt: file })));
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
          if (detail.source === "tree" && detail.context !== "keep") setSingleContext(root, detail.path);
        };
        bus.addEventListener("open-file", listener); return () => bus.removeEventListener("open-file", listener);
      }, [root, setPreviewTab]);
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
          h("div", { className: "dwu-body" }, active ? h(FilePane, { key: `${root}:${active}`, root, file: active, onDirty: markActiveDirty }) : h("div", { className: "dwu-welcome" }, h("div", { className: "dwu-welcomeCard" }, h("div", { className: "dwu-welcomeIcon" }, zoneState.zone === "assets" ? "🎨" : "⌘"), h("div", { className: "dwu-welcomeTitle" }, zoneState.zone === "assets" ? "素材工作区" : "代码工作区"), h("div", { className: "dwu-welcomeText" }, zoneState.zone === "assets" ? "从文件树选择文件。支持图片和视频的编辑预览。" : "从左侧文件树选择文件。支持文本与 Markdown 编辑、PDF、Word、Excel、图片和视频预览。")))),
          terminalState.root === root && terminalState.open && h(TerminalPanel, { key: root, root, onClose: () => setWorkbenchTerminal(root, false) })
        )
      );
    }

    // 素材扩展名：文件树「图标模式」下，图片/视频文件显示缩略图（其余用文件类型图标）。
    const VISUAL_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico", "avif", "tif", "tiff", "mp4", "webm", "mov", "m4v", "avi", "mkv"]);
    function isVisualFile(name) { const dot = name.lastIndexOf("."); return dot > 0 && VISUAL_EXTS.has(name.slice(dot + 1).toLowerCase()); }

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
    const serviceBridge = { openPath: null, openSession: null };
    function VeangOverlay() {
      const overlayState = useOverlayPrefs();
      const hostRef = React.useRef(null);
      const [geo, setGeo] = React.useState(null);
      const { workspace, sessionState } = currentWorkspace(useHostSessions, useHostWorkspaces);
      const hasWorkspace = Boolean(workspace?.path);
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
        if (!root || !current) return;
        if (getBinding(root, "assets") === current) setWorkspaceZone("assets");
        else if (getBinding(root, "code") === current) setWorkspaceZone("code");
      }, [sessionState.current, workspace?.path]);
      const remeasure = React.useCallback(() => {
        const width = overlayPrefs.visible && hasWorkspace ? overlayPrefs.width : 0;
        const info = applyConversationSqueeze(width);
        // 无活动会话根（首页 / 新对话）→ 不渲染工作台，也不留对话列挤压。
        if (!info) { releaseConversationSqueeze(); setGeo(null); return; }
        setGeo((prev) => (prev && prev.left === info.left && prev.top === info.top && prev.bottom === info.bottom && prev.width === width ? prev : { left: info.left, top: info.top, bottom: info.bottom, width }));
      }, [hasWorkspace]);
      React.useEffect(() => {
        if (!overlayState.visible || !hasWorkspace) { releaseConversationSqueeze(); setGeo(null); return; }
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
      }, [overlayState.visible, hasWorkspace, remeasure]);
      // 宽度拖动后立刻重挤对话并同步几何（remeasure 直接读 overlayPrefs 最新值）。
      React.useEffect(() => { if (overlayState.visible && hasWorkspace) remeasure(); }, [overlayState.width, overlayState.visible, hasWorkspace, remeasure]);
      const [dragging, setDragging] = React.useState(false);
      // 皮肤背景兜底：内联计算工作区底色（壁纸上叠加主题色×不透明度），避免依赖注入 CSS 的级联。
      const [, setSkinTick] = React.useState(0);
      React.useEffect(() => { const onSkin = () => setSkinTick((value) => value + 1); bus.addEventListener("skin", onSkin); return () => bus.removeEventListener("skin", onSkin); }, []);
      const overlayBackground = skinSettings.appearance === "veang"
        ? `color-mix(in srgb, var(--dsw-alias-bg-base) ${skinSettings.workbench}%, transparent)`
        : "var(--dsw-alias-bg-base)";
      // 首页（未打开任何工作区）不显示文件工作区。
      if (!overlayState.visible || !hasWorkspace || !geo) return null;
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
      return h("div", { ref: hostRef, className: "dwu-overlayRoot", "data-dragging": dragging || undefined, style: { left: geo.left, top: geo.top, height: geo.bottom - geo.top, width: overlayState.width, backgroundColor: overlayBackground } },
        h(WorkspaceHeader, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces }),
        h("div", { className: "dwu-overlayBody" },
          h(WorkspaceSurface, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces }),
          h(WorkbenchTree, { useSessions: useHostSessions, useWorkspaces: useHostWorkspaces, openPath: (path) => { if (serviceBridge.openPath) serviceBridge.openPath(path).catch(() => {}); } })
        ),
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
      ctx.effect(() => () => { if (serviceBridge.openPath === nativeOpenPath) serviceBridge.openPath = null; serviceBridge.openSession = null; }, "service bridge cleanup");
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
