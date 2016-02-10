var gulp  =require('gulp'),
  proxyMiddleware = require('http-proxy-middleware'),
  url = require('url'),
  proxy = require('proxy-middleware'),
  browserSync = require('browser-sync');

  gulp.task('connect-server', function(){
    var proxyOptions = url.parse('http://localhost:3040');
    proxyOptions.route = '/apitwitter';
    //var proxy = proxyMiddleware('/apitwitter', {target: 'http://localhost:3040'});

    browserSync({
  		open: false,
  		notify: false,
  		port: process.env.PORT || 3000,
      middleware: [proxy(proxyOptions)],
  		server: {
  			baseDir: './public'
  		}
  	});
  });
