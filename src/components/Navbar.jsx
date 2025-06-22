import React from 'react';
import './Navbar.css';

export default function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { key: 'about', label: 'About' },
    { key: 'experiences', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
  ];
  return (
    <nav className="navbar">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={`nav-item ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}