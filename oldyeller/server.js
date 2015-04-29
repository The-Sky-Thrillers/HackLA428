// old yeller fetches the data, continuously

var needle = require ('needle');
var Promise = require('es6-promise').Promise;
var Firebase = require('Firebase');
var baseUrl = 'http://api.metro.net/agencies/lametro/routes/';
var dataStore = new Firebase("https://lahack-transit.firebaseio.com");

var options = {
  follow_max: 5,    // follow up to five redirects 
};
 
var stream = needle.get(baseUrl, options);
var routes = {};

stream.on('readable', function() {
  while (data = this.read()) {
    var items = data.items;
    items.forEach(function(route){
      routes[route.id] = [];
    });
    dataStore.set(routes);
  }
});

