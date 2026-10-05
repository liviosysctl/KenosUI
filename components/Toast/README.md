# Toast

Short-lived notification, bottom right. Neutral on `bg-panel`, or solid green / red / orange for results; `loading` shows a spinner and stays.

**Use** `toast()` from anywhere and render `<Toaster />` once. For Incus operations: `const id = toast.loading('web01 wird gestartet')` then `toast.update(id, { status: 'success', title: '…' })` when the operation finishes — or `toast.promise(p, {loading, success, error})`.

**Consumer provides** `title`, optional `description`, `status`, `duration`, `action`.
