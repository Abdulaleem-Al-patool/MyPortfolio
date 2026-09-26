import React from 'react';
import {
  Code,
  BrainCircuit,
  Layers,
  Database,
  Terminal,
} from 'lucide-react';
import { skillGroups } from '../data/skills.js';

export default function SkillGroup() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code className="h-4 w-4 text-[var(--accent)]" />;
      case 'ai-ml':
        return <BrainCircuit className="h-4 w-4 text-[var(--accent)]" />;
      case 'software-engineering':
        return <Layers className="h-4 w-4 text-[var(--accent)]" />;
      case 'data':
        return <Database className="h-4 w-4 text-[var(--accent)]" />;
      case 'tools':
        return <Terminal className="h-4 w-4 text-[var(--accent)]" />;
      default:
        return <Code className="h-4 w-4 text-[var(--accent)]" />;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.id}
          className="group rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgba(79,189,186,0.14)] hover:-translate-y-1"
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-2">
            <div className="transition-transform duration-300 group-hover:scale-110">
              {getCategoryIcon(group.id)}
            </div>
            <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
              {group.title}
            </h3>
          </div>

          <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed font-body">
            {group.description}
          </p>

          {/* Skill List with Context (NO progress bars or percentages) */}
          <div className="space-y-2.5">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5 transition-colors duration-150 hover:border-[var(--accent)]/50"
              >
                <div className="font-mono text-xs font-semibold text-[var(--accent)]">
                  {skill.name}
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--text-secondary)] leading-normal font-body">
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
