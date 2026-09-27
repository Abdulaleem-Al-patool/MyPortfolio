import React from 'react';
import './AnimatedBackground.css';

/**
 * Software Engineering Background
 * Features an IDE/Blueprint dot-matrix coordinate grid,
 * subtle drifting code/syntax engineering tokens, and soft cyan-cobalt ambient glow.
 */
export default function AnimatedBackground() {
  const codeTokens = [
    { text: '{ ...props }', top: '12%', left: '8%', delay: '0s' },
    { text: 'const [state, setState]', top: '28%', right: '10%', delay: '2s' },
    { text: '</>', top: '45%', left: '5%', delay: '4s' },
    { text: 'git:main (clean)', top: '65%', right: '7%', delay: '1s' },
    { text: 'async function resolve()', top: '78%', left: '12%', delay: '3s' },
    { text: 'REST API 200 OK', top: '88%', right: '14%', delay: '5s' },
    { text: '=> { return next() }', top: '38%', right: '22%', delay: '3.5s' },
    { text: '01001100', top: '18%', left: '42%', delay: '1.5s' },
  ];

  return (
    <div aria-hidden="true" className="ambient-background-root">
      {/* Engineering Blueprint Dot Matrix & Coordinate Grid */}
      <div className="dev-blueprint-grid" />

      {/* Floating Software Engineering Syntax Tokens */}
      <div className="dev-code-tokens">
        {codeTokens.map((token, i) => (
          <span
            key={i}
            className="dev-syntax-token"
            style={{
              top: token.top,
              left: token.left,
              right: token.right,
              animationDelay: token.delay,
            }}
          >
            {token.text}
          </span>
        ))}
      </div>

      {/* Subtle Glowing Ambient Glows */}
      <div className="ambient-glow-orb-1" />
      <div className="ambient-glow-orb-2" />
    </div>
  );
}
