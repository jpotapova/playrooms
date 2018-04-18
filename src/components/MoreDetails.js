import React, { Component } from 'react';
import { WorkingHours } from './WorkingHours';
import txt from '../data/text';

class MoreDetails extends Component {
  render() {
    return (
      <div className={this.props.openStore === this.props.id ? 'more-details' : 'more-details hidden'}>
        <WorkingHours hours={this.props.hours} />
        <p className="text-right">
          &nbsp;
          <button className="btn btn-info" type="button" onClick={this.props.backToList}>
            {txt.back}
            <span className="glyphicon glyphicon-list" />
          </button>
        </p>
      </div>
    );
  }
}

export { MoreDetails };
