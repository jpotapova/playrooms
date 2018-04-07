import React, { Component } from 'react';
import { Map } from './Map.js';
import { Store } from './Store.js';
import './App.css';
import preload from './data';
import { ListGroup, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStores: true
    };
    this.toggleStores = this.toggleStores.bind(this);
  }

  toggleStores() {
    this.setState({
      showStores: !this.state.showStores
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Store locator template</h1>
        </div>

        <Button bsStyle="info" onClick={this.toggleStores}>
          <span className={this.state.showStores ? undefined : 'hidden'}>
            Hide info &nbsp;
            <span className="glyphicon glyphicon-menu-left" />
          </span>
          <span className={this.state.showStores ? 'hidden' : undefined}>
            Show info &nbsp;
            <span className="glyphicon glyphicon-menu-right" />
          </span>
        </Button>

        <div className="store-locator">
          <div className="store-list-container">
            <ListGroup>{preload.stores.map((store, index) => <Store {...store} key={index} />)}</ListGroup>
          </div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
