import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-editorial">
          {/* 1. Name Identifier */}
          <div className="hero-meta">
            <span className="hero-name-label">{profileData.name}</span>
          </div>

          {/* 2. Monumental Primary Headline: Job Title */}
          <h1 className="hero-headline">
            <span className="hero-headline-primary">Software Developer</span>
            <span className="hero-headline-accent"> & Systems Engineer</span>
          </h1>

          {/* 3. Editorial Content: Bio & Tailored Responsive Actions */}
          <div className="hero-editorial-footer">
            <div className="hero-bio-container">
              <p className="hero-bio">{profileData.heroBio}</p>
            </div>

            <div className="hero-actions-container">
              <div className="hero-actions">
                {/* Primary CTA */}
                <a
                  href="#projects"
                  className="hero-btn-primary"
                >
                  <span>View Projects</span>
                  <ArrowDown className="hero-btn-icon" />
                </a>

                {/* Secondary Actions */}
                <div className="hero-secondary-group">
                  <DownloadCVButton variant="secondary" />

                  <a
                    href="#contact"
                    className="hero-btn-secondary"
                  >
                    <Mail className="hero-btn-icon" />
                    <span>Contact</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="hero-social-group">
                  {profileData.contact.github && (
                    <a
                      href={profileData.contact.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub Profile"
                      className="hero-icon-btn"
                    >
                      <Github className="hero-icon-svg" />
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
                      <Linkedin className="hero-icon-svg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
