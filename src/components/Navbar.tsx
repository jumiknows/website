// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const navbar = document.querySelector('.navbar');
      const isClickInsideNavbar = navbar?.contains(target);
      
      if (!isClickInsideNavbar && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-logo">
        <Link to="/" aria-label="SFU SAT Home">
          <img 
            src="/images/icons/sfusatlogo.png" 
            alt="SFU SAT Logo" 
            className="logo-button" 
          />
        </Link>
      </div>
      
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <ul 
        className={`navbar-links ${isOpen ? 'open' : ''}`}
        id="navbar-menu"
        role="menubar"
      >
        <li role="none">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={location.pathname === '/' ? 'active' : ''}
            role="menuitem"
          >
            Home
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/projects" 
            onClick={closeMenu}
            className={location.pathname === '/projects' ? 'active' : ''}
            role="menuitem"
          >
            Projects
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/sponsors" 
            onClick={closeMenu}
            className={location.pathname === '/sponsors' ? 'active' : ''}
            role="menuitem"
          >
            Sponsors
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/outreach" 
            onClick={closeMenu}
            className={location.pathname === '/outreach' ? 'active' : ''}
            role="menuitem"
          >
            Outreach
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={location.pathname === '/about' ? 'active' : ''}
            role="menuitem"
          >
            About
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className={location.pathname === '/contact' ? 'active' : ''}
            role="menuitem"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
