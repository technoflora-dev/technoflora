import React from 'react';
import Hero from '../components/Hero';

const Terms = () => {
  return (
    <div className="page">
      <Hero 
        title="Terms & Conditions"
        subtitle="Legal Information"
      />

      <section className="section">
        <div className="container">
          <div className="content-wrapper legal-content">
            <p className="last-updated">Last Updated: June 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Technoflora website and services, you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to abide by the 
              above, please do not use this service.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Technoflora's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on Technoflora's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Technoflora's website are provided on an 'as is' basis. Technoflora makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Technoflora or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use the materials on Technoflora's website.
            </p>

            <h2>5. Service Terms</h2>
            <p>
              Our services are provided under the following conditions:
            </p>
            <ul>
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>Client must provide necessary access and information for service delivery</li>
              <li>Payment terms will be specified in individual service agreements</li>
              <li>Either party may terminate services with written notice as specified in agreements</li>
              <li>Confidential information will be protected as outlined in our Privacy Policy</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality on this website are owned by Technoflora and are 
              protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Technoflora may revise these terms of service at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              India. You irrevocably submit to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
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

export default Terms;
