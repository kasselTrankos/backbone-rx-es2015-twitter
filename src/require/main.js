(function () {
  //por q un clouser sure you'll know
  window.startDate = Date.now(); //this is for debugging performance of application
  console.log('loading app/js/main.js ---> (0) ---> time:', (Date.now() - window.startDate));
  requirejs.config({
    enforceDefine: false,
    waitSeconds: 7,
    appDir: './',
    baseUrl: './require',
    dir: './js',
    packages: ['virtual-dom'],
    paths: {
      'virtual-dom':'virtual-dom',
      backbone: 'vendors/backbone-amd/backbone',
      'jquery': 'vendors/jquery/jquery',
      'socketio': 'vendors/socket.io-client/socket.io',
      underscore: 'vendors/underscore/underscore'
    },
    shim: {

      'underscore': {
         'exports': '_'
       },
       'backbone': {
         'deps': ['jquery', 'underscore'],
         'exports': 'Backbone'
       }
    }
  });
  require(['app'], function (app) {
    console.log(app);
    // initialisation code defined within app.js
    app.init();
  });
})();
