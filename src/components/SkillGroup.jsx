import React from 'react';
import {
  Code,
  Globe,
  Server,
  Layers,
  Terminal,
  Cpu,
} from 'lucide-react';
import { skillGroups } from '../data/skills.js';
import './SkillGroup.css';

export default function SkillGroup() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Globe style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
      case 'backend':
        return <Server style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
      case 'architecture':
        return <Layers style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
      case 'languages':
        return <Code style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
      case 'tools':
        return <Terminal style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
      default:
        return <Cpu style={{ width: '1.15rem', height: '1.15rem', color: 'var(--main_color)' }} />;
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
