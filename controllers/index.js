var co = require('../../components/console_output');
var express = require('express');
var router = express.Router();
var mocha = require('mocha');
var chai = require('chai');

// router.use('/comments', require('./comments'));
// router.use('/users', require('./users'));
router.use('/test', require('./test'));

router.use( '/', function( req, res, next ) {
	co.p( req._parsedOriginalUrl.path );
	next();
});

router.get( '/test', function( req, res ) {
	co.p( ' Test Runner ' );
		res.render( process.cwd() + '/views/test.handlebars',
	{
		page : {
			title : 'Test Runner'
		},
		scripts : [
			{
				source  : '/scripts/ui/person.js',
				test : '/tests/ui/person.js'
			 }
		]
	});

});

router.use('/node_modules', function( req, res ) {
	//TODO: research more on why .get doesn't work here
	//Send any request for node modules files to the right folder
	res.sendFile( process.cwd() + req._parsedOriginalUrl.path );
});

router.use('/tests', function( req, res ) {
	//TODO: research more on why .get doesn't work here
	//Send any request for node modules files to the right folder
	co.s(req._parsedOriginalUrl.path);
	res.sendFile( process.cwd() + req._parsedOriginalUrl.path );
});

router.use('/scripts', function( req, res ) {
	//TODO: research more on why .get doesn't work here
	//Send any request for node modules files to the right folder
	co.s(req._parsedOriginalUrl.path);
	res.sendFile( process.cwd() + '/resources/' + req._parsedOriginalUrl.path );
});

router.get('/', function( req, res ) {
	// res.sendFile( process.cwd() + '/views/index.html' );
	res.render( process.cwd() + '/views/index.handlebars',
	{
		usrName : 'testing',
		title : 'Road Less Traveled'
	});
});



// router.get( '/public/fonts/', function( req, res ) {
// 	co.p( ' MiddleWare  FONTS' );
// });


// router.get('/movies/:path/:name', function( req, res ) {
// 	res.sendFile( process.cwd() + '/public/data/' + req.params.path + '/' + req.params.name);
// });


co.s('Routes: Complete');
module.exports = router;