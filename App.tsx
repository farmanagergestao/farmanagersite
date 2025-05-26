import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import WhatSection from './components/WhatSection';
import BenefitsSection from './components/BenefitsSection';
import SuccessSection from './components/SuccessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowSection />
      <WhatSection />
      <BenefitsSection />
      <SuccessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
