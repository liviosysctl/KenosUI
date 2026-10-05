# KenosUI

KenosUI is a design system for self-hosted apps and websites, built for homelab dashboards and technical tools, where speed matters most. A quiet, neutral base in the spirit of Chakra UI, with **black as the primary colour** and **red as the one accent**. The interface stays mostly black, white and grey so content leads; red is rare, and that rarity is what makes it work.

## Principles

- **Neutral first, red on purpose.** Build every screen with `bg`, `fg`, `border` and `primary-*`. Add `accent-*` only where the eye must go: the one main call-to-action, a destructive action, "new"/"live" markers, unread dots, errors.
- **One red solid per view.** A single `accent-solid` button or block per screen. Two red things compete; three are noise.
- **Semantic tokens, not primitives.** Use `bg-panel`, `fg-muted`, `accent-fg`… — never `gray-600` or `red-700` directly. The semantic tokens are what flip correctly in dark mode.
- **Fast by default.** No external requests, one 48 KB font file, no CSS-in-JS runtime, no layout shift. Every addition has to earn its bytes.
- **Data first.** Technical views are dense: `size="sm"` controls and tables, monospace for anything someone might copy, tabular numbers everywhere.
- **Both themes, always.** Every screen works in `light` and `dark`. In dark mode `primary-solid` flips to white so black buttons stay visible on the black ground.

## Colour

| Role | Tokens | Rule |
|---|---|---|
| Ground | `bg`, `bg-subtle`, `bg-muted`, `bg-panel` | `bg` for the page, `bg-panel` for cards/dialogs, `bg-muted` for fills. |
| Text | `fg`, `fg-muted`, `fg-subtle` | `fg` for copy, `fg-muted` for secondary text. `fg-subtle` only for placeholders. |
| Lines | `border`, `border-muted`, `border-emphasized` | 1px hairlines. `border-emphasized` on hover. |
| Primary (black) | `primary-solid`, `primary-contrast`, `primary-subtle`, `primary-muted`, `primary-fg` | Default for buttons, switches, badges. Text on `primary-solid` is `primary-contrast`. |
| Accent (red) | `accent-solid`, `accent-contrast`, `accent-subtle`, `accent-muted`, `accent-fg`, `accent-border` | Red text is `accent-fg` (7.8:1 on white), never `red-500`. White on `accent-solid` = 4.8:1. |
| Focus | `focus-ring` | One ring for everything: 2px solid red, 2px offset. |
| Status | `*-info`, `*-success`, `*-warning`, `*-error` | Only for state messages. Error = the accent red. Status text uses `success-fg` / `warning-fg` / `accent-fg`; `fg-*` status tokens are for icons. Always pair colour with an icon or word. |

Scales: `gray-50…950` (zinc) and `red-50…950` from Chakra UI; `black` is `#09090b`, not pure black.

## Typography

- **Inter**, self-hosted: one variable file `fonts/Inter-latin-wght.woff2` (48 KB, weights 100–900, Latin incl. äöüß; OFL licence in `fonts/Inter-OFL.txt`). No Google Fonts — works offline and on an air-gapped LAN. Preload it: `<link rel="preload" href="/fonts/Inter-latin-wght.woff2" as="font" type="font/woff2" crossorigin>`.
- **Mono** (`--font-mono`) is the system's own: `ui-monospace`, SF Mono, Cascadia Mono, JetBrains Mono … — zero bytes. Use `mono-sm` (13/20) for IPs, ports, hashes, IDs and log lines; `code` (14/20) inline.
- Body copy in `md` (16/24). UI text — buttons, inputs, labels — in `sm` (14/20) at weight 500 (`label`).
- Headings weight 600: `xl` (h4) → `2xl` (h3) → `3xl` (h2) → `4xl` (h1). Display sizes `4xl`+ tighten to `-0.025em`.
- Sentence case everywhere ("Save changes", not "SAVE CHANGES"). No emoji in UI.

## Spacing, radius, elevation

