define(['home/view'], function(homeView){
  'use strict';
  var app = {};
  app.init = function(){
    console.log('inito');
    var home = new homeView();
  }
  return app;
});
