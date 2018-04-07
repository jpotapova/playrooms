import React, { Component } from 'react';
import { ListGroupItem, Badge, Table } from 'react-bootstrap';

class Store extends Component {
  render() {
    return (
      <ListGroupItem>
        <Badge>2 km</Badge>
        <h4 class="list-group-item-heading">{this.props.title}</h4>
        <p className="list-group-item-text">
          {this.props.area}, {this.props.address}
        </p>
        <p className="list-group-item-text">
          <a href={this.props.weblink} target="_blank">
            {this.props.web}
          </a>
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
    );
  }
}

export { Store };
