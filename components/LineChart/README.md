# LineChart

Time series — CPU, RAM, network, disk I/O over time. `AreaChart` is the same with a 10 % fill.

**Colour:** one series is drawn in `chart-ink` (black / white). 2–4 series take `chart-1` blue, `chart-2` teal, `chart-3` purple, `chart-4` pink in this fixed order (validated colour-blind-safe on `bg-panel` in both themes); more than 4 → fold into “Other” or split the chart. Red only for `thresholds` (limits, alarms). Never two y-axes: different units → two charts.

**Built in:** nice y-ticks with unit, time x-axis (HH:MM or DD.MM.), 2px lines, hairline grid, legend for ≥ 2 series plus end labels when they don't collide, crosshair tooltip listing every series (value first), keyboard (focus, ←→ Home End Esc), “Show as table” toggle, `loading` keeps the last render at 50 %.

**Consumer provides** `data` (rows with `t` = Date/epoch ms and one key per series), `series` (`key`, `label`), `unit`, `title`; optionally `yMax` (100 for percent), `thresholds`.
