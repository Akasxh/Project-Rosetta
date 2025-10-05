import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = ({ onLaunchDashboard }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-orbitron font-bold mb-6 bg-gradient-to-r from-space-glow via-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            DISCOVER
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-6xl font-orbitron font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            NEW WORLDS
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-space-glow mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            with AI/ML Powered Exoplanet Detection
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={onLaunchDashboard}
            className="glow-button px-8 py-4 rounded-full text-black font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-6 h-6" />
            Launch Dashboard
          </motion.button>
          
          <motion.button
            className="glass-card px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-6 h-6" />
            Explore Features
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(100, 255, 218, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(30, 144, 255, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />
    </section>
  );
};

export default Hero;