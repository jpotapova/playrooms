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

    marker1.addListener('click', animations.toggleList);
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

  var animations = {
    toggleList: function() {
      $('.store-list-container').animate(
        {
          width: 'toggle'
        },
        function() {
          $('#show-list, #hide-list').toggleClass('hidden');
        }
      );
    }
  };

  function toggleList() {
    $('#toggle-list').click(animations.toggleList);
  }

  function showMap() {
    $('.more-details .to-map').click(function() {
      animations.toggleList();
      var latLng = new google.maps.LatLng(54.679479, 25.285295); //marker 1
      map.setCenter(latLng);
    });
  }

  function accordion() {
    $('.list-group-item').click(function() {
      if (
        $(this)
          .find('.more-details')
          .is(':hidden')
      ) {
        $('.list-group-item').hide();
        $(this)
          .find('.more-details')
          .show();
        $(this).fadeIn();
      }
    });
  }

  function toList() {
    $('.to-list').click(function() {
      $('.list-group-item').fadeOut(function() {
        $('.list-group-item .more-details').hide();
        $('.list-group-item').fadeIn();
      });
    });
  }

  function init() {
    google.maps.event.addDomListener(window, 'load', initMap);
    toggleList();
    showMap();
    toList();
    accordion();
  }

  init();
});
