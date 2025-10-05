import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Brain, Database } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
            About the Project
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI/ML-powered exoplanet detection system leverages NASA's extensive datasets 
            to identify potentially habitable worlds beyond our solar system. Using advanced 
            machine learning algorithms, we analyze stellar light curves and transit patterns 
            to discover new exoplanets with unprecedented accuracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 text-center hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-space-glow to-blue-400 rounded-full flex items-center justify-center">
              <Satellite className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">NASA Data</h3>
            <p className="text-gray-300">
              Utilizing Kepler, TESS, and other space telescope datasets to identify 
              exoplanet candidates through transit photometry analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 text-center hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">AI/ML Models</h3>
            <p className="text-gray-300">
              Advanced neural networks and ensemble methods trained on millions 
              of stellar observations to detect subtle planetary transit signals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 text-center hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
              <Database className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Big Data</h3>
            <p className="text-gray-300">
              Processing terabytes of astronomical data to extract meaningful 
              patterns and identify potentially habitable exoplanets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;