var gulp = require('gulp'),
  config = require('./config'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  transform = require('vinyl-transform');

gulp.task('build-js', function () {
  return browserify(config.paths.js.input, {
    debug: true,
    standalone: 'testapp'
  })
  .transform(babelify, {presets: ["es2015"]})

  .bundle()
  .pipe(source(config.paths.js.name))

  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true, debug:true}))
  .pipe( uglify({compress:false}))


  .pipe(sourcemaps.write('.', { addComment: true }))
  .pipe(gulp.dest(config.paths.js.output))

  .pipe(connect.reload());
});
