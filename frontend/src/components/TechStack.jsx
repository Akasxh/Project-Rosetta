import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', color: '#61DAFB', logo: '⚛️' },
    { name: 'Tailwind CSS', color: '#06B6D4', logo: '🎨' },
    { name: 'Chart.js', color: '#FF6384', logo: '📊' },
    { name: 'Framer Motion', color: '#0055FF', logo: '🎭' },
    { name: 'Python', color: '#3776AB', logo: '🐍' },
    { name: 'TensorFlow', color: '#FF6F00', logo: '🧠' },
    { name: 'NASA APIs', color: '#FC3D21', logo: '🚀' },
    { name: 'Node.js', color: '#339933', logo: '🟢' }
  ];

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
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with modern technologies and frameworks for optimal performance and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {tech.logo}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-space-glow transition-colors">
                {tech.name}
              </h3>
              <div 
                className="w-full h-1 rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;