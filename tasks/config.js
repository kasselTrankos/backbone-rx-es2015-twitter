module.exports = {
  bases: {
     app: 'app/',
     public: 'public/',
     bootstrapDir: './bower_components/bootstrap-sass',
   },
  bootstrap: {
    style: 'expanded',
    precison: 3,
    errLogToConsole: true,
    includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
   },
   paths: {
    scripts: ['src/**/*.js', '!scripts/libs/**/*.js'],
    styles: ['styles/**/*.css'],
    sass : {input: 'src/sass/**/*.scss', output: './public/assets/css'},
    js: {input: 'src/app/main.js', liverload: 'src/**/*.js', name: 'script.js', output: './public/assets/js'},
    html: ['src/index.html', '404.html'],
    images: ['images/**/*.png'],
    extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
   }
}
