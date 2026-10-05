# Grid

Responsive grid without media queries: as many columns as fit, each at least `minChildWidth` wide (default 16rem) — four stat cards on desktop, two on a tablet, one on a phone.

**Consumer provides** children, `minChildWidth`, `gap` (a spacing step: `3` = `space-3`). `columns={3}` fixes the count instead; fixed grids fall back to one column below 40rem.

- Do: use it for card rows, stat tiles, chart rows — never hard-code `repeat(4, 1fr)`.
