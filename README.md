# Abortable Fetch

Make possible to abort a Fetch request

## Usage

```js
import fetch from 'abortable-fetch'

const req = fetch('https://ovh.com')
    .then(res => console.log(res))

req.abort()

```