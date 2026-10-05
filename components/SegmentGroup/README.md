# SegmentGroup

Segmented control for switching a filter or view: items on a recessed `bg-muted` track, the selected one raised.

**Sizes** 24 / 32 / 40px (`xs` / `sm` / `md`). Items may have an icon and a count ("Container 9").

Too many items for the width → it scrolls sideways, it never overflows the page.

**Consumer provides** `options`, `value`/`onChange` (or `defaultValue`), `aria-label`.
