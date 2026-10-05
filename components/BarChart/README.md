# BarChart

Compare one value across categories — RAM per instance, disk per pool, backups per day.

**Orientation** `horizontal` (default: ranked categories, labels left, value at the tip) or `vertical` (time buckets). Bars are ≤ 24px thick with a 4px rounded data end, square at the baseline. One colour (`chart-ink`); mark the one bar that matters with `highlight: true` (accent red). Hover or focus a bar to emphasise its value; “Show as table” shows the numbers.

**Consumer provides** `data` (`label`, `value`), `unit`, `title`; sort the data yourself (largest first reads best).
