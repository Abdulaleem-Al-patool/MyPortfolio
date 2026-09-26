import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { profileData } from '../data/profile.js';
import './HowIBuildSection.css';

export default function HowIBuildSection() {
  return (
    <section className="how-i-build-section">
      <div className="container">
        <SectionHeader
          number="04"
          title="Engineering Principles"
          subtitle="How I approach building software systems and machine learning workflows."
        />

        <div className="principles-grid reveal-on-scroll">
          {profileData.principles.map((p) => (
            <div
              key={p.id}
              className="principle-card"
            >
              <div className="principle-num">
                Standard 0{p.number}
              </div>
              <h3 className="principle-title">
                {p.title}
              </h3>
              <p className="principle-desc">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
