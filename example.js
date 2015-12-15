var accurateInterval = require('./index.js');
console.log('Start time:  '  +Date.now());
var foo = accurateInterval(function(scheduledTime) {
    console.log('Actual time: ' + Date.now() + ' -- Scheduled time: ' + scheduledTime);
}, 2000, {aligned: true, immediate: true});


setTimeout(function() {
    foo.clear();
}, 10000);
