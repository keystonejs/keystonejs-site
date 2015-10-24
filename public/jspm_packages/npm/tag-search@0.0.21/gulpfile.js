/* */ 
"format esm";
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');


function compile(watch, globals) {
	var bundler = watchify(browserify('./examples/browserify/entry.js', { debug: true }).transform(babel));
	
	if(globals) {
		var globalShim = require('browserify-global-shim').configure({
			'jquery': '$',
			'react': 'React',
			'react-dom': 'ReactDOM',
			'_': 'lodash'
		});
		bundler.transform(globalShim);
	}
	
	function rebundle() {
		var b = bundler.bundle();
		b.on('error', function(err) { console.error(err); this.emit('end'); });
		if(globals) {
			b = b.pipe(source('globals.js'))
		} else {
			b = b.pipe(source('inclusive.js'))
		}
		b = b.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./examples/browserify/'));
		
	}

	if (watch) {
		bundler.on('update', function() {
			console.log('-> bundling...');
			rebundle();
		});
	}

	rebundle();
}

function watch() {
  return compile(true);
};

function globals() {
  return compile(false,true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('globals', function() { return globals(); });
gulp.task('default', ['watch']);
