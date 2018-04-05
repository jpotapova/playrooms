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

  function init() {
    google.maps.event.addDomListener(window, 'load', initMap);
    setWidth();
    toggleList();
  }

  function setWidth() {
    var storeListW = $('.store-list').outerWidth();
    $('.store-list').css('width', storeListW);
  }

  function toggleList() {
    $('#toggle-list').click(function() {
      $('#show-list').toggleClass('hidden');
      $('#hide-list').toggleClass('hidden');
    });
  }

  init();
});
