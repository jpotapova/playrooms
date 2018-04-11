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
  }

  toggleStores() {
    this.setState({
      showStores: !this.state.showStores
    });
  }

  componentDidMount() {
    var mq = window.matchMedia('(min-width: 1025px)');
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
          <div className="store-list-container">
            <StoreList desktop={this.state.desktop} showStores={this.state.showStores} stores={preload.stores} />
          </div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
