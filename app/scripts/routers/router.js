var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var WelcomePage = require('./../../components/welcome.jsx');
var MenuInfoPage = require('./../../components/menu.jsx');
var CartInfoPage = require('./../../components/cart.jsx');

var models = require('../collections/menuItemsCollection');
var cartModels = require('../collections/cartItems');

var menuItemsJson = require('../menuitems.json');
// var menuModel = new models.MenuModel();
// var cartModel = new cartModels.CartModel();
var menuCollection = new models.MenuCollection(menuItemsJson);
var cartCollection = new cartModels.CartCollection();


var Router = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'menu': 'menuInteract',
    'cartInteract': 'cartInteract'
  },
  welcome: function(){
    ReactDOM.render(
      React.createElement(WelcomePage), document.getElementById('app')
    );
  },
  menuInteract: function(){
    ReactDOM.render(
      React.createElement(
        MenuInfoPage,
        {
          collection: menuCollection,
          cartCollection: cartCollection
        }), document.getElementById('app')
    );
  }
});

module.exports = Router;
