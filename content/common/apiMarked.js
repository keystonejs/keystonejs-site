var fs = require("fs");
var path = require("path");
var markdown = require('marked');
var _ = require('lodash');
var async = require('async');

module.exports = {
	getApi: function getApi(marked, callback) {
		var dirs = [];
		_.each(marked, function(v, language) {
			_.each(v, function(list, version) {
				if(_.isArray(list.keystone)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/', pushTo: marked[language][version].keystone });
				}
				if(_.isArray(list.view)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/View', pushTo: marked[language][version].view });
				}
				if(_.isArray(list.list)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/List', pushTo: marked[language][version].list });
				}
				if(_.isArray(list.schema)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/List/schema', pushTo: marked[language][version].schema });
				}
				if(_.isArray(list.email)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/Email', pushTo: marked[language][version].email });
				}
				if(_.isArray(list.endpoints)) {
					dirs.push({dir: 'content/' + language + '/pages/docs/api/' + version + '/markdown/endpoints/', pushTo: marked[language][version].endpoints });
				}
			});
		});
		async.eachSeries(dirs, function(obj, next) {
			var dir = obj.dir;
			var pushTo = obj.pushTo;
			fs.readdir(dir, function (err, files) {
				if (err) {
					next(err);
				} else {
					async.eachSeries(files, function(file, done) {
						file =  path.join(dir, file);
						if(fs.statSync(file).isFile()) {
							fs.readFile(file, function (err, data) {
								if (!err) {
									pushTo.push({name: path.basename(file,'.md'), html: markdown(data.toString())})
								}
								done();
							});
						} else {
							done();
						}
					}, function(err) {
						next();
					});
				}
			});
		}, function(err) {
			if(err) {
				//console.log(err);
			}
			if(_.isFunction(callback)) {
				callback(null, marked);
			}
		});
	},	
	_marked: {
		"en": {
			'0.2.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				endpoints: []
			},
			'0.3.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				schema: [],
				endpoints: []
			},
			'0.4.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				schema: [],
				endpoints: []
			},
		},
		/*
		"zn": {
			'0.2.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				schema: [],
				endpoints: []
			},
			'0.3.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				schema: [],
				endpoints: []
			},
			'0.4.x': {
				keystone: [],
				view: [],
				email: [],
				list: [],
				schema: [],
				endpoints: []
			},
		}
		*/
	}
}
