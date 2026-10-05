# Skeleton

Placeholder block while data loads, pulsing on `bg-emphasized`.

**Use** `Skeleton` for boxes (`width`, `height`, `circle`), `SkeletonText` for lines. Wrap real content and pass `loading={false}` to swap it in without layout shift. Tables have `loading`.

- Show skeletons only for loads over ~300 ms; below that they just flash.
