require.config({
	paths: {
		jquery: '/js/vendor/jquery',
		moment: '/js/vendor/moment',
		velocity: '/js/vendor/velocity',
		utils : '/js/utils/',
		mocha : '/node_modules/mocha/mocha',
		chai : '/node_modules/chai/chai'
	},
	shim : {
		"velocity" : {
			deps : ["jquery"]
		}
	}

});

require([ 'jquery', 'moment', 'velocity', 'mocha', 'chai' ], function($, moment, velocity, mocha, chai ){
	//var expect = chai.expect;
});