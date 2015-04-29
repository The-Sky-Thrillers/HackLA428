

$.ajax({
  url: "http://api.metro.net/agencies/lametro/routes/",
  success: function( data ) {
    // console.log(data)
    getRoutes(data);
  }
});


var getRoutes = function (data) {
  console.log(data)
  var len = data.items.length;
  var routes = data.items;

  routes.forEach(function(route){
    console.log(route)
    // fb.set({routeId: route.id, routeName: route.display_name })
  })
}
