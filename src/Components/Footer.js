import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
     
      <section className="footer-section footer-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </section>

      <section className="footer-section footer-info">
        <h2>Business Info</h2>
        <p>123 Creative Street, Design City, DC 12345</p>
        <p>Email: info@masterdesignstudio.com</p>
        <p>Phone: +1 (234) 567-8901</p>
      </section>

      <section className="footer-section footer-policies">
        <h2>Policies</h2>
        <ul>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </section>

      <section className="footer-section footer-social">
        <h2>Follow Us</h2>
        <div className="social-links">
        <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
          <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
      </section>

      <section className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Master Design Studio. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
