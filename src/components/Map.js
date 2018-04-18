import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);

    this.markers = [];
  }
  addMarker(map, index, position) {
    var marker = new window.google.maps.Marker({
      position: position,
      map: map,
      icon: './icon-store-black.svg'
    });
    marker.addListener('click', () => {
      map.panTo(position);
      this.props.showStore(index);
    });
    return marker;
  }
  componentDidMount() {
    // init map and bounds
    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 54.679408, lng: 25.284144 },
      zoom: 16
    });
    const bounds = new window.google.maps.LatLngBounds();

    // display markers and fit map to show all of them
    var position;
    this.props.stores.forEach((store, index) => {
      position = { lat: store.lat, lng: store.lng };
      this.markers.push(this.addMarker(map, index, position));
      bounds.extend(position);
    });
    map.fitBounds(bounds);
    this.props.initMap(map);
  }
  componentDidUpdate() {
    this.markers = this.colorMarkers(this.markers, this.props.openStore);
  }
  colorMarkers(markers, index) {
    // go through markers and assign appropriate colour
    markers.forEach((marker, markerIndex) => {
      if (index === markerIndex) {
        // active marker is red
        marker.setIcon('./icon-store-red.svg');
      } else {
        // regular marker is black
        marker.setIcon('./icon-store-black.svg');
      }
    });
    return markers;
  }
  render() {
    return <div ref="map" className="map" />;
  }
}

export { Map };
