module.exports = {
bases: {
   app: 'app/',
   public: 'public/',
 },
 paths: {
  scripts: ['src/**/*.js', '!scripts/libs/**/*.js'],  
  styles: ['styles/**/*.css'],
  html: ['src/index.html', '404.html'],
  images: ['images/**/*.png'],
  extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
 }
}
