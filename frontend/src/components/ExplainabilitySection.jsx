import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Info } from 'lucide-react';

const ExplainabilitySection = ({ data }) => {
  const maxImportance = Math.max(...data.map(item => item.importance));

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-space-glow" />
          <h2 className="text-2xl font-orbitron font-bold text-white">
            AI Model Explainability
          </h2>
        </div>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          Understanding how our AI model makes decisions is crucial for scientific validation. 
          The feature importance analysis below shows which stellar and orbital characteristics 
          contribute most to exoplanet detection predictions.
        </p>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-space-glow" />
            Feature Importance Analysis
          </h3>
          
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{item.feature}</span>
                <span className="text-space-glow font-bold">
                  {Math.round(item.importance * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-space-glow to-blue-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.importance / maxImportance) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-6 h-6 text-space-glow" />
          <h3 className="text-xl font-orbitron font-bold text-white">
            Feature Explanations
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-space-glow mb-2">Transit Depth</h4>
              <p className="text-gray-300 text-sm">
                The amount of starlight blocked when a planet passes in front of its star. 
                Larger planets create deeper transits.
              </p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-space-glow mb-2">Orbital Period</h4>
              <p className="text-gray-300 text-sm">
                Time taken for one complete orbit. Helps determine planet's distance 
                from its star and potential habitability.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-space-glow mb-2">Transit Duration</h4>
              <p className="text-gray-300 text-sm">
                How long the planet takes to cross the star's disk. Provides information 
                about planet size and orbital characteristics.
              </p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold text-space-glow mb-2">Stellar Magnitude</h4>
              <p className="text-gray-300 text-sm">
                Brightness of the host star. Affects the precision of transit 
                measurements and detection confidence.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-8"
      >
        <h3 className="text-xl font-orbitron font-bold text-white mb-4">
          Model Performance Metrics
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-space-glow mb-2">94.2%</div>
            <div className="text-gray-300">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-space-glow mb-2">91.8%</div>
            <div className="text-gray-300">Precision</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-space-glow mb-2">89.5%</div>
            <div className="text-gray-300">Recall</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExplainabilitySection;