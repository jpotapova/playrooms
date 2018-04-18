import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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

export { WorkingHours };
