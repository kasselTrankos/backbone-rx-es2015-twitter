var gulp = require('gulp'),
  config = require('./config'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  transform = require('vinyl-transform');

gulp.task('build-js', function () {
  return browserify(config.paths.js.input)
    .bundle()
    .pipe(source(config.paths.js.name))
    .pipe(gulp.dest(config.paths.js.output))
    .pipe(connect.reload());
});
