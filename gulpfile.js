var gulp = require('gulp'),
  copy = require('./tasks/copy'),
  sass  = require('./tasks/sass'),
  
  browserSync = require('./tasks/browser-sync'),
  browserify = require('./tasks/browserify'),
  livereload = require('./tasks/livereload');

gulp.task('default', ['sass', 'build-js', 'watch', 'copy', 'connect-server']);
