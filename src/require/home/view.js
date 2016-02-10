define(['jquery' ,'backbone', 'virtual-dom/vnode/vnode', 'virtual-dom/vnode/vtext', 'virtual-dom/vdom/create-element'],
  function($, Backbone, VNode, VText, createRootNode){
  var homeView = Backbone.View.extend({

    tagName: 'div',

    el:'#form',

    events: {
    },

    initialize: function() {
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
  return homeView;
});
