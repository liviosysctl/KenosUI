# Dialog

Modal for decisions and short forms, on the native `<dialog>` element: the browser handles focus trap, Esc and stacking.

**Sizes** 24 / 28 / 32 (default) / 42 / 56rem; placement top (default, 4rem margin) or center. Destructive confirms: say what is lost, make the user type the name, primary button `palette="accent"` on the right.

**On phones** (≤ 30rem) it becomes a bottom sheet: full width, docked to the bottom, footer buttons share the row.

**Consumer provides** `open`, `onOpenChange`, `title`, `description`, body children, `footer` (Buttons).
