import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import { profileData } from '../data/profile.js';

export default function HowIBuildSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          number="04"
          title="Engineering Principles"
          subtitle="How I approach building software systems and machine learning workflows."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {profileData.principles.map((p) => (
            <div
              key={p.id}
              className="group rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(79,189,186,0.14)] hover:-translate-y-1"
            >
              <div className="font-mono text-xs font-semibold text-[var(--accent)] mb-2">
                Standard 0{p.number}
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
