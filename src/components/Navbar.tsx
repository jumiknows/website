// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://raw.githubusercontent.com/balloon4computing/artifact/main/sfusatlogo.png" alt="SFU SAT" className="logo-button" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {/* Updated to use / instead of /home */}
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        {/* <li><Link to="/sponsors" onClick={toggleMenu}>Sponsors</Link></li> */}
        {/* <li><Link to="/outreach" onClick={toggleMenu}>Outreach</Link></li> */}
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
