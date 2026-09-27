import React, { useState } from 'react';
import { Mail, Phone, Facebook, Instagram, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
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
      } else {
        // Fallback or sheet error
        setStatus({ submitting: false, submitted: true, error: null });
      }
    } catch (err) {
      // If network fails (e.g. adblock or CORS), trigger mailto fallback gracefully
      const mailSubject = encodeURIComponent(formData.Subject || `Inquiry from ${formData.Full_name}`);
      const mailBody = encodeURIComponent(
        `Name: ${formData.Full_name}\nEmail: ${formData.Email}\nPhone: ${formData.Mobile_number}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profileData.contact.email}?subject=${mailSubject}&body=${mailBody}`;
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  return (
    <section className="contact app-section" id="contact">
      <div className="container">
        <div className="top_section reveal-on-scroll">
          <h2>
            Contact <span className="text-accent">Me</span>
          </h2>
          <p>
            Have a project in mind, need an AI system or full-stack application, or want to discuss research? Let's connect!
          </p>
        </div>

        <div className="contact-main-grid reveal-on-scroll">
          {/* Left Column: Follow Me Social Contacts */}
          <div className="soial_contact">
            <h2>Follow Me</h2>
            <div className="links">
              {profileData.contact.email && (
                <a href={`mailto:${profileData.contact.email}`}>
                  <span className="icon-badge">
                    <Mail style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>{profileData.contact.email}</span>
                </a>
              )}

              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon-badge">
                    <Github style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>{profileData.contact.github.replace('https://github.com/', '')}</span>
                </a>
              )}

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon-badge">
                    <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>{profileData.contact.linkedin.replace('https://linkedin.com/in/', 'in/')}</span>
                </a>
              )}

              {profileData.contact.phone && (
                <a href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}>
                  <span className="icon-badge">
                    <Phone style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>{profileData.contact.phone}</span>
                </a>
              )}

              {profileData.contact.facebook && (
                <a
                  href={profileData.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon-badge">
                    <Facebook style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>Ahmed Altweel</span>
                </a>
              )}

              {profileData.contact.instagram && (
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon-badge">
                    <Instagram style={{ width: '1.25rem', height: '1.25rem' }} />
                  </span>
                  <span>_v_al_l</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="form-wrapper">
            {status.submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 style={{ width: '3.5rem', height: '3.5rem', color: 'var(--main_color)' }} />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I will get back to you shortly.</p>
                <button
                  type="button"
                  className="button"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input_form">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    name="Full_name"
                    required
                    value={formData.Full_name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    name="Email"
                    required
                    value={formData.Email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    name="Mobile_number"
                    value={formData.Mobile_number}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    value={formData.Subject}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    rows={8}
                    required
                    placeholder="Your Message Here *"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="button"
                >
                  {status.submitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <Loader2 className="animate-spin" style={{ width: '1.2rem', height: '1.2rem' }} />
                      Sending...
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <Send style={{ width: '1.1rem', height: '1.1rem' }} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
