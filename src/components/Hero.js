import React from 'react';

const Hero = ({ title, subtitle, description }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <h1 className="hero-title">{title}</h1>
        {description && <p className="hero-description">{description}</p>}
      </div>
    </section>
  );
};

export default Hero;
