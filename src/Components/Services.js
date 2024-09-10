import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Website Design</h3>
          <p>We build stunning websites tailored to your business needs. From basic to premium packages, we’ve got you covered.</p>
        </div>
        <div className="service-card">
          <h3>Logos & Branding</h3>
          <p>Make your business stand out with professional logo and branding services that leave a lasting impression.</p>
        </div>
        <div className="service-card">
          <h3>Business Plans</h3>
          <p>We help you create comprehensive business plans that get you noticed and funded.</p>
        </div>
        <div className="service-card">
          <h3>SARS/TAX Consultations</h3>
          <p>Let us assist with SARS/TAX and bookkeeping to ensure your business is compliant.</p>
        </div>
        <div className="service-card">
          <h3>Business Consultations</h3>
          <p>We offer tailored business consultations to guide your business to success.</p>
        </div>
        <div className="service-card">
          <h3>Brochures & Flyers</h3>
          <p>Get professionally designed brochures and flyers to promote your business.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
