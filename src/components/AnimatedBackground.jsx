import React, { useMemo } from 'react';
import './AnimatedBackground.css';

/**
 * Background: radial cluster of white circles.
 * Dense and larger near the center, sparser and smaller toward the edges.
 */

function generateRadialDots(count, size, maxRadius) {
  const dots = [];
  const cx = size / 2;
  const cy = size / 2;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    // Power > 1 biases points toward the center (r = 0)
    const t = Math.pow(Math.random(), 1.9);
    const r = t * maxRadius;

    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);

    const closeness = 1 - r / maxRadius; // 1 at center, 0 at edge
    const radius = 0.6 + closeness * 2.4;
    const opacity = 0.08 + closeness * 0.55;

    dots.push({ id: i, x, y, radius, opacity });
  }
  return dots;
}

const VIEWBOX_SIZE = 1000;
const RADIAL_DOTS = generateRadialDots(280, VIEWBOX_SIZE, VIEWBOX_SIZE * 0.7);

export default function AnimatedBackground() {
  const dots = useMemo(() => RADIAL_DOTS, []);

  return (
    <div aria-hidden="true" className="ambient-background-root">
      <svg
        className="radial-dot-field"
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {dots.map((d) => (
          <circle
            key={d.id}
            cx={d.x}
            cy={d.y}
            r={d.radius}
            fill="#FFFFFF"
            opacity={d.opacity}
          />
        ))}
      </svg>
    </div>
  );
}