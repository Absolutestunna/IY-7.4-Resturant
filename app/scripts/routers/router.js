var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var WelcomePage = require('./../../components/welcome.jsx');
var MenuInfoPage = require('./../../components/menu.jsx');
var models = require('../collections/menuItemsCollection');

var menuItemsJson = require('../menuitems.json');
var menuCollection = new models.MenuCollection(menuItemsJson);


var Router = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'menu': 'menuInteract'
  },
  welcome: function(){
    ReactDOM.render(
      React.createElement(WelcomePage), document.getElementById('app')
    );
  },
  menuInteract: function(){
    ReactDOM.render(
      React.createElement(MenuInfoPage, {collection: menuCollection}), document.getElementById('app')
    );
  }
});

module.exports = Router;
