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
            <Link to="/foods" className="navbar-a">Foods Index</Link>
          </li>
          <li className="navbar-li">
            <Link to="/foods/new" className="navbar-a">Add New Food</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
