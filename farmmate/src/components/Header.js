import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="logo">FarmMate</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;