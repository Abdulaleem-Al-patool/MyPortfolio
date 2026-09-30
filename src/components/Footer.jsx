import React from 'react';
import { Github, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile.js';
import './Footer.css';

export default function Footer() {
  const { contact } = profileData;
  const fullName = profileData.FullName || profileData.name;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { key: 'github', href: contact.github, label: 'GitHub', Icon: Github },
    { key: 'linkedin', href: contact.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { key: 'facebook', href: contact.facebook, label: 'Facebook', Icon: Facebook },
    { key: 'instagram', href: contact.instagram, label: 'Instagram', Icon: Instagram },
  ].filter((s) => s.href);

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo-link" aria-label="Back to home">
                <img src={profileData.Logo} alt="" className="footer-logo" />
                <span className="footer-name">{profileData.name}</span>
              </a>
              <p className="footer-tagline">{profileData.tagline}</p>
            </div>

            <div className="footer-socials">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="footer-social-link"
                >
                  <Icon style={{ width: '1.05rem', height: '1.05rem' }} />
                </a>
              ))}

              <span className="footer-sep" aria-hidden="true" />

              <button type="button" onClick={scrollToTop} className="footer-back-to-top" aria-label="Scroll back to top">
                <span>Back to top</span>
                <ArrowUp style={{ width: '0.95rem', height: '0.95rem' }} />
              </button>
            </div>
          </div>

          <div className="footer-bottom-row">
            <span>
              © {new Date().getFullYear()} {fullName}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}