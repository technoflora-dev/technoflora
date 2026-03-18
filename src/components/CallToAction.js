import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss how we can help you achieve your goals with innovative technology solutions
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-cta-primary">
              Get Started Today
            </Link>
            <Link to="/services" className="btn btn-cta-secondary">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="cta-features">
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Free Consultation</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Custom Solutions</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Expert Team</span>
          </div>
          <div className="cta-feature">
            <span className="cta-feature-icon">✓</span>
            <span>Ongoing Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
