import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for internal navigation
import './Contact.css'; // Import the CSS file for styling

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        SFU Satellite is currently hiring for ALEASAT technical roles. Please refer to our{' '}
        <Link to="/about" className="about-link">About page</Link> for more information on each team.
      </p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdYgiNC-6-BoZ0v0RZ5AL2oUyHy_A3A7MahPT5YWuokFd0OTg/viewform" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-button"
      >
        Application Form
      </a>
    </div>
  );
};

export default Contact;
