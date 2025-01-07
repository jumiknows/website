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
        href="https://docs.google.com/forms/d/e/1FAIpQLSc3OXiasyebSnDm-kJGlv_0HyAfPCMinNJzjfXbVuFw2YuTEA/viewform?fbzx=-7906452973412795932" 
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
