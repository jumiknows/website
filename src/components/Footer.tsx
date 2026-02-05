import React from 'react';
import './Footer.css'; // Ensure the CSS is properly imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2016 - 2026 SFU Satellite Design Team</p>
      <a href="mailto:sfusat@sfu.ca" className="mail-link" aria-label="Email us">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </footer>
  );
};

export default Footer;
