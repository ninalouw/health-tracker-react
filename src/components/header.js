import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render () {
    return (
      <div className="header-bar">
        <Link to="/">
          <h1>Health Tracker</h1>
        </Link>
        {/* <Link to='foods_index'>
          <li>Your Foods</li>
        </Link> */}
        {/* <Link to='foods_new'>
          <li>Add a Food</li>
        </Link> */}
      </div>
    );
  }
}

export default Header;
