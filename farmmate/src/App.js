import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CropForm from './components/CropForm';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleTestButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <Header />
      <Hero onTestButtonClick={handleTestButtonClick} />
      <HowItWorks />
      {showForm && <CropForm />}
      <Footer />
    </div>
  );
}

export default App;