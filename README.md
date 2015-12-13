# accurate-interval

Create an accurate internval that does not skew over time.

[![build status](https://secure.travis-ci.org/klyngbaek/accurate-interval.png)](http://travis-ci.org/klyngbaek/accurate-interval)

[![NPM](https://nodei.co/npm/accurate-interval.png)](https://nodei.co/npm/accurate-interval/)

## API

#### `var accurateInterval = require('accurate-interval')`
Returns a function to start an accurate interval.

- `func`: `function` - Function to call ever interval ms.
- `interval`: `number` - Interval (in ms) with which to call func.
- opts
  - `aligned`: `boolean` - Optional. Align timestamps. Default is `false`.
  - `immediate`: `string` - Optional. Call func immediately as well.  Default is `false`.

## Simple Example
```
var accurateInterval = require('./index.js');
var foo = accurateInterval(function(expectedTime) {
    console.log(Date.now() + ' -- ' + expectedTime);
}, 2000, {aligned: true, immediate: true});
```

## License
MIT
