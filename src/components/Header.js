// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home"><i className="fas fa-home"></i>HOME</Link></li>
          <li><Link to="/about"><i className="fas fa-user"></i>ABOUT</Link></li>
          <li><Link to="/projects"><i className="fas fa-folder"></i>PROJECTS</Link></li>
          <li><Link to="/contact"><i className="fas fa-envelope"></i>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
