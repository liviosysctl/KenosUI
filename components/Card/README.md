# Card

Container that groups one subject: header (title, description), body and an actions footer.

**Variants** `outline` (default: `bg-panel` + `border`), `elevated` (`bg-panel` + `shadow-md`), `subtle` (`bg-muted`, no border). **Sizes** set the padding: `sm` `space-4`, `md` `space-6`, `lg` `space-7`. Radius `radius-l3`.

**Consumer provides** `title`, optional `description`, body as children, and `footer` (usually Buttons, primary action last).

- Do: one primary action per card.
- Don't: nest cards; don't add coloured side borders.
