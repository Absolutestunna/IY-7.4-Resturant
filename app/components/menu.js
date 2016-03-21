var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var CartComponent = require('./cart.jsx');
var cartCollection = require('./../scripts/collections/cartItems').CartCollection;
var CartCollection = new cartCollection();



var MenuPageComponent = React.createClass({displayName: "MenuPageComponent",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var categorySelection = _.uniq(this.props.collection.pluck('Category'));
    var menuShow = categorySelection.map(function(item){
      var selected = this.props.collection.where({Category: item});
      return(
        React.createElement(MenuCategory, {categoryName: item, key: item, collection: selected})
      )
    }.bind(this));

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container-fluid", id: "fluid"}, 
           React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "header-top col-md-12"}, 
                React.createElement("div", {className: "header-top-contents"}, 
                  React.createElement("span", {className: "title"}, "MAD CITY")
                )
             ), 
             React.createElement("div", {className: "col-md-12 header-bottom"}, 
               React.createElement("div", {className: "col-md-12 header-overlay"}, 
                 React.createElement("div", {className: "header-bottom-contents col-md-12"}, 
                       React.createElement("p", null, "Mad Thai Resturant"), 
                       React.createElement("p", null, "Times"), 
                       React.createElement("p", null, "Address")
                  )
               )
             )
           )
         ), 

        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-8"}, 
              React.createElement("h4", null, "MENU"), 
                React.createElement("div", {className: "selections"}, 
                  menuShow
                )
            ), 
            React.createElement(CartComponent, null
               )
          )
        )

      )
    );
  }
});

var MenuCategory = React.createClass({displayName: "MenuCategory",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var menuSelection = this.props.collection.map(function(item){
      return(
        React.createElement(MenuItemComponent, {
          key: item.cid, 
          model: item, 
          handleSelection: this.handleSelection, 
          boundItemClick: this.boundItemClick}
          )
      );
    }.bind(this));

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "panel-group", role: "tablist"}, 
          React.createElement("div", {className: "panel panel-default"}, 
            React.createElement("div", {className: "panel-heading", role: "tab", id: "collapseListGroupHeading1"}, 
              React.createElement("h4", {className: "panel-title"}, 
                React.createElement("a", {className: "", role: "button", "data-toggle": "collapse", href: "#collapseListGroup1", "aria-expanded": "true", "aria-controls": "collapseListGroup1"}, " ", this.props.categoryName
                )
              )
            ), 

              React.createElement("div", {id: "collapseListGroup1", className: "panel-collapse collapse in", role: "tabpanel", "aria-labelledby": "collapseListGroupHeading1", "aria-expanded": "true"}, 
                  React.createElement("ul", {className: "list-group"}, 
                    menuSelection
                  )
              )
            )
          )
      )
    )
  }
});

var MenuItemComponent = React.createClass({displayName: "MenuItemComponent",
  mixins: [Backbone.React.Component.mixin],
  handleSelection: function(order){
    CartCollection.add(order)
  },
  render: function(){
    var model = this.props.model;
    var boundItemClick = this.handleSelection.bind(this, model);
    return (
      React.createElement("div", null, 
        React.createElement("li", {onClick: boundItemClick, className: "list-group-item", id: "order-lists"}, 
          React.createElement("span", {className: "food-selection"}, model.get('Name')), 
          React.createElement("span", {className: "price-selection"}, model.get('Price'))
        )
      )
    );
  }
});


module.exports = MenuPageComponent;