var Backbone = require('Backbone');
var h = require('virtual-dom/h');
var createRootNode = require('virtual-dom/create-element');
var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');

var homeView = Backbone.View.extend({

  tagName: 'div',

  el:'#form',

  events: {
  },

  initialize: function() {
    console.log('init application');
    this.render();
  },

  render: function() {
    var count = 0;      // We need some app data. Here we just store a count.

    console.log('render it please');
    var form = new VNode('form', {
      action: '/account',
      method:'POST',
      className:'row'
    });
    var node =  new VNode('p', {
        className: "greeting"
    }, [
        new VText("Hello " + String('vera esta encasa!!!'))
    ]);
    this.$el.append(createRootNode(node));
    
    return this;

  }

});
module.exports  = homeView;
