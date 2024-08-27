import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;