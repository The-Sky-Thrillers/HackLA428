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


  // data TBD

});
