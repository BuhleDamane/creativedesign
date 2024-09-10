import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Master Design Studio helped us create a beautiful, responsive website for our business. Their attention to detail is unmatched!',
      company: 'XYZ Solutions'
    },
    {
      name: 'Jane Smith',
      feedback: 'The creative team at Master Design Studio designed an outstanding logo and business cards for our brand. Highly recommend their services!',
      company: 'ABC Enterprises'
    },
    {
      name: 'Michael Johnson',
      feedback: 'Excellent service! They handled everything from my business website to registering my company and setting up my email accounts.',
      company: 'TechCorp'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4 className="client-name">- {testimonial.name}</h4>
            <p className="company">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
