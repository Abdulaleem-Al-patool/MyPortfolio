import React from 'react';
import { Download } from 'lucide-react';
import { profileData } from '../data/profile.js';

export default function DownloadCVButton({ className = '', variant = 'secondary' }) {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={profileData.assets.cv}
      download={profileData.assets.cvFilename}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
        isPrimary
          ? 'bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-90 font-semibold'
          : 'border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)]'
      } ${className}`}
      aria-label="Download Ahmed Mufeed Al-Taweel's Curriculum Vitae"
    >
      <Download className="h-4 w-4 shrink-0 text-current" aria-hidden="true" />
      <span className="whitespace-nowrap">Download CV</span>
    </a>
  );
}
