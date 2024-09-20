import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages-container" id='packages'>
      <hr />
      <h1>Our Packages</h1>
      <div className="packages">
        <div className="package-card">
          <h2>Basic Package</h2>
          <p className="package-description">
            Ideal for startups and small businesses, our Basic Package provides a foundational website to get you online.
          </p>
          <ul className="services-list">
            <li>Professional Website Design</li>
            <li>Responsive Layout</li>
            <li>Basic SEO Setup</li>
            <li>Content Management System</li>
          </ul>
          <p className="price">R3 500.00</p>
          <a href="/portfolio#basic" className="cta-btn">View Portfolio</a>
        </div>
        <div className="package-card">
          <h2>Standard Package</h2>
          <p className="package-description">
            A comprehensive solution including a medium quality website and additional branding essentials.
          </p>
          <ul className="services-list">
            <li>Medium Quality Website Design</li>
            <li>Logo Design</li>
            <li>Business Card Design</li>
            <li>Business Email Address</li>
          </ul>
          <p className="price">R7 000.00</p>
          <a href="/portfolio#standard" className="cta-btn">View Portfolio</a>
        </div>
        <div className="package-card">
          <h2>Premium Package</h2>
          <p className="package-description">
            Our most extensive package offering a complete suite of business solutions for a polished and professional presence.
          </p>
          <ul className="services-list">
            <li>Top Notch Website Design</li>
            <li>Business Registration with CIPC</li>
            <li>Business Plan</li> 
            <li>Logo Design</li> 
            <li>Menu/Brochure Design</li>
            <li>Business Card Design</li>
            <li>Tax Consultation Design</li>
            <li>Business Bank Account Setup</li>
          </ul>
          <p className="price">R15 000.00</p>
          <a href="/portfolio#premium" className="cta-btn">View Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default Packages;
