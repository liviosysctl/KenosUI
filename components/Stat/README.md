# Stat

One metric on a dashboard: muted label, large tabular value, small unit, optional trend and help text.

**Sizes** value 20px (`sm`) · 24px (`md`, default) · 30px (`lg`). Trend up is `success-fg`, down is `accent-fg`; the arrow carries the direction, not colour alone.

**Trend line:** `sparkline={[…]}` draws a Sparkline under the value.

**Consumer provides** `label`, `value`, `unit`, optionally `trend={{ value: "12 %", direction: "down" }}` and `help`.

- Do: put 3–4 Stats in a row inside an outline Card; keep units out of the value string.
- Don't: use a trend colour for something where "up" is bad (latency) — pass `direction` for what the change means, or leave `trend` out.
