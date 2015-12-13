var accurateInterval = require('./index.js');
var foo = accurateInterval(function(expectedTime) {
	console.log(Date.now() + ' -- ' + expectedTime);
}, 2000, {aligned: true, immediate: true});


setTimeout(function() {
	foo.clear();
}, 10000);
