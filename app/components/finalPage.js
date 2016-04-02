var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

var FinalPageComponent = React.createClass({displayName: "FinalPageComponent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-4"}

        )
      )
    );
  }
});

module.exports = FinalPageComponent;