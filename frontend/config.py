# Gemini API Configuration
# Get your API key from: https://makersuite.google.com/app/apikey

# GEMINI_API_KEY = ""

# Custom prompt for explaining classification reports
EXPLANATION_PROMPT = """You are an AI assistant explaining machine learning classification results for exoplanet detection.

Analyze this classification report and explain in simple terms:
1. What the precision, recall, and f1-score metrics mean
2. How well this model performed
3. What the numbers indicate about the model's accuracy

Keep the explanation concise (3-4 sentences) and easy to understand.

Model: {model_name}

Classification Report:
{classification_report}
"""
