# Markdown

KenosUI is Markdown-compatible, **1:1**: every Markdown element renders as — or looks exactly like — the matching component, and a small, portable extension syntax adds the rest. Files stay readable in any other editor (Obsidian, GitHub, VS Code); the extras just show as text there.

## Standard Markdown (CommonMark + GFM) → components

| Markdown | Component |
|---|---|
| `#` … `######` | `Heading` 4xl · 3xl · 2xl · xl · lg · md |
| `[text](url)` | `Link` (external icon for http/https) |
| `` `code` `` | `Code` |
| code fences | `CodeBlock` with language label, copy button and syntax highlighting (` ```yaml `, ` ```bash `, ` ```log ` …) |
| pipe tables | `Table size="sm" variant="line"` |
| `> quote` | `Blockquote` |
| `---` | `Separator` |
| `- item`, `1. item` | `List` |
| `- [ ]` / `- [x]` | `Checkbox` (sm) |

**bold**, *italic*, ~~strike~~, images and footnotes are styled by `Prose`. Checked by computed style: every pair above is identical in light and dark.

## Components in Markdown

| Write | Renders | Options |
|---|---|---|
| `> [!NOTE]` / `[!TIP]` / `[!IMPORTANT]` / `[!WARNING]` / `[!CAUTION]` then `> text` | `Alert` info / success / neutral / warning / error, titled Note / Tip / Important / Warning / Caution (current locale) | GitHub's own syntax: renders natively on GitHub too. Drawn as the **outline** Alert (border in the status colour, no fill) |
| `:::alert{status=warning variant=outline title="Heads up"}` … `:::` | `Alert` | `status`, `variant` (default `outline`), `size`, `title` (or `:::alert[Title]`) |
| `:::card{title="Node pve-01" description="N100 · 32 GB"}` … `:::` | `Card` with the block as body | `title` (or `:::card[Title]`), `description`, `variant`, `size` |
| `:badge[Online]{palette=success variant=surface}` | inline `Badge` | `palette`, `variant`, `size` |
| `:status[Nextcloud]{status=online}` | inline `Status` dot + label | `status` (online, offline, degraded, maintenance, unknown, stopped), `size`, `pulse`; empty label → the state word in the current locale |
| `:tag[debian/12]{icon=layers}` | inline `Tag` | `palette`, `variant`, `size`, `icon` |
| `:kbd[Ctrl]` | `Kbd` | — |
| `::button[Open runbook]{href="/runbook" palette=accent}` | `Button` rendered as a link | `href`, `palette`, `variant`, `size`, `icon` |

Rules:

- Red stays rare in notes too: `palette=accent` only for the one thing to act on (a single `::button`, a "New" badge).
- Prefer GitHub alerts over `:::alert` — they are the most portable.
- One idea per card; don't nest `:::card` blocks.

## Wiring

`remarkKenosUI` is a dependency-free remark plugin shipped in the bundle; `markdownComponents` is the matching react-markdown map — it maps the directives *and* every standard element to its component. Chain: `remark-gfm` → `remark-directive` → `remarkKenosUI`, rendered inside `<Prose>`. Without React (marked, markdown-it, Pandoc, a static site generator), output plain HTML inside `<div class="kui-prose">` and load `tokens.css` + `bundle.css` — standard Markdown gets the very same CSS rules as the components (only the CodeBlock header and copy button need React; pass `KenosUI.highlightHtml` as the renderer's `highlight` function to get the identical colours); the component syntax then needs the renderer's own directive/alert plugin emitting the same `kui-alert` / `kui-card` / `kui-badge` / `kui-btn` class markup.