- 4px grid: `space-1` = 4px … `space-96`. Control heights: `space-8` / `space-9` / `space-10` (default) / `space-11` / `space-12`.
- Radii by layer: `radius-l1` (2px, nested marks), `radius-l2` (4px, controls: button, input, badge), `radius-l3` (6px, containers: card, alert). `radius-full` only for pills, switches, avatars.
- Prefer borders over shadows. `shadow-md` for elevated cards, `shadow-lg` for menus/popovers, `shadow-2xl` for dialogs. Dark shadows add an inner hairline so panels still separate.

## States and motion

- Hover: solid buttons drop to 90 % (`opacity-hover-solid`); subtle and ghost fills step up one level (`primary-subtle` → `primary-muted`).
- Disabled: `opacity-disabled` (0.5) and `cursor: not-allowed`.
- Transitions 120ms (meters 200ms), `ease-out`. Nothing bounces. `prefers-reduced-motion` switches all transitions and the status pulse off.

## Components

React 18 bundle `window.KenosUI` (`components/bundle.js`, minified ~104 KB / 33 KB gzip incl. icons, charts and highlighter; readable source in `components/src/bundle.js`) plus `components/bundle.css` (~99 KB / 17 KB gzip; minified ~86 KB / 15 KB gzip). Every root carries the `kui-ui` class and a `kui-*` class that also works without React.

- **Actions:** Button (icons, loading), IconButton, CopyButton
- **Forms:** Field, Input, InputGroup, Textarea, Select, Combobox (searchable, multi), Checkbox, RadioGroup, SegmentGroup, Switch, FileUpload
- **Typography:** Heading, Link, Code, Kbd, Blockquote, Separator, List, CodeBlock, Terminal
- **Data display:** Badge, Tag, Card, DataList, Accordion, Table (sort, selection, row actions), Status, Progress, Stat
- **Charts:** LineChart / AreaChart, BarChart, Sparkline (SVG, no library)
- **Feedback:** Alert, Toast + `toast()`, Spinner, Skeleton, EmptyState, ActionBar
- **Navigation & layout:** AppShell, Nav, Container, Grid, Stack, PageHeader, Breadcrumb, Tabs, Pagination, Steps
- **Overlays:** Dialog, Drawer (native `<dialog>`), Menu, Tooltip, Popover, CommandPalette (Ctrl/⌘+K), `confirm()`
- **More data & input:** Avatar/AvatarGroup, NumberInput, Slider, ProgressCircle, RelativeTime, Timeline, UptimeBar, KeyValueEditor, TreeView
- **Websites:** SkipLink, Banner, Navbar, Hero, FeatureGrid, Footer (see WebsiteExample)
- **Hooks:** `useTheme` + ThemeToggle, `useHotkey`, `useMediaQuery`
- **Content:** Prose — rendered Markdown, 1:1 with the components (see the Markdown section)

Every coloured component takes `palette="primary"` (default) or `palette="accent"`.

## Homelab and technical views

- Service state is always a `Status` (dot + word): online green, degraded orange, offline red, maintenance blue, unknown/stopped grey. Never colour alone.
- Red has two jobs here, and they don't clash: the accent (one action) and "down/critical". On a dashboard, keep red buttons out of views that show red states — use a black primary button there.
- Usage meters are `Progress`: black when fine, orange from 75 %, red from 90 %.
- Metrics are `Stat` rows inside an outline `Card` (`size="sm"`), 3–4 per row.
- Lists of hosts, containers, ports → `Table` (`size="sm"`, `mono` columns, numbers right-aligned).
- Dense screens use `size="sm"` controls (36px); `md` (40px) for forms and settings pages.

## Charts

