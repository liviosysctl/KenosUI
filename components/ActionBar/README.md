# ActionBar

Floating toolbar at the bottom centre for bulk actions on selected rows ("3 selected · Start · Stop · Delete").

On phones it spans the width above the home indicator (safe area) and scrolls sideways if the actions don't fit.

**Consumer provides** `open` (usually `selected.length > 0`), `count`, `onClear`, and Buttons (`size="sm"`, outline; the destructive one `palette="accent"`).
