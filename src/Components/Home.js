import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* Hero Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Master Design Studio</h1>
          <p>Your one-stop shop for professional business services including website design, logos, and business consultations.</p>
          <a href="#services" className="cta-btn">Explore Our Services</a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          At Master Design Studio, we specialize in offering top-tier design and business consultation services. 
          Whether you need a professional website, a captivating logo, or expert advice, we've got you covered.
        </p>
      </section>

      {/* Services Section - Highlight Style */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-highlights">
          <div className="highlight">
            <img src="path-to-your-logo-image.jpg" alt="Logo Design" />
            <p>Logo Design</p>
          </div>
          <div className="highlight">
            <img src="path-to-your-website-design-image.jpg" alt="Web Design" />
            <p>Website Design</p>
          </div>
          <div className="highlight">
            <img src="path-to-your-consultation-image.jpg" alt="Consultation" />
            <p>Business Consultation</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
