
var velocity = require('velocity');
define(function (require, exports, module){

	//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();

	var	Stopwatch = function($el, opts) {
		// Private vars
		opts = opts ? opts : {};
		opts.endAt = opts.endAt ? opts.endAt * 1000 : false;


		console.log('bg', $el.css('background-color') );
		this.$root = $('body');
		this.defaults = {
			endAt : '',
			red : '#ff0000',
			black : '#000000',
			white : '#FFFFFF',
			initial : '#FFFFFF',
			startHTML : '<span class="glyphicon glyphicon-play"></span> Start'
		};
		
		this.startAt = 0;	// Time of last start / resume. (0 if not running)
		this.lapTime = 0;	// Time on the clock when last stopped in milliseconds
		this.$time =  $el;

		this.$start = $('.stopwatch--start', this.$el);
		this.$stop = $('.stopwatch--stop', this.$el);
		this.defaults.stopHTML = this.$stop.html();
		this.isRunning = false;
		this.$reset = $('.stopwatch--reset', this.$el);
		this.$timeOuts = $('.stopwatch--time-limit', this.$el);

		this.opts = $.extend({}, this.defaults, opts);
		console.log(this.opts);
		this.events();
		this.update();
		console.log(this.opts);
	};

	Stopwatch.prototype.events = function(){
		var _this = this;

		this.$stop.on('click', function(e){
			_this.toggleBtn();
		});

		this.$reset.on('click', function(){
			_this.reset();
		});
		this.$timeOuts.on('click', function(e){
			_this.toggleBtn(e);
			//_this.start( $(e.currentTarget).data('limit') * 60000 );
		});
	};

	Stopwatch.prototype.toggleBtn = function(e){
		console.log(this.isRunning);
		//start
		this.isRunning ? this.$stop.html(this.opts.stopHTML) : this.$stop.html(this.opts.startHTML);
		console.log( e ? 'yes' : 'no'  );
		if (this.isRunning){
			this.stopClock();
		} else {
			( e ) ? this.start( $(e.currentTarget).data('limit') * 60000 ): this.start(this.startAt);
		}

	}

	Stopwatch.prototype.now = function(){
		return (new Date()).getTime();
	}

	// Start or resume
	Stopwatch.prototype.startClock = function() {
		this.isRunning = true;
		this.startAt = this.startAt ? this.startAt : this.now();
	};

	// Stop or pause
	Stopwatch.prototype.stopClock = function() {
		// If running, update elapsed time otherwise keep it
		clearInterval(this.clocktimer);
		this.isRunning = false;
		this.lapTime = this.startAt ? this.lapTime + this.now() - this.startAt : this.lapTime;
		this.startAt = 0; // Paused
	};

	// Reset
	Stopwatch.prototype.reset = function() {
		this.stopClock();
		this.lapTime = this.startAt = 0;
		this.update();
	};

	// Duration
	Stopwatch.prototype.time = function() {
		return this.lapTime + (this.startAt ? this.now() - this.startAt : 0); 
	};

	Stopwatch.prototype.show = function(){
		this.update();
	}

	Stopwatch.prototype.update = function(){
		var _this = this;
		this.$time.html( formatTime( _this.time() ) );
	}

	Stopwatch.prototype.start = function(number){
		var _this = this;
		this.reset();
		this.opts.endAt = number;
		this.clocktimer = setInterval(function(){
			_this.$time.html( formatTime( _this.time()) );
			_this.checkTime( _this.time() );
		}, 0);
		this.startClock();
	}

	// Stopwatch.prototype.stop = function() {
	// 	this.stopClock();
	// }

	Stopwatch.prototype.checkTime = function(time){
		if ( time >= this.opts.endAt ){
			this.stopClock();
			this.update();
			this.flashBG(this.opts.red);
		}
	}
	Stopwatch.prototype.flashBG = function(newColor){
		var _this = this;
		//TODO: Probably a better way to do the following
		this.$root.velocity({
			backgroundColor : newColor
		}, 250)
		.velocity({
			backgroundColor : _this.opts.initial
		}, 250)
		.velocity({
			backgroundColor : newColor
		}, 250)
		.velocity({
			backgroundColor : _this.opts.initial
		}, 250)
		.velocity({
			backgroundColor : newColor
		}, 250)
		.velocity({
			backgroundColor : _this.opts.initial
		}, 500);
	};

	function pad(num, size) {
		var s = "0000" + num;
		return s.substr(s.length - size);
	}

	function formatTime(time) {
		var h = m = s = ms = 0;
		var newTime = '';

		h = Math.floor( time / (60 * 60 * 1000) );
		time = time % (60 * 60 * 1000);
		m = Math.floor( time / (60 * 1000) );
		time = time % (60 * 1000);
		s = Math.floor( time / 1000 );
		ms = time % 1000;

		newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
		newTime = newTime.substr(4);//hotwire to only return minutes
		return newTime;
	}

	module.exports = Stopwatch;
});
