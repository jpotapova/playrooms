import React, { Component } from 'react';
import { WorkingHours } from './WorkingHours';
import txt from '../data/text';

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
        <span className={this.props.distance ? 'badge' : 'hidden'}>
          {this.props.distance}
          {txt.measurement}
        </span>
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
          <p className="list-group-item-text">
            {txt.phone}
            {this.props.phone}
          </p>
        </div>
        <div className={this.props.openStore === this.props.id ? 'more-details' : 'more-details hidden'}>
          <WorkingHours hours={this.props.hours} />
          <p className="text-right">
            &nbsp;
            <button className="btn btn-info" type="button" onClick={this.backToList}>
              {txt.back}
              <span className="glyphicon glyphicon-list" />
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export { Store };
