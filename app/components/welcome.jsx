var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');
//
// <video id="welcomeVid" loop autoPlay>
//   <source src="http://s3-eu-west-1.amazonaws.com/eu-west-1.vimeo.com/videos/452/085/452085124.mp4?AWSAccessKeyId=AKIAJXCO5OTU3FAVAVHA&Expires=1458532573&Signature=ITtghDg%2BnZx%2F7wj2WR3sLGyhjkk%3D" type="video/mp4" />
// </video>


  // <a href='http://www.freepik.com/free-vector/free-cooking-concept-vector-illustration_716181.htm'>Designed by Freepik</a>

var WelcomePageComponent = React.createClass({
  handleWebsiteAccess: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
        <div className='overlay'>
          <div className='overlay-content'>
            <p className='first'>MAD CITYS</p>
            <p className='second'>RECIPIES</p>
            <div className="welcome" onClick={this.handleWebsiteAccess}><a href="#">Welcome</a><i className="icon-chevron-right"></i>
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
});

module.exports = WelcomePageComponent;
