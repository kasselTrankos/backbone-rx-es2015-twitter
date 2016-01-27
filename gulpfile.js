var gulp = require('gulp'),
  copy = require('./tasks/copy')
  connect = require('./tasks/server')
  browserify = require('./tasks/browserify')
  livereload = require('./tasks/livereload');

gulp.task('default', ['build-js', 'watch', 'copy', 'connect']);
