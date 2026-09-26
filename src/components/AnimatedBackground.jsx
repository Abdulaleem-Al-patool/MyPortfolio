import React from 'react';
import './AnimatedBackground.css';

/**
 * Ambient background - Tier 1 Motion
 * Opacity <= 0.06 relative to background.
 * GPU-friendly CSS-only transform/opacity, disabled under prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="ambient-background-root ambient-bg"
    >
      {/* Muted technical grid pattern */}
      <svg
        className="ambient-grid-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="portfolio-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="var(--text-primary)"
              strokeWidth="0.75"
            />
            {/* Fine dot at grid intersection */}
            <circle cx="0" cy="0" r="1" fill="var(--accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
      </svg>

      {/* Slow-drifting vertical line layers (black, ultra-subtle, blended) */}
      <div className="ambient-vlines-layer ambient-vlines-layer-1" />
      <div className="ambient-vlines-layer ambient-vlines-layer-2" />

      {/* Subtle organic ambient gradient orbs with slow drift */}
      <div className="ambient-glow-orb-1" />
      <div className="ambient-glow-orb-2" />
      <div className="ambient-glow-orb-3" />
    </div>
  );
}