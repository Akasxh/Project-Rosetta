from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    file = request.files['file']
    filepath = os.path.join('uploads', file.filename)
    file.save(filepath)
    
    # Run prediction
    result = subprocess.check_output(['python', 'predict.py', filepath])
    
    return result

if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)
    app.run(port=5000)
