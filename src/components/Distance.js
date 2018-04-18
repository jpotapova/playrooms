import React, { Component } from 'react';
import txt from '../data/text';

class Distance extends Component {
  render() {
    var distanceBadge = this.props.distance ? (
      <span className="badge">
        {this.props.distance}
        {txt.measurement}
      </span>
    ) : null;
    return distanceBadge;
  }
}

export { Distance };
