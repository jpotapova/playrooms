import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const google = window.google;
    const map = new google.maps.Map(this.refs.map, {
      center: { lat: 54.679408, lng: 25.284144 },
      zoom: 16
    });
    this.props.initMap(map);

    var bounds = new google.maps.LatLngBounds();

    this.props.stores.forEach(store => {
      if (store.lat && store.lng) {
        var position = { lat: store.lat, lng: store.lng };
        new google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map: map
        });
        bounds.extend(position);
      }
    });

    map.fitBounds(bounds);
  }
  render() {
    return <div ref="map" className="map" />;
  }
}

export { Map };
