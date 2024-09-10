import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <section id="packages" className="packages-section">
      <h2>Our Packages</h2>
      <div className="packages-container">
        <div className="package-card">
          <h3>Basic Website</h3>
          <p>Starting from R3,500</p>
          <ul>
            <li>Custom website design</li>
            <li>Responsive layout</li>
            <li>Basic SEO</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>Medium Quality Website</h3>
          <p>Starting from R7,000</p>
          <ul>
            <li>Custom website design</li>
            <li>Responsive layout</li>
            <li>Basic SEO</li>
            <li>Logo design</li>
            <li>Business card design</li>
            <li>Company registration with CIPC</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>Top Quality Website</h3>
          <p>Starting from R15,000</p>
          <ul>
            <li>Custom website design</li>
            <li>Responsive layout</li>
            <li>Advanced SEO</li>
            <li>Logo & brochures</li>
            <li>Business cards</li>
            <li>Company registration with CIPC</li>
            <li>Bank account setup</li>
            <li>Company email & phone numbers</li>
            <li>Tax setup & consultation</li>
            <li>Business plan creation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
