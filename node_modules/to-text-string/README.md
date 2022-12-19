# to-text-string
Convert Various Data Formats, including ArrayBuffer and Buffer, to a Text String.  Works on NodeJS  and very old browsers where FileReader doesn't exist.

# install
```bash
npm install to-text-string
```

# limitations
- only works on ASCII text

# usage
```js
const toTextString = require("to-text-string");

// data can be an array buffer, buffer, Uint8Array or string
const result = toTextString(data);
// result is "Hello, World."
```
