import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <section id="about" className="header-section">
      <h2>About Me</h2>
      <p>Hi! I’m Edward Huang, a Software Engineer studying at<br />the University of Waterloo.</p>
      <a href="/Edward_Huang_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
        View Resume
      </a>
    </section>
  );
}