# accurate-interval

Create an accurate interval that does not skew over time.

[![NPM](https://nodei.co/npm/accurate-interval.png)](https://nodei.co/npm/accurate-interval/)

## Usage
Call accurateInterval to set the interval.

#### `var accurateInterval = require('accurate-interval')`

accurateInterval(func, internval, opts)

#### Args
- `func`: `function` - Function to call ever interval ms.
- `interval`: `number` - Interval (in ms) with which to call func.
- opts
  - `aligned`: `boolean` - Optional. Align timestamps. Default is `false`.
  - `immediate`: `string` - Optional. Call func immediately as well.  Default is `false`.

### Example
```
var accurateInterval = require('accurate-interval');
var foo = accurateInterval(function(expectedTime) {
    console.log(Date.now() + ' -- ' + expectedTime);
}, 2000, {aligned: true, immediate: true});
```

## License
MIT
