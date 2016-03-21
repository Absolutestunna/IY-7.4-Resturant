var Backbone = require('backbone');
var $ = require('jquery');


var Router = require('./routers/router');

var realRouter = new Router();
$(function(){
  Backbone.history.start();
});
