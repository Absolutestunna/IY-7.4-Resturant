var Backbone = require('backbone');

var OrderModel = Backbone.Model.extend({

});

var OrderCollection = Backbone.Collection.extend({
  model: OrderModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/orders'
});

module.exports = {
  'OrderCollection': OrderCollection
}
