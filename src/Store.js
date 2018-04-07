import React, { Component } from 'react';

class Store extends Component {
  render() {
    return (
      <div>
        <p>this is a store {this.props.title}</p>
      </div>
    );
  }
}

export { Store };
