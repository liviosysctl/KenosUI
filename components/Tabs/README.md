# Tabs

Switch between views of one object (Overview, Configuration, Snapshots, Console, Logs).

**Variants** `line` (default: `primary-solid` underline on `border`) · `subtle` · `enclosed` (segmented look). Arrow keys, Home and End move between tabs. Items may have an icon and a count.

**On phones** the tab list scrolls sideways instead of squeezing the labels.

**Consumer provides** `items` (`value`, `label`, `icon`, `count`, `disabled`, `content`) and `value`/`onChange` or `defaultValue`.
