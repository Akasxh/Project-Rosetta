import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, Eye, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Automated Planet Detection',
      description: 'AI algorithms automatically identify exoplanet candidates from stellar light curves with 95%+ accuracy.',
      gradient: 'from-space-glow to-blue-400'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs displaying orbital parameters, detection confidence, and habitability metrics.',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Eye,
      title: 'Explainable AI',
      description: 'Understand model decisions with feature importance analysis and transparent prediction explanations.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Process new datasets instantly and get immediate results with our optimized ML pipeline.',
      gradient: 'from-green-400 to-emerald-400'
    }
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
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets astronomical discovery in our comprehensive exoplanet detection platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white group-hover:text-space-glow transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;