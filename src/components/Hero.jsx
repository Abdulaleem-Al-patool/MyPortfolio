import React, { useRef, useEffect } from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const portraitRef = useRef(null);
  const haloRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const hero = heroRef.current;
    if (!hero) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const onPointerMove = (e) => {
      const rect = hero.getBoundingClientRect();
      // Normalized delta from center (-0.5 to 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x;
      targetY = y;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const renderParallax = () => {
      // Smooth interpolation for subtle physical inertia
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${currentX * 10}px, ${currentY * 10}px, 0)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${currentX * -14}px, ${currentY * -14}px, 0)`;
      }

      rafId = requestAnimationFrame(renderParallax);
    };

    hero.addEventListener('pointermove', onPointerMove, { passive: true });
    hero.addEventListener('pointerleave', onPointerLeave, { passive: true });
    rafId = requestAnimationFrame(renderParallax);

    return () => {
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container">
        <div className="hero-main-flex hero-centered-layout">
          {/* Top: Portrait Image with subtle glow and soft glass integration */}
          <div className="div_img">
            <div className="hero-portrait-container" ref={portraitRef}>
              <div className="hero-ambient-halo" ref={haloRef} aria-hidden="true" />
              <div className="hero-image-frame">
                <img
                  src={profileData.assets.photo}
                  alt={profileData.name}
                  className="person-img"
                  loading="eager"
                />
                <div className="hero-image-glow" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Bottom: Text and Actions */}
          <div className="div_Text">
            <h4 className="hero-kicker">Hello, I am</h4>
            <h1 className="hero-name">
              <span className="accent-name">{profileData.FullName}</span>
            </h1>
            <h2 className="hero-role">{profileData.role}</h2>
            <p className="hero-bio">{profileData.heroBio}</p>

            {/* Centered Actions */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-btn-primary"
              >
                <span>View Projects</span>
                <ArrowDown style={{ width: '0.95rem', height: '0.95rem' }} />
              </a>

              <DownloadCVButton variant="secondary" />

              <a
                href="#contact"
                className="hero-btn-secondary"
              >
                <Mail style={{ width: '0.95rem', height: '0.95rem' }} />
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
