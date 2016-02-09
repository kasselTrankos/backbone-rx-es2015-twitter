var gulp = require('gulp'),
  proxy = require('http-proxy-middleware')
  connect = require('gulp-connect'),
  host = process.env.HOST || 'localhost',
  port = process.env.PORT || 3000,
  twitter = process.env.PORT_TWITTER || 3040;
gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: port,
    livereload: true,
    middleware: function(connect, opt) {
      console.log(' pop');
      return [
        proxy('/apitwitter', {
          target: 'http://' + host + ':' + twitter,
          changeOrigin:true
          })
        ]
    }
  });
});
