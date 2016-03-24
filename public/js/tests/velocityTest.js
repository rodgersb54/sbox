define(function(require, module, exports){
	require('velocityUI');

	var $el_1 = $('.one'),
		$el_2 = $('.two'),
		$el_3= $('.three'),
		sequence = [];

	var fadeIn = {
			opacity : 1,
			scale : 1,
			borderWidth : '1px'
		};

	var fadeOut = {
			opacity : 0,
			scale : 1.5,
			borderWidth : '50px'
		};

		sequence = [
			{e : $el_1, p : fadeOut, o : { duration : 100, easing : 'linear'}},
			{e : $el_1, p : fadeIn, o : { duration : 100, easing : 'linear'}},
			{e : $el_2, p : fadeOut, o : { duration : 100, easing : 'linear', sequenceQueue: false }},
			{e : $el_2, p : fadeIn, o : { duration : 100, easing : 'linear'}},
			{e : $el_3, p : fadeOut, o : { duration : 100, easing : 'linear', sequenceQueue: false }},
			{e : $el_3, p : fadeIn, o : { duration : 100, easing : 'linear'}},
		];




		$.Velocity.RegisterEffect('intro', {
			defaultDuration : 1000,
			calls : [
				[fadeOut, 0.3],
				[fadeIn, 0.7]
			]
		});

		$('.box').velocity('intro');


	return {
		init : function(){
			console.log('---*---');
		}
	}
});