import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Globe, Thermometer, Ruler, Clock } from 'lucide-react';

const ExoplanetCards = ({ planets, filters, onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const filteredPlanets = planets.filter(planet => {
    const matchesSearch = planet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesConfidence = planet.confidence >= filters.minConfidence / 100;
    const matchesOrbital = planet.orbitalPeriod <= filters.maxOrbitalPeriod;
    const matchesHabitable = !filters.habitableZone || planet.habitableZone;
    const matchesStarType = filters.starType === 'all' || planet.starType.includes(filters.starType);
    
    return matchesSearch && matchesConfidence && matchesOrbital && matchesHabitable && matchesStarType;
  });

  const PlanetDetailModal = ({ planet, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="glass-card p-8 max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-orbitron font-bold mb-6 text-space-glow">
          {planet.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Ruler className="w-5 h-5 text-space-glow" />
              <span className="text-white">Radius: {planet.radius} Earth radii</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-space-glow" />
              <span className="text-white">Orbital Period: {planet.orbitalPeriod} days</span>
            </div>
            <div className="flex items-center gap-3">
              <Thermometer className="w-5 h-5 text-space-glow" />
              <span className="text-white">Temperature: {planet.temperature}K</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-space-glow" />
              <span className="text-white">Star Type: {planet.starType}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white">Distance: {planet.distance} light-years</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white">
                Habitable Zone: {planet.habitableZone ? '✅ Yes' : '❌ No'}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Detection Confidence</span>
            <span className="text-space-glow font-bold">
              {Math.round(planet.confidence * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-space-glow to-blue-400 h-3 rounded-full"
              style={{ width: `${planet.confidence * 100}%` }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search exoplanets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-space-glow focus:outline-none"
            />
          </div>
        </div>
        
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-space-glow" />
            <span className="text-white font-semibold">Filters</span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-300 block mb-1">
                Min Confidence: {filters.minConfidence}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.minConfidence}
                onChange={(e) => onFiltersChange({...filters, minConfidence: parseInt(e.target.value)})}
                className="w-full"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={filters.habitableZone}
                  onChange={(e) => onFiltersChange({...filters, habitableZone: e.target.checked})}
                  className="rounded"
                />
                Habitable Zone Only
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlanets.map((planet, index) => (
          <motion.div
            key={planet.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="planet-card p-6 rounded-lg cursor-pointer"
            onClick={() => setSelectedPlanet(planet)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-orbitron font-bold text-white">
                {planet.name}
              </h3>
              {planet.habitableZone && (
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                  Habitable
                </span>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Radius:</span>
                <span className="text-white">{planet.radius} R⊕</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Period:</span>
                <span className="text-white">{planet.orbitalPeriod}d</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Star:</span>
                <span className="text-white">{planet.starType}</span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300">Confidence</span>
                <span className="text-sm text-space-glow font-bold">
                  {Math.round(planet.confidence * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-space-glow to-blue-400 h-2 rounded-full"
                  style={{ width: `${planet.confidence * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPlanet && (
        <PlanetDetailModal
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </div>
  );
};

export default ExoplanetCards;