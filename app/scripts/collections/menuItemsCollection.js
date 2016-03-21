var Backbone = require('backbone');

var MenuModel = Backbone.Model.extend({

});

var MenuCollection = Backbone.Collection.extend({
  model: MenuModel,
});

module.exports = {
  'MenuModel': MenuModel,
  'MenuCollection': MenuCollection
};
