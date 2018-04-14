import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Store extends Component {
  constructor(props) {
    super(props);
    this.backToList = this.backToList.bind(this);
    this.showStore = this.showStore.bind(this);
    this.getClass = this.getClass.bind(this);
  }
  getClass() {
    // animate element entrance when single store is seleted
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
  backToList() {
    this.props.backToList();
  }
  showStore() {
    // select single store
    this.props.showStore(this.props.id);
    this.props.map.panTo({ lat: this.props.lat, lng: this.props.lng });
  }
  render() {
    return (
      <div className={this.getClass()}>
        <span className={this.props.distance ? 'badge' : 'hidden'}>{this.props.distance} km</span>
        <div className="main-details" onClick={this.showStore}>
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
        </div>
        <div className={this.props.openStore === this.props.id ? 'more-details' : 'more-details hidden'}>
          <WorkingHours hours={this.props.hours} />
          <p className="text-right">
            &nbsp;
            <button className="btn btn-info" type="button" onClick={this.backToList}>
              Back&nbsp;<span className="glyphicon glyphicon-list" />
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
