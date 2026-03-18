import React from 'react';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div className="page">
      <Hero 
        title="About Technoflora"
        subtitle="Our Story"
        description="Building the future through innovation and expertise"
      />

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="section-title">Who We Are</h2>
            <p className="text-content">
              Technoflora is a fresh technology solutions provider founded in 2025 with a vision to 
              bridge the gap between innovative technology and practical business applications. We bring 
              together a talented pool of experienced professionals ready to help businesses thrive in 
              the digital age.
            </p>
            <p className="text-content">
              Our team comprises passionate technologists, creative designers, and strategic thinkers 
              carefully selected for their expertise and dedication. Though newly established, our team 
              members bring valuable industry experience and are committed to delivering exceptional 
              results on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            To empower businesses with innovative technology solutions that drive growth, 
            efficiency, and competitive advantage in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Continuously exploring new technologies and approaches to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Building trust through transparency, honesty, and ethical business practices.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do, from code to customer service.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>Working closely with clients and partners to achieve shared success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
