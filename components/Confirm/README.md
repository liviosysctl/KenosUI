# Confirm

Promise-based confirmation: `if (await KenosUI.confirm({ title, description, danger: true, confirmText: 'web01' })) …`. Render `<ConfirmHost />` once at the app root. `confirmText` makes the user type a name before the red button enables; `danger` makes the confirm button accent-red; labels via `confirmLabel` / `cancelLabel`.
