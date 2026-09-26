import React from 'react';
import { ArrowDown, Github, Mail, Linkedin, Terminal, Award, BookOpen, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile.js';
import ProfileImage from './ProfileImage.jsx';
import DownloadCVButton from './DownloadCVButton.jsx';

export default function Hero() {
  const credentials = [
    {
      label: 'Model Accuracy',
      value: '94.2%',
      detail: 'AraT5-base Hierarchical Top-1',
      icon: Award,
    },
    {
      label: 'NLP Corpus',
      value: '140K+',
      detail: 'Multi-source Arabic News Dataset',
      icon: BookOpen,
    },
    {
      label: 'Academic Standing',
      value: '3.84 / 4.00',
      detail: 'IT / Computer Science, Ibb University',
      icon: GraduationCap,
    },
    {
      label: 'Systems Built',
      value: '6+',
      detail: 'Full-stack & Machine Learning Projects',
      icon: Terminal,
    },
  ];

  return (
    <section id="home" className="relative pt-10 pb-16 sm:pt-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Authentic Portrait Avatar */}
          <div className="mb-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto">
              <ProfileImage className="w-full h-full shadow-sm" />
            </div>
          </div>

          {/* Academic & Geographic Location Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-1 text-xs font-mono text-[var(--accent)]">
            <span>{profileData.role}</span>
            <span aria-hidden="true" className="text-[var(--text-secondary)]">·</span>
            <span className="text-[var(--text-secondary)]">Ibb University, Yemen</span>
          </div>

          {/* Main Title / Name */}
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] max-w-3xl">
            {profileData.name}
          </h1>

          {/* Core Technical Positioning */}
          <p className="mt-3 text-base sm:text-lg font-medium text-[var(--accent)] max-w-2xl font-heading">
            {profileData.positioning}
          </p>

          {/* Clear, natural bio */}
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-body">
            {profileData.heroBio}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg-primary)] shadow-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <DownloadCVButton variant="secondary" className="hover:border-[var(--accent)]" />

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              <span>Contact</span>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="inline-flex items-center justify-center rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center justify-center rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Genuine Technical Competencies Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <span className="text-[var(--accent)] font-semibold">Specializations:</span>
            <span>Arabic NLP &amp; AraT5</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
            <span>Clean Architecture</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
            <span>FastAPI &amp; Python</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
            <span>React &amp; TypeScript</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
            <span>PySide6 Desktop</span>
          </div>

          {/* Grounded Credentials Grid */}
          <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            {credentials.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-5 transition-colors duration-150 hover:border-[var(--accent)]"
                >
                  <div className="flex items-center justify-between text-[var(--accent)] mb-2">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--text-secondary)]">
                      {stat.label}
                    </span>
                    <Icon className="h-4 w-4 text-[var(--accent)] opacity-80" />
                  </div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)] font-body leading-snug">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
