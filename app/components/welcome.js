var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');
//



  // <a href='http://www.freepik.com/free-vector/free-cooking-concept-vector-illustration_716181.htm'>Designed by Freepik</a>

var WelcomePageComponent = React.createClass({displayName: "WelcomePageComponent",
  handleWebsiteAccess: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-12"}, 
        React.createElement("video", {id: "welcomeVid", loop: true, autoPlay: true}, 
          React.createElement("source", {src: "http://s3-eu-west-1.amazonaws.com/eu-west-1.vimeo.com/videos/489/780/489780460.mp4?AWSAccessKeyId=AKIAJXCO5OTU3FAVAVHA&Expires=1462164045&Signature=i45YSOu0Ze%2BhBUSb%2FQAtDVTinN8%3D", type: "video/mp4"})
        ), 
        React.createElement("div", {className: "overlay"}, 
          React.createElement("div", {className: "overlay-content"}, 
            React.createElement("p", {className: "first"}, "MAD CITYS"), 
            React.createElement("p", {className: "second"}, "RECIPIES"), 
            React.createElement("div", {className: "welcome", onClick: this.handleWebsiteAccess}, React.createElement("a", {href: "#"}, "Welcome"), React.createElement("i", {className: "icon-chevron-right"})
            )
          )
        )
        )
    )
    );
  }
});

module.exports = WelcomePageComponent;