- **Form first:** one current value → `Stat` (optionally with `sparkline`); a value over time → `LineChart`/`AreaChart`; comparing items → horizontal `BarChart`, largest first; usage of a limit → `Progress`. No pies, no dual axes (different units → two charts).
- **Colour:** single series in `chart-ink` (the brand black, white in dark). 2–4 series use `chart-1` blue, `chart-2` teal, `chart-3` purple, `chart-4` pink in that fixed order — validated with the dataviz validator on `bg-panel` (adjacent colour-blind ΔE ≥ 17.9, normal ≥ 19.1, all ≥ 3:1) in both themes. Colour follows the entity (nextcloud stays blue when a filter hides others). More than 4 → `chart-other` “Other”. Red (`accent-solid`) only for thresholds and the one highlighted bar; status colours never paint series.
- **Marks:** 2px lines, 10 % area wash, bars ≤ 24px with 4px rounded data end, 1px solid `chart-grid` gridlines and `chart-axis` baseline, dots with a 2px surface ring. Axis text 11px `fg-muted` with tabular figures; values, labels and legends always in text tokens, never in the series colour.
- **Interaction:** every chart has a hover/focus readout (crosshair on lines, per bar on bars), keyboard navigation and a “Show as table” view, so no value depends on hover or colour alone. While refetching, `loading` keeps the old render at 50 % — no skeleton flash.
- **Filters** (time range, host) sit in one row above all charts they scope, never inside a chart card.

## Code

- `CodeBlock` highlights yaml, json, bash, ini/toml/env, js/ts, python, dockerfile, nix, log, diff and sql itself — no library, no network. Colours are the `code-*` tokens: keywords in the brand red (`code-keyword`), strings green, numbers blue, keys purple, variables orange, flags teal, comments muted italic, punctuation grey; every one ≥ 4.5:1 on `bg-subtle` and on the black terminal.
- Shell: prefix commands with `$ ` — then other lines are shown as output. Logs: ERROR red, WARN orange, INFO blue, timestamps muted.
- Use `lineNumbers` for files people will reference by line, `highlightLines` to point at the change, `variant="terminal"` for command output.

## Floating layer

Menu, Tooltip and the Combobox list open in the browser's top layer (Popover API) with fixed coordinates: tables with horizontal scroll, `overflow: hidden` cards and open Dialogs never clip or cover them. They flip to the other side when there is no room and stay inside the viewport. Browsers without the Popover API still get fixed positioning.

## App UIs (Incus and similar)

- **Layout:** `AppShell` with `Nav` in the sidebar (Instances, Images, Profiles · Networks, Storage, Cluster · Operations, Settings), `Breadcrumb` + user `Menu` in the header, host `Status` in the sidebar footer.
- **List pages:** title `Heading 2xl` + one-line summary; primary action top right (black), secondary outline. Then a row of `Stat`/`Progress` cards, then `SegmentGroup` filter + search `InputGroup`, then `Table` (`selectable`, `sortable` columns, mono for image/IP, `Status` column, `rowActions` = one IconButton for the main action + `Menu` for the rest). Selected rows → `ActionBar`.
- **Create flows:** `Dialog` with `Field`s; images and profiles via `Combobox` (hundreds of images stay fast), type via `SegmentGroup`; the create button triggers `toast.promise`.
- **Monitoring:** host CPU as `AreaChart` (`yMax={100}`, threshold at 90 %), memory per instance as horizontal `BarChart`, per-row trends as `Sparkline`.
- **Details:** open in a `Drawer` (quick look) or a page with `Tabs` (Overview, Configuration, Snapshots, Console, Logs). Key facts in a `DataList` with copy buttons; config as `CodeBlock language="yaml"`.
- **Long operations** (start, stop, snapshot, migrate): the row shows a `Spinner` instead of the Status, and `toast.loading()` → `toast.update(id, { status: 'success' })` when the operation ends. Never block the UI with a modal spinner.
- **Destructive actions:** `Menu` item `danger` (last, after a separator) → `Dialog size="sm"` that says what is lost and asks for the instance name before the red button enables.
- **Console:** `Terminal` frame with xterm.js inside, theme background `#09090b`, foreground `#f4f4f5`, cursor `#ef4444`.
- **Empty lists:** `EmptyState` with icon, one sentence and the create action.
- **Instance states:** running → green, stopped → grey, frozen → blue, error → red, starting/stopping → orange (`Status status="running"` …).

