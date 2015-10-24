var _ = require('lodash');
var gulp = require('gulp'); 
var Builder = require('systemjs-builder');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var jadeConcat = require('gulp-jade-template-concat');
var async = require('async');
var fs = require('fs.extra');
var ghpages = require('gh-pages');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var minimist = require('minimist');

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
 * */
var knownArgs = {
	string: ['repo', 'branch', 'clone', 'tag', 'user', 'email'],
	default: {
		branch: 'src',
		clone: './dev/.gh-pages-development',
		repo: '',
		tag: '',
		user: null,
		email: null
	}
}
var Args = minimist(process.argv.slice(2), knownArgs);

var content = require('./public/systemjs/app/config.js');
var classReference = require('./dev/apiMarked');
var sendMarked = _.cloneDeep(classReference._marked);

gulp.task("default",['menu'])

gulp.task("menu", function() {
	console.log('-------------------------------------------------------------------------------')
	console.log('-- KeystoneJS.com Gulp Commands -- gulp menu ----------------------------------')
	console.log('...............................................................................')
	console.log('.. clean ... delete build directory                                          ..')

	console.log('.. deploy ... run build then push to gh-pages branch                         ..')
	console.log('.. build ... run clean; then pages, css, jade, api, copy; & bundle last      ..')
	console.log('.. push ... push build dir to your forks gh-pages branch                     ..')
    
	console.log('.. less ... creates ./public/styles/site.min.css                             ..')
	console.log('.. css ... run less; bundle prism; save ./build/styles/site.min.css          ..')
	console.log('.. copy ... copy fonts, images and favicon to build dir                      ..')
	console.log('.. index ... create public/deploy.html from spa_base.jade                    ..')	
	console.log('.. pages ... run index then create html pages in ./build                     ..')
	console.log('.. jade ... create the jade template file in app/html/templates.js           ..')
	console.log('.. api ... create the api file in app/html/markedApi.js                      ..')
    console.log('.. bundle ... create ./build/bundle-inclusive.js                             ..')
	console.log('-------------------------------------------------------------------------------')
	console.log('-- DEV OPTIONS ------ To start the dev server type npm start ------------------')
	console.log('-------------------------------------------------------------------------------')
	console.log('.. dev-push ...   ( required: --repo for push and deploy)                    ..')
	console.log('.. dev-deploy ... ( optional: --branch, --clone, --tag, --user, --email )    ..')
	console.log('.. build-no-clean ... does not delete build dir first                        ..')
	console.log('.. bundle-html ... bundle jade & api and save in app/bundles/html.js         ..')
	console.log('.. bundle-dependencies ... bundle and save in app/bundles/dependencies.js    ..')
	console.log('...............................................................................')
	console.log('-------------------------------------------------------------------------------')
	console.log('-------------------------------------------------------------------------------')

});

function removeBuildDir(cb) {
	fs.remove('./build', function(err) {
		if(err) {
			gutil.log(err)
			return cb(err)
		}
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

// build the jade template functions files
gulp.task("jade" , function(){
	var stream = gulp.src('./content/**/*.jade')
        .pipe(jade({
            client: true
        }))
        .pipe(jadeConcat('templates.js', {templateVariable:"templates"}))
        .pipe(gulp.dest('./public/systemjs/app/html'));
	return stream;
});


// create the deploy.html file from spa_base.jade
gulp.task("index" , function(){
	var stream = gulp.src('./content/common/templates/layout/spa_base.jade')
        .pipe(jade())
        .pipe(rename('deploy.html'))
        .pipe(gulp.dest('./public/'));
	return stream;
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
gulp.task("pages", ['index'], function(cb){
	// run through routes
    async.forEachOf(content.routes, function(route, k, next){
		var filename = route.path.substr(1).replace(/\//g, '_') || 'index';
		var filepath = filename + '.html';
		gutil.log('Writing ' + filename + '.html');
		gulp.src('./public/deploy.html')
			.pipe(rename(filepath))
			.pipe(gulp.dest('./build'));
		next()
		
	}, function() {
		cb()
	});
});

// copy statics
gulp.task("copy",  function(cb){
	// fonts
	var stream = gulp.src(['./public/config.js', './public/jspm_packages/system.js']).pipe(gulp.dest('./build'));
	gulp.src([ './public/favicon.ico', './public/images/**/*', './public/fonts/**/*', './public/favicon.ico'], {
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
gulp.task('build-no-clean', ['pages','css','jade','api','copy'], function (cb) {
	// sets the baseURL and loads the configuration file
	bundle(cb)
});

// only bundle
gulp.task('bundle', function (cb) {
	// sets the baseURL and loads the configuration file
	bundle(cb)	
});


// bundle the js files
function bundle(cb) {
	var builder = new Builder('./public/', './public/config.js');
	gutil.log('start inclusive bundle');
	builder.bundle('app/app', './build/inclusive-bundle.js', { minify: true, sourceMaps: false })
		.then(function() {
			gutil.log('wrote  build/inclusive-bundle.js');
			cb()
		})
	.catch(function(err) {
		gutil.log('FAILED inclusive bundle',err)
		cb()
	});		
}

// push to the gh-pages branch of this repo
gulp.task('push',  function (cb) {
	
	ghpages.publish(
		path.join(__dirname, 'build'),
		{
			logger: function(message) {
				gutil.log(message);
			},
			branch: 'gh-pages',
			clone: './dev/.gh-pages-production',
			tag: Args.tag
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



// bundle jade and api
gulp.task('bundle-html', function (cb) {
	var htmlStr = "app/html/*";
	// html
	var builder = new Builder('./public/', './public/config.js');
	builder.bundle(htmlStr, '../public/systemjs/bundles/html.js', { minify: true, sourceMaps: true })
		.then(function() {
			gutil.log('wrote /systemjs/bundles/html.js');
			cb()
		})
	.catch(function(err) {
		gutil.log('FAILED HTML bundle ',err)
		cb()
	});
});

// bundle all dependencies
// see public/systemjs/client.js to use
gulp.task('bundle-dependencies', ['jade','api'], function (cb) {
	var builder = new Builder('./public/', './public/systemjs/config.js');
	builder.bundle('app/app - [systemjs/app/**/*]', '../public/systemjs/bundles/dependencies.js', { minify: true, sourceMaps: true })
	.then(function() {
		gutil.log('wrote /systemjs/bundles/dependencies.js');
		builder.reset()
		cb()
	})
	.catch(function(err) {
		gutil.log('FAILED dep bundle ',err)
		cb()
	});
});
