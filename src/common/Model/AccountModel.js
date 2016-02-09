var AccountModel = Backbone.Model.extend({

  initialize: function() {},

  name: function() { },

  _id: function() {},

  allowedToEdit: function(account) {
    return true;
  }

});
module.exports = AccountModel;
