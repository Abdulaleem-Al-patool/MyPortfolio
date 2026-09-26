import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile.js';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top-row">
          <div>
            <div className="footer-name">
              {profileData.name}
            </div>
            <div className="footer-role">
              {profileData.role} · {profileData.positioning}
            </div>
          </div>

          {/* Social links & Back to top */}
          <div className="footer-actions">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="footer-social-link"
            >
              <Github style={{ width: '1rem', height: '1rem' }} />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="footer-social-link"
            >
              <Linkedin style={{ width: '1rem', height: '1rem' }} />
            </a>

            <div className="footer-sep" aria-hidden="true" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="footer-back-to-top"
            >
              <span>Top</span>
              <ArrowUp style={{ width: '0.875rem', height: '0.875rem' }} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>© 2026 Ahmed Mufeed Al-Taweel. All rights reserved.</div>
          <div>Built with React, Vite &amp; Modern CSS</div>
        </div>
      </div>
    </footer>
  );
}
