# Menu

Dropdown of actions for an object (row actions, user menu). Opens in the top layer (never clipped by tables, works inside Dialog/Drawer) and flips up near the bottom edge; closes on select, Esc, Tab, click outside. ↓ on the trigger opens it; ↑↓ Home End move.

**Items** `label`, `icon`, `command` (shortcut hint), `onSelect` or `href`, `danger` (red, for delete — put it last after a separator), `disabled`, `separator`, `group` (heading).

**Consumer provides** `trigger` (a Button or IconButton) and `items`; `placement="bottom-end"` at the right edge.
