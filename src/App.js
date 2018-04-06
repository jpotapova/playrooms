import React, { Component } from 'react';
import { Map } from './Map.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div class="page-header">
          <h1>Store locator template</h1>
        </div>

        <button id="toggle-list" class="btn btn-info toggle-list">
          <span id="hide-list">
            Hide info &nbsp;
            <span class="glyphicon glyphicon-menu-left" />
          </span>
          <span class="hidden" id="show-list">
            Show info &nbsp;
            <span class="glyphicon glyphicon-menu-right" />
          </span>
        </button>

        <div class="store-locator">
          <div class="store-list-container">
            <div class="store-list list-group">
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
              <div class="list-group-item">
                <span class="badge">2 km</span>
                <h4 class="list-group-item-heading">Title</h4>
                <p class="list-group-item-text">Area, Street Address 123</p>
                <p class="list-group-item-text">
                  <a href="#">http://www.website.com</a>
                </p>
                <div class="more-details">
                  <p>&nbsp;</p>
                  <table class="working-hours table table-condensed">
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
                    <tr class="last-row">
                      <th />
                      <td />
                    </tr>
                  </table>
                  <p>Ticket &euro; 5 / h</p>

                  <p>
                    &nbsp;
                    <button class="btn btn-info to-list" type="button">
                      Back&nbsp;<span class="glyphicon glyphicon-list" />
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-info to-map" type="button">
                      View map&nbsp;<span class="glyphicon glyphicon-map-marker" />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Map />
        </div>
      </div>
    );
  }
}

export default App;
