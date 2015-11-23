var _ = require('lodash');
var gulp = require('gulp'); 
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var async = require('async');
var fs = require('fs.extra');
var ghpages = require('gh-pages');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var minimist = require('minimist');
var insert = require('gulp-insert');
var gulpif = require('gulp-if');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var nodeResolve = require('resolve');

var production = (process.env.NODE_ENV === 'production');

/**
 * for dev builds
 * run:
 * gulp push-dev --repo username/username.github.io --branch master --clone some/dir
 * --clone not required
 * --branch defaults to src
 * --repo will be empty upon cloning repo
 * --tag tag the release
 * next options are paired, you must send both
 * --user is the git username
 * --email is the git email
 * --m is the commit message
 * --add will add files in addition to instead of replace the entire branch
 * */
var knownArgs = {
	string: ['repo', 'branch', 'clone', 'tag', 'user', 'email', 'add', 'm'],
	default: {
		branch: 'src',
		clone: './dev/.gh-pages-development',
		repo: '',
		tag: '',
		add: false,
		message: 'Automatic build',
		user: null,
		email: null
	}
}
var Args = minimist(process.argv.slice(2), knownArgs);

var content = require('./content');
var classReference = require('./content/common/apiMarked');

gulp.task("default",['menu'])

gulp.task("menu", function() {
	console.log('...............................................................................')
	console.log('...............................................................................')
	console.log('-- KeystoneJS.com Gulp Commands -- gulp menu ----------------------------------')
	console.log('...............................................................................')
	console.log('.. clean ... delete build directory                                          ..')
	console.log('.. deploy ... run build then push to gh-pages branch                         ..')
	console.log('.. build ... run clean; then pages, css, api, copy                           ..')
	console.log('.. push ... push build dir to your forks gh-pages branch                     ..')
    
	console.log('.. less ... creates ./public/styles/site.min.css                             ..')
	console.log('.. css ... run less; bundle prism; save ./build/styles/site.min.css          ..')
	console.log('.. copy ... copy fonts, images and favicon to build dir                      ..')
	console.log('.. pages ... create html pages in ./build                                    ..')
	console.log('.. api ... create the api file in app/html/markedApi.js                      ..')
    console.log('.. bundle ... create ./build/bundle-inclusive.js                             ..')
	console.log('-------------------------------------------------------------------------------')
	console.log('-- DEV OPTIONS ------ To start the dev server type npm start ------------------')
	console.log('.. dev-push ...   ( required: --repo for push and deploy)                    ..')
	console.log('.. dev-deploy ... ( optional: --branch, --clone, --tag, --user, --email )    ..')
	console.log('.. build-no-clean ... does not delete build dir first                        ..')
	console.log('...............................................................................')
	console.log('...............................................................................')

});

function removeBuildDir(cb) {
	fs.remove('./build', function(err) {
		if(err) {
			gutil.log(err)
			return cb(err)
		}
		gutil.log('...................');
		gutil.log('Removed ./build dir');
		gutil.log('...................');
		cb()
	})
}

// delete ./build
gulp.task("clean", function(cb) {
	removeBuildDir(cb)
});


