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

    return (
      <div>
        <div className='col-md-4' id="orders">
          <h4>ORDERS</h4>
        </div>
        <ul>
          {order}
        </ul>
      </div>
    );
  }
});

var OrderItem = React.createClass({
  render: function(){
    return (
      <li>
        <span>{this.props.order.get('Name')}</span>
        <span className="order-price">{this.props.order.get('Price')}</span>
      </li>
    );
  }
});
module.exports = CartComponent;
