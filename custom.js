$(function() {
  function initMap() {
    var location = new google.maps.LatLng(54.679408, 25.284144);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: location,
      zoom: 16,
      panControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initMap);
});
