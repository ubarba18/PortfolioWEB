// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="Navbar-container">
      <div className="Navbar-brand">
        <h1>Uriel Barba</h1>
        <img src="images/lul.png"/>
        
      </div>
      <ul className="Navbar-links">
        <li> <a href='#'> About Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
