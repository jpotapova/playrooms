import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import txt from '../data/text';
import { getDistanceFromLatLonInKm, orderStores } from '../helpers';

class Order extends Component {
  constructor(props) {
    super(props);
    this.myLocation = this.myLocation.bind(this);
    this.saveDistances = this.saveDistances.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      loadingLocation: false,
      orderDropdownOpen: false
    };
  }
  toggleDropdown() {
    this.setState({
      orderDropdownOpen: !this.state.orderDropdownOpen
    });
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
  selectOrder(orderBy) {
    this.props.updateOrderBy(orderBy);
    this.props.updateStores(orderStores(this.props.stores, orderBy));
  }
  render() {
    return (
      <div className="filters">
        <div className="filters-container">
          <span className={this.state.loadingLocation ? ' spinner-container ' : 'spinner-container hide'}>
            <span className="glyphicon glyphicon-repeat fast-right-spinner" />
          </span>
          <div className={this.state.orderDropdownOpen ? 'btn-group open' : 'btn-group'}>
            <button type="button" className="btn btn-info dropdown-toggle" onClick={this.toggleDropdown}>
              <span className="glyphicon glyphicon-sort-by-attributes" aria-hidden="true" />
              &nbsp;{txt[this.props.orderBy]}&nbsp;<span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">{txt.title}</a>
              </li>
              <li>
                <a href="#">{txt.price}</a>
              </li>
              <li>
                <a href="#">{txt.distance}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Order };
