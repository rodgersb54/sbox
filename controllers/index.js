var co = require('../../components/console_output');
var express = require('express');
var router = express.Router();

// router.use('/comments', require('./comments'));
// router.use('/users', require('./users'));
router.use('/test', require('./test'));


router.use( '/', function( req, res, next ) {
	co.p( req._parsedOriginalUrl.path );
	next();
});

router.get( '/test', function( req, res ) {
	co.p( ' MiddleWare ' );
		res.render( process.cwd() + '/views/index.handlebars',
	{
		usrName : 'testing',
		title : 'A different book'
	});

});

router.get('/', function( req, res ) {
	// res.sendFile( process.cwd() + '/views/index.html' );
	res.render( process.cwd() + '/views/index.handlebars',
	{
		usrName : 'testing',
		title : 'Road Less Traveled'
	});
});

router.get( '/public/fonts/', function( req, res ) {
	co.p( ' MiddleWare  FONTS' );

});


router.get('/movies/:path/:name', function( req, res ) {
	res.sendFile( process.cwd() + '/public/data/' + req.params.path + '/' + req.params.name);
});


co.s('Routes: Complete');
module.exports = router;