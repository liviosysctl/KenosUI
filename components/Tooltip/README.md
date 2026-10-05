# Tooltip

Short hint on hover (after 300 ms) and on keyboard focus, on `bg-inverted`.

**Use** for icon-only buttons and truncated text. Never put essential information or interactive content in it. It opens in the browser's top layer with fixed coordinates, so tables with horizontal scroll, `overflow: hidden` cards and open Dialogs never clip it; it flips below when there is no room above and closes on Esc. Touch doesn't trigger it.

**Consumer provides** `content` and one focusable child.
