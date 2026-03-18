import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Logo className="footer-logo-svg" />
            <h3>Technoflora</h3>
          </div>
          <p>Innovative solutions for a digital future.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Get In Touch</h4>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-details">
              <a href="mailto:technoflorallp@gmail.com">technoflorallp@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-details">
              <a href="tel:+917905987092">+91 7905987092</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-details">
              <p>
                House no. 8 Vasundhra homes,<br/>
                Ayush vihar colony phase 2,<br/>
                Jankipuram Extension Lucknow,<br/>
                Uttar Pradesh - 226021, India
              </p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕒</span>
            <div className="contact-details">
              <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Technoflora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