## Scrollbars

- `bundle.css` styles every scrollbar on the page — no class needed. A thin pill (4px, 6px under the pointer) on a transparent track, no arrow buttons; the thumb is `fg` at 18 %, 30 % while the scroll area is hovered, 48 % while dragging, so it follows light and dark by itself.
- Chromium, WebView2 (Tauri on Windows), Safari and WebKitGTK (Tauri on Linux) use the `::-webkit-scrollbar` rules; Firefox gets `scrollbar-width: thin` with the same colours.
- The rules sit in `:where()` (zero specificity): any component rule wins. Tabs, SegmentGroup and ActionBar keep their hidden scrollbars.
- Tune per app or area with `--kui-scrollbar-size` (default 12px hit area), `--kui-scrollbar-thumb`, `--kui-scrollbar-thumb-near`, `--kui-scrollbar-thumb-active`.
- Helpers: `kui-scroll-none` hides the bar but keeps scrolling (strips, carousels); `kui-scroll-stable` reserves the gutter so content does not shift when a list grows (sidebars, file trees, logs).
- Do not set `scrollbar-width` or `scrollbar-color` yourself on an element: in Chromium that switches the custom bar off for it.

## Language

- All built-in texts (aria labels, “No entries”, “Show as table”, status words, GitHub alert titles, relative times) are **English by default**, numbers and dates formatted `en-GB` (24 h, day first).
- Switch once before rendering: `KenosUI.setLocale("de")` (German built in) or any language with your own strings: `setLocale("fr", { intl: "fr-CH", messages: { "table.empty": "Aucune entrée", … } })`. Missing keys fall back to English; `KenosUI.messages.en` lists every key, `KenosUI.t(key)` reads one.
- Write UI copy in sentence case in the chosen language; keep technical names (instance, snapshot, pool) as the tool calls them.

## Websites

- Every site starts with `SkipLink`, then optionally one `Banner`, then `Navbar` (sticky, folds into a menu below 48rem), `<main id="main">`, `Footer`.
- Landing pages: one `Hero` (fluid title 36–72px, max one red element: the eyebrow *or* an accent button), then `FeatureGrid`, then content in `Container`.
- Put `ThemeToggle` in the Navbar actions. Keep the no-flash snippet in `<head>`, reading the same key: `<script>try{var t=localStorage.getItem('kui-theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}</script>`.

## App conventions

- **Ctrl/⌘+K** opens a `CommandPalette` with every page and the main actions; show the shortcut in the search button (`Kbd`).
- Destructive actions ask with `await confirm({ … danger: true, confirmText: name })`; render `<ConfirmHost />` and `<Toaster />` once at the root.
- Times are relative (`RelativeTime`, “5 minutes ago”) with the exact date on hover; logs and history use `Timeline`, availability `UptimeBar`.
- Env variables and config maps are edited with `KeyValueEditor` (paste a .env file into a key field).

## Phones and small screens

- Every component works from 320px up. Test each screen at 390px in both themes.
- **Layout:** build pages with `Grid` (`minChildWidth`, never fixed column counts), `Stack direction="row"` for toolbars (wraps), `PageHeader` (actions wrap under the title) and `Container` for websites (16px side padding on phones). No fixed widths wider than 320px; give flex children `min-width: 0`.
- **Built in:** AppShell sidebar becomes a drawer below 768px; Table rows become cards below 34rem container width (`responsive="scroll"` for logs); Steps turn vertical below 36rem; Tabs, SegmentGroup and ActionBar scroll sideways instead of squeezing; Pagination collapses to ‹ 4 / 13 ›; Breadcrumb keeps the last two levels; Field and DataList stack their labels; Dialog becomes a bottom sheet; Toasts and ActionBar span the width above the home indicator; charts drop end labels (the legend stays) and let vertical scrolling through.
- **Touch** (`pointer: coarse`): inputs use 16px text so iOS doesn't zoom, small buttons get a ≥ 44px hit area, menu and nav items grow taller, tooltips don't open on tap (never put essential info in them).
- **Safe areas:** add `viewport-fit=cover` to the viewport meta — `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`; fixed bars already respect `env(safe-area-inset-*)`.

