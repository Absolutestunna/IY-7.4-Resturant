var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var MenuComponent = require('./menu.jsx');
var CartCollection = require('./../scripts/collections/cartItems').CartCollection;
var cartCollection = new CartCollection();

var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div>
        <div className='col-md-4' id="orders">
          <h4>ORDERS</h4>
        </div>
        <ul>

        </ul>
      </div>
    );
  }
});
module.exports = CartComponent;
