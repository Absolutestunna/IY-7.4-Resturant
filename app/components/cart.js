var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
var FinalPageComponent = require('./finalPage.jsx');



var CartComponent = React.createClass({displayName: "CartComponent",
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      'total': 0
    }
  },
  componentWillMount: function(){
    this.props.cartCollection.on('update', function(){
      this.forceUpdate();
    }.bind(this))
  },
  cartTotal: function(number){

  },
  handleFinalOrder: function(e){
    var order_prices = [];
    var order_items = [];

    this.props.cartCollection.map(function(model){
      order_prices.push(model.get('Price'));
      order_items.push(model.get('Name'))
    });
    var total = _.reduce(order_prices, function(first, second){
      return first + second;
    }, 0)/(1000);
    this.setState({'total': total})
    console.log(total, order_items)






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
          React.createElement("button", {onClick: this.handleFinalOrder, className: "btn btn-success"}, "Place Order")
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
        React.createElement("span", {className: "order-price"}, this.props.order.get('Price')/1000)
      )
    );
  }
});
module.exports = CartComponent;