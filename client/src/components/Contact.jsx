import React from 'react';

const Contact = () => (
  <section className="home-section">
    <div className="home-card">
      <div className="home-left">
        <h1 className="home-title purple-text">Contact</h1>
        <p className="home-intro" style={{ marginBottom: '2.5rem' }}>
          Interested in working together or have a question? Reach out using the details below.
        </p>
        <div className="contact-direct" style={{marginTop: '2rem'}}>
          <div><span className="highlight">Phone:</span> <a href="tel:8124775745" className="contact-link">8124775745</a></div>
          <div><span className="highlight">Email:</span> <a href="mailto:akshaisanthoshwriter@gmail.com" className="contact-link">akshaisanthoshwriter@gmail.com</a></div>
          <div><span className="highlight">LinkedIn:</span> <a href="https://www.linkedin.com/in/akshai-santhosh-21aba9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-link" target="_blank" rel="noopener noreferrer">View Profile</a></div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
