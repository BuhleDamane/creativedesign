import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  { 
    title: 'Luxury Business Logo', 
    category: 'Logo Design', 
    image: 'path-to-logo-image.jpg', 
    description: 'A sleek and modern logo for a premium brand.'
  },
  { 
    title: 'Elegant Brochure Design', 
    category: 'Brochure Design', 
    image: 'path-to-brochure-image.jpg', 
    description: 'A visually stunning brochure for a high-end business.'
  },
  { 
    title: 'Corporate Website', 
    category: 'Website Design', 
    image: 'path-to-website-image.jpg', 
    description: 'A responsive and elegant website for a luxury firm.'
  },
  {
    title: 'Business Cards', 
    category: 'Business Card Design', 
    image: 'path-to-business-card-image.jpg', 
    description: 'Custom-designed business cards with a premium feel.'
  },
  { 
    title: 'Business Plan', 
    category: 'Business Plan', 
    image: 'path-to-business-plan-image.jpg', 
    description: 'Comprehensive business plans tailored to client needs.'
  },
  { 
    title: 'Tax Consulting', 
    category: 'Consultation', 
    image: 'path-to-consulting-image.jpg', 
    description: 'Professional tax and bookkeeping consulting services.'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
