var Backbone = require('backbone');

var CartModel = Backbone.Model.extend({});

var CartCollection = Backbone.Collection.extend({
  model: CartModel
});

module.exports = {
  'CartModel': CartModel,
  'CartCollection': CartCollection
};
