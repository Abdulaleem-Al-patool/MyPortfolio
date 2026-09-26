import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { profileData } from '../data/profile.js';
import SectionHeader from './SectionHeader.jsx';
import './ContactSection.css';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Software Engineering Project',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as resilient client action
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${formData.topic}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeader
          number="06"
          title="Let's Build Something"
          subtitle="Interested in software engineering, AI, Arabic NLP, or building a technical project together?"
        />

        <div className="contact-layout-grid reveal-on-scroll">
          {/* Left Column: Direct Coordinates */}
          <div className="contact-coords-col">
            <div className="contact-card">
              <h3 className="contact-card-title">
                Direct Contact
              </h3>
              <p className="contact-card-desc">
                Open for technical collaboration, research discussions, and software engineering opportunities.
              </p>

              {/* Email Card with Copy button */}
              <div className="contact-email-box">
                <div className="contact-email-content">
                  <Mail style={{ width: '1rem', height: '1rem', flexShrink: 0, color: 'var(--accent)' }} />
                  <span className="contact-email-text">
                    {profileData.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="contact-copy-btn"
                >
                  {copied ? (
                    <Check style={{ width: '0.875rem', height: '0.875rem', color: 'var(--success)' }} />
                  ) : (
                    <Copy style={{ width: '0.875rem', height: '0.875rem' }} />
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-list">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-social-btn"
                >
                  <div className="contact-social-inner">
                    <Github style={{ width: '1rem', height: '1rem' }} />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="contact-social-handle">@ahmed-mufeed</span>
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-social-btn"
                >
                  <div className="contact-social-inner">
                    <Linkedin style={{ width: '1rem', height: '1rem' }} />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="contact-social-handle">in/ahmed-mufeed</span>
                </a>
              </div>

              {/* Academic Location Note */}
              <div className="contact-affiliation-box">
                <div>Academic Affiliation:</div>
                <div className="contact-affiliation-val">{profileData.status}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-col">
            <div className="contact-card contact-form-card">
              <h3 className="contact-card-title">
                Send a Message
              </h3>
              <p className="contact-card-desc">
                Leave a project brief or research inquiry. The form dispatches directly to your local mail client.
              </p>

              {formSubmitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success-title">
                    Email Client Triggered
                  </div>
                  <p className="contact-form-success-text">
                    Thank you. Your message draft has been prepared for dispatch to {profileData.contact.email}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="contact-form-reset-btn"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="contact-form-label"
                      >
                        Your Name *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="contact-form-input"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="contact-form-label"
                      >
                        Your Email *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="contact-form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-topic"
                      className="contact-form-label"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="inquiry-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="contact-form-select"
                    >
                      <option value="Software Engineering Project">Software Engineering Project</option>
                      <option value="Arabic NLP / AraT5 Research">Arabic NLP / AraT5 Research</option>
                      <option value="Backend / Systems Architecture">Backend / Systems Architecture</option>
                      <option value="Technical Collaboration">Technical Collaboration</option>
                      <option value="General Technical Question">General Technical Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="contact-form-label"
                    >
                      Message *
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, technical question, or collaboration idea..."
                      className="contact-form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-form-submit-btn"
                  >
                    <Send style={{ width: '1rem', height: '1rem' }} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
