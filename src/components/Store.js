import React, { Component } from 'react';
import { Distance } from './Distance';
import { MoreDetails } from './MoreDetails';
import { MainDetails } from './MainDetails';

class Store extends Component {
  constructor(props) {
    super(props);
    this.showStore = this.showStore.bind(this);
    this.getClass = this.getClass.bind(this);

    this.store = this.props.store;
  }
  getClass(id, openStoreId) {
    // animate element entrance when single store is selected
    var result = 'list-group-item';
    if (openStoreId > -1) {
      if (id === openStoreId) {
        result = result + ' animated fadeIn';
      } else {
        result = result + ' hidden';
      }
    }
    return result;
  }
  showStore() {
    // select single store
    this.props.showStore(this.props.id);
    this.props.map.panTo({ lat: this.store.lat, lng: this.store.lng });
  }
  render() {
    return (
      <div className={this.getClass(this.props.id, this.props.openStore)}>
        <Distance distance={this.store.distance} />
        <MainDetails
          showStore={this.showStore}
          title={this.store.title}
          area={this.store.area}
          address={this.store.address}
          web={this.store.web}
          weblink={this.store.weblink}
          phone={this.store.phone}
        />
        <MoreDetails
          hours={this.store.hours}
          openStore={this.props.openStore}
          id={this.props.id}
          backToList={this.props.backToList}
        />
      </div>
    );
  }
}
export { Store };
