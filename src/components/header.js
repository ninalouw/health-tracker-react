import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
