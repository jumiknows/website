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
        href="https://docs.google.com/forms/d/e/1FAIpQLSd1xAMfur9Ph2jHpVCJbxminxZgOugMxxdfC3YYriHWUPLHUg/viewform" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-button"
      >
        Application Form
      </a>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <p>
          Whether you have questions about our projects, research, or team, or just want to connect, don't hesitate to complete the form. We'll get back to you promptly.
        </p>
        
        <h2>Please complete the form below</h2>
        
        <form 
          action="mailto:sfusat@sfu.ca" 
          method="post" 
          encType="text/plain"
          className="contact-form"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name (required)</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject (required)</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea 
              id="message" 
              name="message" 
              rows={6}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
