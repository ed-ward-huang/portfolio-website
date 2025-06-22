import React from 'react';
import './Experiences.css';
import waterlooLogo from '../assets/waterloo-logo.png';
import company1Logo from '../assets/daitaflow.png';

const expData = [
  {
    id: 1,
    logo: company1Logo,
    company: 'Daitaflow Software Company',
    period: 'May 2025 — Aug 2025',
    details: [
      'Led frontend development for main dashboard.',
      'Implemented unit tests and CI/CD integration.',
    ],
  }
];
/*{
    id: 2,
    logo: '/logo-company2.png',
    company: 'Company B',
    period: '2022 — 2023',
    details: [
      'Built RESTful APIs with Node.js and Express.',
      'Optimized database queries for performance.',
    ],
  },*/

export default function Experiences() {
  return (
    <section className="exp-section">

      {/* Work Experience */}
      <h3 className="exp-title">Work Experience</h3>
      <div className="exp-list">
        {expData.map(item => (
          <div key={item.id} className="exp-item">
            <div className="exp-logo">
              <img src={item.logo} alt={item.company} />
            </div>
            <div className="exp-content">
              <h4>{item.company}</h4>
              <p className="period">{item.period}</p>
              <ul>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


      <h3 className="edu-title">Education</h3>
      <div className="edu-mini-card">
        <div className="edu-logo">
          <img src={waterlooLogo} alt="University of Waterloo" />
        </div>
        <div className="edu-text">
          <h4>University of Waterloo</h4>
          <p>Dual Major: Computer Science &amp; Finance</p>
          <p className="edu-period">2024 — 2029</p>
        </div>
      </div>
    </section>)
}
