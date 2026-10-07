/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AsciiPortrait from './components/AsciiPortrait.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import SkillGroup from './components/SkillGroup.jsx';
import HowIBuildSection from './sections/HowIBuildSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import ParticleBackground from './components/ParticleBackground.jsx'
import './App.css';

export default function App() {
  // Initialize lightweight viewport scroll reveals
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        {/* Animated Background with the 9 signature vertical lines from uploaded design */}
       
        <ParticleBackground />
        {/* Modern Premium Floating Glassmorphism Navbar */}
        <Navbar />

        <main className="app-main">
          {/* Hero Section with Personal Identity & Interactive CLI */}
         

         


          <Hero />


 <AsciiPortrait />
          {/* Section: About Me & Personal Journey */}
          <AboutSection />

          {/* Section: Specialized Engineering Services */}
          <ServicesSection />

          {/* Section: Popular Projects (with alternating layout & circular 45-degree arrow links) */}
          <section id="projects" className="app-section">
            <div className="container">
              <div className="top_section reveal-on-scroll">
                <h2>
                  Featured <span className="text-accent">Projects</span>
                </h2>
                <p>
                  Production systems, clean architecture, and applied AI applications.
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
                  Core languages, full-stack frameworks, and engineering tooling.
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
