/**
 * Create an accurate interval that does not skew over time.
 * @param  {function}   func            Function to call ever interval ms
 * @param  {number}     interval        Interval (in ms) with which to call func
 * @param  {Object}     opts            Interval (in ms) with which to call func
 * @param  {boolean}    opts.aligned    Align timestamps
 * @param  {boolean}    opts.immediate  Call func immediately as well
 * @return {Object}                     Object with clear method
 */
module.exports = function accurateInterval(func, interval, opts) {

    if (!opts) opts = {};

    var clear, nextAt, timeout, wrapper, now;

    now = new Date().getTime();

    nextAt = now;

    if (opts.aligned) {
        nextAt += interval - (now % interval);
    }
    if (!opts.immediate) {
        nextAt += interval;
    }

    timeout = null;

    wrapper = function wrapper() {
        var scheduledTime = nextAt;
        nextAt += interval;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        func(scheduledTime);
    };

    clear = function clear() {
        return clearTimeout(timeout);
    };

    timeout = setTimeout(wrapper, nextAt - new Date().getTime());

    return {
        clear: clear
    };

  };
