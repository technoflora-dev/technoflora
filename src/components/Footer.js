import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Decorative background shapes */}
      <div className="footer-bg-shapes" aria-hidden="true">
        <div className="footer-shape footer-shape-1" />
        <div className="footer-shape footer-shape-2" />
      </div>

      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h3>Ready to Build Something Great?</h3>
            <p>Let's discuss how Technoflora can accelerate your digital journey.</p>
          </div>
          <Link to="/contact" className="footer-cta-btn">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <Logo className="footer-logo-svg" />
            <h3>Technoflora</h3>
          </div>
          <p className="footer-tagline">
            Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">🚀 Innovative</span>
            <span className="footer-badge">🔒 Secure</span>
            <span className="footer-badge">⚡ Fast</span>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📧</span>
            <div className="footer-contact-details">
              <span className="footer-contact-label">Email Us</span>
              <a href="mailto:support@technoflora.in">support@technoflora.in</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <div className="footer-contact-details">
              <span className="footer-contact-label">Call Us</span>
              <a href="tel:+917905987092">+91 7905987092</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <div className="footer-contact-details">
              <span className="footer-contact-label">Visit Us</span>
              <p>
                Ayush vihar colony phase 2,
                Jankipuram Extension, Lucknow,
                Uttar Pradesh – 226021
              </p>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">🕒</span>
            <div className="footer-contact-details">
              <span className="footer-contact-label">Business Hours</span>
              <p>Mon – Fri: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025–2026 Technoflora LLP. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
