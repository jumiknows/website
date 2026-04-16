import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for internal navigation
import './Contact.css'; // Import the CSS file for styling

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ 
    type: null, 
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later or email us directly at sfusat@sfu.ca' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        {/* SFU Satellite is currently hiring for ALEASAT technical roles. Please refer to our{' '} */}
        SFU Satellite is currently hiring for ROVER technical roles. Please refer to our{' '}
        <Link to="/about" className="about-link">About page</Link> for more information on each team.
      </p>
      <div className="contact-buttons">
        <Link to="/rover/apply" className="contact-button">
          Application Form
        </Link>
        <Link to="/rover" className="contact-button learn-more-button">
          Learn More
        </Link>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <p>
          Whether you have questions about our projects, research, or team, or just want to connect, don't hesitate to complete the form. We'll get back to you promptly.
        </p>
        
        <h2>Please complete the form below</h2>
        
        {submitStatus.type && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name (required)</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject (required)</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
