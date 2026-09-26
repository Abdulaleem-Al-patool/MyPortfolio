import React from 'react';

/**
 * Ambient background - Tier 1 Motion
 * Opacity <= 0.06 relative to background.
 * GPU-cheap CSS-only transform/opacity, disabled under prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="ambient-bg pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Muted technical grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
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

      {/* Subtle single-axis ambient gradient drift with <= 8% lightness difference */}
      <div
        className="absolute -top-[300px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.03] blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at center, var(--accent) 0%, var(--bg-primary) 70%)',
        }}
      />
    </div>
  );
}
