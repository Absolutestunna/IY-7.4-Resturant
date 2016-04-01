var Backbone = require('backbone');

var MenuModel = Backbone.Model.extend({

});

var MenuCollection = Backbone.Collection.extend({
  model: MenuModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/orders'
});

module.exports = {
  'MenuModel': MenuModel,
  'MenuCollection': MenuCollection
};
