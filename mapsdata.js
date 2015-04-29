$(function(){

  // google maps config

  var map;
  function initialize() {
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(34, -118.2)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  var dotOptions = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: '#FF5B02',
    strokeColor: '#FF5B02',
    strokeWeight: 5,
    fillOpacity: 1.0
  };

  var orangeDot = new google.maps.Circle(dotOptions);


  // new route button handler

  $('#new-route-btn').on('click', function(e){
    var routeNumber = $('#route').val();

    var url = 'http://api.metro.net/agencies/lametro/routes/' + routeNumber + '/vehicles/';

    // request all the buses current location every 3000 ms and put them on the map
    setInterval(function() {
      $.get(url, function(data){
        data.items.forEach(function(bus) {

          var coordinate = new google.maps.LatLng(bus.latitude, bus.longitude);

          var marker = new google.maps.Marker({
            position: coordinate,
            map: map,
            icon: orangeDot
          });

          // setTimeout(function(){
          //   marker.setMap(null);
          // }, 3000);

        });
      });
    }, 3000);


  });

});
