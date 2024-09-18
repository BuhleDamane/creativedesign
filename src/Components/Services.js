import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <hr />
      <div className="services-intro">
        <h2>Our Creative Design Services</h2>
        <p>Transforming ideas into visual masterpieces. At Master Design Studio, we offer a range of creative design services to bring your vision to life. Explore how we can enhance your brand with our bespoke solutions.</p>
      </div>
      
      <div className="services-list">
        <div className="service-item">
          <h3>Logo Design</h3>
          <p>Create a unique and memorable logo that embodies your brand's identity.</p>
        </div>
        <div className="service-item">
          <h3>Brand Identity</h3>
          <p>Develop a cohesive brand identity with custom color schemes, typography, and more.</p>
        </div>
        <div className="service-item">
          <h3>Website Design</h3>
          <p>Design elegant and functional websites that cater to your business needs.</p>
        </div>
        <div className="service-item">
          <h3>Marketing Materials</h3>
          <p>Design impactful promotional materials including posters, flyers, and brochures.</p>
        </div>
        <div className="service-item">
          <h3>Business Registration & Tax Compliance</h3>
          <p>Assistance with SARS/tax-related issues and business registration for a smooth operation.</p>
        </div>
      </div>

      <div className="services-showcase">
        <h3>Our Work</h3>
        <div className="gallery">
          <img src="path-to-your-image1.jpg" alt="Design Example 1" />
          <img src="path-to-your-image2.jpg" alt="Design Example 2" />
          <img src="path-to-your-image3.jpg" alt="Design Example 3" />
        </div>
      </div>

      <div className="services-cta">
        <p>Ready to elevate your brand with stunning design? <a href="#contact" className="cta-link">Contact us today</a> for a personalized quote!</p>
      </div>
    </section>
  );
};

export default Services;
