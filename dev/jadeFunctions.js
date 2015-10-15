var fs = require('fs.extra');
var pathutil = require('path');
var uglify = require('uglify-js');
var jade = require('jade');
var events = require('events');
var util = require('util');
var content = require('../public/systemjs/app/config.js');

function JadeAsset() {
	events.EventEmitter.call(this);
}

util.inherits(JadeAsset, events.EventEmitter);

// expose jade
JadeAsset.prototype.jade = jade;

// save index.html
JadeAsset.prototype.saveIndex = function(options, callback) {
	var file = options.file
	var dest = options.dest
	var path = pathutil.dirname(options.dest);
	var html = jade.renderFile(file, { language: "en"});
	if (html) {
		fs.writeFile(dest, html, function (err) {
			if (err) return console.log(err);
			// add a page for each route
			content.routes.forEach(function(route) {
				var filename = route.path.substr(1).replace(/\//g, '_') || 'index';
				var filepath = path + '/' + filename + '.html';
				console.log('Writing ' + filename + '.html');
				fs.outputFileSync(filepath, html);
			});
			if('function' === typeof callback) {
				callback(dest);
			}
		});
		return dest;
	}
}

JadeAsset.prototype.mimetype = 'text/javascript';

JadeAsset.prototype.create = function(options, callback) {
	var asset, assets, i, len, ref;
	this.dirname = pathutil.resolve(options.dirname);
	this.output = pathutil.resolve(options.output);
	this.separator = options.separator || '/';
	this.compress = options.compress || false;
	this.toWatch = this.dirname;
	this.clientVariable = options.clientVariable || 'Templates';
	this.beforeCompile = options.beforeCompile || null;
	this.fileObjects = this.getFileobjects(this.dirname);

	return this.createContents(callback);
};

JadeAsset.prototype.createContents = function(callback) {
	var fileObject, i, len, ref;
	var _this = this;
	//this.contents = fs.readFileSync(require.resolve('jade').replace('index.js', 'runtime.js'));
	this.contents = "import jade from '@lukekarrys/jade-runtime'; \n";
	if (this.assetsMap != null) {
	  this.contents += '(function(){ \n';
	}
	if (this.assetsMap != null) {
	  this.contents += this.assetsMap;
	}
	this.contents += "const " + this.clientVariable + " = {\n";
	this.fileContents = "";
	ref = this.fileObjects;
	for (i = 0, len = ref.length; i < len; i++) {
	  fileObject = ref[i];
	  if (this.fileContents.length > 0) {
		this.fileContents += ",";
	  }
	  if (this.assetsMap != null) {
		this.fileContents += "'" + fileObject.funcName + "': function(locals) {\n    locals = locals || {};\n    locals['assets'] = assets;\n    return (" + fileObject.compiled + ")(locals)\n}";
	  } else {
		this.fileContents += "'" + fileObject.funcName + "': " + fileObject.compiled;
	  }
	}
	this.contents += this.fileContents;
	this.contents += '};';
	this.contents += "\n export default " + this.clientVariable
	if (this.assetsMap != null) {
	  this.contents += '})();';
	}
	if (this.compress) {
	  this.contents = uglify.minify(this.contents, {
		fromString: true
	  }).code;
	}
	if (!this.hasError) {
		fs.writeFile(this.output, this.contents, function (err) {
			if (err) return console.log(err);
			if('function' === typeof callback) {
				callback(this.contents);
			}
		}.bind(this));
		
		return this.contents;
	}
}

JadeAsset.prototype.getFileobjects = function(dirname, prefix) {
	var compiled, error, fileContents, filename, filenames, funcName, i, len, newPrefix, path, paths, stats;
	if (prefix == null) {
	  prefix = '';
	}
	filenames = fs.readdirSync(dirname);
	paths = [];
	for (i = 0, len = filenames.length; i < len; i++) {
	  filename = filenames[i];
	  if (filename.slice(0, 1) === '.') {
		continue;
	  }
	  path = pathutil.join(dirname, filename);
	  stats = fs.statSync(path);
	  if (stats.isDirectory()) {
		newPrefix = "" + prefix + (pathutil.basename(path)) + this.separator;
		paths = paths.concat(this.getFileobjects(path, newPrefix));
	  } else {
		if (filename.indexOf('.jade') === -1) {
		  continue;
		}
		funcName = "" + prefix + (pathutil.basename(path, '.jade'));
		fileContents = fs.readFileSync(path, 'utf8');
		if (this.beforeCompile != null) {
		  fileContents = this.beforeCompile(fileContents);
		}
		try {
		  compiled = jade.compileClient(fileContents, {
			compileDebug: false,
			filename: path,
			// name: funcName
		  });
		  paths.push({
			path: path,
			funcName: funcName,
			compiled: compiled
		  });
		} catch (_error) {
		  error = _error;
		  this.hasError = true;
		  this.emit('error', error);
		}
	  }
	}
	return paths;
};

module.exports = new JadeAsset();




