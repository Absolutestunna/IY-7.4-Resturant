var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
// var CartCollection = require('./../scripts/collections/cartItems').CartCollection;
// var cartCollection = new CartCollection();



var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var order = this.props.cartCollection.map(function(item){
      return <OrderItem
        key = {item.cid}
        order = {item}
        />
    })
    console.log(order)
    return (
      <div>
        <div className='col-md-4' id="orders">
          <h4>ORDERS</h4>
          <h4 id="order-title">MAD CITY</h4>
          <div id="order-heading">
            <span>Item</span>
            <span>Price</span>
          </div>


          <div className="orders-list">
            {order}
          </div>
        </div>

      </div>
    );
  }
});

var OrderItem = React.createClass({
  render: function(){

    return (

      <div>
        <span>{this.props.order.get('Name')}</span>
        <span className="order-price">{this.props.order.get('Price')}</span>
      </div>
    );
  }
});
module.exports = CartComponent;
