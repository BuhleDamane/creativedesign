import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Master Design Studio</h3>
          <p>Your one-stop solution for creative designs and business services.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: info@masterdesignstudio.com</p>
          <p>Phone: +27 123 456 789</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Master Design Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
