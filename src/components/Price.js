import React, { Component } from 'react';
import txt from '../data/text';

class Price extends Component {
  render() {
    var priceBadge = this.props.price ? (
      <span className="badge badge-warning">
        {this.props.price.h}
        {txt.price}
      </span>
    ) : null;
    return priceBadge;
  }
}

export { Price };
