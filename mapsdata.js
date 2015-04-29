$(function(){

  // google maps config

  var map;
  function initialize() {
    var mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(34, -118)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);


  // data TBD

});
