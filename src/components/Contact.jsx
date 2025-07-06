import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:e224huan@uwaterloo.ca?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <p className="contact-intro">
        Thank you for your interest in getting in touch! I value open
        communication and welcome any inquiries, feedback, or collaboration
        opportunities. Please don't hesitate to get in touch by filling out
        the form below.
      </p>

      <h3 className="contact-title">Message Me</h3>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={onChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={onChange}
          required
        />
        <button type="submit" className="contact-btn">
          Send
        </button>
      </form>

      <h3 className="contact-title">My Socials</h3>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/edward-huang-a45458305/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/ed-ward-huang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:e224huan@uwaterloo.ca">
          <FaEnvelope size={24} />
        </a>
      </div>
      
    </section>
  );
}
