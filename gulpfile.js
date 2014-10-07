var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

var CSS_ROOT = './css/';
var LESS_ROOT = './less/';

gulp.task('less', function() {
  return gulp.src(LESS_ROOT + 'style.less')
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest(CSS_ROOT));
});
gulp.task('watch', function() {
  gulp.watch([LESS_ROOT + '*.less'], ['less']);
});
gulp.task('default', ['less']);
