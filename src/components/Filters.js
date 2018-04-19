import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import txt from '../data/text';
import { getDistanceFromLatLonInKm, orderStores } from '../helpers';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.myLocation = this.myLocation.bind(this);
    this.saveDistances = this.saveDistances.bind(this);
    this.state = {
      loadingLocation: false
    };
  }
  saveDistances(stores, position) {
    // update all stores with distance from current location
    var updatedStores = stores.map(store => {
      var d = getDistanceFromLatLonInKm(position.latitude, position.longitude, store.lat, store.lng);
      store['distance'] = d.toFixed(1);
      return store;
    });
    // order by distance from my location
    return orderStores(updatedStores, 'distance');
  }
  myLocation() {
    this.setState({
      loadingLocation: true
    });

    navigator.geolocation.getCurrentPosition(
      position => {
        // success obtaining location
        this.setState({
          loadingLocation: false
        });
        let stores = this.saveDistances(this.props.stores, position.coords);
        this.props.updateStores(stores);
      },
      error => {
        // error obtaining location
        this.setState({
          loadingLocation: false
        });

        alert(txt.locationError);
      },
      {
        maximumAge: Infinity
      }
    );
  }
  render() {
    return (
      <div className="filters">
        <div className="filters-container">
          <span className={this.state.loadingLocation ? ' spinner-container ' : 'spinner-container hide'}>
            <span className="glyphicon glyphicon-repeat fast-right-spinner" />
          </span>
          <Button bsStyle="info" onClick={this.myLocation}>
            {txt.distance}
          </Button>
        </div>
      </div>
    );
  }
}

export { Filters };
