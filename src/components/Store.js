import React, { Component } from 'react';
import { Distance } from './Distance';
import { MoreDetails } from './MoreDetails';
import { MainDetails } from './MainDetails';

class Store extends Component {
  constructor(props) {
    super(props);
    this.showStore = this.showStore.bind(this);
    this.getClass = this.getClass.bind(this);
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
    this.props.map.panTo({ lat: this.props.lat, lng: this.props.lng });
  }
  render() {
    return (
      <div className={this.getClass(this.props.id, this.props.openStore)}>
        <Distance distance={this.props.distance} />
        <MainDetails
          showStore={this.showStore}
          title={this.props.title}
          area={this.props.area}
          address={this.props.address}
          web={this.props.web}
          weblink={this.props.weblink}
          phone={this.props.phone}
        />
        <MoreDetails
          hours={this.props.hours}
          openStore={this.props.openStore}
          id={this.props.id}
          backToList={this.props.backToList}
        />
      </div>
    );
  }
}
export { Store };
