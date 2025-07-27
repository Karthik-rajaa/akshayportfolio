import React from 'react';
import profilePic from '../assets/akshayprof.JPG';

const Home = () => (
  <section className="home-section">
    <div className="home-card">
      <div className="home-left">
        <h1 className="home-title purple-text">Akshai Santhosh</h1>
        <h2 className="home-role"> <span className="highlight">Ghost Writer</span> for Blogs, Books, and More</h2>
        <p className="home-intro">
          With a passion for storytelling and a knack for capturing unique voices, I help individuals and businesses bring their ideas to life. <br/>
          <span className="highlight">Currently open to new projects!</span>
        </p>
        <a href="/contact" className="cta-btn purple-btn">Contact Me</a>
      </div>
      <div className="home-right">
        <div className="profile-pic-frame">
          <img src={profilePic} alt="Akshai Santhosh profile" className="profile-pic" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
