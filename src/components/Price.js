import React, { Component } from 'react';
import txt from '../data/text';

class Price extends Component {
  render() {
    return (
      <span className="badge badge-warning">
        {this.props.price.h || '?'}
        {txt.pricetxt}
      </span>
    );
  }
}

export { Price };
