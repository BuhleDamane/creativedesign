import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <hr />
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please fill out the form below or reach out to us directly.</p>
      </section>
      
      <section className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
      <hr className='bottom-hr' />
    </div>
  );
};

export default Contact;
