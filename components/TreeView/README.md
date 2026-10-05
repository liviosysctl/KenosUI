# TreeView

Hierarchy on native `<details>`: storage pools → volumes, projects → instances, folders → files. Selection highlight, meta text right. **Consumer provides** `items` (`id`, `label`, `icon`, `meta`, `children`), `selected`, `onSelect`, `defaultExpanded`, and an `aria-label`. Folders are native disclosure widgets (keyboard works out of the box); the selected node carries `aria-current`.
