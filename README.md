# accurate-interval

Create an accurate interval that does not skew over time.

[![NPM](https://nodei.co/npm/accurate-interval.png)](https://nodei.co/npm/accurate-interval/)

[![Build Status](https://travis-ci.org/klyngbaek/accurate-interval.svg?branch=master)](https://travis-ci.org/klyngbaek/accurate-interval)
[![Coverage Status](https://coveralls.io/repos/github/klyngbaek/accurate-interval/badge.svg?branch=master)](https://coveralls.io/github/klyngbaek/accurate-interval?branch=master)
[![Dependency Status](https://david-dm.org/klyngbaek/accurate-interval.svg)](https://david-dm.org/klyngbaek/accurate-interval)
[![devDependency Status](https://david-dm.org/klyngbaek/accurate-interval/dev-status.svg)](https://david-dm.org/klyngbaek/accurate-interval#info=devDependencies)

## API

### `var interval = accurateInterval(func, interval, opts)`

- `func`: `function` - Function to call ever interval ms. func takes one argument, scheduledTime, which is the timestamp in milliseconds the callback was scheduled for.
- `interval`: `number` - Interval (in ms) with which to call func.
- `opts`
    - `aligned`: `boolean` - Optional. Align timestamps. Default is `false`.
    - `immediate`: `boolean` - Optional. Call func immediately as well.  Default is `false`.

### Example

```javascript
var accurateInterval = require('accurate-interval');
var foo = accurateInterval(function(scheduledTime) {
    console.log('Actual time: ' + Date.now() + ' -- Scheduled time: ' + scheduledTime);
}, 2000, {aligned: true, immediate: true});

setTimeout(function() {
    foo.clear();
}, 10000);
```

## License
MIT
