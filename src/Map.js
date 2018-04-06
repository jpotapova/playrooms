import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    return (
      <div id="map" className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBlaBL7hioLy7fI47zfwk9fiSKrMJtWZWI' }}
          defaultCenter={[54.679408, 25.284144]}
          defaultZoom={16}
        />
      </div>
    );
  }
}

export { Map };
