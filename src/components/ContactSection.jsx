import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';
import { profileData } from '../data/profile.js';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    Full_name: '',
    Email: '',
    Mobile_number: '',
    Subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.Full_name || !formData.Email || !formData.message) return;

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      if (profileData.contact.sheetMonkeyFormUrl) {
        const response = await fetch(profileData.contact.sheetMonkeyFormUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({
            Full_name: '',
            Email: '',
            Mobile_number: '',
            Subject: '',
            message: '',
          });
          return;
        }
      }

      // Default mailto fallback if endpoint not configured or blocked
      const mailSubject = encodeURIComponent(
        formData.Subject || `Inquiry from ${formData.Full_name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.Full_name}\nEmail: ${formData.Email}\nPhone: ${formData.Mobile_number || 'N/A'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profileData.contact.email}?subject=${mailSubject}&body=${mailBody}`;
      setStatus({ submitting: false, submitted: true, error: null });
    } catch (err) {
      const mailSubject = encodeURIComponent(
        formData.Subject || `Inquiry from ${formData.Full_name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.Full_name}\nEmail: ${formData.Email}\nPhone: ${formData.Mobile_number || 'N/A'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profileData.contact.email}?subject=${mailSubject}&body=${mailBody}`;
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  return (
    <section className="contact app-section" id="contact">
      <div className="container">
        {/* Top Section Header with "Let's build something meaningful" intro */}
        <div className="top_section reveal-on-scroll">
          <span className="contact-kicker">
            Let’s build something meaningful
          </span>
          <h2>
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p>
            Available for engineering projects, AI systems, and technical collaboration.
          </p>
        </div>

        <div className="contact-main-grid reveal-on-scroll">
          {/* Left Column: Direct Channels & Social Links (Clean Interactive Rows) */}
          <div className="contact-channels-panel">
            <div className="channels-header">
              <h3 className="channels-title">Direct Channels</h3>
              <p className="channels-subtitle">
                Reach out directly for contracts, collaborations, or technical inquiries.
              </p>
            </div>

            <div className="channels-list">
              {profileData.contact.email && (
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="contact-channel-row"
                  aria-label={`Email Ahmed at ${profileData.contact.email}`}
                >
                  <div className="channel-icon-sheen">
                    <Mail style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                   
                    <span className="channel-value">{profileData.contact.email}</span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}

              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-channel-row"
                  aria-label="GitHub Profile"
                >
                  <div className="channel-icon-sheen">
                    <Github style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                    
                    <span className="channel-value">
                      {profileData.contact.github.replace('https://github.com/', '@')}
                    </span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-channel-row"
                  aria-label="LinkedIn Profile"
                >
                  <div className="channel-icon-sheen">
                    <Linkedin style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                 
                    <span className="channel-value">Ahmed Al-Taweel</span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}

              {profileData.contact.phone && (
                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                  className="contact-channel-row"
                  aria-label={`Call or WhatsApp at ${profileData.contact.phone}`}
                >
                  <div className="channel-icon-sheen">
                    <Phone style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Phone &amp; WhatsApp</span>
                    <span className="channel-value">{profileData.contact.phone}</span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}

              {profileData.contact.facebook && (
                <a
                  href={profileData.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-channel-row"
                  aria-label="Facebook Profile"
                >
                  <div className="channel-icon-sheen">
                    <Facebook style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Facebook</span>
                    <span className="channel-value">Ahmed Altweel</span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}

              {profileData.contact.instagram && (
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-channel-row"
                  aria-label="Instagram Profile"
                >
                  <div className="channel-icon-sheen">
                    <Instagram style={{ width: '1.05rem', height: '1.05rem' }} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Instagram</span>
                    <span className="channel-value">@_v_al_l</span>
                  </div>
                  <ArrowUpRight className="channel-arrow" style={{ width: '0.95rem', height: '0.95rem' }} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form (Subtle Glassmorphic Surface) */}
          <div className="contact-form-panel">
            {status.submitted ? (
              <div className="contact-success-box">
                <CheckCircle2
                  style={{ width: '3rem', height: '3rem', color: 'var(--main_color)' }}
                  aria-hidden="true"
                />
                <h3>Message Sent</h3>
                <p>
                  Thank you for reaching out. Your message has been received and I will reply as soon as possible.
                </p>
                <button
                  type="button"
                  className="contact-submit-btn"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-header-block">
                  <h3 className="form-title">Send a Message</h3>
                  <p className="form-subtitle">
                    Leave your details below and I'll respond promptly.
                  </p>
                </div>

                <div className="form-fields-grid">
                  <div className="form-field-group">
                    <label htmlFor="contact-full-name" className="field-label"><span className="field-required">* </span>
                      Full Name 
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      
                      name="Full_name"
                      required
                      value={formData.Full_name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="field-label"><span className="field-required">* </span>
                      Email  
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="example@gmail.com"
                      name="Email"
                      required
                      value={formData.Email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-mobile" className="field-label">
                      Phone / Telegram
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                     
                      name="Mobile_number"
                      value={formData.Mobile_number}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-subject" className="field-label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                    
                      name="Subject"
                      value={formData.Subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group full-width">
                    <label htmlFor="contact-message" className="field-label">
                      Your Message <span className="field-required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe your project, timeline, or engineering inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>
                </div>

                <div className="form-action-row">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="contact-submit-btn"
                  >
                    {status.submitting ? (
                      <span className="btn-content-loading">
                        <Loader2
                          className="animate-spin"
                          style={{ width: '1.1rem', height: '1.1rem' }}
                          aria-hidden="true"
                        />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="btn-content">
                        <span>Send Message</span>
                        <Send style={{ width: '1rem', height: '1rem' }} aria-hidden="true" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
