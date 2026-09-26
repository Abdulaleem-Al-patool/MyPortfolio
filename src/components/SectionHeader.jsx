import React from 'react';

export default function SectionHeader({
  number,
  title,
  subtitle,
  className = '',
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      {number && (
        <div className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[var(--accent)]">
          <span>{number}</span>
          <span className="h-px w-8 bg-[var(--accent-dim)]" aria-hidden="true" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
