import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Store extends Component {
  constructor(props) {
    super(props);
    this.toMap = this.toMap.bind(this);
    this.showStore = this.showStore.bind(this);
    this.getClass = this.getClass.bind(this);
  }
  getClass() {
    var result = 'list-group-item';
    if (this.props.openStore > -1) {
      if (this.props.id === this.props.openStore) {
        result = result + ' animated fadeIn';
      } else {
        result = result + ' hidden';
      }
    }
    return result;
  }
  toMap() {
    this.props.map.panTo({ lat: this.props.lat, lng: this.props.lng });
    this.props.toggleStores();
  }
  showStore() {
    this.props.showStore(this.props.id);
  }
  render() {
    return (
      <div className={this.getClass()} onClick={this.showStore}>
        <h4 className="list-group-item-heading">{this.props.title}</h4>
        <p className="list-group-item-text">
          {this.props.area}, {this.props.address}
        </p>
        <p className="list-group-item-text">
          <a href={this.props.weblink} target="_blank">
            {this.props.web}
          </a>
        </p>
        <p className="list-group-item-text">tel. {this.props.phone}</p>
        <div className={this.props.openStore === this.props.id ? 'more-details' : 'more-details hidden'}>
          <WorkingHours hours={this.props.hours} />
          <p className="text-right">
            &nbsp;
            <button className="btn btn-info to-list" type="button">
              Back&nbsp;<span className="glyphicon glyphicon-list" />
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-info to-map" type="button" onClick={this.toMap}>
              View map&nbsp;<span className="glyphicon glyphicon-map-marker" />
            </button>
          </p>
        </div>
      </div>
    );
  }
}

class WorkingHours extends Component {
  render() {
    return (
      <Table condensed>
        <tbody>
          {this.props.hours.map((day, index) => (
            <tr key={index}>
              <th>{day[0]}</th>
              <td>{day[1]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export { Store };
