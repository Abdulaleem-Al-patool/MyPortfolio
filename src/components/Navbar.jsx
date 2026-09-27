import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Facebook, Instagram, Terminal } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPos = window.scrollY + 140;
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
    <header className={`navbar-header ${scrolled ? 'active' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo with Ahmed's custom monogram */}
        <a href="#home" className="navbar-brand">
          <span className="brand-monogram">AT</span>
          <div className="brand-text-wrap">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-title">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Links */}
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
                {isActive && <span aria-hidden="true" className="nav-link-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Social Icons & Actions */}
        <div className="navbar-actions">
          <div className="nav-icons-group">
            {profileData.contact.facebook && (
              <a
                href={profileData.contact.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook Profile"
                className="navbar-icon-link"
              >
                <Facebook style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            )}
            {profileData.contact.instagram && (
              <a
                href={profileData.contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram Profile"
                className="navbar-icon-link"
              >
                <Instagram style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            )}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="navbar-icon-link"
            >
              <Github style={{ width: '1.1rem', height: '1.1rem' }} />
            </a>
          </div>

          {/* <ThemeSwitcher /> */}
          {/* <DownloadCVButton className="navbar-cv-btn" /> */}

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="navbar-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '1.35rem', height: '1.35rem' }} />
            ) : (
              <Menu style={{ width: '1.35rem', height: '1.35rem' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-brand">
            <span className="brand-monogram">AT</span>
            <span className="brand-name">{profileData.name}</span>
          </div>

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
              {profileData.contact.facebook && (
                <a
                  href={profileData.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  className="navbar-icon-link"
                >
                  <Facebook style={{ width: '1.1rem', height: '1.1rem' }} />
                </a>
              )}
              {profileData.contact.instagram && (
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="navbar-icon-link"
                >
                  <Instagram style={{ width: '1.1rem', height: '1.1rem' }} />
                </a>
              )}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="navbar-icon-link"
              >
                <Github style={{ width: '1.1rem', height: '1.1rem' }} />
              </a>
            </div>
           
          </div>
        </div>
      )}
    </header>
  );
}
