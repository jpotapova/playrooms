$(function() {
  var map;
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
    map = new google.maps.Map(mapCanvas, mapOptions);

    var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(54.679479, 25.285295),
      map: map,
      title: 'Point 1'
    });
    marker1.addListener('click', function() {
      $('#store-list-wrapper').collapse('toggle');
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
    showMap();
  }

  function setWidth() {
    var storeListW = $('.store-list').outerWidth();
    $('.store-list').css('width', storeListW);
  }

  function toggleList() {
    $('#store-list-wrapper').on('hidden.bs.collapse', function() {
      $('#show-list').removeClass('hidden');
      $('#hide-list').addClass('hidden');
    });
    $('#store-list-wrapper').on('shown.bs.collapse', function() {
      $('#show-list').addClass('hidden');
      $('#hide-list').removeClass('hidden');
    });
  }

  function showMap() {
    $('#map-1').click(function() {
      $('#store-list-wrapper').collapse('toggle');
      var latLng = new google.maps.LatLng(54.679479, 25.285295); //marker 1
      map.setCenter(latLng);
    });
  }

  init();
});
