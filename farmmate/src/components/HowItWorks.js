import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2 className="section-title">How FarmMate Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon">🌱</div>
          <h3>Input Your Data</h3>
          <p>Provide details about your soil, location, climate conditions, and farming preferences</p>
        </div>
        
        <div className="step">
          <div className="step-icon">🤖</div>
          <h3>AI Analysis</h3>
          <p>Our intelligent system analyzes your data using machine learning algorithms</p>
        </div>
        
        <div className="step">
          <div className="step-icon">📊</div>
          <h3>Get Recommendations</h3>
          <p>Receive personalized crop suggestions with detailed insights and growing tips</p>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: '3rem', padding: '0 2rem'}}>
        <h3 style={{color: '#2e7d32', marginBottom: '1rem'}}>Why Choose FarmMate?</h3>
        <p style={{fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto'}}>
          FarmMate helps farmers maximize their yield by providing scientifically-backed crop recommendations. 
          Our system considers multiple factors including soil health, weather patterns, market trends, 
          and sustainable farming practices to ensure you get the most suitable crops for your land.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;