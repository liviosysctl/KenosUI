# Button

Triggers an action; black by default, red for the one action that matters most on a view.

**Use** `palette="primary"` (black, `primary-solid`) for normal actions and `palette="accent"` (red, `accent-solid`) for the single main call-to-action or a destructive action — never more than one red solid button per view.

**Variants**, from loud to quiet: `solid` → `surface` → `subtle` → `outline` → `ghost` → `plain`. Pair a solid primary with an outline or ghost secondary.

**Sizes** `2xs` 24px · `xs` 32 · `sm` 36 · `md` 40 (default) · `lg` 44 · `xl` 48 · `2xl` 64. Radius `radius-l2`, weight 500.

**Icons and loading:** `startIcon`/`endIcon` take an icon name (`startIcon="play"`). `loading` shows a spinner, disables the button and keeps its width; `loadingText` replaces the label instead ("Startet …"). `IconButton` (`icon`, `aria-label`) is the square, ghost-by-default variant for toolbars and table rows — pair it with a Tooltip.

**Consumer provides** the label (children), `onClick`, and for `iconOnly` an `aria-label`.

- Do: verb labels in sentence case ("Save changes").
- Don't: red for "Cancel"; icons without labels unless `iconOnly` + `aria-label`.
