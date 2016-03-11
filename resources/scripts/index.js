require.config({
	paths: {
		jquery: '/js/vendor/jquery',
		moment: '/js/vendor/moment',
		velocity: '/js/vendor/velocity',
		utils : '/js/utils/'
	},
	shim : {
		"velocity" : {
			deps : ["jquery"]
		}
	}

});

require([ 'jquery', 'moment', 'velocity' ], function($, moment,  velocity ){


});