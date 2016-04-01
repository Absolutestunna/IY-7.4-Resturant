var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');


var CartComponent = React.createClass({
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
          <button onClick={this.handleFinalOrder} className="btn btn-success">Add to Order</button>
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
        <span className="order-price">{this.props.order.get('Price')}</span>
      </div>
    );
  }
});
module.exports = CartComponent;
