import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'research', label: 'AI & Research', href: '#research' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="navbar-brand"
        >
          {profileData.name}
        </a>

        {/* Zone 2: 4-6 text navigation links with subtle underline indicator */}
        <nav className="navbar-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="nav-link-indicator"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme, GitHub, LinkedIn, CV) */}
        <div className="navbar-actions">
          <ThemeSwitcher />

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
            className="navbar-social-link"
          >
            <Github style={{ width: '1rem', height: '1rem' }} />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn Profile"
            className="navbar-social-link"
          >
            <Linkedin style={{ width: '1rem', height: '1rem' }} />
          </a>

          <DownloadCVButton className="navbar-cv-btn" />

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="navbar-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '1.25rem', height: '1.25rem' }} />
            ) : (
              <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`navbar-mobile-link ${
                activeSection === link.id ? 'is-active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar-mobile-footer">
            <div className="navbar-mobile-socials">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="navbar-mobile-social-link"
              >
                <Github style={{ width: '1rem', height: '1rem' }} />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="navbar-mobile-social-link"
              >
                <Linkedin style={{ width: '1rem', height: '1rem' }} />
              </a>
            </div>
            <DownloadCVButton style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem' }} />
          </div>
        </div>
      )}
    </header>
  );
}
