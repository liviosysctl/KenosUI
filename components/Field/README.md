# Field

Wraps any control with label, required mark, helper text and error text — the one way to label form controls.

**Orientation** `vertical` (default) or `horizontal` (label left, `--field-label-width` 10rem) for dense settings pages. `invalid` + `errorText` replaces the helper in `accent-fg`.

**Consumer provides** exactly one control as child (it receives the field's id), `label`, optional `helperText`, `errorText`, `required`.
