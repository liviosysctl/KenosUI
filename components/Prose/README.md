# Prose

Layout wrapper for rendered Markdown. Every Markdown element looks exactly like the matching component — `##` = Heading 3xl, links = Link, `` ` `` = Code, fences = CodeBlock (with copy button), tables = Table sm/line, `>` = Blockquote, `---` = Separator, `- [ ]` = Checkbox — so notes and app UI are one system. GitHub alerts (`> [!WARNING]`) become the **outline** Alert — status-coloured border, no fill.

**Use** around the output of any Markdown renderer. With react-markdown pass the result as children; with a string renderer (marked, markdown-it) pass the **sanitized** HTML as `html`.

**How it stays 1:1:** with react-markdown, `markdownComponents` renders each element *as* the component. With any other renderer (marked, markdown-it, Pandoc, a static site generator), plain HTML inside `.kui-prose` gets the very same CSS rules as the component classes. Prose itself only adds the spacing between blocks (and max 68ch line length); it never restyles components placed inside it.

**Consumer provides** the rendered content, and for the component syntax the plugin chain:

```jsx
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
const { Prose, remarkKenosUI, markdownComponents } = KenosUI;

<Prose as="article">
  <Markdown remarkPlugins={[remarkGfm, remarkDirective, remarkKenosUI]}
            components={markdownComponents}>{note}</Markdown>
</Prose>
```

- Do: sanitize any `html` you pass in (DOMPurify) — notes can contain raw HTML.
- Don't: put Prose around app UI (forms, toolbars); it is for document content only.
