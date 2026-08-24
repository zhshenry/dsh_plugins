/** 0.2.x: single-plugin form — the main entry re-exports the embedded ui host
 *  plugin (webServer routes, preview, terminal, skin storage), so the patch can
 *  reference the plain package name instead of a subpath. */
export { inject, apply } from "../embedded/ui/index.js";
