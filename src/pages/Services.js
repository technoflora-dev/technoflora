import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';

const Services = () => {
  useEffect(() => {
    // Scroll to service if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="page">
      <Hero 
        title="Everything You Need to Dominate Online"
        subtitle="Complete Digital Solutions"
        description="12 specialist services, one cohesive team, zero guesswork. Pick what you need or let us build your perfect digital stack from scratch."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title category-title">Design & Content</h2>
          <div className="services-grid">
            <div className="service-card" id="ui-ux-branding">
              <div className="service-icon">🎨</div>
              <h3>UI/UX & Branding</h3>
              <p className="service-tagline">Designs That Convert & Brands That Endure</p>
              <p>
                User research, wireframing, UI design, design systems, and complete brand 
                identity from logo to guidelines. Creating experiences that delight users 
                and drive engagement.
              </p>
              <ul className="service-features">
                <li>User Research & Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>UI Design & Design Systems</li>
                <li>Brand Identity & Guidelines</li>
                <li>Figma & Adobe Creative Suite</li>
              </ul>
            </div>

            <div className="service-card" id="content-copywriting">
              <div className="service-icon">✍️</div>
              <h3>Content & Copywriting</h3>
              <p className="service-tagline">Words That Engage, Persuade & Rank</p>
              <p>
                SEO content, landing page copy, email sequences, blog articles, and social 
                media content crafted by specialists. Content that tells your story and 
                drives conversions.
              </p>
              <ul className="service-features">
                <li>SEO Content Writing</li>
                <li>Landing Page Copywriting</li>
                <li>Blog Articles & Whitepapers</li>
                <li>Email Marketing Content</li>
                <li>Social Media Content</li>
              </ul>
            </div>

            <div className="service-card" id="ecommerce-solutions">
              <div className="service-icon">🛒</div>
              <h3>E-commerce Solutions</h3>
              <p className="service-tagline">Stores That Sell & Platforms That Scale</p>
              <p>
                Shopify, WooCommerce, and fully custom commerce platforms built for maximum 
                conversion and revenue growth. Complete e-commerce solutions from setup to 
                optimization.
              </p>
              <ul className="service-features">
                <li>Shopify Store Development</li>
                <li>WooCommerce Solutions</li>
                <li>Custom E-commerce Platforms</li>
                <li>Payment Gateway Integration</li>
                <li>Conversion Rate Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title category-title">Marketing & Growth</h2>
          <div className="services-grid">
            <div className="service-card" id="analytics-cro">
              <div className="service-icon">📊</div>
              <h3>Analytics & CRO</h3>
              <p className="service-tagline">Turn Data Into Revenue-Driving Decisions</p>
              <p>
                GA4 setup, funnel analysis, A/B testing programmes, and conversion rate 
                optimisation that compounds over time. Make data-driven decisions that 
                move the needle.
              </p>
              <ul className="service-features">
                <li>Google Analytics 4 Setup</li>
                <li>Funnel Analysis & Optimization</li>
                <li>A/B Testing & Experimentation</li>
                <li>Heat Mapping & User Recording</li>
                <li>Conversion Rate Optimization</li>
              </ul>
            </div>

            <div className="service-card" id="digital-marketing">
              <div className="service-icon">📣</div>
              <h3>Digital Marketing</h3>
              <p className="service-tagline">Performance Marketing That Pays for Itself</p>
              <p>
                Google Ads, Meta Ads, LinkedIn, email marketing — full-funnel campaigns 
                built around ROAS and real outcomes. Drive qualified leads and maximize 
                your marketing ROI.
              </p>
              <ul className="service-features">
                <li>Google Ads Management</li>
                <li>Meta Ads (Facebook & Instagram)</li>
                <li>LinkedIn Advertising</li>
                <li>Email Marketing Campaigns</li>
                <li>Marketing Automation</li>
              </ul>
            </div>

            <div className="service-card" id="seo-aso">
              <div className="service-icon">🔍</div>
              <h3>SEO & ASO</h3>
              <p className="service-tagline">Rank Higher, Get Found, Grow Organically</p>
              <p>
                Technical SEO, content strategy, link building, and App Store Optimisation 
                that drives compounding organic growth. Dominate search results and increase 
                visibility.
              </p>
              <ul className="service-features">
                <li>Technical SEO Audits</li>
                <li>On-Page & Off-Page SEO</li>
                <li>Content Strategy & Optimization</li>
                <li>Link Building Campaigns</li>
                <li>App Store Optimization (ASO)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title category-title">Engineering & Technology</h2>
          <div className="services-grid">
            <div className="service-card" id="web-development">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p className="service-tagline">Fast, Scalable Websites & Web Applications</p>
              <p>
                Next.js, React, Laravel — custom websites, SaaS platforms, and headless CMS 
                builds with 100 PageSpeed scores. Modern web solutions built for performance 
                and scalability.
              </p>
              <ul className="service-features">
                <li>Next.js & React Development</li>
                <li>Laravel & PHP Solutions</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Headless CMS Integration</li>
                <li>API Development</li>
              </ul>
            </div>

            <div className="service-card" id="app-development">
              <div className="service-icon">📱</div>
              <h3>App Development</h3>
              <p className="service-tagline">Mobile Apps Users Love & Businesses Trust</p>
              <p>
                Native iOS & Android and cross-platform React Native/Flutter apps with 
                exceptional user experiences. Build mobile applications that engage and 
                retain users.
              </p>
              <ul className="service-features">
                <li>iOS & Android Native Apps</li>
                <li>React Native Development</li>
                <li>Flutter Cross-Platform Apps</li>
                <li>App Store Deployment</li>
                <li>Mobile App Maintenance</li>
              </ul>
            </div>

            <div className="service-card" id="cloud-devops">
              <div className="service-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p className="service-tagline">Scalable, Secure & Always-On Infrastructure</p>
              <p>
                AWS, Azure, GCP cloud architecture, Kubernetes, Terraform, and CI/CD 
                pipelines with 99.99% uptime SLAs. Enterprise-grade infrastructure that 
                scales with your business.
              </p>
              <ul className="service-features">
                <li>AWS, Azure & GCP Solutions</li>
                <li>Kubernetes & Docker</li>
                <li>Terraform Infrastructure as Code</li>
                <li>CI/CD Pipeline Setup</li>
                <li>Cloud Migration & Optimization</li>
              </ul>
            </div>

            <div className="service-card" id="erp-crm">
              <div className="service-icon">🏢</div>
              <h3>ERP & CRM</h3>
              <p className="service-tagline">Connect Your Business. Automate the Mundane.</p>
              <p>
                Salesforce, HubSpot, Odoo, SAP implementation, customisation, and integration 
                that teams actually adopt and use. Streamline operations and boost productivity.
              </p>
              <ul className="service-features">
                <li>Salesforce Implementation</li>
                <li>HubSpot Setup & Integration</li>
                <li>Odoo ERP Solutions</li>
                <li>SAP Customization</li>
                <li>CRM & ERP Integration</li>
              </ul>
            </div>

            <div className="service-card" id="legacy-modernization">
              <div className="service-icon">🔄</div>
              <h3>Legacy Modernization</h3>
              <p className="service-tagline">Modernise Without Risk. Evolve Without Chaos.</p>
              <p>
                Safe, incremental migration of legacy systems to modern cloud-native 
                architectures with zero business downtime. Transform your technology stack 
                without disruption.
              </p>
              <ul className="service-features">
                <li>Legacy System Assessment</li>
                <li>Microservices Architecture</li>
                <li>Cloud-Native Migration</li>
                <li>API Modernization</li>
                <li>Incremental Refactoring</li>
              </ul>
            </div>

            <div className="service-card" id="qa-testing">
              <div className="service-icon">🧪</div>
              <h3>QA & Testing</h3>
              <p className="service-tagline">Ship With Confidence. Zero Bugs in Production.</p>
              <p>
                Manual testing, Playwright automation, performance, and security QA so bugs 
                never reach your customers. Comprehensive quality assurance for flawless 
                software delivery.
              </p>
              <ul className="service-features">
                <li>Manual & Automated Testing</li>
                <li>Playwright & Selenium</li>
                <li>Performance Testing (JMeter)</li>
                <li>Security Testing & Audits</li>
                <li>Continuous Testing (CI/CD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Not Sure Where to Start?</h2>
          <div className="cta-box">
            <h3>Let's Figure It Out Together</h3>
            <p>
              Our strategy team will audit your setup and recommend the exact services that 
              will move the needle fastest for your business. Get a free consultation and 
              discover how we can help you dominate online.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Services;
