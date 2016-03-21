var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
var CartCollection = require('./../scripts/collections/cartItems').CartCollection;
var cartCollection = new CartCollection();

var CartComponent = React.createClass({displayName: "CartComponent",
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-4", id: "orders"}, 
          React.createElement("h4", null, "ORDERS")
        ), 
        React.createElement("ul", null

        )
      )
    );
  }
});
module.exports = CartComponent;