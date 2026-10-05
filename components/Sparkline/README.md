# Sparkline

Tiny trend line without axes for table cells, Stat tiles and lists: 1.5px ink line, 10 % fill, a dot on the last value; hover shows the value.

**Consumer provides** `data` (numbers, oldest first), `width` (default: fill), optionally `min`/`max` (use `min: 0` for usage), `unit`, `label`. Stat takes it directly: `<Stat … sparkline={[…]} />`.
