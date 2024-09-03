import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <div className="nav">
        <h1>About Us</h1>
        <Link to="/">Go Back to Home</Link>
      </div>
      <div className="main-about">
      <p>
          Welcome to our website! We are dedicated to providing you with the best service possible.
          Our team works hard to ensure that you have the best experience while using our platform.
        </p>
        <p>
          Feel free to explore our website and learn more about what we offer.
          If you have any questions, don't hesitate to reach out to us!
        </p>

      </div>
      


    </div>
  );
}

export default About;

