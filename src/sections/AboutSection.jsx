import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { profileData } from '../data/profile.js';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeader
          number="01"
          title="About & Engineering Focus"
          subtitle="Software Engineering + Practical AI Systems"
        />

        <div className="about-grid reveal-on-scroll">
          {/* Two-Paragraph Body Copy */}
          <div className="about-narrative">
            <p className="about-lead-paragraph">
              {profileData.about.paragraph1}
            </p>
            <p>
              {profileData.about.paragraph2}
            </p>
            <div className="about-academic-box">
              <span className="about-academic-badge">Academic Foundation: </span>
              <span>
                Undergraduate in Information Technology / Computer Science at Ibb University, Yemen, grounding applied machine learning research in rigorous software engineering principles.
              </span>
            </div>
          </div>

          {/* Quick Technical Fact Grid */}
          <div className="about-stats-grid">
            <StatCard
              value="SWE + AI"
              label="Engineering Focus"
              subtext="Systems around models"
            />
            <StatCard
              value="AraT5"
              label="Specialized NLP"
              subtext="Hierarchical generation"
            />
            <StatCard
              value="Clean"
              label="Architecture"
              subtext="Layered & decoupled"
            />
            <StatCard
              value="Ibb Univ"
              label="Academic Base"
              subtext="IT / CS Program"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
