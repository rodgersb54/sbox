require.config({
	paths: {
		utils : '/js/utils/',
		jquery: '/js/vendor/jquery',
		moment: '/js/vendor/moment',
		velocity: '/js/vendor/velocity',
		velocityUI : '/js/vendor/velocity.ui',
		velocityTest : '/js/tests/animation/goOk'
	},
	shim : {
		"velocity" : {
			deps : ["jquery"]
		},
		"velocityUI" : {
			deps : ["velocity"]
		}
	}

});

require([ 'jquery', 'moment', 'velocity', 'velocityUI', 'velocityTest'], function($, moment,  Velocity, velocityUI, velocityTest ){


});