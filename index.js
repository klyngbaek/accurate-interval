/**
 * Call func continously with an interval of interval ms.
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

    timeout = null;

    wrapper = function wrapper() {
        var expectedTime = nextAt;
        nextAt += interval;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        func(expectedTime);
    };

    clear = function clear() {
        return clearTimeout(timeout);
    };

    if (opts.immediate) {
        wrapper();
    } else {
        nextAt += interval;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    }

    return {
        clear: clear
    };

  };
