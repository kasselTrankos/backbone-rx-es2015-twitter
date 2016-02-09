var AccountModel = require('./../Model/AccountModel');
var AccountCollection = Backbone.Collection.extend({
  model: AccountModel
});
module.exports = AccountCollection;
