import React from 'react';

const Hero = ({ onTestButtonClick }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to FarmMate</h1>
        <p>Your intelligent farming companion that helps you make data-driven decisions for better crop yields</p>
        <p>Get personalized crop recommendations based on your soil, climate, and farming conditions</p>
        <button className="cta-button" onClick={onTestButtonClick}>
          Get Crop Recommendation
        </button>
      </div>
    </section>
  );
};

export default Hero;