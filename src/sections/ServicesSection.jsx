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
        'Fast, maintainable web applications with modern UI, robust state management, and secure APIs.',
      highlights: ['React & TypeScript', 'Modern Responsive UI', 'TanStack State Sync'],
      actionHref: '#projects',
      actionText: 'Explore Projects',
    },
    {
      id: 'backend-apis',
      icon: Server,
      title: 'Backend Systems & APIs',
      description:
        'High-performance RESTful APIs, clean database modeling, and secure authentication flows.',
      highlights: ['RESTful API Design', 'Data Validation & Schemas', 'JWT Authentication'],
      actionHref: '#projects',
      actionText: 'View Case Studies',
    },
    {
      id: 'systems-architecture',
      icon: Layers,
      title: 'Software Systems & Architecture',
      description:
        'Decoupled Clean Architecture, testable domain logic, and high-reliability systems.',
      highlights: ['Clean Architecture (4 Layers)', 'Python CLI Utilities', 'PySide6 Simulators'],
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
            Focused engineering solutions from architecture to production delivery.
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
