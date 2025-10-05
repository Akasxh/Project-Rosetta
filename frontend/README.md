# 🚀 Exoplanet AI Detection Dashboard

A modern, space-themed web application for AI/ML-powered exoplanet detection using NASA datasets. Built for the NASA Space Apps Challenge 2024.
 
## ✨ Features

### 🎨 Immersive Design
- **Animated starfield background** with twinkling stars and nebula effects
- **Dark gradient theme** (black to deep blue) with space-themed colors
- **Parallax scrolling** for depth without distraction
- **Smooth Framer Motion animations** throughout the interface

### 🛰️ Dashboard Functionality
- **Dataset Input**: Upload CSV/JSON files or select sample datasets
- **AI Analysis**: Run machine learning models on astronomical data
- **Interactive Visualizations**: 
  - Scatter plots (planet radius vs orbital period)
  - Bar charts for confidence scores
  - Light curve visualization showing stellar brightness dips
- **Exoplanet Cards**: Detailed view of detected planets with parameters
- **Filters & Search**: Filter by orbital period, habitable zone, star type, confidence
- **Explainable AI**: Feature importance analysis and model insights

### 🔧 Technical Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Analysis**: Simulated ML pipeline with loading animations
- **Glass-morphism UI**: Modern frosted glass effect components
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Backend**: Flask (Python), Flask-CORS
- **AI/ML**: Hugging Face Inference Client, Groq API
- **Charts**: Chart.js, React-Chartjs-2, Matplotlib, Seaborn
- **Icons**: Lucide React
- **Fonts**: Orbitron (space-themed), Inter (body text)
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NASAFrontend2
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   pip install flask flask-cors numpy matplotlib seaborn huggingface-hub
   ```

4. **Start the Flask backend**
   ```bash
   python app.py
   ```
   Backend runs on `http://localhost:5000`

5. **Start the React frontend** (in a new terminal)
   ```bash
   npm start
   ```
   Frontend runs on `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
NASAFrontend2/
├── src/
│   ├── components/
│   │   ├── StarField.jsx          # Animated background
│   │   ├── Hero.jsx               # Landing page hero section
│   │   ├── About.jsx              # Project description
│   │   ├── Features.jsx           # Key features showcase
│   │   ├── TechStack.jsx          # Technology stack display
│   │   ├── Footer.jsx             # Footer with credits
│   │   ├── Dashboard.jsx          # Main dashboard container
│   │   ├── DataUpload.jsx         # File upload and dataset selection
│   │   ├── VisualizationPanels.jsx # Charts and graphs
│   │   ├── ExoplanetCards.jsx     # Planet cards with details
│   │   └── ExplainabilitySection.jsx # AI model insights
│   ├── pages/
│   │   └── LandingPage.jsx        # Main landing page
│   ├── utils/                     # Utility functions
│   ├── App.js                     # Main app component
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles
├── app.py                         # Flask backend API
├── config.py                      # API configuration (optional)
└── package.json                   # Node dependencies
```

## 🎯 Key Components

### Landing Page
- **Hero Section**: Animated title with "Discover New Worlds with AI/ML"
- **About Project**: Description of AI/ML approach with NASA data
- **Features Grid**: Automated detection, visualization, explainable AI
- **Tech Stack**: Visual display of technologies used
- **Footer**: GitHub link and team credits

### Dashboard
- **Data Input**: Upload files or select sample datasets (Kepler, TESS, K2)
- **Model Selection**: Choose between CNN and ML models (Logistic Regression, KNN, SVM, Decision Tree, Random Forest, Voting Classifier, Gaussian Naive Bayes)
- **Analysis**: Real-time backend processing with loading animations
- **Visualizations**: Interactive charts, confusion matrices, classification reports
- **Planet Cards**: Filterable grid of detected exoplanets
- **AI Insights**: AI-powered explanations using Hugging Face models

## 🎨 Design System

### Colors
- **Space Dark**: `#0a0a0f` - Primary background
- **Space Blue**: `#1a1a2e` - Secondary background
- **Space Purple**: `#16213e` - Accent background
- **Space Glow**: `#64ffda` - Primary accent (cyan)
- **Star White**: `#ffffff` - Text and stars

### Typography
- **Orbitron**: Headings and space-themed text
- **Inter**: Body text and UI elements

### Animations
- **Float**: Gentle up-down movement
- **Twinkle**: Star opacity animation
- **Pulse Glow**: Glowing button effects

## 🔬 Backend API

The Flask backend provides:
- **POST /api/analyze**: Analyzes exoplanet data with ML models
  - Supports CNN and traditional ML models
  - Generates confusion matrices and classification reports
  - Provides AI-powered explanations via Hugging Face
  - Returns base64-encoded visualization images

## 🔮 Future Enhancements

- **More Datasets**: Support for additional space telescope data
- **Advanced Filters**: More sophisticated search and filtering
- **3D Visualizations**: Three.js integration for planet models
- **User Accounts**: Save and share discoveries
- **Real-time Data**: Live feeds from space telescopes
- **Model Training**: Allow users to train custom models

## 🏆 NASA Space Apps Challenge 2024

This project was created for the NASA Space Apps Challenge 2024, specifically for the Exoplanet Detection track. It demonstrates how modern web technologies can make complex astronomical data accessible and engaging for both scientists and the general public.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for space exploration and the search for life beyond Earth** 🌌