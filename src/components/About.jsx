import React from 'react';
import './About.css';
import waterlooLogo from '../assets/waterloo-logo.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Personal Blurb */}
      <div className="blurb">
        <p>
          Hi, I’m Edward Huang from Toronto, Canada. I’m currently a dual major in Computer Science and
          Finance at the University of Waterloo. I love building scalable web applications and exploring the evolving world of AI and Machine Learning.
          I learned to code in high school due to my passion for video games, and have been coding ever since.
        </p>
        <p>
          Outside of work and academics, I am a huge foodie and I love to travel and try new cuisines. Let's chat about your favourite childhood dish!
          I love fruits and you definetely can't guess my favourite fruit from my profile haha. Its Watermelon! Feel free to reach out, I'd love to work together!
        </p>
      </div>

      {/* Education Card */}
      <div className="education-card">
        <div className="edu-logo">
          <img src={waterlooLogo} alt="University of Waterloo" />
        </div>
        <div className="edu-details">
          <h3>University of Waterloo</h3>
          <p className="major">Majors: Computer Science &amp; Finance</p>
          <p className="courses">
            <strong>Relevant Courses:</strong> Algorithm Design & Data Abstraction, Data Structures & Algorithms,
            Financial Markets & Data Analytics, Interpreters & Compilers, Business Stages & Accounting
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="skills">
        <h3>Technical Skills</h3>
        <div className="skill-grid">
          <div className="skill-block">
            <h4>Languages</h4>
            <div className="skill-tags">
              <span className="tag">Python</span>
              <span className="tag">C/C++</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Java</span>
              <span className="tag">Rust</span>
            </div>
          </div>
          <div className="skill-block">
            <h4>Frameworks & Databases</h4>
            <div className="skill-tags">
              <span className="tag">React.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">Django</span>
              <span className="tag">MongoDB</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-block">
            <h4>Tools</h4>
            <div className="skill-tags">
              <span className="tag">Git &amp; GitHub</span>
              <span className="tag">PyTorch</span>
              <span className="tag">TensorFlow</span>
              <span className="tag">Scikit-Learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}