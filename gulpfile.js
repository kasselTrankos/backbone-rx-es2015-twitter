var gulp = require('gulp'),
  copy = require('./tasks/copy'),
  sass  = require('./tasks/sass'),
  connect = require('./tasks/server'),
  browserify = require('./tasks/browserify'),
  livereload = require('./tasks/livereload'),
  connect = require('./tasks/browser-sync'),
  hmr = require('./tasks/hmr');

gulp.task('default', ['watch:hot-reload-front-end', 'connect-server']);
