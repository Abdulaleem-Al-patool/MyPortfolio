import React from 'react';
import { Download, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile.js';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about app-section" id="about">
      <div className="container">
        <div className="about-card-container reveal-on-scroll">
          <div className="div_text">
            <h2>
              About <span>Me</span>
            </h2>
            <h4>{profileData.role}</h4>

            <p className="about-p">
              {profileData.about.summary}
            </p>

            {profileData.about.highlights && (
              <div className="about-highlights-pills">
                {profileData.about.highlights.map((item) => (
                  <span key={item} className="about-pill-tag">
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div className="about-actions-row">
              <a
                href={profileData.assets.cv}
                download={profileData.assets.cvFilename}
                className="btn"
              >
                <Download style={{ width: '1rem', height: '1rem' }} />
                <span>Download CV</span>
              </a>

              <div className="academic-badge-item">
                <GraduationCap style={{ width: '1.35rem', height: '1.35rem', color: 'var(--main_color)' }} />
                <div>
                  <span className="academic-title">{profileData.status}</span>
                  <span className="academic-sub">{profileData.positioning}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Side */}
          <div className="div_img">
            <div className="about-image-wrapper">
              <img
                src={profileData.assets.photo}
                alt={profileData.name}
                className="about-portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
