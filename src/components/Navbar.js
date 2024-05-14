

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1><Link to="/">Site Name</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/top-10">Top 10</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
