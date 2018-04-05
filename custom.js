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

    var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(54.679479, 25.285295),
      map: map,
      title: 'Point 1'
    });
    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(54.687626, 25.287577),
      map: map,
      title: 'Point 2'
    });
    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(54.685884, 25.295608),
      map: map,
      title: 'Point 3'
    });

    var markers = []; //some array
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(marker1.getPosition());
    bounds.extend(marker2.getPosition());
    bounds.extend(marker3.getPosition());
    map.fitBounds(bounds);
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
