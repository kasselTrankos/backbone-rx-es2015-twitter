var gulp = require('gulp'),
  config = require('./config');
gulp.task('copy', function(){
  //html
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.bases.public));
});
