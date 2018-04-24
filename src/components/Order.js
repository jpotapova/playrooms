import React, { Component } from 'react';
import txt from '../data/text';

class Order extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOrder = this.selectOrder.bind(this);
    this.state = {
      orderDropdownOpen: false
    };
  }
  toggleDropdown() {
    this.setState({
      orderDropdownOpen: !this.state.orderDropdownOpen
    });
  }
  selectOrder(orderBy) {
    if (orderBy === 'distance') {
      this.props.myLocation();
    } else {
      this.props.updateOrderBy(orderBy);
    }
    this.setState({
      orderDropdownOpen: false
    });
  }
  getClass(element) {
    if (element === this.props.orderBy) {
      return 'disabled';
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="filters">
        <div className="filters-container">
          <span className={this.props.loadingLocation ? ' spinner-container ' : 'spinner-container hide'}>
            <span className="glyphicon glyphicon-repeat fast-right-spinner" />
          </span>
          <div className={this.state.orderDropdownOpen ? 'btn-group open' : 'btn-group'}>
            <button type="button" className="btn btn-info dropdown-toggle" onClick={this.toggleDropdown}>
              <span className="glyphicon glyphicon-sort-by-attributes" aria-hidden="true" />
              &nbsp;{txt[this.props.orderBy]}&nbsp;<span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li className={this.getClass('title')}>
                <a href={null} onClick={() => this.selectOrder('title')}>
                  {txt.title}
                </a>
              </li>
              <li className={this.getClass('price')}>
                <a href={null} onClick={() => this.selectOrder('price')}>
                  {txt.price}
                </a>
              </li>
              <li className={this.getClass('distance')}>
                <a href={null} onClick={() => this.selectOrder('distance')}>
                  {txt.distance}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Order };
