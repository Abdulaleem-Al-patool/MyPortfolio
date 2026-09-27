import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main-flex hero-centered-layout">
          {/* Top: Portrait Image */}
          <div className="div_img">
            <div className="hero-portrait-container">
              <div className="hero-image-frame">
                <img
                  src={profileData.assets.photo}
                  alt={profileData.name}
                  className="person-img"
                  loading="eager"
                />
                <div className="hero-image-glow" />
              </div>
            </div>
          </div>

          {/* Bottom: Text and Actions */}
          <div className="div_Text">
            <h4>Hello, I am</h4>
            <h1>
              <span className="accent-name">{profileData.FullName}</span>
            </h1>
            <h2>{profileData.role}</h2>
            <p>{profileData.heroBio}</p>

            {/* Centered Actions */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-btn-primary"
              >
                <span>View Projects</span>
                <ArrowDown style={{ width: '1rem', height: '1rem' }} />
              </a>

              <DownloadCVButton variant="secondary" />

              <a
                href="#contact"
                className="hero-btn-secondary"
              >
                <Mail style={{ width: '1rem', height: '1rem' }} />
                <span>Contact</span>
              </a>

              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub Profile"
                  className="hero-icon-btn"
                >
                  <Github style={{ width: '1rem', height: '1rem' }} />
                </a>
              )}

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn Profile"
                  className="hero-icon-btn"
                >
                  <Linkedin style={{ width: '1rem', height: '1rem' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
