import React, { useState } from 'react';
import { profileData } from '../data/profile.js';

export default function ProfileImage({ className = '' }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-1 transition-colors duration-200 hover:border-[var(--accent)] ${className}`}
      style={{ aspectRatio: '1 / 1' }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--bg-surface)]">
        {!imageFailed ? (
          <img
            src={profileData.assets.photo}
            alt={profileData.name}
            width={360}
            height={360}
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <span className="font-heading text-2xl font-bold text-[var(--accent)]">AM</span>
            <span className="mt-1 font-mono text-[10px] text-[var(--text-secondary)]">
              Ahmed Mufeed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
