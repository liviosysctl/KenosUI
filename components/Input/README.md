# Input

Single-line text field, optionally wrapped with label, helper and error text.

**Variants** `outline` (default, `border`), `subtle` (`bg-muted` fill), `flushed` (bottom line only). Focus: border + 1px ring in `focus-ring` (red). Invalid: `border-error`, and `errorText` in `accent-fg` replaces `helperText`.

**Sizes** match Button heights so they align in a row: `md` = 40px.

**Consumer provides** `value`/`onChange` (or `defaultValue`), `label` for accessibility, `invalid` + `errorText` for validation.

- Do: always give a `label`; placeholder is a hint, not the label (`fg-subtle` is too faint for content).
