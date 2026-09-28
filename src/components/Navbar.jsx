import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile.js';
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
      if (window.scrollY >= 20) {
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
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand">
          <span className="brand-monogram">AT</span>
          <div className="brand-text-wrap">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-title">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                <span>{link.label}</span>
                {isActive && <span aria-hidden="true" className="nav-link-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Social Icons & Actions */}
        <div className="navbar-actions">
          <div className="nav-icons-group">
            {profileData.contact.linkedin && (
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                className="navbar-icon-link"
              >
                <Linkedin style={{ width: '1.05rem', height: '1.05rem' }} />
              </a>
            )}
            {profileData.contact.facebook && (
              <a
                href={profileData.contact.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook Profile"
                className="navbar-icon-link"
              >
                <Facebook style={{ width: '1.05rem', height: '1.05rem' }} />
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
                <Instagram style={{ width: '1.05rem', height: '1.05rem' }} />
              </a>
            )}
            {profileData.contact.github && (
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                className="navbar-icon-link"
              >
                <Github style={{ width: '1.05rem', height: '1.05rem' }} />
              </a>
            )}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="navbar-menu-toggle"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X style={{ width: '1.25rem', height: '1.25rem' }} />
            ) : (
              <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
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

          <div className="navbar-mobile-links">
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
          </div>

          <div className="navbar-mobile-footer">
            <div className="navbar-mobile-socials">
              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="navbar-icon-link"
                >
                  <Linkedin style={{ width: '1.05rem', height: '1.05rem' }} />
                </a>
              )}
              {profileData.contact.facebook && (
                <a
                  href={profileData.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  className="navbar-icon-link"
                >
                  <Facebook style={{ width: '1.05rem', height: '1.05rem' }} />
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
                  <Instagram style={{ width: '1.05rem', height: '1.05rem' }} />
                </a>
              )}
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="navbar-icon-link"
                >
                  <Github style={{ width: '1.05rem', height: '1.05rem' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
