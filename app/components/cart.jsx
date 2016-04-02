var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
var FinalPageComponent = require('./finalPage.jsx');



var CartComponent = React.createClass({
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
      return <OrderItem
        key = {item.cid}
        order = {item}
        cartCollection = {this.props.cartCollection}
        />
    }.bind(this))
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
          <button onClick={this.handleFinalOrder} className="btn btn-success">Place Order</button>
        </div>
      </div>
    );
  }
});

var OrderItem = React.createClass({
  handleDelete: function(e){
    e.preventDefault();
    this.props.cartCollection.remove(this.props.order)
  },
  render: function(){

    return (
      <div className="item">
        <span>{this.props.order.get('Name')}</span>
        <input onClick={this.handleDelete} type="submit" className="btn btn-danger" value="X"/>
        <span className="order-price">{this.props.order.get('Price')/1000}</span>
      </div>
    );
  }
});
module.exports = CartComponent;
