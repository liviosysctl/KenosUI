# Icon

Line icon from the built-in Lucide set (ISC licence, `icons-LICENSE.txt`), drawn on a 24px grid with a 2px stroke in `currentColor`.

**Use** by name: `<Icon name="play" />`; `Icon.names` lists all 70. Buttons, Tabs, Nav, Menu, Tag, InputGroup and EmptyState accept an icon *name* directly. Size follows the font (1em) — or controls size it (16px in `sm`/`md` controls, 20px in `lg`).

**Consumer provides** `name`; `aria-label` only when the icon stands alone and carries meaning (it is `aria-hidden` otherwise).

- Incus mapping: `box` container · `monitor` VM · `layers` image · `camera` snapshot · `network` network · `hard-drive` storage · `server` cluster member · `terminal` console · `file-text` logs · `activity` operations.
- Need another? Copy its node array from `lucide-static/icon-nodes.json` into the bundle's `ICON_DATA`.
