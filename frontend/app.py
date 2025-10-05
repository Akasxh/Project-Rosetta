from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
from io import BytesIO
import base64
try:
    from config import GEMINI_API_KEY, EXPLANATION_PROMPT
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except:
    GEMINI_AVAILABLE = False

app = Flask(__name__)
CORS(app)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    model_type = request.form.get('model', 'cnn')
    probabilities = [random.uniform(0.3, 0.9) for _ in range(7)]
    
    response = {
        'probabilities': probabilities,
        'status': 'success'
    }
    
    if model_type == 'ml':
        models = [
            'Logistic Regression',
            'K-Nearest Neighbors',
            'Support Vector Machine',
            'Decision Tree',
            'Random Forest',
            'Voting Classifier',
            'Gaussian Naive Bayes'
        ]
        
        ml_results = []
        for model_name in models:
            # Generate random confusion matrix values
            tp = random.randint(380, 430)
            fn = 450 - tp
            tn = random.randint(380, 430)
            fp = 450 - tn
            
            # Calculate metrics
            precision_0 = tn / (tn + fn) if (tn + fn) > 0 else 0
            recall_0 = tn / (tn + fp) if (tn + fp) > 0 else 0
            f1_0 = 2 * (precision_0 * recall_0) / (precision_0 + recall_0) if (precision_0 + recall_0) > 0 else 0
            
            precision_1 = tp / (tp + fp) if (tp + fp) > 0 else 0
            recall_1 = tp / (tp + fn) if (tp + fn) > 0 else 0
            f1_1 = 2 * (precision_1 * recall_1) / (precision_1 + recall_1) if (precision_1 + recall_1) > 0 else 0
            
            accuracy = (tp + tn) / 900
            
            # Generate confusion matrix image
            cm = np.array([[tn, fp], [fn, tp]])
            
            plt.figure(figsize=(8, 6))
            sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
                       xticklabels=['Not Exoplanet', 'Exoplanet'],
                       yticklabels=['Not Exoplanet', 'Exoplanet'],
                       cbar_kws={'label': 'Count'})
            plt.ylabel('True Label')
            plt.xlabel('Predicted Label')
            plt.title(f'Confusion Matrix - {model_name}')
            
            # Convert plot to base64
            buffer = BytesIO()
            plt.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
            buffer.seek(0)
            image_base64 = base64.b64encode(buffer.read()).decode()
            plt.close()
            
            classification_report = f'''              precision    recall  f1-score   support\n\n           0       {precision_0:.2f}      {recall_0:.2f}      {f1_0:.2f}       450\n           1       {precision_1:.2f}      {recall_1:.2f}      {f1_1:.2f}       450\n\n    accuracy                           {accuracy:.2f}       900\n   macro avg       {(precision_0+precision_1)/2:.2f}      {(recall_0+recall_1)/2:.2f}      {(f1_0+f1_1)/2:.2f}       900\nweighted avg       {(precision_0+precision_1)/2:.2f}      {(recall_0+recall_1)/2:.2f}      {(f1_0+f1_1)/2:.2f}       900'''
            
            # Generate AI explanation
            ai_explanation = None
            import os
            from huggingface_hub import InferenceClient

            client = InferenceClient(
                provider="groq",
                # api_key="",
            )

            completion = client.chat.completions.create(
                model="moonshotai/Kimi-K2-Instruct-0905",
                messages=[
                    {
                        "role": "user",
                        "content": "Explain the classification report I recieved upon classification of whether  a object of interest is exoplanet or not:\n" + "Model: " + model_name + "\n\nClassification Report:\n" + classification_report,
                    }
                ],
            )

            ai_explanation = completion.choices[0].message.content
            
            ml_results.append({
                'modelName': model_name,
                'classificationReport': classification_report,
                'confusionMatrix': image_base64,
                'aiExplanation': ai_explanation
            })
        
        response['mlResults'] = ml_results
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
