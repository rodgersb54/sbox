require.config({
	paths: {
		jquery: '/js/vendor/jquery',
		moment: '/js/vendor/moment',
		velocity: '/js/vendor/velocity',
		Stopwatch: '/js/vendor/stopwatch',
		utils : '/js/utils/'
	},
	shim : {
		"velocity" : {
			deps : ["jquery"]
		},
		"Stopwatch" : {
			deps : ["velocity"]
		}
	}

});

require([ 'jquery', 'moment', 'velocity', 'Stopwatch' ], function($, moment,  velocity, Stopwatch){

	$('.showtime').on('click', function(){
		$('.notifications--main').velocity({
			'right' : '-30'
 		}, 625, [500, 30]);
	});

	$('.nav--icon-close').on('click', function(){

		$('.notifications--main').velocity({
			'right' : '-438'
 		}, 300, [500, 30]);

	});



	var $timeDisplay = $('.stopwatch--time-display');
	//var timer = new Stopwatch( $timeDisplay, { endAt : '2' } );
	var timer = new Stopwatch( $timeDisplay );
	//get #'s to work for minutes'


});