## Performance

- Load order: `tokens.css` → `bundle.css` → your app. Two stylesheets, no runtime styling.
- Preload the one font file; `font-display` falls back to the system sans until it arrives.
- Pick the theme before first paint (no flash): `<script>document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'</script>` in `<head>`.
- The CSS classes (`kui-*`) work without React, so static pages and server-rendered tools don't need to ship any JS.

## Iconography

- 70 **Lucide** line icons are built into the bundle (`<Icon name="play" />`, list: `Icon.names`; ISC licence in `components/icons-LICENSE.txt`). 24px grid, 2px stroke, round caps, `currentColor`.
- Size: 16px in `sm`/`md` controls, 20px in `lg`, 1em inline. Icons that stand alone get an `aria-label`; next to text they are hidden from screen readers.
- Incus vocabulary: `box` container, `monitor` VM, `layers` image, `camera` snapshot, `network` network, `hard-drive` storage, `server` cluster member, `terminal` console, `file-text` logs, `activity` operations, `folder-kanban` project.
- No emoji in UI. The Alert status glyphs are filled 24px paths.

## Not synced

Taken from Chakra UI (`chakra-ui/chakra-ui` @ `9611614`, `packages/react/src/theme`): colour scales, semantic token structure, spacing, radii, font sizes / line heights, shadows, and the recipes for Button, Input, Textarea, Native select, Field, Input addon, Checkbox, Radio, Segment group, Switch, Badge, Tag, Card, Data list, Accordion, Alert, Toast, Spinner, Skeleton, Empty state, Status, Progress, Stat, Table, Tabs, Breadcrumb, Steps, Dialog, Drawer, Menu, Tooltip, Heading, Link, Code, Kbd, Blockquote, Separator and Code block (hand-written as plain React + CSS, not Chakra's build; AppShell, Nav, Pagination, FileUpload, ActionBar and Terminal are own compositions). Changed on purpose: primary palette = black/gray, accent = red, focus ring red instead of gray. Inter is now self-hosted (from Fontsource) instead of Google Fonts; the mono stack is system-only. Left out: Chakra's other palettes (teal, cyan, purple, pink, yellow), durations/easings, z-indices, breakpoints and the remaining ~70 recipes. Own additions: Combobox, charts (following the dataviz method; colours from Chakra's blue/teal/purple/pink ramps, validated), syntax highlighter, floating layer. Icons: Lucide 1.48 (ISC), 70 selected. No logo.

---

## Usage

KenosUI ships as a prebuilt bundle. It needs React 18 and ReactDOM 18 (bring your own copy, exposed as `window.React` / `window.ReactDOM`).

```html
<link rel="preload" href="fonts/Inter-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="react.production.min.js"></script>
<script src="react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Button } = window.KenosUI;
</script>
```

- `tokens.css`: every token as a CSS variable plus the `@font-face` rule for Inter. `tokens.json` holds the same values for tools.
- `components/bundle.css` / `components/bundle.js`: the stylesheet and the component library (`window.KenosUI`). Unminified source: `components/src/bundle.js`. Types: `components/index.d.ts`.
- Without React (plain HTML from a Markdown renderer), load `tokens.css` and `components/bundle.css` and wrap the output in `<div class="kui-prose">`; see `markdown.md`.
- `components/<Comp>/preview.html` are the showcase snippets for each component; they expect React, ReactDOM, the bundle and its CSS to be loaded already.

## Licences

Icons: Lucide, ISC licence (`components/icons-LICENSE.txt`). Font: Inter, SIL Open Font Licence (`fonts/Inter-OFL.txt`).

## Index

**Tokens**

- `api/tokens.md` — Every token: text, fill, border, chart, palette, type, spacing, radius, shadow, opacity. (16.8k)

**Icons and assets**

- `api/icons.md` — 70 icon names for `Icon` and every `icon=` prop. (1.1k)

**Components** (`api/components/<Comp>.md`, 77; 2 of them showcase pages)

- **Actions**: `Button` — Triggers an action; black by default, red for the one action that matters most on a view · `IconButton` — Square, icon-only Button — ghost by default — for toolbars, table rows and headers · `ThemeToggle` — Light/dark switch that remembers the choice (localStorage kui-theme) and follows the OS when set to System
- **Foundations**: `Icon` — Line icon from the built-in Lucide set (ISC licence, icons-LICENSE.txt), drawn on a 24px grid with a 2px stroke in currentColor
- **Forms**: `Input` — Single-line text field, optionally wrapped with label, helper and error text · `Field` — Wraps any control with label, required mark, helper text and error text — the one way to label form controls · `Textarea` — Multi-line input with the same variants, borders and focus ring as Input · `Select` — Native styled exactly like Input (same heights, borders, focus ring) with a chevron · `Combobox` — Searchable select for long lists — images, profiles, projects, networks, cluster members · `InputGroup` — Adds an icon, button or text addon to an Input: search icon, copy button, unit (GiB), prefix (https://) · `Checkbox` — Square checkbox (native input) with label and optional description; supports indeterminate · `RadioGroup` — Group of radio buttons in a fieldset with legend, vertical or horizontal · `SegmentGroup` — Segmented control for switching a filter or view: items on a recessed bg-muted track, the selected one raised · `Switch` — On/off toggle that takes effect immediately (settings), not a form choice to submit later · `FileUpload` — Drop zone with click-to-pick; lists chosen files with their size · `NumberInput` — Numeric field with steppers: ↑↓ keys (Shift = ×10), min/max/step clamped on blur, decimal comma accepted, optional unit suffix (GiB, %), numeric keyboard on ph… · `Slider` — Native range input styled with the palette: label, live value (unit, formatValue), optional marks · `KeyValueEditor` — Edit key–value lists: env variables, config keys, labels
- **Data display**: `Badge` — Small non-interactive status label for counts, states and categories · `Tag` — Compact label for things attached to an object: profiles, images, projects, networks, architecture — optionally with icon and remove button · `DataList` — Key–value pairs for detail panels: labels in fg-muted, values in fg, optional mono and copy button per value · `Accordion` — Collapsible sections on native : open/close works without JS, one-at-a-time via the name attribute unless multiple · `Avatar` — User or object picture with initials fallback and optional status dot · `RelativeTime` — “5 minutes ago” / “in 3 hours” via Intl in the current locale, updating itself; hover shows the exact date · `Timeline` — Activity feed / event log: dots (status colours) or icons, title, relative time, description and optional content · `TreeView` — Hierarchy on native : storage pools → volumes, projects → instances, folders → files
- **Layout**: `Card` — Container that groups one subject: header (title, description), body and an actions footer · `Container` — Centred page width for websites: sm 40rem · md 48rem · lg 64rem (default) · xl 80rem · full · `Stack` — Flex stack with a spacing-token gap. direction="row" wraps by default, so toolbars (filter, search, buttons) flow onto the next line on phones instead of overf… · `Grid` — Responsive grid without media queries: as many columns as fit, each at least minChildWidth wide (default 16rem) — four stat cards on desktop, two on a tablet,… · `PageHeader` — Page title with description and actions · `AppShell` — Page layout for apps: fixed sidebar (brand, Nav, footer), 56px header, scrolling main area
- **Feedback**: `Alert` — Inline message that tells the user about a state: info, success, warning, error or neutral · `Spinner` — Indeterminate loading indicator in currentColor · `Skeleton` — Placeholder block while data loads, pulsing on bg-emphasized · `EmptyState` — Centered message when a list has nothing to show: icon, title, description, actions · `Toast` — Short-lived notification, bottom right · `ActionBar` — Floating toolbar at the bottom centre for bulk actions on selected rows ("3 selected · Start · Stop · Delete")
- **Homelab**: `Status` — Coloured dot plus label for the state of a service, host, container or job · `Progress` — Usage meter for CPU, RAM, disk, quota or a running job · `Stat` — One metric on a dashboard: muted label, large tabular value, small unit, optional trend and help text · `Table` — Dense data table for hosts, containers, ports, logs: tabular numbers, optional monospace columns, horizontal scroll on small screens · `ProgressCircle` — Circular usage gauge for compact dashboards; like Progress it colours itself by thresholds (black < 75 % ≤ orange < 90 % ≤ red) · `UptimeBar` — Status-page style bars — one per day or check — green up, orange degraded, red down, grey no data; hover/focus shows the day, the header the uptime %
- **Charts**: `LineChart` — Time series — CPU, RAM, network, disk I/O over time · `BarChart` — Compare one value across categories — RAM per instance, disk per pool, backups per day · `Sparkline` — Tiny trend line without axes for table cells, Stat tiles and lists: 1.5px ink line, 10 % fill, a dot on the last value; hover shows the value
- **Navigation**: `Tabs` — Switch between views of one object (Overview, Configuration, Snapshots, Console, Logs) · `Breadcrumb` — Path to the current page (project › section › object) in the header · `Pagination` — Page switcher with range text ("61–80 von 243"), prev/next and numbered pages with ellipses · `Steps` — Progress through a multi-step flow (create instance: Image → Resources → Network → Review) · `Nav` — Sidebar navigation: sections with optional titles, items with icon, label and a count badge; the active item on bg-emphasized
- **Overlays**: `Dialog` — Modal for decisions and short forms, on the native element: the browser handles focus trap, Esc and stacking · `Drawer` — Side panel on native for details and edit forms without leaving the list · `Menu` — Dropdown of actions for an object (row actions, user menu) · `Tooltip` — Short hint on hover (after 300 ms) and on keyboard focus, on bg-inverted · `Popover` — Small floating panel anchored to a button — filters, quick settings, info — in the top layer (never clipped) · `CommandPalette` — Ctrl/⌘+K search over pages and actions: grouped, fuzzy-ish filtering (accents ignored, prefix first), ↑↓ Enter, shortcut hints · `Confirm` — Promise-based confirmation: if (await KenosUI.confirm({ title, description, danger: true, confirmText: 'web01' })) …
- **Website**: `Navbar` — Website header: brand, links, actions (ThemeToggle, CTA) · `Hero` — Opening section of a landing page: optional eyebrow (accent red text or a Status), fluid title (36–72px, balanced lines), description, actions. align="center"… · `FeatureGrid` — Grid of features with icon tile, title and text; responsive via Grid (minChildWidth 15rem) · `Footer` — Website footer: brand, link columns (auto-fit), bottom line with copyright · `Banner` — Full-width announcement bar above the navigation: inverted (default), accent (one urgent message), subtle · `SkipLink` — “Skip to content” — hidden until focused with Tab, jumps to #main
- **Typography**: `Heading` — Section and page titles in Inter 600, sizes from the type scale · `Link` — Inline text link: fg text with a thin accent-border underline that turns accent-fg and thicker on hover — the red, on purpose · `Code` — Inline code in the mono stack on bg-muted with a border-muted hairline, radius-l2 · `Kbd` — Keyboard key: mono, bg-panel, border-emphasized with a 2px bottom edge · `Blockquote` — Quoted text with a 2px border-emphasized rule, text in fg-muted · `Separator` — 1px border hairline, horizontal (an ) or vertical (between inline items in a toolbar), optionally dashed · `List` — Bulleted or numbered list with fg-muted markers and 0.25em between items · `CodeBlock` — Multi-line code in a framed block: header with title and/or language, copy button, mono 13/20 text on bg-subtle · `Terminal` — Always-dark console frame with a header (title, status, actions) and a black mono body — the place to mount xterm.js for incus exec/console sessions
- **Content**: `Prose` — Layout wrapper for rendered Markdown
- **Examples**: `IncusExample` (showcase page) — IncusExample · `WebsiteExample` (showcase page) — WebsiteExample
