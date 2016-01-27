var gulp = require('gulp'),
  config = require('./config'),
  connect = require('gulp-connect');
  
gulp.task('copy', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.bases.public))
    .pipe(connect.reload());;
});
