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
      showStores: true
    };
    this.toggleStores = this.toggleStores.bind(this);
    this.layout = this.layout.bind(this);
    this.initMap = this.initMap.bind(this);
    this.showStores = this.showStores.bind(this);

    this.map = undefined;
  }

  toggleStores() {
    this.setState({
      showStores: !this.state.showStores
    });
  }

  showStores() {
    this.setState({
      showStores: true
    });
  }

  initMap(map) {
    this.map = map;
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
            showStores={this.state.showStores}
            stores={preload.stores}
            map={this.map}
          />
          <Map stores={preload.stores} map={this.map} initMap={this.initMap} showStores={this.showStores} />
        </div>
      </div>
    );
  }
}

export default App;
