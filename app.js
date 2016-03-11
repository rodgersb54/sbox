var co = require('../components/console_output');
var html = require('html');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var controllers = require('./controllers');
var port = process.env.PORT || 3000;

app.set( 'views', __dirname + '/views' );
// TODO: Make an engine like hbs work for some request, plain html for angular with other (dont break templates when parsing {{}})
app.engine( 'handlebars', expressHandlebars() );
app.set( 'view engine', 'handlebars' );

//app.set( 'view engine', html );

app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( '/', controllers );

app.listen( port, function() {
	co.s('Application is Accepting Requests');
});