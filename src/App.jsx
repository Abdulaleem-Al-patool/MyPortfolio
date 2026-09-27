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
import ServicesSection from './sections/ServicesSection.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
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
        {/* Animated Background with the 9 signature vertical lines from uploaded design */}
        <AnimatedBackground />

        {/* Fixed Active Navigation Bar */}
        <Navbar />

        <main className="app-main">
          {/* Hero Section with Personal Identity & Interactive CLI */}
          <Hero />

          {/* Section: About Me & Personal Journey */}
          <AboutSection />

          {/* Section: Specialized Engineering Services */}
          <ServicesSection />

          {/* Section: Popular Projects (with alternating layout & circular 45-degree arrow links) */}
          <section id="projects" className="app-section">
            <div className="container">
              <div className="top_section reveal-on-scroll">
                <h2>
                  Explore my Popular <span className="text-accent">Projects</span>
                </h2>
                <p>
                  Production systems, clean architecture implementations, and desktop visualizers. Each project includes technical problem statements, approaches, and evaluation metrics.
                </p>
              </div>
              <ProjectGrid />
            </div>
          </section>

          {/* Section: Engineering Principles (How I Build) */}
          <HowIBuildSection />

          {/* Section: Technical Skills */}
          <section id="skills" className="app-section">
            <div className="container">
              <div className="top_section reveal-on-scroll">
                <h2>
                  Technical <span className="text-accent">Competencies</span>
                </h2>
                <p>
                  Core programming languages, full-stack frameworks, systems engineering practices, and developer tooling.
                </p>
              </div>
              <SkillGroup />
            </div>
          </section>

          {/* Section: Contact Me */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
