import React from 'react';
import './Navbar.css';

export default function Navbar({ activeTab, onTabChange, className = '', tabs}) {

  const defaultTabs = [
    { key: 'about', label: 'About' },
    { key: 'experiences', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact'}
  ];
  const navTabs = Array.isArray(tabs) ? tabs : defaultTabs;
  return (
    <nav className={`navbar ${className}`}>
      {navTabs.map(tab => (
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