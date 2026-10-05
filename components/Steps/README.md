# Steps

Progress through a multi-step flow (create instance: Image → Resources → Network → Review).

**Orientation:** horizontal, switching to vertical automatically when its container is narrower than 36rem (phones, drawers). Force it with `orientation="vertical"` or `"horizontal"`.

Complete steps fill with `primary-solid` and a check, the current one has a `primary-solid` ring. **Consumer provides** `items` (`title`, `description`) and the 0-based `current`.
