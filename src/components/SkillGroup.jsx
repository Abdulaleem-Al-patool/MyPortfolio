import React from 'react';
import {
  Code,
  Globe,
  Server,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { skillGroups } from '../data/skills.js';
import './SkillGroup.css';

export default function SkillGroup() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Globe style={{ width: '1.05rem', height: '1.05rem' }} />;
      case 'backend':
        return <Server style={{ width: '1.05rem', height: '1.05rem' }} />;
      case 'architecture':
        return <Layers style={{ width: '1.05rem', height: '1.05rem' }} />;
      case 'languages':
        return <Code style={{ width: '1.05rem', height: '1.05rem' }} />;
      case 'tools':
        return <Terminal style={{ width: '1.05rem', height: '1.05rem' }} />;
      default:
        return <Cpu style={{ width: '1.05rem', height: '1.05rem' }} />;
    }
  };

  return (
    <div className="competencies-modular-matrix reveal-on-scroll">
      {skillGroups.map((group, index) => {
        // Distribute span: first 2 groups take 6 cols each, remaining 3 take 4 cols each on desktop
        const isWide = index < 2;

        return (
          <section
            key={group.id}
            className={`competency-section ${isWide ? 'col-span-wide' : 'col-span-standard'}`}
            aria-labelledby={`competency-${group.id}`}
          >
            {/* Modular Header */}
            <div className="competency-header">
              <div className="competency-icon-sheen">
                {getCategoryIcon(group.id)}
              </div>
              <div className="competency-title-wrap">
                <h3 id={`competency-${group.id}`} className="competency-title">
                  {group.title}
                </h3>
               
              </div>
            </div>

            {/* Scope Summary */}
            <p className="competency-desc">
              {group.description}
            </p>

            {/* Lightweight Modular Skill Rows (No Nested Card Boxes) */}
            <div className="competency-skills-list">
              {group.skills.map((skill) => (
                <div key={skill.name} className="competency-skill-row">
                  <div className="skill-dot-indicator" aria-hidden="true" />
                  <div className="skill-content-block">
                    <span className="skill-title">
                      {skill.name}
                    </span>
                    <span className="skill-context">
                      {skill.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
