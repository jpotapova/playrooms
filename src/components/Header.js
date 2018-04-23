import React, { Component } from 'react';
import txt from '../data/text';

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <h1>
          Žaidimų kambariai<br />kasdienėms pramogoms
        </h1>
      </div>
    );
  }
}

export { Header };
