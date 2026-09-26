import React from 'react';
import {
  Code,
  BrainCircuit,
  Layers,
  Database,
  Terminal,
} from 'lucide-react';
import { skillGroups } from '../data/skills.js';
import './SkillGroup.css';

export default function SkillGroup() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
      case 'ai-ml':
        return <BrainCircuit style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
      case 'software-engineering':
        return <Layers style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
      case 'data':
        return <Database style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
      case 'tools':
        return <Terminal style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
      default:
        return <Code style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />;
    }
  };

  return (
    <div className="skills-grid reveal-on-scroll">
      {skillGroups.map((group) => (
        <div
          key={group.id}
          className="skill-group-card"
        >
          {/* Header */}
          <div className="skill-group-header">
            <div className="skill-group-icon-wrap">
              {getCategoryIcon(group.id)}
            </div>
            <h3 className="skill-group-title">
              {group.title}
            </h3>
          </div>

          <p className="skill-group-desc">
            {group.description}
          </p>

          {/* Skill List with Context */}
          <div className="skill-items-list">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-item-box"
              >
                <div className="skill-item-name">
                  {skill.name}
                </div>
                <div className="skill-item-context">
                  {skill.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
