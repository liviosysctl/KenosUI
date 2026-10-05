# Terminal

Always-dark console frame with a header (title, status, actions) and a black mono body — the place to mount xterm.js for `incus exec`/console sessions.

**Consumer provides** `title`, a `status` (e.g. `<Status status="online">Verbunden</Status>`), header `actions` (disconnect, fullscreen), `height`, and either text children or a ref for xterm.js (`ref` points at the body). Give xterm the theme `{ background: '#09090b', foreground: '#f4f4f5', cursor: '#ef4444' }` so it matches.
