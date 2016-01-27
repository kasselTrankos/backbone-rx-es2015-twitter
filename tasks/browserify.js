var gulp = require('gulp'),
  config = require('./config'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  transform = require('vinyl-transform');

gulp.task('javascript', function () {
  return browserify('src/main.js')
    .bundle()
    .pipe(source('js/script.js'))
    .pipe(gulp.dest('./public'));
});
