/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import ResearchSection from './sections/ResearchSection.jsx';
import SkillGroup from './components/SkillGroup.jsx';
import HowIBuildSection from './sections/HowIBuildSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Tier 1 Ambient Background (Opacity <= 0.06, faint grid, no purple) */}
        <AnimatedBackground />

        {/* 3-Zone Sticky Navigation Bar */}
        <Navbar />

        <main className="relative z-10">
          {/* Asymmetric Hero Section */}
          <Hero />

          {/* Section 01: About & Engineering Focus */}
          <AboutSection />

          {/* Section 02: Featured Projects */}
          <section id="projects" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <SectionHeader
                number="02"
                title="Featured Engineering Projects"
                subtitle="Production systems, research pipelines, and clean architecture implementations. Each project is data-driven and includes technical problem statements, approaches, and evaluation metrics."
              />
              <ProjectGrid />
            </div>
          </section>

          {/* Section 03: AI & Research (AraT5 Hierarchical Classifier) */}
          <ResearchSection />

          {/* Section 04: Engineering Principles (How I Build) */}
          <HowIBuildSection />

          {/* Section 05: Technical Skills (No percentage bars) */}
          <section id="skills" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <SectionHeader
                number="05"
                title="Technical Competencies"
                subtitle="Core programming languages, AI/ML frameworks, systems engineering practices, and developer tooling."
              />
              <SkillGroup />
            </div>
          </section>

          {/* Section 06: Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
