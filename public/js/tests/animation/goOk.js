/**
 * goOk Module
 * Makes a gray box looking button into a green cirlce with checkmark
 */
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
			[goSmall, 0.3],
			[goCirle, 0.7]
		]
	});

	var $box = $('.box');
	var $text = $('.text');
	var $icon = $('.icon');


	var goSmall = {
		backgroundColor : '#00D700',
		width : '50px',
		height : '50px',
		padding: '0',
		borderRadius : '50px'
	};

	var goCirle = {

	};

	var goOk = [
		{ e : $box, p : goSmall, o : {duration : 250, easing : 'easeOutBounce'}},
		{ e : $text, p : {opacity: 0 }, o : {duration : 100, easing : 'easeOutBounce', sequenceQueue: false}},
		{ e : $icon, p : {opacity : 1, scale : 1 }, o : {delay: 250, duration : 230, easing : 'easeOutBounce',  sequenceQueue: true }}
	];

	//sequences seem to be good when animating multple different elements with different timings.
	var animate = function($box, $text, $icon){
		return [
			{ e : $box, p : goSmall, o : {duration : 250, easing : 'easeOutBounce'}},
			{ e : $text, p : {opacity: 0 }, o : {duration : 100, easing : 'easeOutBounce', sequenceQueue: false}},
			{ e : $icon, p : {opacity : 1, scale : 1 }, o : {delay: 250, duration : 200, easing : 'easeOutBounce',  sequenceQueue: true }}
		];
	}

	// $.Velocity.RunSequence(goOk);

	return {
		init : animate
	}
});