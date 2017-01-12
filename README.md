# get-object-property
Safely get javascript object property with fallback value and error reporting

## Usage
```javascript
  import getObjectProperty from 'get-object-property';

  const foo = {};

  const result = getObjectProperty(() => foo.bar.foo, 'default');

  // expect 'default'
  console.log(result);
```

In order to enable logging, use `setLogFunction(logFn)`:

```javascript
  import getObjectProperty from 'get-object-property';
  import { setLogFunction } from 'get-object-property;

  setLogFunction((err) => { console.log(err); });

  const foo = {};

  const result = getObjectProperty(() => foo.bar.foo, 'default');
  // expect to see error in console
```
