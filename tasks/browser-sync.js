var gulp  =require('gulp'),
  url = require('url'),
  proxy = require('proxy-middleware'),
  historyApiFallback = require('connect-history-api-fallback'),
  browserSync = require('browser-sync');

  gulp.task('connect-server', function(){
    var proxyOptions = url.parse('http://localhost:3040');
    proxyOptions.route = '/apitwitter';
    //var proxy = proxyMiddleware('/apitwitter', {target: 'http://localhost:3040'});

    browserSync.init({
  		open: false,
  		notify: false,
  		port: process.env.PORT || 3000,
      middleware: [proxy(proxyOptions),  historyApiFallback()],
  		server: {
  			baseDir: './public'
  		}
  	});
    gulp.watch('public/**/*.js').on('change', browserSync.reload);
  });
