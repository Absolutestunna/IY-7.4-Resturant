var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var WelcomePageComponent = React.createClass({displayName: "WelcomePageComponent",
  handleWebsiteAccess: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row first-el"}, 
          React.createElement("div", {className: "col-md-12"}, 
            React.createElement("div", {className: "welcome-body row"}, 
              React.createElement("div", {className: "col-md-4 col-sm-8 col-xs-12"}, 
                React.createElement("h4", null, "Welcome to"), 
                React.createElement("h1", null, "MAD CITY RECIPIES")
              )
            ), 
            React.createElement("div", {className: "welcome-nav row"}, 
              React.createElement("div", {className: "col-md-3 col-md-offset-9 col-sm-4 col-sm-offset-8 col-xs-9 col-xs-offset-3"}, 
                React.createElement("button", {onClick: this.handleWebsiteAccess, className: "button"}, React.createElement("span", null, "Proceed to Menu "))
              )
            )
          )
        ), 
        React.createElement("div", {className: "row second-el"}, 
          React.createElement("section", {className: "col-md-4 about"}, 
            React.createElement("h2", null, "About"), 
            React.createElement("p", null, "Mad City offers authentic Nigerian dishes highlighting the best dishes from diverse cultural groups in Nigeria."), 
            React.createElement("p", null, "The food is known for spicy flavors and unequivocally African."), 
            React.createElement("p", null, "Do you want some of Nigeria's best dishes catered to your event?"), 
            React.createElement("p", null, "Feel free to give us a call for a quote!")
          ), 
          React.createElement("section", {className: "col-md-4"}, 
            React.createElement("h2", null, "Contact"), 
            React.createElement("div", {className: "address"}, React.createElement("i", {className: "fa fa-home", "aria-hidden": "true"}), React.createElement("span", null, "555 Unknown St, Greenville SC 55555")), 
            React.createElement("div", {className: "telephone"}, React.createElement("i", {className: "fa fa-phone", "aria-hidden": "true"}), React.createElement("span", null, "555-555-5555")
            )
          ), 
          React.createElement("section", {className: "col-md-4"}, 
            React.createElement("h2", null, "Hours"), 
            React.createElement("p", null, "Sun: Closed"), 
            React.createElement("p", null, "Mon: 9 a.m - 9 p.m"), 
            React.createElement("p", null, "Tue: 9 a.m - 9 p.m"), 
            React.createElement("p", null, "Wed: 9 a.m - 9 p.m"), 
            React.createElement("p", null, "Thur: 9 a.m - 9 p.m"), 
            React.createElement("p", null, "Fri: 9 a.m - 9 p.m"), 
            React.createElement("p", null, "Sat: 9 a.m - 9 p.m")


          )

        ), 
        React.createElement("footer", null

        )
    )
    );
  }
});

module.exports = WelcomePageComponent;