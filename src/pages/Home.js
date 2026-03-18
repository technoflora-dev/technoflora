import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import HomeContactForm from '../components/HomeContactForm';

const Home = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections with animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Carousel />

      <section className="section scroll-animate">
        <div className="container">
          <h2 className="section-title">Why Choose Technoflora?</h2>
          <p className="section-description">
            We combine innovation, expertise, and dedication to deliver exceptional results that drive your business forward
          </p>
          <div className="features-grid">
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>We stay ahead of the curve, leveraging the latest technologies to deliver innovative solutions that drive your business forward.</p>
            </div>
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">💼</div>
              <h3>Expert Team</h3>
              <p>Our talented pool of professionals brings diverse expertise and fresh perspectives to solve your business challenges.</p>
            </div>
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🎯</div>
              <h3>Client-Focused</h3>
              <p>Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.</p>
            </div>
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>We understand the importance of time-to-market. Our agile approach ensures rapid development without compromising quality.</p>
            </div>
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">🔒</div>
              <h3>Security First</h3>
              <p>Your data security is paramount. We implement industry-leading security practices to protect your business assets.</p>
            </div>
            <div className="feature-card scroll-animate-item" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon">💰</div>
              <h3>Cost-Effective</h3>
              <p>Get maximum value for your investment with our transparent pricing and efficient development processes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt scroll-animate">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive digital solutions to transform your business
          </p>
          
          <div className="services-grid">
            {/* Important Services - Always Shown */}
            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.1s' }}>
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Fast, scalable websites & web applications built with modern technologies</p>
              <Link to="/services#web-development" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.15s' }}>
              <div className="service-icon">📱</div>
              <h3>App Development</h3>
              <p>Native and cross-platform mobile apps users love & trust</p>
              <Link to="/services#app-development" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.2s' }}>
              <div className="service-icon">🛒</div>
              <h3>E-commerce Solutions</h3>
              <p>Online stores that sell and scale with your business</p>
              <Link to="/services#ecommerce-solutions" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.25s' }}>
              <div className="service-icon">🎨</div>
              <h3>UI/UX & Branding</h3>
              <p>Beautiful designs that convert visitors into customers</p>
              <Link to="/services#ui-ux-branding" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.3s' }}>
              <div className="service-icon">📣</div>
              <h3>Digital Marketing</h3>
              <p>Performance marketing strategies that deliver measurable ROI</p>
              <Link to="/services#digital-marketing" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate-item" style={{ animationDelay: '0.35s' }}>
              <div className="service-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>Scalable, secure cloud infrastructure and automation</p>
              <Link to="/services#cloud-devops" className="service-link">Learn More →</Link>
            </div>

            {/* Additional Services - Hidden by Default */}
            {showAllServices && (
              <>
                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.4s' }}>
                  <div className="service-icon">🔍</div>
                  <h3>SEO & ASO</h3>
                  <p>Rank higher on search engines and app stores organically</p>
                  <Link to="/services#seo-aso" className="service-link">Learn More →</Link>
                </div>

                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.45s' }}>
                  <div className="service-icon">✍️</div>
                  <h3>Content & Copywriting</h3>
                  <p>Engaging content that ranks, converts, and builds authority</p>
                  <Link to="/services#content-copywriting" className="service-link">Learn More →</Link>
                </div>

                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.5s' }}>
                  <div className="service-icon">📊</div>
                  <h3>Analytics & CRO</h3>
                  <p>Turn data insights into revenue-driving decisions</p>
                  <Link to="/services#analytics-cro" className="service-link">Learn More →</Link>
                </div>

                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.55s' }}>
                  <div className="service-icon">🏢</div>
                  <h3>ERP & CRM</h3>
                  <p>Business automation solutions that streamline operations</p>
                  <Link to="/services#erp-crm" className="service-link">Learn More →</Link>
                </div>

                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.6s' }}>
                  <div className="service-icon">🔄</div>
                  <h3>Legacy Modernization</h3>
                  <p>Transform outdated systems without disrupting your business</p>
                  <Link to="/services#legacy-modernization" className="service-link">Learn More →</Link>
                </div>

                <div className="service-card scroll-animate-item" style={{ animationDelay: '0.65s' }}>
                  <div className="service-icon">🧪</div>
                  <h3>QA & Testing</h3>
                  <p>Comprehensive testing to ship bug-free products</p>
                  <Link to="/services#qa-testing" className="service-link">Learn More →</Link>
                </div>
              </>
            )}
          </div>

          <div className="services-actions">
            <button 
              onClick={() => setShowAllServices(!showAllServices)} 
              className="btn btn-secondary"
            >
              {showAllServices ? 'Show Less Services' : 'Show More Services'}
            </button>
            <Link to="/services" className="btn btn-primary">
              View All Details →
            </Link>
          </div>
        </div>
      </section>

      <section className="section scroll-animate">
        <div className="container">
          <h2 className="section-title">About Technoflora</h2>
          <div className="about-summary">
            <p className="lead-text">
              Technoflora is a technology solutions provider founded with a vision to bridge the gap 
              between innovative technology and practical business applications. We bring together a 
              talented pool of experienced professionals ready to help businesses thrive in the digital age.
            </p>
            
            <div className="stats-grid" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div className="stat-card scroll-animate-item" style={{ animationDelay: '0.1s' }}>
                <h3 className="stat-number counter" data-target="10">10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card scroll-animate-item" style={{ animationDelay: '0.2s' }}>
                <h3 className="stat-number counter" data-target="20">20+</h3>
                <p>Expert Developers</p>
              </div>
              <div className="stat-card scroll-animate-item" style={{ animationDelay: '0.3s' }}>
                <h3 className="stat-number counter" data-target="99">99.9%</h3>
                <p>Uptime Guarantee</p>
              </div>
              <div className="stat-card scroll-animate-item" style={{ animationDelay: '0.4s' }}>
                <h3 className="stat-number">24/7</h3>
                <p>Support Available</p>
              </div>
            </div>

            <div className="mission-box scroll-animate-item">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, efficiency, 
                and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="values-summary">
              <div className="value-item scroll-animate-item" style={{ animationDelay: '0.1s' }}>
                <span className="value-icon">💡</span>
                <span>Innovation</span>
              </div>
              <div className="value-item scroll-animate-item" style={{ animationDelay: '0.2s' }}>
                <span className="value-icon">🤝</span>
                <span>Integrity</span>
              </div>
              <div className="value-item scroll-animate-item" style={{ animationDelay: '0.3s' }}>
                <span className="value-icon">⭐</span>
                <span>Excellence</span>
              </div>
              <div className="value-item scroll-animate-item" style={{ animationDelay: '0.4s' }}>
                <span className="value-icon">👥</span>
                <span>Collaboration</span>
              </div>
            </div>
            <Link to="/about" className="btn btn-secondary-outline">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt scroll-animate">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-description">
            A transparent, collaborative process designed to deliver results on time and within budget
          </p>
          <div className="process-grid">
            <div className="process-step scroll-animate-item" style={{ animationDelay: '0.1s' }}>
              <div className="process-number">1</div>
              <h3>Discovery</h3>
              <p>We listen deeply to understand your business goals, target audience, and project requirements in full detail.</p>
            </div>
            <div className="process-step scroll-animate-item" style={{ animationDelay: '0.2s' }}>
              <div className="process-number">2</div>
              <h3>Strategy</h3>
              <p>Our experts craft a detailed roadmap with timelines, technology choices, and milestones tailored to your vision.</p>
            </div>
            <div className="process-step scroll-animate-item" style={{ animationDelay: '0.3s' }}>
              <div className="process-number">3</div>
              <h3>Build & Test</h3>
              <p>We develop your solution in agile sprints with regular demos, feedback loops, and rigorous quality testing.</p>
            </div>
            <div className="process-step scroll-animate-item" style={{ animationDelay: '0.4s' }}>
              <div className="process-number">4</div>
              <h3>Launch & Grow</h3>
              <p>We deploy your product and provide continuous support to ensure ongoing growth and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt scroll-animate">
        <div className="container">
          <h2 className="section-title">Start Your Project Today</h2>
          <p className="section-description">
            Drop us a message and let's discuss how we can help bring your vision to life
          </p>
          <HomeContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
