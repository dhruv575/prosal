import React from 'react';
import './Header.css';
import logo from '../assets/heart_logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links left">
          <li><a href="#me">ME</a></li>
        </ul>
        <div className="logo">
          <img src={logo} alt="Heart Logo" />
          <h1 className="logo-text">&</h1>
        </div>
        <ul className="nav-links right">
          <li><a href="#you">YOU</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
