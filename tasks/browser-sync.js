var gulp  =require('gulp'),
  browserSync = require('browser-sync');

  gulp.task('connect-server', function(){
    browserSync({
  		open: false,
  		notify: false,
  		port: process.env.PORT || 3000,
  		server: {
  			baseDir: './src'
  		}
  	});
  });
