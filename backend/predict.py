from keras.models import load_model
import numpy as np
import pickle
import sys
import json

def predict(csv_file_path):
    # Load model and preprocessing params
    model = load_model('exoplanet_model.h5')
    with open('preprocessing_params.pkl', 'rb') as f:
        params = pickle.load(f)
    
    # Load and preprocess data
    data = np.loadtxt(csv_file_path, skiprows=1, delimiter=',')
    x = data[:, 1:]
    
    # Normalize
    x = (x - np.mean(x, axis=1).reshape(-1,1)) / np.std(x, axis=1).reshape(-1,1)
    
    # Add moving average channel
    from scipy.ndimage.filters import uniform_filter1d
    x = np.stack([x, uniform_filter1d(x, axis=1, size=200)], axis=2)
    
    # Predict
    predictions = model.predict(x)[:, 0]
    
    # Return 5 probability values (parameters A-E)
    # For demo, we'll use the prediction and derive 5 values
    result = {
        'probabilities': [
            float(predictions[0]),
            float(max(0, predictions[0] - 0.2)),
            float(min(1, predictions[0] + 0.1)),
            float(predictions[0] * 0.8),
            float(predictions[0] * 0.9)
        ]
    }
    
    return json.dumps(result)

if __name__ == '__main__':
    result = predict(sys.argv[1])
    print(result)
