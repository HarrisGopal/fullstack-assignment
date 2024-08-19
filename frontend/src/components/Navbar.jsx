import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Abstract | Help Center</a>
        </div>
        <div className="navbar-links">
          <button style={{ "background-color":"#333","color":"white","border": "2px solid white"}}><Link to="/add-card">Submit a request</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
