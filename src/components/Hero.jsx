import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import './Hero.css';

const ROLES = [
  'Software Developer',
  'Systems Engineer',
  'Applied AI Systems',
];

export default function Hero() {
  const nameRef = useRef(null);
  const frameRef = useRef(0);
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate the role line (skipped when the user prefers reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  // Each letter reacts to how close the pointer (mouse or finger) is to it
  const handlePointerMove = useCallback((e) => {
    const root = nameRef.current;
    if (!root) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const radius = Math.max(120, Math.min(280, window.innerWidth * 0.2));
      root.querySelectorAll('.hero-letter').forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = clientX - (r.left + r.width / 2);
        const dy = clientY - (r.top + r.height / 2);
        const p = Math.max(0, 1 - Math.hypot(dx, dy) / radius);
        el.style.setProperty('--p', p.toFixed(3));
      });
    });
  }, []);

  const resetLetters = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    nameRef.current
      ?.querySelectorAll('.hero-letter')
      .forEach((el) => el.style.setProperty('--p', '0'));
  }, []);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const words = profileData.name.split(' ');
  let letterCount = 0;

  return (
    <section
      className="hero"
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetLetters}
      onPointerUp={(e) => e.pointerType === 'touch' && resetLetters()}
    >
      <div className="container">
        <div className="hero-center">

        

          {/* The name is the focal point */}
          <h1 className="hero-name" ref={nameRef} aria-label={profileData.name}>
            {words.map((word, wi) => (
              <span
                key={word}
                className={`hero-name-word ${wi > 0 ? 'is-outline' : ''}`}
                aria-hidden="true"
              >
                {word.split('').map((ch) => {
                  const i = letterCount++;
                  return (
                    <span key={i} className="hero-letter" style={{ '--i': i, '--p': 0 }}>
                      {ch}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p className="hero-role" aria-live="polite">
            <span key={roleIndex} className="hero-role-text">
              {ROLES[roleIndex]}
            </span>
            <span className="hero-caret" aria-hidden="true" />
          </p>

          <p className="hero-bio">{profileData.heroBio}</p>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">
              <Mail className="hero-btn-icon" />
              <span>Contact me</span>
            </a>

            <DownloadCVButton variant="secondary" />

            <span className="hero-actions-divider" aria-hidden="true" />

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

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span className="hero-scroll-dot" />
      </a>
    </section>
  );
}