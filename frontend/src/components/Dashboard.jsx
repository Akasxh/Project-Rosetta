import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Play, ArrowLeft } from 'lucide-react';
import DataUpload from './DataUpload';
import VisualizationPanels from './VisualizationPanels';

const Dashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('upload');
  const [analysisData, setAnalysisData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const tabs = [
    { id: 'upload', label: 'Data Input', icon: Upload },
    { id: 'visualize', label: 'Results', icon: Play }
  ];

  const handleAnalysis = async (data) => {
    setIsAnalyzing(true);
    
    try {
      const formData = new FormData();
      if (data.file) {
        formData.append('file', data.file);
      }
      if (data.model) {
        formData.append('model', data.model);
      }

      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      const overallProbability = result.probabilities.reduce((sum, prob) => sum + prob, 0) / 7;
      const isPlanet = overallProbability > 0.5;
      
      setAnalysisData({
        probabilities: result.probabilities,
        overallProbability,
        isPlanet,
        verdict: isPlanet ? 'This exoplanet is likely a Planet ✅' : 'This exoplanet is NOT a Planet ❌',
        resultSummary: isPlanet ? 'Result: Yes 🌍' : 'Result: No 🚫',
        modelType: data.model,
        mlResults: result.mlResults
      });
      
      setIsAnalyzing(false);
      setActiveTab('visualize');
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed. Make sure the Python server is running on port 5000.');
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              className="glass-card p-3 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6 text-space-glow" />
            </motion.button>
            <h1 className="text-4xl font-orbitron font-bold text-white">
              Mission Control Dashboard
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-2 rounded-full mb-8 inline-flex"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-space-glow text-black font-semibold'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'upload' && (
            <DataUpload onAnalysis={handleAnalysis} isAnalyzing={isAnalyzing} />
          )}
          {activeTab === 'visualize' && analysisData && (
            <VisualizationPanels data={analysisData} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
