import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import txt from './text';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.myLocation = this.myLocation.bind(this);
    this.state = {
      loadingLocation: false
    };
  }
  myLocation() {
    this.setState({
      loadingLocation: true
    });

    navigator.geolocation.getCurrentPosition(
      position => {
        // success obtaining location
        this.setState({
          loadingLocation: false
        });
        this.props.setLocation(position.coords.latitude, position.coords.longitude);
      },
      error => {
        // error obtaining location
        this.setState({
          loadingLocation: false
        });

        alert(txt.locationError);
      }
    );
  }
  render() {
    return (
      <div className="filters">
        <div className="filters-container">
          <span className={this.state.loadingLocation ? ' spinner-container ' : 'spinner-container hide'}>
            <span className="glyphicon glyphicon-repeat fast-right-spinner" />
          </span>
          <Button bsStyle="info" onClick={this.myLocation}>
            {txt.distance}
          </Button>
        </div>
      </div>
    );
  }
}

export { Filters };
