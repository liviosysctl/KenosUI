# FileUpload

Drop zone with click-to-pick; lists chosen files with their size.

**Use** for image imports (unified tarball, qcow2), ISOs, backups. The border turns `primary-solid` while dragging.

**Consumer provides** `accept`, `multiple`, `label`, `description`, `onFiles(files)` — the upload itself (and its Progress) is yours.
