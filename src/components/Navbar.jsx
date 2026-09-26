import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profileData } from '../data/profile.js';
import DownloadCVButton from './DownloadCVButton.jsx';

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
    <header className="sticky top-0 z-40 h-16 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
        <a
          href="#home"
          className="font-heading text-base font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          {profileData.name}
        </a>

        {/* Zone 2: 4-6 text navigation links with subtle underline indicator (NO filled pills) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive ? 'text-[var(--accent)] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions (GitHub, LinkedIn, CV) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn Profile"
            className="hidden sm:inline-flex p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <DownloadCVButton className="hidden sm:inline-flex text-xs py-1.5 px-3" />

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-sm ${
                activeSection === link.id
                  ? 'text-[var(--accent)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <DownloadCVButton className="text-xs py-1.5 px-3" />
          </div>
        </div>
      )}
    </header>
  );
}
