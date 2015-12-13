# accurate-interval

Create an accurate interval that does not skew over time.

[![NPM](https://nodei.co/npm/accurate-interval.png)](https://nodei.co/npm/accurate-interval/)

## Usage

### accurateInterval(func, interval, opts)

- `func`: `function` - Function to call ever interval ms. func takes one argument, scheduledTime, which is the timestamp in milliseconds the callback was scheduled for.
- `interval`: `number` - Interval (in ms) with which to call func.
- opts
    - `aligned`: `boolean` - Optional. Align timestamps. Default is `false`.
    - `immediate`: `boolean` - Optional. Call func immediately as well.  Default is `false`.

### Example
```
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
