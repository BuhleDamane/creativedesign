import React from 'react';
import './About.css';
import testimonialsData from './testimonialsData';

const About = () => {
  return (
    <div className="about-container">
      <hr />
      <section className="about-story">
        <h1>Welcome to Master Design Studio</h1>
        <p>
          Master Design Studio is a company born from a journey of perseverance, ambition, and creativity. 
          Founded by an LLB graduate who found herself at a crossroads, unable to secure a job right away, 
          I decided to pivot my career and learn something completely new—programming and web development. 
          Through SheCodes, I honed my skills and discovered a new passion for design and development.
        </p>
        <p>
          It was a bold move, but it transformed my life and led to the creation of one of the industry’s most promising 
          design studios. Master Design Studio is the result of that leap of faith, where we combine technical excellence 
          with creativity to deliver outstanding results to our clients.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Creativity:</strong> Each design is unique, tailored to your brand.</li>
          <li><strong>Precision:</strong> We ensure every detail is meticulously handled.</li>
          <li><strong>Commitment:</strong> Your success is our mission.</li>
        </ul>
        <p>
          We don’t just create designs; we help bring your ideas to life with a personal touch. 
          Working with us means having a partner who understands your needs, listens to your vision, 
          and delivers beyond expectations.
        </p>
      </section>

      <section className="testimonial-carousel">
        <h2>Client Testimonials</h2>
        <div className="testimonials-slider">
          <div className="train">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>{testimonial.message}</p>
                <h4>- {testimonial.client}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
