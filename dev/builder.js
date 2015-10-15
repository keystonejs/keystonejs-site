'strict'
var path = require("path");
var Builder = require('systemjs-builder');
var jadeFn = require('./jadeFunctions.js');
var less = require('less');
var async = require('async');
var _ = require('lodash');
var fs = require('fs.extra');
var ghpages = require('gh-pages');

var moduleRoot = (function(_rootPath) {
	var parts = _rootPath.split(path.sep);
	parts.pop(); //get rid of /node_modules from the end of the path
	return parts.join(path.sep);
})(module.parent ? module.parent.paths[0] : module.paths[0])


/**
 * Build an entire gh-pages website
 * store configuration in package.json
 * 		"gh-pages-builder" : {
 * 
 * 		}
 * **/

class GHBuilder {
	constructor(opts) {
		
		this.buildDir = opts.buildDir || moduleRoot.'/build/'
		this.fromDir = opts.fromDir || moduleRoot.'/public/'
		this.commands = [
			'jadeFunctions',
			'less',
			'copyFile',
			'copyDir',
			'favicon',
			'systemjs-bundle',
			'index',
			'pages',
			'function'			
		]
		this.cfg = opts;
		this.queue = opts.prepare
		
	}
	
}
