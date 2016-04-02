var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');
var Modal = require("react-awesome-modal");


var MenuComponent = require('./menu.jsx');


var CartComponent = React.createClass({displayName: "CartComponent",
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      'total': 0,
      visible: false
    }
  },
  openModal: function(){
    this.setState({
      visible: true
    })
  },
  closeModal: function(){
    this.setState({
      visible: false
    })
    location.reload();
    this.forceUpdate();

  },
  componentWillMount: function(){
    this.props.cartCollection.on('update', function(){
      this.forceUpdate();
    }.bind(this))
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
    this.setState({'total': total.toFixed(2)})
    {/*this.props.orderCollection.create({
      'orders': order_items,
      'total': this.state.total
    })*/}
    this.openModal();
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
        ), 

          React.createElement(Modal, {
              visible: this.state.visible, 
              width: "400", 
              height: "300", 
              effect: "fadeInRight"}, 
              React.createElement("div", {className: "order-info"}, 
                React.createElement("h2", {className: "order-information"}, "Order Info"), 
                  React.createElement("h4", {className: "order-total"}, "Your total order is: $", this.state.total), 
                  React.createElement("p", {className: "gratitude"}, "Thank you for your order!"), 
                  React.createElement("button", {className: "btn btn-success close-modal", href: "javascript:void(0);", onClick: this.closeModal}, "Close")
              )
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
        React.createElement("span", {className: "order-price"}, "$", (this.props.order.get('Price')/1000).toFixed(2))
      )
    );
  }
});
module.exports = CartComponent;