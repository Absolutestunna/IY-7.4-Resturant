var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');


var CartComponent = React.createClass({displayName: "CartComponent",
  mixins: [Backbone.React.Component.mixin],
  componentWillMount: function(){
    this.props.cartCollection.on('update', function(){
      this.forceUpdate();
    }.bind(this))
  },
  handleFinalOrder: function(e){
    console.log('working');
    this.props.cartCollection.map(function(model){
      console.log(model.get('Price'))
    });
  },
  render: function(){
    var order = this.props.cartCollection.map(function(item){
      return React.createElement(OrderItem, {
        key: item.cid, 
        order: item, 
        cartCollection: this.props.cartCollection}
        )
    }.bind(this))
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
          ), 
          React.createElement("button", {onClick: this.handleFinalOrder, className: "btn btn-success"}, "Add to Order")
        )
      )
    );
  }
});

var OrderItem = React.createClass({displayName: "OrderItem",
  handleDelete: function(e){
    e.preventDefault();
    this.props.cartCollection.remove(this.props.order)
  },
  render: function(){

    return (
      React.createElement("div", {className: "item"}, 
        React.createElement("span", null, this.props.order.get('Name')), 
        React.createElement("input", {onClick: this.handleDelete, type: "submit", className: "btn btn-danger", value: "X"}), 
        React.createElement("span", {className: "order-price"}, this.props.order.get('Price'))
      )
    );
  }
});
module.exports = CartComponent;