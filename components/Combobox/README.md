# Combobox

Searchable select for long lists — images, profiles, projects, networks, cluster members. Implements the ARIA combobox pattern.

**Behaviour:** type to filter (case and accents ignored, prefix matches first), ↑↓ to move, Enter to pick, Esc closes (a second Esc closes the surrounding Dialog), Backspace removes the last Tag in `multiple`. Options can carry `description`, `icon`, `group` (headers) and `keywords`. The list renders at most `maxResults` (100) options and says how many more matched — fast even with thousands of images. It opens in the top layer, so it works inside Dialog/Drawer and never gets clipped.

**Server-side search:** `filter={false}` + `onInputChange` + `loading`.

**Consumer provides** `options`, `value`/`onChange` (string, or string[] with `multiple`), `placeholder`; wrap in Field for a label.

- Short fixed list (≤ 10) → Select or RadioGroup instead.
