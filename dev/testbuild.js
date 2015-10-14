var path = require("path");
var Builder = require('systemjs-builder');
var jadeFn = require('./jadeFunctions.js');
var less = require('less');
var async = require('async');
var _ = require('lodash');
var fs = require('fs.extra');
var ghpages = require('gh-pages');

var classReference = require('./apiMarked');
var sendMarked = _.cloneDeep(classReference._marked);

var dashes = '--------------------------------------';
var builder;

var args = {};
// remove the build directory first
fs.rmrf('../build', function() {
	args = {
		dest: process.argv[2] || '../build'
	};
	// add the directories and start the build
	fs.mkdirp('../build/styles', runBuild);
})

function runBuild() {
	// sets the baseURL and loads the configuration file
	builder = new Builder('../public/', '../public/systemjs/config.js');

	async.series([
		// marked api for dev and inclusive bundle
		function(done) {
			// we could do this in app with fetch, but why
			async.forEachOf(sendMarked, function(v, k, next){
				console.log(dashes);
				async.forEachOf(v, function(vv, kk, tick) {
					classReference.getApi(vv, k, kk, function(err, marked) {
						console.log('mark',k,kk)
						sendMarked[k][kk] = marked;
						tick();
					});
				}, function(err) {
					next();
				});
				
			}, function(err) {
				
				var mark = {}	
				try {
					mark = JSON.stringify(sendMarked);
				} catch(e) {
					showMsg(e)
				}
				var send = "const marked = " + mark + "\n " + "export default marked" + "\n";
				fs.writeFile('../public/systemjs/app/html/markedApi.js', send, function (err) {
					showMsg('wrote /systemjs/app/html/markedApi.js');
					
					done()
				}.bind(this));
					
			});
		},
		// templates for dev and inclusive bundle
		function(done) {
			showMsg('start jade template module',1);
			/* Write jade page functions */
			jadeFn.create({
				dirname: '../content',
				output: '../public/systemjs/app/html/templates.js',
				compress: false,
			}, function(contents) {
				showMsg('wrote /systemjs/app/html/templates.js');			
				done()
			});
		},
		// create css for production
		function(done) {
			createCSS(done)
		},
		// image folder
		function(done) {
			copyDir('../public/fonts', '../build/fonts',  function() {
				copyDir('../public/images', '../build/images', done)
			})
		},
		// create index.html for production
		function(done) {
			showMsg('write /index.html',1);
			
			jadeFn.saveIndex({
				file: '../content/common/templates/layout/spa_base.jade',
				dest: args.dest + '/index.html',
			}, function(dest) {
				showMsg('wrote ' + args.dest + '/index.html');
				done()
			})
		},
		// all-in-one bundle for production
		function(done) {
			runInclusive(done)
		},
		// gh-pages
		function(done) {
			showMsg('start gh-pages clone')
			ghpages.publish(
				path.join(__dirname, '../build'),
				{
					logger: function(message) {
						console.log(message);
					},
					branch: 'master',
					repo: 'https://github.com/snowkeeper/snowkeeper.github.io.git'
				},
				function() {
					showMsg('gh-pages cloned');
					done();
				}
			);
		},
		// bundle html for dev 
		function(done) {
			runHtml(done)
		},
		// bundle dependencies for dev
		function(done) {
			runBuilder(done)
		},
		
	], function(err) {
		console.log('done', err)
	});

} // end runBuild
function copyDir(from, to, finished) {
	fs.copyRecursive(from, to, function (err) {
		if('function' !== typeof finished) {
			finished = function(){}
		}
		if (err) {
			showMsg('ERROR copying ' + from + ' to ' + to)
			
			return finished()
		}
		showMsg('copied ' + from + ' to ' + to)
		
		finished()
	});
}
function createCSS(done) {
	showMsg('compile /styles/site.less',2);
	fs.readFile('../public/styles/site.less', 'utf8', function (err,data) {
		if (err) {
			console.log(err);
			return done()
		}
		less.render(data, { 
			filename: 'site.less',
			sourceMap: {},
			paths: ['../public/styles'],
			compress: true
		})
		.then(function(output) {
				// output.css = string of css
				// output.map = undefined
			fs.writeFile(args.dest + '/styles/site.min.css', output.css, 'utf8', function (err) {
				if (err) {
					showMsg(err);
					return done()
				}
				showMsg('wrote ' + args.dest + '/styles/site.min.css');
				done()
			})	
		})	
	});
}
function runInclusive(callback) {
	builder.reset()
	showMsg('start inclusive bundle',1);
	builder.buildStatic('app/app', args.dest + '/inclusive-bundle.js', { minify: true, sourceMaps: false })
		.then(function() {
			showMsg('wrote ' + args.dest + '/inclusive-bundle.js');
			
			if('function'===typeof callback) {
				callback(null)
			}
		})
	.catch(function(err) {
		showMsg('FAILED inclusive bundle',err)
		if('function'===typeof callback) {
			callback(null)
		}
	});
}
function runHtml(callback) {
	showMsg('start html bundle',2);
	var htmlStr = "app/html/*";
	// html
	builder.reset();
	builder.bundle(htmlStr, '../public/systemjs/bundles/html.js', { minify: true, sourceMaps: true })
		.then(function() {
			showMsg('wrote /systemjs/bundles/html.js');
			builder.reset();
			//builder.bundle('app/html/templates', '../public/systemjs/bundles/html.js', { minify: true, sourceMaps: false }).then().catch(function(e){})
			if('function' === typeof callback) {
				callback(null)
			}
		})
	.catch(function(err) {
		showMsg('FAILED HTML bundle ',err)
		if('function' === typeof callback) {
			callback(null)
		}
	});
}
function runBuilder(callback) {
	builder.reset()
	// dependencies
	showMsg('start dependencies bundle',1);
	console.log(dashes);
	builder.bundle('app/app - [systemjs/app/**/*]', '../public/systemjs/bundles/dependencies.js', { minify: true, sourceMaps: true })
	.then(function() {
		showMsg('wrote /systemjs/bundles/dependencies.js');
		builder.reset()
		// full app
		if('function'===typeof callback) {
			callback(null)
		}
	})
	.catch(function(err) {
		showMsg('FAILED dep bundle ',err)
		if('function'===typeof callback) {
			callback(null)
		}
	});
}
function showMsg() {
	var args = Array.prototype.slice.call(arguments);
	if(!isNaN(args[args.length-1])) {
		// set to samll
		var small = true
		args.pop()
	}
	if(!small) console.log(dashes);
	console.log(dashes);
	console.log.apply(this, args)
	console.log(dashes)
	if(!small) console.log(dashes);
}
