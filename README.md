# get-object-property
Safely get javascript object property with fallback value and error reporting

## API
`get-object-property` exposes only one function:
```
  getObjectProperty(executor, fallbackValue, logFunction);
```

## Examples

```javascript
  import getObjectProperty from 'get-object-property';

  const foo = {};

  const result = getObjectProperty(() => foo.bar.foo, 'default');

  // expect 'default'
  console.log(result);
```

In order to log failures in executor pass log function as a third argument:

```javascript
  import getObjectProperty from 'get-object-property';

  logFn = (err) => { console.log(err); };

  const foo = {};

  const result = getObjectProperty(() => foo.bar.foo, 'default', logFn);
  // expect to see error in console
```
