/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
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
import { useScrollReveal } from './hooks/useScrollReveal.js';
import './App.css';

export default function App() {
  // Initialize lightweight viewport scroll reveals
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        {/* Tier 1 Ambient Background (slow organic drift, calm, dark teal/cyan) */}
        <AnimatedBackground />

        {/* 3-Zone Sticky Navigation Bar */}
        <Navbar />

        <main className="app-main">
          {/* Asymmetric Hero Section */}
          <Hero />

          {/* Section 01: About & Engineering Focus */}
          <AboutSection />

          {/* Section 02: Featured Projects */}
          <section id="projects" className="app-section">
            <div className="container">
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
          <section id="skills" className="app-section">
            <div className="container">
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
      <Analytics />
    </ThemeProvider>
  );
}
