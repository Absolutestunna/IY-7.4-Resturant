var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var WelcomePage = require('./../../components/welcome.jsx');
var MenuInfoPage = require('./../../components/menu.jsx');
var CartInfoPage = require('./../../components/cart.jsx');

var Orders = require('../collections/orderItems').OrderCollection;
var Models = require('../collections/menuItemsCollection');
var CartModels = require('../collections/cartItems');

var menuItemsJson = require('../menuitems.json');
// var menuModel = new models.MenuModel();
var cartModel = new CartModels.CartModel();
var menuCollection = new Models.MenuCollection(menuItemsJson);
var cartCollection = new CartModels.CartCollection();
var orderCollection = new Orders();


var Router = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'menu': 'menuInteract',
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
          cartCollection: cartCollection,
          orderCollection: orderCollection
        }), document.getElementById('app')
    );
  }
});

module.exports = Router;
