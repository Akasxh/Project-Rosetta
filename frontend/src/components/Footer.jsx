import React from 'react';
import { motion } from 'framer-motion';
import { Github, Users, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-space-glow">
              Exoplanet AI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Advancing space exploration through artificial intelligence and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-space-glow" />
              <h4 className="text-xl font-semibold text-white">Team</h4>
            </div>
            <p className="text-gray-300">
              Built by passionate developers and data scientists for NASA Space Apps Challenge 2024
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <div className="flex justify-center md:justify-end items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-space-glow" />
              <h4 className="text-xl font-semibold text-white">Hackathon</h4>
            </div>
            <p className="text-gray-300">
              NASA Space Apps Challenge 2024 - Exoplanet Detection Track
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Exoplanet AI Detection. Made with ❤️ for space exploration.
          </p>
          
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-space-glow hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;