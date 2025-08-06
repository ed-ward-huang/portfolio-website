import React from 'react';
import './Experiences.css';
import waterlooLogo from '../assets/waterloo-logo.png';
import company1Logo from '../assets/daitaflow.png';
import company2Logo from '../assets/waterloo-logo.png';
import company3Logo from '../assets/TightStudio.jpeg';
import company4Logo from '../assets/AtriaCommunity.jpeg';

const expData = [
  {
    id: 1,
    logo: company3Logo,
    company: 'Tight Studio',
    role: 'Software Engineer Intern',
    period: 'Jul 2025 — Present',
    details: [
      'Built a feature for <instant video upload> and <link sharing> after screen recording',
      'Engineered <real-time file streaming> and <automatic S3 upload> with near-zero delay',
      'Shipped tools for <cropping> and <AI-generated captions> to improve accessibility'
    ],
  },
  {
    id: 2,
    logo: company1Logo,
    company: 'Daitaflow',
    role: 'Full-Stack Software Engineer',
    period: 'Apr 2025 — Jul 2025',
    details: [
      'Built an app that lets vendors upload Excel <cost forecasts> into Procore (Construction Management Platform), cutting <60%> of manual data entry',
      'Built <Django REST APIs> and <PostgreSQL> database with data checks and batch processing',
      'Redesigned <UI pages> with animations, custom icons, improving user efficiency by <30%>'
    ],
  },
  {
    id: 3,
    logo: company4Logo,
    company: 'Atria Community',
    role: 'Software Engineer Intern',
    period: 'May 2025 - Present',
    details: [
      'Built <Townhall>, a platform for <volunteers> to connect, chat, and join events',
      'Developed features like <real-time chat>, <user authentication>, and content sharing',
      'Contributed to <frontend UI> and <system design docs> to support team development'
    ],
  },
  {
    id: 4,
    logo: company2Logo,
    role: 'Research Assistant',
    company: 'University of Waterloo',
    period: 'Jun 2025 - Present',
    details: ['Contributing to open-source <Pyserini> toolkit for information retrieval research.'],
  }
];

function renderDetail(detail) {
  const parts = detail.split(/<([^>]+)>/g);
  return parts.map((text, idx) =>
    idx % 2 === 1 ? (
      <span key={idx} className="detail-highlight">
        {text}
      </span>
    ) : (
      <span key={idx}>{text}</span>
    )
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="exp-section">

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
              <h8>{item.role}</h8>
              <p className="period">{item.period}</p>
              <ul>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{renderDetail(detail)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
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
    </section>
  );
}
