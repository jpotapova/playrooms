import React from 'react';
import { Store } from './Store.js';

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
        {this.props.stores.map((store, index) => (
          <Store
            store={store}
            key={index}
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
