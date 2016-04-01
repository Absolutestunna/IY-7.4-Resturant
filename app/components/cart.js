var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
// var CartCollection = require('./../scripts/collections/cartItems').CartCollection;
// var cartCollection = new CartCollection();



var CartComponent = React.createClass({displayName: "CartComponent",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var order = this.props.cartCollection.map(function(item){
      return React.createElement(OrderItem, {
        key: item.cid, 
        order: item}
        )
    })
    console.log(order)
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-4", id: "orders"}, 
          React.createElement("h4", null, "ORDERS"), 
          React.createElement("h4", {id: "order-title"}, "MAD CITY"), 
          React.createElement("div", {id: "order-heading"}, 
            React.createElement("span", null, "Item"), 
            React.createElement("span", null, "Price")
          ), 


          React.createElement("div", {className: "orders-list"}, 
            order
          )
        )

      )
    );
  }
});

var OrderItem = React.createClass({displayName: "OrderItem",
  render: function(){

    return (

      React.createElement("div", null, 
        React.createElement("span", null, this.props.order.get('Name')), 
        React.createElement("span", {className: "order-price"}, this.props.order.get('Price'))
      )
    );
  }
});
module.exports = CartComponent;