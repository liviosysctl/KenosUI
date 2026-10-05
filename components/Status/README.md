# Status

Coloured dot plus label for the state of a service, host, container or job.

**States** `online` (green, `fg-success`), `offline` (red, `fg-error`), `degraded` (orange), `maintenance` (blue), `unknown` / `stopped` (grey `gray-500`). The label defaults to the state name in the current locale (English unless `setLocale`). Dots meet 3:1 on `bg` in both themes.

**Consumer provides** `status` and optionally a label. `pulse` for things that are live right now (use sparingly: one pulsing dot per view).

- Do: always keep the word — colour alone isn't enough (colour-blind users, greyscale screenshots).
- In Markdown: `:status[Nextcloud]{status=online}`.
