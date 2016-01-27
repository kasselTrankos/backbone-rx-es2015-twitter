var gulp = require('gulp'),
  copy = require('./tasks/copy')
  browserify = require('./tasks/browserify')
  livereload = require('./tasks/livereload');

gulp.task('default', ['watch', 'copy']);
