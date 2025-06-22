import React from 'react';
import './Sidebar.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import profilePic from '../assets/profile.png';
import resume from '../assets/Edward_Huang_Resume.pdf';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Edward Huang" className="profile-pic" />
      <h1 className="name">Edward Huang</h1>
      <p className="role">Software Engineer</p>

      <div className="sidebar-blurb">
        <ul className="blurb-list">
          <li>I'm a <strong>software engineer</strong> passionate about building <strong>user-focused applications</strong>.</li>
          <li>I enjoy solving <strong>tough challenges</strong> and turning ideas into <strong>functional products</strong>.</li>
        </ul>
      </div>

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View My Resume <FaPaperPlane className="btn-icon" />
      </a>

      <div className="sidebar-call">
        <p>
          If you want to <strong>hire me</strong> or <strong>work together</strong>, feel free to <span className="highlight">reach out</span> through the methods below!
        </p>
      </div>

      <h1 className="contact-title">Contact Me</h1>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/edward-huang-a45458305/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/ed-ward-huang" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:e224huan@uwaterloo.ca">
          <FaEnvelope size={24} />
        </a>
      </div>
    </aside>);}