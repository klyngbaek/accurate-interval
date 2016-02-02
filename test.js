var test = require('tape');
var accurateInterval = require('./index.js');

test('Test basic timer', function (t) {
	var interval = 1000;
	var numSamples = 4;
	var delay = interval * numSamples;
	var now = Date.now();
	var start = now - (now % interval) + interval;

	var scheduledTimes = [start, start+interval, start+interval*2, start+interval*3];

	var index=0;
	var foo = accurateInterval(function(scheduledTime) {
	    t.equals(scheduledTime, scheduledTimes[index], 'Sample ' + index + ' matches');
	    index++;
	}, interval, {aligned: true, immediate: true});

	setTimeout(function() {
	    foo.clear();
	    t.equals(index, numSamples, 'Number of samples matches');
	    t.end();
	}, delay);
});
