// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/contact">Contact Us</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;