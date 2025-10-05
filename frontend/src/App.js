import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Dashboard';
import StarField from './components/StarField';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const handleLaunchDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {currentView === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onLaunchDashboard={handleLaunchDashboard} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StarField />
            <Dashboard onBack={handleBackToLanding} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;