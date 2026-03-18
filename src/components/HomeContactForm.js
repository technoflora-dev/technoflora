import React, { useState } from 'react';

const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: 'New Quick Contact from Technoflora Homepage'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! We\'ll get back to you within 4 business hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email us at technoflorallp@gmail.com'
      });
    }
  };

  return (
    <div className="home-contact-form">
      <div className="home-contact-form-content">
        <div className="home-contact-info scroll-animate-item" style={{ animationDelay: '0.1s' }}>
          <h3>Ready to Start Your Project?</h3>
          <p className="home-contact-description">
            Let's transform your ideas into reality. Our team is ready to help you build something amazing.
          </p>
          <div className="home-contact-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">⚡</span>
              <span>4-Hour Response Time</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎁</span>
              <span>Free Consultation</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💼</span>
              <span>No Obligation Quote</span>
            </div>
          </div>
        </div>

        <div className="home-contact-form-wrapper scroll-animate-item" style={{ animationDelay: '0.2s' }}>
          {status.submitted && (
            <div className="alert alert-success">
              <span className="alert-icon">✓</span>
              <p>{status.message}</p>
            </div>
          )}

          {status.error && (
            <div className="alert alert-error">
              <span className="alert-icon">⚠</span>
              <p>{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="quick-contact-form">
            <div className="form-group">
              <label htmlFor="home-name">Your Name *</label>
              <input
                type="text"
                id="home-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="home-email">Email Address *</label>
                <input
                  type="email"
                  id="home-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="home-phone">Phone Number</label>
                <input
                  type="tel"
                  id="home-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="home-service">Service Interested In *</label>
              <select
                id="home-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
                <option value="UI/UX & Branding">UI/UX & Branding</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="home-message">Tell Us About Your Project *</label>
              <textarea
                id="home-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Brief description of your project, goals, or questions..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-large"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContactForm;
