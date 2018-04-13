import React, { Component } from 'react';
import { Store } from './Store.js';

class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.showStore = this.showStore.bind(this);
    this.state = {
      openStore: -1
    };
  }
  showStore(id) {
    this.setState({ openStore: id });
  }
  render() {
    return (
      <div
        className={
          this.props.desktop
            ? 'list-group'
            : this.props.showStores ? 'list-group animated slideInLeft' : 'list-group animated slideOutLeft'
        }
      >
        {this.props.stores.map((store, index) => (
          <Store
            {...store}
            key={index}
            map={this.props.map}
            toggleStores={this.props.toggleStores}
            id={index}
            showStore={this.showStore}
            openStore={this.state.openStore}
          />
        ))}
      </div>
    );
  }
}

export { StoreList };
