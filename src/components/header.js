import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header-bar">
        <ul className="navbar">
          <li className="navbar-li">
            <Link to="/" className="navbar-a">Main</Link>
          </li>
          <li className="navbar-li">
            <Link to="/foods" className="navbar-a">FoodsIndex</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
