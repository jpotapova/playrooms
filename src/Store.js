import React, { Component } from 'react';
import { ListGroupItem, Badge, Table } from 'react-bootstrap';

class Store extends Component {
  render() {
    return (
      <ListGroupItem>
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
        <div className="more-details">
          <WorkingHours hours={this.props.hours} />
          <p className="text-right">
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
