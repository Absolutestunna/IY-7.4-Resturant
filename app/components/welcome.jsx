var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');
//



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
        <video id="welcomeVid" loop autoPlay>
          <source src="http://s3-eu-west-1.amazonaws.com/eu-west-1.vimeo.com/videos/489/780/489780460.mp4?AWSAccessKeyId=AKIAJXCO5OTU3FAVAVHA&Expires=1462164045&Signature=i45YSOu0Ze%2BhBUSb%2FQAtDVTinN8%3D" type="video/mp4" />
        </video>
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
