import React, { Component } from 'react';
import { Map } from './Map.js';
import { Store } from './Store.js';
import './App.css';
import preload from './data';
import { ListGroup, ListGroupItem, Badge, Table } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Store locator template</h1>
        </div>

        <button id="toggle-list" className="btn btn-info toggle-list">
          <span id="hide-list">
            Hide info &nbsp;
            <span className="glyphicon glyphicon-menu-left" />
          </span>
          <span className="hidden" id="show-list">
            Show info &nbsp;
            <span className="glyphicon glyphicon-menu-right" />
          </span>
        </button>

        <div className="store-locator">
          <div className="store-list-container">
            <ListGroup>
              {preload.stores.map(store => <Store {...store} />)}

              <ListGroupItem header="Heading 1">
                <Badge>2 km</Badge>
                <p className="list-group-item-text">Area, Street Address 123</p>
                <p className="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div className="more-details">
                  <p>&nbsp;</p>
                  <Table condensed>
                    <tbody>
                      <tr>
                        <th>I-V</th>
                        <td>10:00 &mdash; 20:00</td>
                      </tr>
                      <tr>
                        <th>VI</th>
                        <td>10:00 &mdash; 16:00</td>
                      </tr>
                      <tr>
                        <th>VII</th>
                        <td>Closed</td>
                      </tr>
                      <tr className="last-row">
                        <th />
                        <td />
                      </tr>
                    </tbody>
                  </Table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button className="btn btn-info to-list" type="button">
                      Back&nbsp;<span className="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-info to-map" type="button">
                      View map&nbsp;<span className="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </ListGroupItem>
            </ListGroup>
          </div>

          <Map />
        </div>
      </div>
    );
  }
}

export default App;
