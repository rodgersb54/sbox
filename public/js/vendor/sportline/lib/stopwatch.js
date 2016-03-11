var Stopwatch = function() {
	var me = this;
	var formatTime = function(timeMs) {
		var ms = timeMs%1000;
		ms = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;  //trust me...
		var sec = Math.floor(timeMs/1000);
		sec = sec < 10 ? '0' + sec : sec;
		var min = Math.floor(timeMs/60000);
		min = min < 10 ? '0' + min : min;
		var hr = Math.floor(timeMs/3600000);
		var str = [];
		if (hr > 0) {
			str.push(hr + ':');
		}
		str.push(min + ':' + sec + ' ' + ms);
		return str.join('');
	};
	(function() {
		var startTimeMs;
		var running = false;
		var elapsedTimeMs = 0;
		var lapsMs = [];
		var lastLapElapsedTimeMs = 0;
		var cannotAddLap = true;
		me.start = function() {
			if (!running) {
				startTimeMs = +new Date();
				running = true;
				cannotAddLap = false;
			}
		};
		me.stop = function() {
			if (running) {
				elapsedTimeMs += +new Date() - startTimeMs;
				running = false;
			}
		};
		me.lap = function() {
      var now = me.readMs();
      if (!cannotAddLap) {
				lapsMs.push(now - lastLapElapsedTimeMs);
        if (!running) {
          // can only add a lap once while stopped (otherwise the second lap added would be 0)
          cannotAddLap = true;
        }
			}
      lastLapElapsedTimeMs = now;
		};
		me.reset = function() {
			running = false;
			elapsedTimeMs = 0;
      lastLapElapsedTimeMs = 0;
			lapsMs = [];
			cannotAddLap = true;
		};
		me.readMs = function() {
			if (running) {
				return +new Date() - startTimeMs + elapsedTimeMs;
			} else {
				return elapsedTimeMs;
			}
		};
		me.read = function() {
			return formatTime(me.readMs());
		};
		me.getLapsMs = function() {
			return lapsMs;
		};
		me.getLaps = function() {
			var laps = [];
			for(var i = 0, length = lapsMs.length; i < length; i++) {
				laps[i] = formatTime(lapsMs[i]);
			}
			return laps;
		};
	})();
	return me;
};

module.exports = exports = { Stopwatch: Stopwatch };
