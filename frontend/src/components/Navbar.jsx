import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style//Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EduWebsite</Link>
      </div>
      <div className="navbar-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes className="navbar-menu-icon" />
        ) : (
          <FaBars className="navbar-menu-icon" />
        )}
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/courses" onClick={toggleMobileMenu}>Courses</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