// build the api using markdown 
gulp.task("api", function(cb){
   async.forEachOf(sendMarked, function(v, k, next){
		async.forEachOf(v, function(vv, kk, tick) {
			classReference.getApi(vv, k, kk, function(err, marked) {
				gutil.log('mark',k,kk)
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
			gutil.log(e)
			cb()
		}
		var send = "const marked = " + mark + "\n " + "export default marked" + "\n";
		fs.writeFile('./public/systemjs/app/html/markedApi.js', send, function (err) {
			gutil.log('wrote /systemjs/app/html/markedApi.js');
			cb()
		});
			
	});
}); 

// build css from less
gulp.task('less',  function () {
	var stream = gulp.src('./public/styles/site.less')
	.pipe(less({
	  paths: [ './public/styles' ]
	}))
	.pipe(rename('site.min.css'))
	.pipe(gulp.dest('./public/styles/'));
	return stream
});

// bundle less and prism css
gulp.task('css', ['less'], function () {
	var stream = gulp.src(['./public/styles/site.min.css', './public/styles/prism.css'])
    .pipe(concatCss("site.min.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
	return stream
});

// create each html page from routes
// evry page is a copy of public/deploy.html
gulp.task("pages",  function(cb){
	// run through routes
    async.forEachOf(content.routes, function(route, k, next){
		var filename = route.path.substr(1).replace(/\//g, '_') || 'index';
		var filepath = filename + '.html';
		
		var locals = _.extend({
			pretty: true,
			languages: content.languages,
			version: require('./package.json').version
		});
		
		var options = _.extend(route, locals);
		options.prefix = (options.language === 'en') ? '/' : '/' + options.language + '/';
		_.extend(options, content.languages[options.language]);

		
		if(options.api) {
			var sendMarked = _.cloneDeep(classReference._marked[options.language][options.api]);
			classReference.getApi(sendMarked, options.language, options.api, function(err, marked) {
				options.apidocs = sendMarked;
				finish('./content/' + options.language + '/pages/' + route.template + '.jade');
			});
			
		} else {
			finish('./content/' + options.language + '/pages/' + route.template + '.jade');
		}
		function finish(html) {		
			gutil.log('Writing ' + filename + '.html');
			gulp.src(html)
			.pipe(jade({ locals: options }))
			.pipe(gulpif((route.path != '/404' && route.filename != 'index' && route.path != '/' ),insert.prepend("---\npermalink: " + route.path + "/\n---\n")))
			.pipe(rename(filepath))
			.pipe(gulp.dest('./build/'));
			next()
		}
		
	}, function() {
		cb()
	});
});

// copy statics
gulp.task("copy",  function(cb){
	// fonts
	var stream = gulp.src([ './public/favicon.ico', './public/images/**/*', './public/fonts/**/*', './public/favicon.ico'], {
            base: 'public'
    }).pipe(gulp.dest('./build'));
    return stream
});

// build
gulp.task('build', function (callback) {
	
	runSequence('clean', 'build-no-clean', callback);
	return
});

// build without deleting ./build
gulp.task('build-no-clean', function (cb) {
	runSequence('pages', 'css', 'copy', cb);
});


// push to the gh-pages branch of this repo
gulp.task('push',  function (cb) {
	
	ghpages.publish(
		path.join(__dirname, 'build'),
		{
			logger: function(message) {
				gutil.log(message);
			},
			repo: 'https://github.com/keystonejs/keystone.git',
			branch: 'gh-pages',
			clone: './dev/.gh-pages-production',
			tag: Args.tag,
			add: !!Args.add,
			message: Args.message
		},
		function() {
			gutil.log('-------------------------------------')
			gutil.log('published to:')
			gutil.log('branch: gh-pages')
			gutil.log('cloned to: ./dev/.gh-pages-production')
			gutil.log('It may take a few minutes for the server to refresh.')			
			gutil.log('-------------------------------------')
			cb()
		}
	);
	
	return
});

// push to any other repo
// REQUIRED ...  --repo your_repo
// optional ...  --clone /dir
// optional ...  --branch master (default is src)
gulp.task('dev-push', function () {
	if(Args.repo && Args.repo !== '') {
		ghpages.publish(
			path.join(__dirname, 'build'),
			{
				logger: function(message) {
					gutil.log(message);
				},
				branch: Args.branch,
				repo: Args.repo,
				clone: Args.clone,
				tag: Args.tag,
				add: !!Args.add,
				message: Args.message,
				user: Args.user && Args.email ? { user: Args.user, email: Args.email } : null
			},
			function() {
				gutil.log('-------------------------------------')
				gutil.log('published to:')
				gutil.log('repo: ' + Args.repo + '')
				gutil.log('branch:  ' + Args.branch + '')
				gutil.log('cloned to:  ' + Args.clone + '')
				gutil.log('It may take a few minutes for the server to refresh.')
				gutil.log('-------------------------------------')
			}
		);
	} else {
		console.log('------------------------------------------------------------------------------')
		console.log('------------------------------------------------------------------------------')
		console.log('-- You must add the --repo option or add your dev repo in gulpfile.js');
		console.log('------------------------------------------------------------------------------')
		console.log('------------------------------------------------------------------------------')
	}
	return
});

// build then push to production
gulp.task('deploy', function (callback) {
	
	runSequence('build', 'push', callback);
	return
});

// build then push to development
// REQUIRED ...  --repo your_repo
// optional ...  --clone /dir
// optional ...  --branch master (default is src)
gulp.task('dev-deploy', function (callback) {
	if(Args.repo && Args.repo !== '') {
		runSequence('build', 'dev-push', callback);
	} else {
		console.log('------------------------------------------------------------------------------')
		console.log('------------------------------------------------------------------------------')
		console.log('-- You must add the --repo option or add your dev repo in gulpfile.js');
		console.log('------------------------------------------------------------------------------')
		console.log('------------------------------------------------------------------------------')
	}
	return
});






function getNPMPackageIds() {
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = require('./package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return _.keys(packageManifest.client) || [];

}
