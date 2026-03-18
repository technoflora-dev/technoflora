import React from 'react';
import Hero from '../components/Hero';

const Privacy = () => {
  return (
    <div className="page">
      <Hero 
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
      />

      <section className="section">
        <div className="container">
          <div className="content-wrapper legal-content">
            <p className="last-updated">Last Updated: June 2025</p>

            <h2>1. Introduction</h2>
            <p>
              At Technoflora, we are committed to protecting your privacy and ensuring the security of 
              your personal information. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            
            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, phone number, and 
              company information that you voluntarily give to us when you contact us or use our services.
            </p>

            <h3>Usage Data</h3>
            <p>
              Information automatically collected when you visit our website, including your IP address, 
              browser type, operating system, access times, and the pages you have viewed.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Send you updates and marketing communications (with your consent)</li>
              <li>Process your transactions and manage your orders</li>
              <li>Detect and prevent fraud or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>

            <h2>7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct or update your personal information</li>
              <li>Delete your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly 
              collect personal information from children under 18. If you become aware that a child has 
              provided us with personal information, please contact us.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review their 
              privacy policies.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p>
              Email: support@technoflora.in<br/>
              Phone: +91 7905987092
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
