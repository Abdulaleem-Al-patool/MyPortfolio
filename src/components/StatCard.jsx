import React from 'react';

export default function StatCard({ value, label, subtext, className = '' }) {
  return (
    <div
      className={`group rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 text-left transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(79,189,186,0.15)] hover:-translate-y-1 ${className}`}
    >
      <div className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--accent)] tabular-nums transition-colors duration-200 group-hover:text-[var(--text-primary)]">
        {value}
      </div>
      <div className="mt-1 font-heading text-sm font-semibold text-[var(--text-primary)]">
        {label}
      </div>
      {subtext && (
        <div className="mt-1 font-mono text-[11px] text-[var(--text-secondary)]">
          {subtext}
        </div>
      )}
    </div>
  );
}
