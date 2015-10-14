var fs = require('fs');
var path = require('path');
var http2 = require('http2');
var jade = require('jade');

var config = require('./config.js');
var lang = config.languages;
var routes = config.routes;
var public = '../public';

// We cache one file to be able to do simple performance tests without waiting for the disk
var cachedFile = jade.renderFile('../public/content/common/templates/layout/spa_base.jade', lang["en"]);
var cachedUrl = '/';

// The callback to handle requests
function onRequest(request, response) {
	var filename = path.join(public, request.url);
	console.log('get ', filename)
	
	// Serving server.js from cache. Useful for microbenchmarks.
	if (request.url === cachedUrl) {
		if (response.push) {
			// Also push down the client js, since it's possible if the requester wants
			var push = response.push(public + '/systemjs/jspm_packages/system.js');
			push.writeHead(200);
			fs.createReadStream(path.join(public, 'systemjs', 'jspm_packages', '/system.js')).pipe(push);
			var push2 = response.push(public + '/systemjs/config.js');
			push2.writeHead(200);
			fs.createReadStream(path.join(public, 'systemjs', '/config.js')).pipe(push2);
			var push3 = response.push(public + '/systemjs/client.js');
			push3.writeHead(200);
			fs.createReadStream(path.join(public, 'systemjs', '/client.js')).pipe(push3);
		}
			response.end(cachedFile);
	}
	// Reading file from disk if it exists and is safe.
	else if ((filename.indexOf(public) === 0) && fs.existsSync(filename) && fs.statSync(filename).isFile()) {
		response.writeHead(200);
		var fileStream = fs.createReadStream(filename);
		fileStream.pipe(response);
		fileStream.on('finish',response.end);
	}
	// Otherwise responding with 404.
	else {
		response.writeHead(404);
		response.end(cachedFile);
	}
}

// Creating a bunyan logger (optional)
//var log = require('../test/util').createLogger('server');

// Creating the server in plain or TLS mode (TLS mode is the default)
var server;
if (!process.env.HTTP2_PLAIN) {
	server = http2.createServer({
		//log: log,
		key: fs.readFileSync(path.join(__dirname, '/localhost.key')),
		cert: fs.readFileSync(path.join(__dirname, '/localhost.crt'))
	}, onRequest);
	
} else {
	server = http2.raw.createServer({
		//log: log
	}, onRequest);
}
console.log('start server');
server.listen(process.env.HTTP2_PORT || 9999);

