import React, { Component } from 'react';
import { Store } from './Store.js';

class StoreList extends React.Component {
  constructor(props) {
    super(props);
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
            id={index}
            showStore={this.props.showStore}
            openStore={this.props.openStore}
            backToList={this.props.backToList}
          />
        ))}
      </div>
    );
  }
}

export { StoreList };
