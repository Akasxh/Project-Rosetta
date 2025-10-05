import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VisualizationPanels = ({ data }) => {
  const probabilityData = {
    labels: ['Parameter A', 'Parameter B', 'Parameter C', 'Parameter D', 'Parameter E'],
    datasets: [
      {
        label: 'Probability',
        data: data.probabilities,
        backgroundColor: 'rgba(100, 255, 218, 0.8)',
        borderColor: 'rgba(100, 255, 218, 1)',
        borderWidth: 2,
      },
    ],
  };

  const probabilityOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Exoplanet Classification Probabilities',
        color: 'white',
        font: { size: 18, family: 'Orbitron' }
      },
    },
    scales: {
      x: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Probability (0 → 1)',
          color: 'white',
          font: { family: 'Inter' }
        },
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        title: {
          display: true,
          text: 'Parameters',
          color: 'white',
          font: { family: 'Inter' }
        },
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {data.modelType !== 'ml' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
              {data.verdict}
            </h2>
            <p className="text-xl text-space-glow font-semibold">
              {data.resultSummary}
            </p>
          </div>
          
          <div className="chart-container">
            <Bar data={probabilityData} options={probabilityOptions} />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Overall Probability: <span className="text-space-glow font-bold">
                {(data.overallProbability * 100).toFixed(1)}%
              </span>
            </p>
          </div>
        </motion.div>
      )}

      {data.modelType === 'ml' && data.mlResults && (
        <div className="space-y-8">
          {data.mlResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-orbitron font-bold text-white">{result.modelName}</h3>
                <FileText className="w-6 h-6 text-space-glow" />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-orbitron text-white mb-4">Classification Report</h4>
                  {result.classificationReport && (
                    <div className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-space-glow text-sm font-mono">
                        {result.classificationReport}
                      </pre>
                    </div>
                  )}
                  {result.aiExplanation && (
                    <div className="mt-4 glass-card p-4 rounded-lg">
                      <h5 className="text-space-glow font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        AI Explanation
                      </h5>
                      <p className="text-white text-sm whitespace-pre-wrap">{result.aiExplanation}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-orbitron text-white mb-4">Confusion Matrix</h4>
                  {result.confusionMatrix && (
                    <div className="bg-black/50 p-4 rounded-lg">
                      <img 
                        src={`data:image/png;base64,${result.confusionMatrix}`} 
                        alt="Confusion Matrix" 
                        className="w-full h-auto rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisualizationPanels;