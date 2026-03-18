import React, { useState } from 'react';
import Hero from '../components/Hero';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          subject: 'New Contact Form Submission from Technoflora Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 4 business hours.'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
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
        message: 'Oops! Something went wrong. Please try again or email us directly at support@technoflora.in'
      });
    }
  };

  return (
    <div className="page">
      <Hero 
        title="Let's Talk About Your Project"
        subtitle="Get In Touch"
        description="Fill in the form below and our team will respond within 4 business hours. First consultation is always free — no hard sell, no obligation whatsoever."
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info-sidebar">
              <h2>We'd Love to Hear From You</h2>
              <p className="contact-intro">
                Whether you have a fully-formed brief or just an idea on a napkin — reach out. 
                Our team will help you figure out the right next step.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📧</div>
                  <div className="contact-detail-content">
                    <h4>Email</h4>
                    <a href="mailto:support@technoflora.in" className="contact-link">
                      support@technoflora.in
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-content">
                    <h4>Phone</h4>
                    <a href="tel:+917905987092" className="contact-link">
                      +91 7905987092
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-content">
                    <h4>Office</h4>
                    <p>Ayush vihar colony phase 2,<br/>Jankipuram Extension Lucknow,<br/>Uttar Pradesh (226021)</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">⏰</div>
                  <div className="contact-detail-content">
                    <h4>Working Hours</h4>
                    <p>Monday – Friday<br/>9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="contact-guarantees">
                <div className="guarantee-item">
                  <span className="guarantee-icon">⚡</span>
                  <span>4hr Response Guarantee</span>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">🎁</span>
                  <span>Free First Consultation</span>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">🔒</span>
                  <span>NDA Available on Request</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <p className="form-subtitle">
                All fields marked with * are required. We respect your privacy — no spam, ever.
              </p>

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

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Rahul"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 7905987092"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organisation</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="UI/UX & Branding">UI/UX & Branding</option>
                      <option value="Content & Copywriting">Content & Copywriting</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Analytics & CRO">Analytics & CRO</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="SEO & ASO">SEO & ASO</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="ERP & CRM">ERP & CRM</option>
                      <option value="Legacy Modernization">Legacy Modernization</option>
                      <option value="QA & Testing">QA & Testing</option>
                      <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                      <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                      <option value="Above ₹10,00,000">Above ₹10,00,000</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just Exploring">Just Exploring</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
