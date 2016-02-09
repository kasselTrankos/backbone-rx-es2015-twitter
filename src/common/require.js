(function () {
  //por q un clouser sure you'll know
  window.startDate = Date.now(); //this is for debugging performance of application
  console.log('loading app/js/main.js ---> (0) ---> time:', (Date.now() - window.startDate));
  requirejs.config({
    enforceDefine: false,
    waitSeconds: 7,
    baseUrl: '/app',
    paths: {
      backbone: '../../bower_components/backbone/backbone',
      'bootstrap-sass': '../../bower_components/bootstrap-sass/assets/javascripts/bootstrap',
      jquery: '../../bower_components/jquery/dist/jquery',
      requirejs: '../../bower_components/requirejs/require',
      'socketio': '../../bower_components/socket.io-client/socket.io',
      underscore: '../../bower_components/underscore/underscore'
    },
    shim: {
      'underscore': {
         'exports': '_'
       },
       'backbone': {
         'deps': ['jquery', 'underscore'],
         'exports': 'Backbone'
       }
    },
    packages: [

    ]
  });
  require(['app'], function (app) {
    // initialisation code defined within app.js
    app.init();
  });
})();
