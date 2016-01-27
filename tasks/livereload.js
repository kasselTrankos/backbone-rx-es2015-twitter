var gulp = require('gulp'),
  sass = require('./sass'),
  config = require('./config'),
  browserify = require('./browserify');

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build-js']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
