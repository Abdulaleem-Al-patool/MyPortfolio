import React from 'react';
import { Globe, Server, Layers, ArrowRight, Sparkles } from 'lucide-react';
import './ServicesSection.css';

export default function ServicesSection() {
  const services = [
    {
      id: 'web-dev',
      icon: Globe,
      title: 'Full-Stack Web Engineering',
      description:
        'Architecting fast, responsive, and maintainable web applications. Decoupled frontend components, state synchronization with TanStack Query, secure JWT auth, and clean modern user interfaces.',
      highlights: ['React & TypeScript', 'Modern Responsive UI', 'TanStack Query State Sync', 'Clean SRS Delivery'],
      actionHref: '#projects',
      actionText: 'Explore Projects',
    },
    {
      id: 'backend-apis',
      icon: Server,
      title: 'Backend Systems & APIs',
      description:
        'Building reliable server-side systems, RESTful APIs, data validation schemas, database integrations, and structured endpoint architectures built for scale.',
      highlights: ['RESTful API Design', 'Data Validation & Schemas', 'JWT Authentication Flows', 'Database Modeling'],
      actionHref: '#projects',
      actionText: 'View Case Studies',
    },
    {
      id: 'systems-architecture',
      icon: Layers,
      title: 'Software Systems & Architecture',
      description:
        'Applying Clean Architecture principles with strict separation of concerns (Presentation, Application, Domain, Infrastructure), command-line utilities, and algorithmic visualizers.',
      highlights: ['Clean Architecture (4 Layers)', 'CLI Tools in Python', 'PySide6 Algorithm Simulators', 'Testable Domain Logic'],
      actionHref: '#skills',
      actionText: 'Technical Skills',
    },
  ];

  return (
    <section className="services app-section" id="services">
      <div className="container">
        <div className="top_section reveal-on-scroll">
          <h2>
            Specialized <span className="text-accent">Services</span>
          </h2>
          <p>
            Delivering clean, robust software engineering solutions and modern full-stack web applications.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`service-box reveal-on-scroll reveal-delay-${idx + 1}`}
              >
                <div className="service-icon-wrap">
                  <Icon className="service-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul className="service-highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>
                      <Sparkles className="highlight-bullet" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <a href={item.actionHref} className="btn service-btn">
                  <span>{item.actionText}</span>
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
