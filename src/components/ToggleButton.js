import React from 'react';
import { Button } from 'react-bootstrap';
import txt from '../data/text';

class ToggleButton extends React.Component {
  render() {
    if (this.props.desktop) {
      return null;
    }
    return (
      <Button bsStyle="info" onClick={this.props.toggleStores}>
        <span className={this.props.showStores ? undefined : 'hidden'}>
          {txt.hide}
          <span className="glyphicon glyphicon-menu-left" />
        </span>
        <span className={this.props.showStores ? 'hidden' : undefined}>
          {txt.show}
          <span className="glyphicon glyphicon-menu-right" />
        </span>
      </Button>
    );
  }
}

export { ToggleButton };
