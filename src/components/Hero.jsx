import React from 'react';
import { ArrowDown, Github, Mail, Linkedin, Terminal, Award, BookOpen, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile.js';
import { projects } from '../data/projects.js';
import ProfileImage from './ProfileImage.jsx';
import DownloadCVButton from './DownloadCVButton.jsx';
import './Hero.css';

export default function Hero() {
  const nlpProject = projects.find(
    (p) => p.id === 'arabic-news-hierarchical-classifier'
  );

  const exactMatchMetric =
    nlpProject?.results?.find((r) => r.metric.includes('Exact Match'))?.value || '95.70%';
  const datasetSizeMetric =
    nlpProject?.results?.find((r) => r.metric.includes('Dataset Size'))?.value || '~250K';

  const credentials = [
    {
      label: 'Model Accuracy',
      value: exactMatchMetric,
      detail: 'AraT5-base Hierarchical Exact Match',
      icon: Award,
    },
    {
      label: 'Corpus Scale',
      value: datasetSizeMetric,
      detail: 'Multi-source Arabic News Dataset',
      icon: BookOpen,
    },
    {
      label: 'Academic Standing',
      value: '3.84 / 4.00',
      detail: 'IT / Computer Science, Ibb University',
      icon: GraduationCap,
    },
    {
      label: 'Systems Built',
      value: `${projects.length}`,
      detail: 'Engineered & Documented Systems',
      icon: Terminal,
    },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          {/* Authentic Portrait Avatar */}
          <div className="hero-avatar-wrapper">
            <ProfileImage style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Academic & Geographic Location Tagline */}
          <div className="hero-tagline-badge">
            <span>{profileData.role}</span>
            <span aria-hidden="true" style={{ color: 'var(--text-secondary)' }}>·</span>
            <span style={{ color: 'var(--text-secondary)' }}>Ibb University, Yemen</span>
          </div>

          {/* Main Title / Name */}
          <h1 className="hero-title">
            {profileData.name}
          </h1>

          {/* Core Technical Positioning */}
          <p className="hero-positioning">
            {profileData.positioning}
          </p>

          {/* Clear, natural bio */}
          <p className="hero-bio">
            {profileData.heroBio}
          </p>

          {/* Primary Action Buttons */}
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
              <Mail style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />
              <span>Contact</span>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="hero-icon-btn"
            >
              <Github style={{ width: '1rem', height: '1rem' }} />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="hero-icon-btn"
            >
              <Linkedin style={{ width: '1rem', height: '1rem' }} />
            </a>
          </div>

          {/* Genuine Technical Competencies Row */}
          <div className="hero-specs-row">
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Specializations:</span>
            <span>Arabic NLP &amp; AraT5</span>
            <span aria-hidden="true" style={{ color: 'var(--border-subtle)' }}>·</span>
            <span>Clean Architecture</span>
            <span aria-hidden="true" style={{ color: 'var(--border-subtle)' }}>·</span>
            <span>FastAPI &amp; Python</span>
            <span aria-hidden="true" style={{ color: 'var(--border-subtle)' }}>·</span>
            <span>React &amp; TypeScript</span>
            <span aria-hidden="true" style={{ color: 'var(--border-subtle)' }}>·</span>
            <span>PySide6 Desktop</span>
          </div>

          {/* Grounded Credentials Grid */}
          <div className="hero-credentials-grid reveal-on-scroll">
            {credentials.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="credential-card"
                >
                  <div className="credential-header">
                    <span className="credential-label">
                      {stat.label}
                    </span>
                    <Icon className="credential-icon" />
                  </div>
                  <div className="credential-value">
                    {stat.value}
                  </div>
                  <div className="credential-detail">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
