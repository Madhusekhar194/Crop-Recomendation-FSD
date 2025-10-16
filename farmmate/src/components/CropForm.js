import React, { useState } from 'react';
import { getCropRecommendation, getMockRecommendation } from '../services/api';

const CropForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Try to connect to Spring Boot backend first
      const recommendation = await getCropRecommendation(formData);
      setResults({
        crop: recommendation.recommendedCrop,
        confidence: recommendation.confidence || 'High', // Fallback if no confidence score
        reasons: [
          'Based on soil nutrient analysis',
          'Optimal for current climate conditions',
          'Suitable for your region',
          'High yield potential'
        ]
      });
    } catch (error) {
      console.error('Error connecting to Spring Boot:', error);
      setError('Unable to connect to prediction service. Please ensure the Spring Boot server is running on port 9090.');
      
      // Optionally fall back to mock data
      // const mockRecommendation = await getMockRecommendation(formData);
      // setResults({
      //   crop: mockRecommendation.recommendedCrop,
      //   confidence: mockRecommendation.confidence,
      //   reasons: ['Mock data - Spring Boot server not available']
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="crop-form" className="crop-form-section">
      <div className="form-container">
        <h2 style={{textAlign: 'center', color: '#2e7d32', marginBottom: '2rem'}}>
          Crop Recommendation Form
        </h2>
        
        {error && (
          <div className="error-message" style={{
            background: '#ffebee',
            color: '#c62828',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #ffcdd2'
          }}>
            <strong>Connection Error:</strong> {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nitrogen Level (N)</label>
            <input
              type="number"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              placeholder="Enter nitrogen level (0-140)"
              min="0"
              max="140"
              required
            />
          </div>

          <div className="form-group">
            <label>Phosphorus Level (P)</label>
            <input
              type="number"
              name="phosphorus"
              value={formData.phosphorus}
              onChange={handleChange}
              placeholder="Enter phosphorus level (0-140)"
              min="0"
              max="140"
              required
            />
          </div>

          <div className="form-group">
            <label>Potassium Level (K)</label>
            <input
              type="number"
              name="potassium"
              value={formData.potassium}
              onChange={handleChange}
              placeholder="Enter potassium level (0-140)"
              min="0"
              max="140"
              required
            />
          </div>

          <div className="form-group">
            <label>Temperature (°C)</label>
            <input
              type="number"
              step="0.1"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Enter temperature (0-50°C)"
              min="0"
              max="50"
              required
            />
          </div>

          <div className="form-group">
            <label>Humidity (%)</label>
            <input
              type="number"
              step="0.1"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              placeholder="Enter humidity percentage (0-100)"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label>Soil pH</label>
            <input
              type="number"
              step="0.1"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              placeholder="Enter soil pH (0-14)"
              min="0"
              max="14"
              required
            />
          </div>

          <div className="form-group">
            <label>Rainfall (mm)</label>
            <input
              type="number"
              step="0.1"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              placeholder="Enter rainfall in mm (0-300)"
              min="0"
              max="300"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Analyzing with AI...
              </>
            ) : (
              'Get Crop Recommendation'
            )}
          </button>
        </form>

        {results && (
          <div className="results">
            <h3 style={{color: '#2e7d32', marginBottom: '1rem'}}>Recommended Crop:</h3>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50'}}>
              🌾 {results.crop}
            </p>
            {results.confidence && (
              <p style={{marginTop: '0.5rem'}}>
                <strong>Confidence:</strong> {typeof results.confidence === 'number' 
                  ? `${(results.confidence * 100).toFixed(1)}%` 
                  : results.confidence}
              </p>
            )}
            {results.reasons && (
              <div style={{marginTop: '1rem'}}>
                <h4>Why this crop?</h4>
                <ul style={{textAlign: 'left', paddingLeft: '1.5rem'}}>
                  {results.reasons.map((reason, index) => (
                    <li key={index} style={{marginBottom: '0.5rem'}}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CropForm;