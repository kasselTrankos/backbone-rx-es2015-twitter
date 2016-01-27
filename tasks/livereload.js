var gulp = require('gulp'),
  browserify = require('./browserify');

gulp.task('watch', function() {
  gulp.watch('src/*', ['build-js']);
});
