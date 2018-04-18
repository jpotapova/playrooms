import React, { Component } from 'react';
import storeList from '../data/stores';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Map } from './Map.js';
import { ToggleButton } from './ToggleButton';
import { StoreList } from './StoreList';
import { Filters } from './Filters';
import { orderStores } from '../helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleStores = this.toggleStores.bind(this);

    this.showStore = this.showStore.bind(this);
    this.updateStores = this.updateStores.bind(this);

    this.state = {
      desktop: true,
      showStores: true,
      openStore: -1,
      stores: orderStores(storeList.stores, 'title')
    };
  }

  toggleStores() {
    // show/hide list of stores
    this.setState({
      showStores: !this.state.showStores
    });
  }

  showStore(id = -1) {
    // view only single store
    this.setState({ openStore: id });
  }

  componentDidMount() {
    // detect large screen
    const mq = window.matchMedia('(min-width: 1025px)');
    this.setState({ desktop: mq.matches });
    mq.addListener(e => {
      this.setState({ desktop: e.matches });
    });
  }

  updateStores(stores) {
    this.setState({
      stores: stores
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Filters updateStores={this.updateStores} stores={this.state.stores} />

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
            openStore={this.state.openStore}
          />
          <Map stores={this.state.stores} showStore={this.showStore} openStore={this.state.openStore} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
