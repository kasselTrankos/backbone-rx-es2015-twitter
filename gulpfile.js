var gulp = require('gulp'),
  copy = require('./tasks/copy'),
  sass  = require('./tasks/sass'),
  connect = require('./tasks/server')
  browserify = require('./tasks/browserify')
  livereload = require('./tasks/livereload');

gulp.task('default', ['sass', 'build-js', 'watch', 'copy', 'connect']);
