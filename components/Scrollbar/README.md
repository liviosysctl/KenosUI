# Scrollbar

Thin pill scrollbars for every scroll area, applied globally by `bundle.css` — no component and no class needed.

- **Look:** 4px thumb on a transparent track, 6px while the pointer is on it; `fg` at 18 % → 30 % (area hovered) → 48 % (dragging). No arrow buttons, transparent corner.
- **Engines:** `::-webkit-scrollbar` for Chromium, WebView2, Safari and WebKitGTK; `scrollbar-width: thin` + `scrollbar-color` for Firefox.
- **Override:** `--kui-scrollbar-size`, `--kui-scrollbar-thumb`, `--kui-scrollbar-thumb-near`, `--kui-scrollbar-thumb-active` on any element.
- **Helpers:** `kui-scroll-none` (hidden, still scrolls), `kui-scroll-stable` (reserve the gutter so content does not jump).
- **Avoid:** setting `scrollbar-width` / `scrollbar-color` on an element yourself — Chromium then drops the custom bar for it.
