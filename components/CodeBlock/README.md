# CodeBlock

Multi-line code in a framed block: header with title and/or language, copy button, mono 13/20 text on `bg-subtle`.

**Variants** `default` · `terminal` (always black, for command output). `maxHeight` makes long files scroll. Markdown ``` fences render as this (language from the fence).

**Highlighting (built in, no library):** yaml, json, bash/sh (a `$ ` prompt marks commands; other lines are output), ini/toml/env, js/ts, python, dockerfile, nix, log (levels ERROR/WARN/INFO, timestamps, key=value), diff, sql. Colours are the `code-*` tokens — keywords in the brand red, strings green, numbers blue, keys purple, variables orange, flags teal, comments muted italic — all ≥ 4.5:1 in both themes; the terminal variant uses the dark set. `lineNumbers`, `highlightLines={[3]}`, `wrap`. Unknown languages render plain. Over 200 KB it skips highlighting to stay fast.

**Consumer provides** `code` as a string (what the copy button copies), `language`, optional `title` and header `actions`. 
