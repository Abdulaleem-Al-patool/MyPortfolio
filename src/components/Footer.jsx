import React from 'react';
import { Github, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
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
              <span className="footer-accent">&lt;</span>
              {profileData.name}
              <span className="footer-accent"> /&gt;</span>
            </div>
            <div className="footer-role">
              {profileData.role} · {profileData.positioning}
            </div>
          </div>

          {/* Social links & Back to top */}
          <div className="footer-actions">
            {profileData.contact.facebook && (
              <a
                href={profileData.contact.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook profile"
                className="footer-social-link"
              >
                <Facebook style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            )}
            {profileData.contact.instagram && (
              <a
                href={profileData.contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram profile"
                className="footer-social-link"
              >
                <Instagram style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            )}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="footer-social-link"
            >
              <Github style={{ width: '1.1rem', height: '1.1rem' }} />
            </a>
            {profileData.contact.linkedin && (
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="footer-social-link"
              >
                <Linkedin style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            )}

            <div className="footer-sep" aria-hidden="true" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="footer-back-to-top"
            >
              <span>Back to Top</span>
              <ArrowUp style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>© {new Date().getFullYear()} {profileData.fullName || profileData.name}. All rights reserved.</div>
          <div>Engineered with React &amp; Modern Architecture</div>
        </div>
      </div>
    </footer>
  );
}
