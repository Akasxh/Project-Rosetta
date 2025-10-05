import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Database, Loader } from 'lucide-react';

const DataUpload = ({ onAnalysis, isAnalyzing }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState('');

  const modelOptions = [
    { id: 'cnn', name: 'CNN Methods', description: 'Convolutional Neural Network for exoplanet detection' },
    { id: 'ml', name: 'ML Techniques', description: 'Machine Learning classification algorithms' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAnalysis = () => {
    if (selectedFile || selectedDataset) {
      onAnalysis({ file: selectedFile, model: selectedDataset });
    }
  };

  if (isAnalyzing) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-12 text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-6"
        >
          <Loader className="w-full h-full text-space-glow" />
        </motion.div>
        <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
          Analyzing Data...
        </h3>
        <p className="text-gray-300 mb-6">
          Our AI models are processing your data to detect exoplanets
        </p>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-space-glow to-blue-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Upload className="w-6 h-6 text-space-glow" />
          <h3 className="text-2xl font-orbitron font-bold text-white">Upload Dataset</h3>
        </div>
        
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-space-glow transition-colors">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-300 mb-4">
            Drop your CSV or JSON file here, or click to browse
          </p>
          <input
            type="file"
            accept=".csv,.json"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="glow-button px-6 py-3 rounded-full text-black font-semibold cursor-pointer inline-block"
          >
            Choose File
          </label>
          {selectedFile && (
            <p className="text-space-glow mt-4">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-space-glow" />
          <h3 className="text-2xl font-orbitron font-bold text-white">Select Model</h3>
        </div>
        
        <div className="space-y-4">
          {modelOptions.map((dataset) => (
            <motion.div
              key={dataset.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedDataset === dataset.id
                  ? 'border-space-glow bg-space-glow/10'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => setSelectedDataset(dataset.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="font-semibold text-white mb-2">{dataset.name}</h4>
              <p className="text-gray-300 text-sm">{dataset.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2 text-center"
      >
        <motion.button
          onClick={handleAnalysis}
          disabled={!selectedFile || !selectedDataset}
          className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
            selectedFile && selectedDataset
              ? 'glow-button text-black hover:scale-105'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={selectedFile && selectedDataset ? { scale: 1.05 } : {}}
          whileTap={selectedFile && selectedDataset ? { scale: 0.95 } : {}}
        >
          Run AI Analysis
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DataUpload;