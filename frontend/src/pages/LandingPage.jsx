import React from 'react';

import StarField from '../components/StarField';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const LandingPage = ({ onLaunchDashboard }) => {
  return (
    <div className="relative">
      <StarField />
      <Hero onLaunchDashboard={onLaunchDashboard} />
      <About />
      <Features />
      <TechStack />
      <Footer />
    </div>
  );
};

export default LandingPage;