import React from 'react';
import { Store } from './Store.js';
import { orderStores } from '../helpers';

class StoreList extends React.Component {
  getClass(desktop, showStores) {
    var className = '';
    if (desktop) {
      className = 'list-group';
    } else {
      className = showStores ? 'list-group animated slideInLeft' : 'list-group animated slideOutLeft';
    }
    return className;
  }
  render() {
    return (
      <div className={this.getClass(this.props.desktop, this.props.showStores)}>
        {orderStores(this.props.stores, this.props.orderBy).map((store, index) => (
          <Store
            store={store}
            id={index}
            key={store.title}
            showStore={this.props.showStore}
            openStore={this.props.openStore}
            toggleStores={this.props.toggleStores}
          />
        ))}
      </div>
    );
  }
}

export { StoreList };
