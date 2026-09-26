import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-heading text-base font-bold text-[var(--text-primary)]">
              {profileData.name}
            </div>
            <div className="mt-0.5 font-body text-xs text-[var(--text-secondary)]">
              {profileData.role} · {profileData.positioning}
            </div>
          </div>

          {/* Social links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <div className="h-4 w-px bg-[var(--border-subtle)]" aria-hidden="true" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-subtle)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[var(--text-secondary)]">
          <div>© 2026 Ahmed Mufeed Al-Taweel. All rights reserved.</div>
          <div>Built with React, Vite & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
