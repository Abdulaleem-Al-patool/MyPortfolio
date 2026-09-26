import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { profileData } from '../data/profile.js';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          number="01"
          title="About & Engineering Focus"
          subtitle="Software Engineering + Practical AI Systems"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Two-Paragraph Body Copy (Section 6.4) */}
          <div className="lg:col-span-7 space-y-5 text-base text-[var(--text-secondary)] leading-relaxed font-body">
            <p className="text-[var(--text-primary)]">
              {profileData.about.paragraph1}
            </p>
            <p>
              {profileData.about.paragraph2}
            </p>
            <div className="rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-xs font-mono text-[var(--text-secondary)]">
              <span className="text-[var(--accent)] font-semibold">Academic Foundation: </span>
              <span>
                Undergraduate in Information Technology / Computer Science at Ibb University, Yemen, grounding applied machine learning research in rigorous software engineering principles.
              </span>
            </div>
          </div>

          {/* Quick Technical Fact Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <StatCard
              value="SWE + AI"
              label="Engineering Focus"
              subtext="Systems around models"
            />
            <StatCard
              value="AraT5"
              label="Specialized NLP"
              subtext="Hierarchical generation"
            />
            <StatCard
              value="Clean"
              label="Architecture"
              subtext="Layered & decoupled"
            />
            <StatCard
              value="Ibb Univ"
              label="Academic Base"
              subtext="IT / CS Program"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
