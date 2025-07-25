import React, { useState } from 'react';
import Modal from './Modal';
import pomodoroImg from '../assets/pomodoro.png';
import analytics from '../assets/YoutubeAnalytics.png';
import TTS from '../assets/text-to-speech.png';
import creditCardFraudDetection from '../assets/credit-card-fraud-detection.png';
import sentimentDrivenStockPricePredictor from '../assets/sentiment-analysis-neural-network.png';
import './Projects.css';

const projData = [
    {
    id: 1,
    title: 'X/Youtube Analytics Sentiment/Hate-speech Detection Dashboard',
    category: 'Full-Stack Applications',
    featured: true,
    image: analytics,
    period: 'Jul 2025',
    stack: ['Pytorch', 'Scikit-learn', 'Next.js', 'Youtube Data API v3', 'Twitter API v2'],
    sourceLink: 'https://github.com/ed-ward-huang/youtube-twitter-analytics',
    demoLink: '',
    details: [
      'Developed an analytics dashboard that aggregates content and replies from Twitter and Youtube of a given public account, providing insights into user engagment, sentiment analysis of comments and replies',
      'Implemented a sentiment analysis model using PyTorch and Scikit-learn, one Neural Network that classifies comments as positive, negative or neutral, and another machine learning model that classifies the negative replies as hate speech or not',
      'Utilized Next.js for server side rendering and API integration, ensuring fast load times and efficient data fetching',
      'Leveraged the Youtube Data API v3 and Twitter API v2 to fetch real-time data, enabling users to analyze trends and engagement metrics across both platforms',
      'Plans to integrate personal account authentication to fetch user-specific data from better APIs',
      'Project is currently finishing development, and will be available soon',
    ],
  },
  {
    id: 5,
    title: 'Pomodoro Timer, Task Management, and Productivity Tracker',
    category: 'Full-Stack Applications',
    featured: true,
    image: pomodoroImg,
    period: 'Feb 2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    sourceLink: 'https://github.com/ed-ward-huang/Full-Stack-Pomodoro-Timer-Productivity-Task-Management-built-with-MERN?tab=readme-ov-file',
    demoLink: '',
    details: [
      'Designed and developed a full-stack Pomodoro timer app with an integrated to-do list, boosting productivity by 30% for 20+ university students.',
      'Implemented secure user authentication with encrypted login and registration, leveraging MongoDB for storage of usernames, passwords, tasks, and productivity metrics',
      'Engineered dynamic donut pie charts with React and Chart.js to visualize real-time productivity metrics, integrating Node.js/Express APIs with MongoDB for seamless data flow'
    ],
  },
  {
    id: 2,
    title: 'Text-to-Speech Google Chrome Extension',
    category: 'Full-Stack Applications',
    featured: false,
    image: TTS,
    period: 'Nov 2024',
    stack: ['JavaScript', 'Manifest V3', 'SpeechSynthesis API'],
    sourceLink: 'https://github.com/ed-ward-huang/Text-to-Speech-Extension',
    demoLink: '',
    details: [
      'Designed and developed a Google Chrome extension leveraging the Speech Synthesis API, enabling users to listen to selected text at adjustable speed and different AI-generated voices, improving productivity and efficiency.',
      'Used by over 20+ university students to improve productivity and efficiency, enabling them to finish reading textbook chapters 150% faster',
    ],
  },
  {
    id: 3,
    title: 'Credit Card Fraud Detection Using Machine Learning',
    category: 'AI and Machine Learning',
    featured: false,
    image: creditCardFraudDetection,
    period: 'Dec 2024',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    sourceLink: 'https://github.com/ed-ward-huang/Credit-Card-Fraud-Detection-Model',
    demoLink: '',
    details: [
      'Engineered a fraud detection system that achieved 87.9% fraud detection accuracy by addressing class imbalance using the SMOTE oversampling technique and employing Random Forest classifiers',
      'Optimized model hyperparameters with GridSearchCV, boosting prediction accuracy by 2% and reducing false positives by 4%  -- minimizing manual fraud review costs',
      'Preprocessed and cleaned a dataset of 30,000+ transactions from a public dataset, utilizing techniques such as data normalization, outlier detection, missing value imputation, and resampling methods to address class imbalance',
    ],
  },
  {
    id: 4,
    title: 'Sentiment-Driven Neural Network Stock Price Predictor',
    category: 'AI and Machine Learning',
    featured: true,
    image: sentimentDrivenStockPricePredictor,
    period: 'Sep 2024 -- Jan 2025',
    stack: ['Python', 'PyTorch', 'Pandas'],
    sourceLink: '',
    demoLink: '',
    details: [
      'Led a team of 4 to develop a sentiment-driven neural network trained on Food and Drug Administration related articles, achieving 94.6% accuracy on biotech stock fluctuations',
      'Secured $250,000 in investor funding to deploy and validate model performance in live trading',
      'Designed a Multi-Layer-Perceptron (MLP) neural network, enhancing predictive accuracy by 15% over the baseline model by using 8+ layers and ReLU activations',
      'Developed a scalable backend system that collected, cleaned, and computed key financial metrics for 1,300,000+ YFinance datasets, detecting price changes, normalization, calculating percentage changes and other key statistics to facilitate model training across 400+ epochs'
    ],
  },
];

const categories = ['All', 'Full-Stack Applications', 'AI and Machine Learning'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const filtered = filter === 'All' ? projData : projData.filter(p => p.category === filter);
  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  const handleClick = (item, e) => {
    setActive({ ...item, originX: e.clientX, originY: e.clientY });
  };

  return (
    <section id="projects" className="proj-section">
      <div className="proj-header">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <>
          <h4 className="subheading">Featured</h4>
          <div className="proj-grid">
            {featured.map(item => (
              <div
                key={item.id}
                className="proj-card"
                onClick={e => handleClick(item, e)}
              >
                <img src={item.image} alt={item.title} />
                <div className="proj-info">
                  <h4>{item.title}</h4>
                  <p className="period">{item.period}</p>
                </div>
                <div className="overlay"><span>View Details</span></div>
              </div>
            ))}
          </div>
        </>
      )}

      <h4 className="subheading">Other</h4>
      <div className="proj-grid">
        {others.map(item => (
          <div
            key={item.id}
            className="proj-card"
            onClick={e => handleClick(item, e)}
          >
            <img src={item.image} alt={item.title} />
            <div className="proj-info">
              <h4>{item.title}</h4>
              <p className="period">{item.period}</p>
            </div>
            <div className="overlay"><span>View Details</span></div>
          </div>
        ))}
      </div>

      {active && (
        <Modal data={active} onClose={() => setActive(null)}>

          <div className="modal-image-container">
            <img src={active.image} alt={active.title} />
          </div>
          <h3>{active.title}</h3>
          {/* Tech Stack Tags */}
          <div className="modal-stack">
            {active.stack.map((tech, idx) => (
              <span key={idx} className="stack-tag">{tech}</span>
            ))}
          </div>
          <p className="period">{active.period}</p>
          <ul>
            {active.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <div className="modal-buttons">
            {active.sourceLink && (
              <a href={active.sourceLink} target="_blank" rel="noopener noreferrer" className="modal-btn">
                View Source Code
              </a>
            )}
            {active.demoLink && (
              <a href={active.demoLink} target="_blank" rel="noopener noreferrer" className="modal-btn">
                Try Out The Demo
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}