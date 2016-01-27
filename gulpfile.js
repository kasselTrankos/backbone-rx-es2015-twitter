var gulp = require('gulp'),
  copy = require('./tasks/copy')
  livereload = require('./tasks/livereload');

gulp.task('default', ['copy','watch']);
