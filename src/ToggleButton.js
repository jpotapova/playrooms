import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStores = this.toggleStores.bind(this);
  }

  toggleStores(e) {
    this.props.toggleStores();
  }

  render() {
    const button = this.props.desktop ? null : (
      <Button bsStyle="info" onClick={this.toggleStores}>
        <span className={this.props.showStores ? undefined : 'hidden'}>
          Hide info &nbsp;
          <span className="glyphicon glyphicon-menu-left" />
        </span>
        <span className={this.props.showStores ? 'hidden' : undefined}>
          Show info &nbsp;
          <span className="glyphicon glyphicon-menu-right" />
        </span>
      </Button>
    );
    return button;
  }
}

export { ToggleButton };
