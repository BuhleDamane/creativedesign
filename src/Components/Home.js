import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to Master Design Studio</h1>
        <p>Your one-stop shop for professional business services including website design, logos, and business consultations.</p>
        <a href="#services" className="cta-btn">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Home;
