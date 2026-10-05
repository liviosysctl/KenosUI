# Table

Dense data table for hosts, containers, ports, logs: tabular numbers, optional monospace columns, horizontal scroll on small screens.

**Default `size="sm"`** (6px × 8px cells, 13px text) because technical views are data-heavy; `md` / `lg` for calmer pages. **Variants** `line` (default, hairline rows) and `outline` (framed, `bg-muted` header). Options `striped`, `interactive` (row hover), `stickyHeader`.

**Consumer provides** `columns` (`key`, `label`, `align: "end"` for numbers, `mono` for IPs/ports/hashes, `render`) and `rows`, or raw `<thead>`/`<tbody>` as children. `onRowClick` makes rows clickable.

**On phones:** with `columns` + `rows`, rows turn into cards when the table's container is narrower than 34rem (`responsive="cards"`, default): the first column becomes the card title, every other cell shows its column label (`mobileLabel` overrides it, `hideOnMobile` drops secondary columns so cards stay short), the checkbox sits top left, `rowActions` top right, and the sortable headers stay as a row of sort buttons. `responsive="scroll"` keeps the table and scrolls it horizontally instead (logs, wide data). Markdown tables always scroll.

**Selection and sorting:** `selectable` adds a checkbox column with select-all (needs `rowKey`; `selected`/`onSelectedChange`) — pair it with ActionBar. Columns with `sortable: true` get a sort button (asc → desc → off); sorting is local unless `manualSort`. `rowActions(row)` adds a right-aligned last column for IconButtons or a Menu. `loading` shows skeleton rows, `emptyText` replaces the empty row.

- Do: right-align numbers, mono for anything someone might copy.
- Put a `Status` in the state column instead of coloured text.
