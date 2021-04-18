# Request boilerplate

### Get an entry sample

```javascript
import { Get } from './lib'

export default async function(id) {
  try {
    return await Get(`/entry/${id}`)
  } catch (e) {
    throw e
  }
}
```

### Post an entry sample

```javascript
import { Post } from './lib'

export default async function(data) {
  try {
    return await Post('/entry', data)
  } catch (e) {
    throw e
  }
}
```