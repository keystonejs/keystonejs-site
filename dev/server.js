/**
 * This script launches the KeystoneJS Docs website using express.
 */

var _ = require('lodash');
var errorHandler = require('errorhandler');
var express = require('express');
var favicon = require('serve-favicon');
var less = require('less-middleware');
var logger = require('morgan');
var fs = require('fs');
var jadeFn = require('./jadeFunctions.js');
	
var app = express();

app.set('port', process.env.PORT || 9999);
app.set('views', '../content');
app.set('view engine', 'jade');

//app.use(rack);
app.use(favicon('../public/favicon.ico'));
app.use(less('../public'));
app.use(logger('dev'));

// disable cache, safari workaround
// see http://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
app.use(function(req, res, next) {
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	next();
});

// Set up locals and routes
app.locals.version = require('../package.json').version;

app.use('/systemjs/app/templates.js', function(req, res, next) {
	console.log('get jade template file');
	jadeFn.create({
		dirname: '../content',
		output: '../public/systemjs/app/templates.js',
		compress: false,
	}, function(contents) {
		//res.set('Content-Type', 'text/javascript');
		res.status(200).sendFile('templates.js', {root: '../public/systemjs/app/'});
	});	
});
app.use(express.static('../public'));



app.get('/*', function(req, res, next) {
	//console.log('here')
	res.status(200).render('index');
});

app.use(function(req, res, next) {
	res.status(404).render('404');
});

app.use(errorHandler());

// Start server
app.listen(app.get('port'), function() {
	console.log('Keystone docs are available on port ' + app.get('port'));
}); 

