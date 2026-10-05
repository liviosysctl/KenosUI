# Progress

Usage meter for CPU, RAM, disk, quota or a running job.

**Colour by threshold:** without `palette` the bar is black (`primary-solid`) below 75 %, orange from 75 %, red from 90 % — change with `thresholds={[80, 95]}` or turn off with `thresholds={false}`. **Sizes** `xs` 6px · `sm` 8px (default) · `md` 10px · `lg` 12px. Value text is mono, tabular.

**Consumer provides** `value` (and `max`, default 100), `label`, optionally `valueText` like "412 / 512 GB".

- Do: stack meters in a column with `space-3` gaps; same size for all meters in a group.
