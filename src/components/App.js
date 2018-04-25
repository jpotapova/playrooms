import React, { Component } from 'react';
import storeData from '../data/stores';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Map } from './Map.js';
import { ToggleButton } from './ToggleButton';
import { StoreList } from './StoreList';
import { Order } from './Order';
import { Filters } from './Filters';
import { saveDistances, samePosition } from '../helpers';
import txt from '../data/text';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleStores = this.toggleStores.bind(this);
    this.myLocation = this.myLocation.bind(this);
    this.showStore = this.showStore.bind(this);
    this.updateOrderBy = this.updateOrderBy.bind(this);
    this.chooseCity = this.chooseCity.bind(this);

    this.state = {
      orderBy: 'title',
      desktop: true,
      mobile: false,
      showStores: true,
      openStore: -1,
      stores: storeData.stores,
      position: {
        latitude: undefined,
        longitude: undefined
      },
      loadingLocation: false,
      city: storeData.cities[0]
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
    const mqDesktop = window.matchMedia('(min-width: 1025px)');
    this.setState({ desktop: mqDesktop.matches });
    mqDesktop.addListener(e => {
      this.setState({ desktop: e.matches });
    });

    // detect small screen
    const mqMobile = window.matchMedia('(max-width: 610px)');
    this.setState({ mobile: mqMobile.matches });
    mqMobile.addListener(e => {
      this.setState({ mobile: e.matches });
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

        if (samePosition(this.state.position, position.coords)) {
          this.setState({
            orderBy: 'distance'
          });
        } else {
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

  chooseCity(city) {
    this.setState({
      city: city
    });
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Filters cities={storeData.cities} city={this.state.city} chooseCity={this.chooseCity} />
        <Order
          orderBy={this.state.orderBy}
          updateOrderBy={this.updateOrderBy}
          loadingLocation={this.state.loadingLocation}
          myLocation={this.myLocation}
          openStore={this.state.openStore}
        />

        <ToggleButton
          showStores={this.state.showStores}
          toggleStores={this.toggleStores}
          desktop={this.state.desktop}
        />

        <div className="store-locator">
          <StoreList
            desktop={this.state.desktop}
            mobile={this.state.mobile}
            showStore={this.showStore}
            showStores={this.state.showStores}
            stores={this.state.stores}
            openStore={this.state.openStore}
            orderBy={this.state.orderBy}
            toggleStores={this.toggleStores}
          />
          <Map stores={this.state.stores} showStore={this.showStore} openStore={this.state.openStore} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
