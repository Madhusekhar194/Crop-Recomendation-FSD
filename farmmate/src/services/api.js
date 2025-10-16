import axios from 'axios';

// Update this URL to match your Spring Boot backend
const API_BASE_URL = 'http://localhost:9090'; // Change port to 9090

export const getCropRecommendation = async (formData) => {
  try {
    // Convert form data to match your Spring Boot endpoint expectations
    const requestData = {
      N: parseFloat(formData.nitrogen),
      P: parseFloat(formData.phosphorus),
      K: parseFloat(formData.potassium),
      temperature: parseFloat(formData.temperature),
      humidity: parseFloat(formData.humidity),
      ph: parseFloat(formData.ph),
      rainfall: parseFloat(formData.rainfall)
    };

    console.log('Sending data to backend:', requestData);

    const response = await axios.post(`${API_BASE_URL}/predict`, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Backend response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Keep mock for fallback if needed
export const getMockRecommendation = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const crops = ['Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton', 'Sugarcane'];
  const randomCrop = crops[Math.floor(Math.random() * crops.length)];
  
  return {
    recommendedCrop: randomCrop,
    confidence: Math.random() * 0.5 + 0.5,
  };
};