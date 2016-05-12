var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var WelcomePageComponent = React.createClass({
  handleWebsiteAccess: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <div className="row first-el">
          <div className="col-md-12">
            <div className="welcome-nav">
              <span>Go to </span><a onClick={this.handleWebsiteAccess}>Menu</a><i className="icon-chevron-right"></i>
            </div>
            <div className="welcome-body">
              <h4>Welcome to</h4>
              <h1>MAD CITY RECIPIES</h1>
            </div>

          </div>
        </div>
        <div className="row second-el">
          <section className="col-md-4 about">
            <h2>About</h2>
            <p>Mad City offers authentic Nigerian dishes highlighting the best dishes from diverse cultural groups in Nigeria.</p>
            <p>The food is known for spicy flavors and unequivocally African.</p>
          </section>
          <section className="col-md-4">
            <h2>Contact</h2>
            <div className="address"><i className="fa fa-home" aria-hidden="true"></i><span>555 Unknown St, Greenville SC 55555</span></div>
            <div className="telephone"><i className="fa fa-phone" aria-hidden="true"></i><span>555-555-5555</span>
            </div>
          </section>
          <section className="col-md-4">
            <h2>Hours</h2>
            <p>Sun: Closed</p>
            <p>Mon: 9a.m - 9p.m</p>
            <p>Tue: 9a.m - 9p.m</p>
            <p>Wed: 9a.m - 9p.m</p>
            <p>Thur: 9a.m - 9p.m</p>
            <p>Fri: 9a.m - 9p.m</p>

          </section>

        </div>
    </div>
    );
  }
});

module.exports = WelcomePageComponent;
