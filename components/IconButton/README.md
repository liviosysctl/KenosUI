# IconButton

Square, icon-only Button — ghost by default — for toolbars, table rows and headers.

**Consumer provides** `icon` (a name like `"rotate-cw"` or a node) and a required `aria-label` (also used as the native title). All Button props apply: `size`, `variant`, `palette`, `loading`.

- Do: wrap in Tooltip when the meaning isn't obvious; use `size="xs"` in `sm` tables.
- Destructive: `palette="accent" variant="subtle"` with icon `trash`.
