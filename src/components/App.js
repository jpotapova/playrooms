import React, { Component } from 'react';
import storeList from '../data/stores';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Map } from './Map.js';
import { ToggleButton } from './ToggleButton';
import { StoreList } from './StoreList';
import { Order } from './Order';
import { saveDistances, samePosition } from '../helpers';
import txt from '../data/text';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleStores = this.toggleStores.bind(this);
    this.myLocation = this.myLocation.bind(this);
    this.showStore = this.showStore.bind(this);
    this.updateStores = this.updateStores.bind(this);
    this.updateOrderBy = this.updateOrderBy.bind(this);

    this.state = {
      orderBy: 'title',
      desktop: true,
      showStores: true,
      openStore: -1,
      stores: storeList.stores,
      position: {
        latitude: undefined,
        longitude: undefined
      },
      loadingLocation: false
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

  updateOrderBy(orderBy) {
    this.setState({
      orderBy: orderBy
    });
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

        if (!samePosition(this.state.position, position.coords)) {
          let stores = saveDistances(this.state.stores, position.coords);
          this.setState({
            position: position.coords,
            orderBy: 'distance',
            stores: stores
          });
        }
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
      <div className="container">
        <Header />
        <Order
          orderBy={this.state.orderBy}
          updateOrderBy={this.updateOrderBy}
          loadingLocation={this.state.loadingLocation}
          myLocation={this.myLocation}
        />

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
            orderBy={this.state.orderBy}
          />
          <Map stores={this.state.stores} showStore={this.showStore} openStore={this.state.openStore} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
