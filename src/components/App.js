import React, { Component } from 'react';
import storeList from '../data/stores';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Map } from './Map.js';
import { ToggleButton } from './ToggleButton';
import { StoreList } from './StoreList';
import { Filters } from './Filters';
import { getDistanceFromLatLonInKm } from '../helpers/distanceCalc';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleStores = this.toggleStores.bind(this);
    this.layout = this.layout.bind(this);
    this.initMap = this.initMap.bind(this);
    this.showStore = this.showStore.bind(this);
    this.backToList = this.backToList.bind(this);
    this.colorMarkers = this.colorMarkers.bind(this);
    this.orderStores = this.orderStores.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.map = undefined;
    this.markers = [];

    this.state = {
      desktop: true,
      showStores: true,
      openStore: -1,
      stores: this.orderStores(storeList.stores, 'title')
    };
  }

  toggleStores() {
    // show/hide list of stores
    this.setState({
      showStores: !this.state.showStores
    });
  }

  showStore(id) {
    // view only single store
    this.setState({ openStore: id });
    this.colorMarkers(id);
  }

  backToList() {
    // view full store list
    this.setState({ openStore: -1 });
    this.colorMarkers(-1);
  }

  initMap(map, markers) {
    // save refs to initialised map and markers
    this.map = map;
    this.markers = markers;
  }

  componentDidMount() {
    this.layout();
  }

  layout() {
    // detect large screen
    const mq = window.matchMedia('(min-width: 1025px)');
    this.setState({ desktop: mq.matches });
    mq.addListener(e => {
      this.setState({ desktop: e.matches });
    });
  }

  colorMarkers(index) {
    // go through markers and assign appropriate colour
    this.markers.forEach((marker, markerIndex) => {
      if (index === markerIndex) {
        // active marker is red
        marker.setIcon('./icon-store-red.svg');
      } else {
        // regular marker is black
        marker.setIcon('./icon-store-black.svg');
      }
    });
  }

  orderStores(stores, sortBy) {
    return stores.sort((store1, store2) => {
      if (store1[sortBy] < store2[sortBy]) {
        return -1;
      }
      if (store1[sortBy] > store2[sortBy]) {
        return 1;
      }
      return 0;
    });
  }

  setLocation(lat, lng) {
    // update all stores with distance from current location
    var stores = this.state.stores.map(store => {
      var d = getDistanceFromLatLonInKm(lat, lng, store.lat, store.lng);
      store['distance'] = d.toFixed(1);
      return store;
    });
    // order by distance from my location
    stores = this.orderStores(stores, 'distance');
    this.setState({
      stores: stores
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Filters setLocation={this.setLocation} />

        <ToggleButton
          showStores={this.state.showStores}
          toggleStores={this.toggleStores}
          desktop={this.state.desktop}
        />

        <div className="store-locator">
          <StoreList
            desktop={this.state.desktop}
            showStore={this.showStore}
            showStores={this.state.showStores}
            stores={this.state.stores}
            map={this.map}
            openStore={this.state.openStore}
            backToList={this.backToList}
          />
          <Map stores={this.state.stores} map={this.map} initMap={this.initMap} showStore={this.showStore} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
