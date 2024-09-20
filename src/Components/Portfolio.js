import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container" id='portfolio'>
      <hr />
      <section className="portfolio-section basic-package">
        <h1>Basic Package Projects</h1>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src="basic-project-1.jpg" alt="Basic Project 1" />
            <h3>Basic Project 1</h3>
            <p>Description of Basic Project 1</p>
            <a href="/portfolio/basic-project-1" className="view-more">View More</a>
          </div>
          <div className="portfolio-item">
            <img src="basic-project-2.jpg" alt="Basic Project 2" />
            <h3>Basic Project 2</h3>
            <p>Description of Basic Project 2</p>
            <a href="/portfolio/basic-project-2" className="view-more">View More</a>
          </div>
         
        </div>
        <div className="button-container">
          <a href="/portfolio/basic-package-details" className="explore-button">Explore Basic Package</a>
        </div>
      </section>

      <section className="portfolio-section standard-package">
        <h1>Standard Package Projects</h1>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src="standard-project-1.jpg" alt="Standard Project 1" />
            <h3>Standard Project 1</h3>
            <p>Description of Standard Project 1</p>
            <a href="/portfolio/standard-project-1" className="view-more">View More</a>
          </div>
          <div className="portfolio-item">
            <img src="standard-project-2.jpg" alt="Standard Project 2" />
            <h3>Standard Project 2</h3>
            <p>Description of Standard Project 2</p>
            <a href="/portfolio/standard-project-2" className="view-more">View More</a>
          </div>
          
        </div>
        <div className="button-container">
          <a href="/portfolio/standard-package-details" className="explore-button">Explore Standard Package</a>
        </div>
      </section>

      <section className="portfolio-section premium-package">
        <h1>Premium Package Projects</h1>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src="premium-project-1.jpg" alt="Premium Project 1" />
            <h3>Premium Project 1</h3>
            <p>Description of Premium Project 1</p>
            <a href="/portfolio/premium-project-1" className="view-more">View More</a>
          </div>
          <div className="portfolio-item">
            <img src="premium-project-2.jpg" alt="Premium Project 2" />
            <h3>Premium Project 2</h3>
            <p>Description of Premium Project 2</p>
            <a href="/portfolio/premium-project-2" className="view-more">View More</a>
          </div>
         
        </div>
        <div className="button-container">
          <a href="/portfolio/premium-package-details" className="explore-button">Explore Premium Package</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
