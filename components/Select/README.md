# Select

Native `<select>` styled exactly like Input (same heights, borders, focus ring) with a chevron.

**Why native:** zero JS, keyboard and screen-reader support, proper pickers on phones — fast. `options` as strings or `{value, label, disabled}`; `placeholder` adds a disabled first option.

**Consumer provides** `value`/`onChange` (or `defaultValue`), `options`; wrap in Field for a label.
