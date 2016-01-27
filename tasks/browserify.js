var gulp = require('gulp'),
  config = require('./config'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  transform = require('vinyl-transform');

gulp.task('build-js', function () {
  return browserify(config.paths.js.input, {
        debug: true,
        standalone: 'testapp'
    })
    .bundle()
    .pipe(source(config.paths.js.name))

    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true, debug:true}))
    .pipe( uglify({compress:false}))
    //.on('error', gutil.log)

    .pipe(sourcemaps.write('.', { addComment: true }))
    .pipe(gulp.dest(config.paths.js.output))

    .pipe(connect.reload());
});
