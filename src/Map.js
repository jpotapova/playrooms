import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }
  addMarker(map, bounds, position) {
    var marker = new window.google.maps.Marker({
      position: position,
      map: map
    });
    marker.addListener('click', () => {
      map.panTo(position);
      this.props.showStores();
    });
    bounds.extend(position);
  }
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 54.679408, lng: 25.284144 },
      zoom: 16
    });
    this.props.initMap(map);

    const bounds = new window.google.maps.LatLngBounds();
    this.props.stores.forEach(store => {
      this.addMarker(map, bounds, { lat: store.lat, lng: store.lng });
    });
    map.fitBounds(bounds);
  }
  render() {
    return <div ref="map" className="map" />;
  }
}

export { Map };
