# Alert

Inline message that tells the user about a state: info, success, warning, error or neutral.

**Status** picks the colour and icon: `error` uses the red accent, `neutral` the black primary. **Variants** `subtle` (default), `surface`, `outline`, `solid`. Body text stays `fg`; only the icon takes the status colour, so every status reads at 4.5:1+. Radius `radius-l3`.

**Consumer provides** `title`, the description as children, and optionally a custom `icon` (or `icon={false}`).

- Do: say what happened and what to do next.
- Colour is never the only signal: the icon and the title carry the meaning too.
