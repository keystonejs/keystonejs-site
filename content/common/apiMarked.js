var fs = require("fs");
var path = require("path");
var markdown = require('marked');
var _ = require('lodash');
var async = require('async');

module.exports = {
	getApi: function getApi(marked, language, version, callback) {
		var dirs = [];
		// recursively add reference docs
		function addDir(item, lang, ver, key, pushTo, key2) {
			var path = 'content/' + lang + '/pages/docs/api/' + ver + '/markdown/class/';
			if(key2) {
				path = 'content/' + lang + '/pages/docs/api/' + ver + '/markdown/class/' + key.charAt(0).toUpperCase() + key.slice(1) + '/' + key2;
			} else if(key !== 'keystone') {
				path = 'content/' + language + '/pages/docs/api/' + version + '/markdown/class/' + key.charAt(0).toUpperCase() + key.slice(1);
			}
			dirs.push({key: key2 || key, main: item.main, pre: item.pre, header: item.header, menuHeader: item.menuHeader, dir: path, pushTo: pushTo });
			
		}
		function recur(ref, callback) {
			
			async.forEachOf(ref, function(list, key, finished) {
				addDir(list, language, version, key, list.list);
				if(list.add) {
					_.each(list, function(list2, k) {
						if(_.isObject(list2) && !_.isArray(list2)) {
							addDir(list2, language, version, key, list.list, k)
						}
					});
				}	
				finished();
			}, function() {
				callback(dirs);
			});	
		}
		recur(marked, function(dirs) { 
			async.eachSeries(dirs, function(obj, next) {
				var dir = obj.dir;
				var pushTo = obj.pushTo;
				if(obj.main) {
					var main = 'content/' + language + '/pages/docs/api/' + version + '/' + obj.main;
					if(fs.statSync(main).isFile()) {
						fs.readFile(main, function (err, data) {
							if (!err) {
								pushTo.push({keys: obj.key, header: obj.header, menuHeader: obj.menuHeader, main: obj.key,   html: markdown(data.toString())})
							}
						});
					}
				}
				fs.readdir(dir, function (err, files) {
					if (err) {
						next(err);
					} else {
						async.eachSeries(files, function(file, done) {
							file =  path.join(dir, file);
							if(fs.statSync(file).isFile()) {
								fs.readFile(file, function (err, data) {
									if (!err) {
										var name = obj.pre ? '<i>' + obj.pre + '</i>.' + path.basename(file,'.md') : path.basename(file,'.md');
										pushTo.push({ keys: obj.key, header: obj.header, menuHeader: obj.menuHeader,  name: name,  html: markdown(data.toString()) })
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
				if(_.isFunction(callback)) {
					callback(null, marked);
				}
			});
		});
	},
	_marked: {
		"en": {
			'0.2.x': {
				keystone: createList('markdown/class/Classes/Keystone.md', 'Keystone', 'keystone'),
				content: createList('markdown/class/Classes/Content.md', '.content Class', 'keystone.content'),
				contentPage: createList('markdown/class/Classes/ContentPage.md', '.content.Page Class', 'keystone.content.Page'),
				contentType: createList('markdown/class/Classes/ContentType.md', '.content.Type Class', 'keystone.content.Type'),
				email: createList('markdown/class/Classes/Email.md', '.Email Class', 'keystone.email'),
				field: createList('markdown/class/Classes/Field.md', '.Field super', 'keystone.field'),
				fieldTypes: createList('markdown/class/Classes/FieldTypes.md', '.Field.Types Classes','keystone.field.types'), 
				list: {
					list:[],
					pre: null,
					main: 'markdown/class/Classes/List.md',
					header: '.List Class',
					menuHeader: 'keystone.list',
					add: true,
					schema: createList(false,false,false,'schemaPlugins')
				},
				security: createList('markdown/class/Helpers/Security.md', '.security.csrf helper', 'keystone.security.csrf'),
				session: createList('markdown/class/Helpers/Session.md', '.session helper', 'keystone.session'),
				view: createList('markdown/class/Classes/View.md', '.View Class', 'keystone.view'),
			},
			'0.3.x': {
				keystone: createList('markdown/class/Classes/Keystone.md', 'Keystone Class', 'keystone'),
				content: createList('markdown/class/Classes/Content.md', '.content Class', 'keystone.content'),
				contentPage: createList('markdown/class/Classes/ContentPage.md', '.content.Page Class', 'keystone.content.Page'),
				contentType: createList('markdown/class/Classes/ContentType.md', '.content.Type Class', 'keystone.content.Type'),
				email: createList('markdown/class/Classes/Email.md', '.Email Class', 'keystone.email'),
				
				field: createList('markdown/class/Classes/Field.md', '.Field super', 'keystone.field'),
				fieldTypes: createList('markdown/class/Classes/FieldTypes.md', '.Field.Types Classes', 'keystone.field.types'),
				list: {
					list:[],
					pre: null,
					main: 'markdown/class/Classes/List.md',
					header: '.List Class',
					menuHeader: 'keystone.list',
					add: true,
					schema: createList(false,false,false,'schemaPlugins')
				},
				middleware: createList('markdown/class/Helpers/Middleware.md', '.middleware helper', 'keystone.middleware'),
				security: createList('markdown/class/Helpers/Security.md', '.security.csrf helper', 'keystone.security.csrf'),
				session: createList('markdown/class/Helpers/Session.md', '.session helper', 'keystone.session'),
				view: createList('markdown/class/Classes/View.md', '.View Class', 'keystone.view'),
			},
			'0.4.x': {
				keystone: createList('markdown/class/Classes/Keystone.md', 'Keystone Class', 'keystone'),
				content: createList('markdown/class/Classes/Content.md', '.content Class', 'keystone.content'),
				contentPage: createList('markdown/class/Classes/ContentPage.md', '.content.Page Class', 'keystone.content.Page'),
				contentType: createList('markdown/class/Classes/ContentType.md', '.content.Type Class', 'keystone.content.Type'),
				email: createList('markdown/class/Classes/Email.md', '.Email Class', 'keystone.email'),
				
				field: createList('markdown/class/Classes/Field.md', '.Field super', 'keystone.field'),
				fieldTypes: createList('markdown/class/Classes/FieldTypes.md', '.Field.Types Classes', 'keystone.field.types'),
				list: {
					list:[],
					pre: null,
					main: 'markdown/class/Classes/List.md',
					header: '.List Class',
					menuHeader: 'keystone.list',
					add: true,
					schema: createList(false,false,false,'schemaPlugins')
				},
				middleware: createList('markdown/class/Helpers/Middleware.md', '.middleware helper', 'keystone.middleware'),
				security: createList('markdown/class/Helpers/Security.md', '.security.csrf helper', 'keystone.security.csrf'),
				session: createList('markdown/class/Helpers/Session.md', '.session helper', 'keystone.session'),
				view: createList('markdown/class/Classes/View.md', '.View Class', 'keystone.view'),
				endpoints: createList()
			},
		},
		//"zn": {}
	}
}

function createList(main,  header, menuHeader, pre) {
	return {
		list: [],
		main: main,
		pre: pre,
		header: header,
		menuHeader: menuHeader
	};
}	
