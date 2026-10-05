# KeyValueEditor

Edit key–value lists: env variables, config keys, labels. Duplicate keys are flagged; pasting multiple `KEY=value` lines (a .env file) into a key field splits them into rows. **Consumer provides** `value`/`onChange` (array of `{key, value}`), labels, `secret` to mask values.
