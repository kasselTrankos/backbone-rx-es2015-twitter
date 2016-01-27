var gulp = require('gulp'),
  sass = require('./sass'),
  config = require('./config'),
  copy = require('./copy'),
  browserify = require('./browserify');

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['copy']);
  gulp.watch(config.paths.js.liverload, ['build-js']);
  gulp.watch(config.paths.sass.input, ['sass']);

});
