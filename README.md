### Solucion codigo clase Custom Hooks

Archivo useCount.js

```js
import React, { useState } from 'react';

const useCount = (number) => {
  const [count, setCount] = useState(number)
  return [
    count, 
    e => e.target.id === "suma" ? setCount(count+1) : setCount(count-1)
  ]

}

export default useCount;
```
