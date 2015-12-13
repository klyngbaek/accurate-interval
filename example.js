var accurateInterval = require('./index.js');
var foo = accurateInterval(function(scheduledTime) {
    console.log('Actual time: ' + Date.now() + ' -- Scheduled time: ' + scheduledTime);
}, 2000, {aligned: true, immediate: true});


setTimeout(function() {
    foo.clear();
}, 10000);
