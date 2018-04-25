import React, { Component } from 'react';
import txt from '../data/text';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.getLiClass = this.getLiClass.bind(this);

    this.state = {
      cityDropdownOpen: false
    };
  }
  toggleDropdown() {
    this.setState({
      cityDropdownOpen: !this.state.cityDropdownOpen
    });
  }
  selectCity(city) {
    this.props.chooseCity(city);
    this.setState({
      cityDropdownOpen: false
    });
  }
  getLiClass(element) {
    if (element === this.props.city) {
      return 'disabled';
    } else {
      return null;
    }
  }
  render() {
    const citiesItems = this.props.cities.map(city => (
      <li key={city} className={this.getLiClass(city)}>
        <a href={null} onClick={() => this.selectCity(city)}>
          {city}
        </a>
      </li>
    ));

    return (
      <div className="filters">
        <div className="city">
          <div className={this.state.cityDropdownOpen ? 'btn-group open' : 'btn-group'}>
            <button type="button" className="btn btn-info dropdown-toggle" onClick={this.toggleDropdown}>
              {this.props.city}&nbsp;<span className="caret" />
            </button>
            <ul className="dropdown-menu">{citiesItems}</ul>
          </div>
        </div>
        <p>open now</p>
      </div>
    );
  }
}

export { Filters };
