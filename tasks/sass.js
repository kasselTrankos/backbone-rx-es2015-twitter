var gulp = require('gulp'),
  config = require('./config'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(config.paths.sass.input)
    .pipe(sass(config.bootstrap))
    .pipe(sass().on('error', sass.logError))
    ///.pipe(sass(config.bootstrap))
    .pipe(gulp.dest(config.paths.sass.output));
});
