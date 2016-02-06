var gulp = require('gulp'),
  connect = require('gulp-connect');
  
gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: process.env.PORT,
    livereload: true
  });
});
