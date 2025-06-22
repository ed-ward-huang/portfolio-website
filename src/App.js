import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import './App.css';

const TAB_LABELS = {
  about: 'About Me',
  experiences: 'Experience',
  projects: 'Projects',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content">
        <main className="main-content">
          <div className="header-nav">
            <h2>{TAB_LABELS[activeTab]}</h2>
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          {activeTab === 'about' && <About />}
          {activeTab === 'experiences' && <Experiences />}
          {activeTab === 'projects' && <Projects />}
        </main>
      </div>
    </div>
  );
}
