import React from 'react';
import './Policies.css';

const Policies = () => {
  return (
    <div className="policies-container">
      <section id="refund-policy" className="policy-section">
        <h1>Refund Policy</h1>
        <p>
          At Master Design Studio, we strive to ensure customer satisfaction. If you are not completely satisfied with your purchase, you may be eligible for a refund. Please review our refund policy below:
        </p>
        <ul>
          <li><strong>Eligibility:</strong> Refunds are available within 30 days of purchase.</li>
          <li><strong>Process:</strong> Contact us with your order details and reason for the refund.</li>
          <li><strong>Exclusions:</strong> Custom-designed items and services are non-refundable.</li>
        </ul>
      </section>

      <section id="privacy-policy" className="policy-section">
        <h1>Privacy Policy</h1>
        <p>
          We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>
        <ul>
          <li><strong>Information Collection:</strong> We collect personal information when you make a purchase or contact us.</li>
          <li><strong>Usage:</strong> Your information is used to process transactions and improve our services.</li>
          <li><strong>Protection:</strong> We implement security measures to protect your data.</li>
        </ul>
      </section>

      <section id="terms-of-service" className="policy-section">
        <h1>Terms of Service</h1>
        <p>
          By using our services, you agree to the following terms:
        </p>
        <ul>
          <li><strong>Services:</strong> We offer web design and development services as described on our website.</li>
          <li><strong>Payment:</strong> Full payment is required before project commencement.</li>
          <li><strong>Changes:</strong> Any changes to the project must be communicated and approved.</li>
        </ul>
      </section>

      <section id="shipping-policy" className="policy-section">
        <h1>Shipping Policy</h1>
        <p>
          For physical items, we have the following shipping policies:
        </p>
        <ul>
          <li><strong>Shipping Time:</strong> Orders are processed within 2-3 business days.</li>
          <li><strong>Costs:</strong> Shipping costs are calculated based on the destination.</li>
          <li><strong>Tracking:</strong> You will receive a tracking number once your order has shipped.</li>
        </ul>
      </section>

      <section id="cancellation-policy" className="policy-section">
        <h1>Cancellation Policy</h1>
        <p>
          If you need to cancel an order or service, please review our cancellation policy:
        </p>
        <ul>
          <li><strong>Cancellation Window:</strong> You may cancel within 24 hours of placing an order.</li>
          <li><strong>Refunds:</strong> Refunds for cancellations are subject to the refund policy terms.</li>
          <li><strong>Process:</strong> Contact us immediately to initiate a cancellation.</li>
        </ul>
      </section>
    </div>
  );
};

export default Policies;
