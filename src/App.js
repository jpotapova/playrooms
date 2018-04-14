import React, { Component } from 'react';
import './App.css';
import preload from './data';

import { Map } from './Map.js';
import { ToggleButton } from './ToggleButton';
import { StoreList } from './StoreList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true,
      showStores: true,
      openStore: -1
    };
    this.toggleStores = this.toggleStores.bind(this);
    this.layout = this.layout.bind(this);
    this.initMap = this.initMap.bind(this);
    this.showStore = this.showStore.bind(this);
    this.backToList = this.backToList.bind(this);
    this.colorMarkers = this.colorMarkers.bind(this);
    this.map = undefined;
    this.markers = [];
  }

  toggleStores() {
    this.setState({
      showStores: !this.state.showStores
    });
  }

  showStore(id) {
    this.setState({ openStore: id });
    this.colorMarkers(id);
  }

  backToList() {
    this.setState({ openStore: -1 });
    this.colorMarkers(-1);
  }

  initMap(map, markers) {
    this.map = map;
    this.markers = markers;
  }

  componentDidMount() {
    this.layout();
  }

  layout() {
    const mq = window.matchMedia('(min-width: 1025px)');
    this.setState({ desktop: mq.matches });
    mq.addListener(e => {
      this.setState({ desktop: e.matches });
    });
  }

  colorMarkers(index) {
    this.markers.forEach((marker, markerIndex) => {
      if (index === markerIndex) {
        marker.setIcon('./icon-store-red.svg');
      } else {
        marker.setIcon('./icon-store-black.svg');
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Store locator template</h1>
        </div>

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
            stores={preload.stores}
            map={this.map}
            openStore={this.state.openStore}
            backToList={this.backToList}
          />
          <Map stores={preload.stores} map={this.map} initMap={this.initMap} showStore={this.showStore} />
        </div>
      </div>
    );
  }
}

export default App;
