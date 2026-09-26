import React from 'react';
import { Download } from 'lucide-react';
import { profileData } from '../data/profile.js';
import './DownloadCVButton.css';

export default function DownloadCVButton({ className = '', variant = 'secondary' }) {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={profileData.assets.cv}
      download={profileData.assets.cvFilename}
      className={`download-cv-btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} ${className}`}
      aria-label="Download Ahmed Mufeed Al-Taweel's Curriculum Vitae"
    >
      <Download className="download-cv-btn-icon" aria-hidden="true" />
      <span>Download CV</span>
    </a>
  );
}
