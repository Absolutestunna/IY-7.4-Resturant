var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var CartComponent = require('./cart.jsx');

// var CartCollection = require('./../scripts/collections/cartItems').CartCollection;
// var cartCollection = new CartCollection();


// var newTotal = item.get('price') + this.state.total;
// this.setState({'total': newTotal});


var MenuPageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return (
      {
        'total': 0,
        'qty': 0
      }
    );
  },
  addItemToOrder: function(model, e){
    e.preventDefault()
    this.props.cartCollection.add(model)
    this.forceUpdate()
  },
  render: function(){
    var categorySelection = _.uniq(this.props.collection.pluck('Category'));
    var menuShow = categorySelection.map(function(item){
      var selected = this.props.collection.where({Category: item});
      return(
        <MenuCategory categoryName={item} key={item} collection={selected} addItemToOrder={this.addItemToOrder} />
      )

    }.bind(this));
    return (
      <div>
        <div className="container-fluid" id="fluid">
           <div className="row">
              <div className="header-top col-md-12">
                <div className="header-top-contents">
                  <span className="title">MAD CITY</span>
                </div>
             </div>
             <div className="col-md-12 header-bottom">
               <div className="col-md-12 header-overlay">
                 <div className="header-bottom-contents col-md-12">
                       <p>Mad Thai Resturant</p>
                       <p>Times</p>
                       <p>Address</p>
                  </div>
               </div>
             </div>
           </div>
         </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>MENU</h4>
                <div className="selections">
                  {menuShow}
                </div>
            </div>
            <CartComponent
              cartCollection={this.props.cartCollection}
               />
          </div>
        </div>
      </div>
    );
  }
});

var MenuCategory = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var menuSelection = this.props.collection.map(function(item){
      return(
        <MenuItemComponent
          key={item.cid}
          model={item}
          addItemToOrder={this.props.addItemToOrder}
          />
      );
    }.bind(this));

    return (
      <div>
        <div className="panel-group" role="tablist">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="collapseListGroupHeading1">
              <h4 className="panel-title">
                <a className="" role="button" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="true" aria-controls="collapseListGroup1"> {this.props.categoryName}
                </a>
              </h4>
            </div>

              <div id="collapseListGroup1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1" aria-expanded="true">
                  <ul className="list-group">
                    {menuSelection}
                  </ul>
              </div>
            </div>
          </div>
      </div>
    )
  }
});

var MenuItemComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var model = this.props.model;
    return (
        <div className="list-group-item" id="order-lists">
          <span className="food-selection">{model.get('Name')}</span>
          <input type="number" />
          <span onClick={this.props.addItemToOrder.bind(this, model)} className="price-selection"><button className="btn btn-primary">{model.get('Price')}</button></span>
      </div>
    );
  }
});


module.exports = MenuPageComponent;
