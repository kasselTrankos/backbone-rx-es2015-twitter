var gulp = require('gulp'),
  browserify = require('./browserify'),
  livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/*', ['browserify']);
});
