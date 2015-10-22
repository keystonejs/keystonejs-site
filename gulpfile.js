var gulp = require('gulp'); 
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('less', function () {
  return gulp.src('./public/styles/**/*.less')
    .pipe(less({
      paths: [ './public/styles' ]
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../build/styles/site.min.css'));
});
