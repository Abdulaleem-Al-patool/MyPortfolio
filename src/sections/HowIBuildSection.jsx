import React from 'react';
import { profileData } from '../data/profile.js';
import './HowIBuildSection.css';

export default function HowIBuildSection() {
  return (
    <section className="how-i-build-section app-section" id="principles">
      <div className="container">
        <div className="top_section reveal-on-scroll">
          <h2>
            Engineering <span className="text-accent">Philosophy</span>
          </h2>
          <p>
            The foundational engineering standards I follow to build maintainable, high-impact systems.
          </p>
        </div>

        <div className="principles-grid ">
          {profileData.principles.map((p, idx) => (
            <div
              key={p.id}
              className={`principle-card reveal-on-scroll reveal-delay-${(idx % 2) + 1}`}
            >
              <div className="principle-num">
                Standard {p.number}
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
