import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { Database, Filter, GitBranch, Cpu, CheckCircle2, Server } from 'lucide-react';

export default function ResearchSection() {
  const pipelineStages = [
    {
      step: '01',
      title: 'Data Collection',
      icon: Database,
      desc: 'Extracted ~250K raw articles from multi-source Arabic news publications, targeting broad topical diversity.',
    },
    {
      step: '02',
      title: 'Cleaning & Normalization',
      icon: Filter,
      desc: 'Rule-based text cleansing: removal of HTML artifacts, diacritic stripping, alef/hamza normalization, and deduplication.',
    },
    {
      step: '03',
      title: 'Hierarchical Label Design',
      icon: GitBranch,
      desc: 'Engineered a 3-tier taxonomy tree (Main Category → Subcategory → Fine-grained Category) preventing error propagation.',
    },
    {
      step: '04',
      title: 'AraT5 Fine-Tuning',
      icon: Cpu,
      desc: 'Formulated classification as text-to-text generation using UBC-NLP/AraT5-base on accelerated GPU hardware.',
    },
    {
      step: '05',
      title: 'Evaluation & Benchmarks',
      icon: CheckCircle2,
      desc: 'Evaluated against Exact Match across full path strings and level-wise category accuracy on holdout test set.',
    },
    {
      step: '06',
      title: 'Structured Serving',
      icon: Server,
      desc: 'Inference pipeline emitting validated JSON payloads suitable for downstream search and recommendation systems.',
    },
  ];

  return (
    <section id="research" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          number="03"
          title="AI & Research: Arabic Hierarchical NLP"
          subtitle="A systematic exploration of hierarchical text-to-text generation for complex Arabic media categorization."
        />

        {/* Technical Rationale Card */}
        <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wider">
                Research Rationale
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-[var(--text-primary)]">
                Why Hierarchical Generation with AraT5?
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                Arabic news carries dense, topically nested information. Flat multi-class classifiers force arbitrary single-label decisions, losing the contextual parent category, while cascaded binary classifiers suffer from exponential error accumulation down the decision tree.
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                By conditioning an encoder-decoder Transformer (<code className="font-mono text-[var(--text-primary)]">UBC-NLP/AraT5-base</code>) to autoregressively generate structured classification paths, the model learns relational taxonomy dependencies natively in its representation space.
              </p>
            </div>

            {/* Arabic Taxonomy Sample Callout */}
            <div className="rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 font-mono text-xs text-left min-w-[240px]">
              <div className="text-[var(--text-secondary)] text-[11px] mb-1">
                Sample Generated Path
              </div>
              <div className="text-[var(--text-primary)] font-bold text-sm">
                اقتصاد &gt; أسواق مالية &gt; أسهم
              </div>
              <div className="mt-1 text-[11px] text-[var(--text-secondary)]">
                Economy &gt; Financial Markets &gt; Equities
              </div>
              <div className="mt-3 border-t border-[var(--border-subtle)] pt-2 flex items-center justify-between text-[10px]">
                <span className="text-[var(--accent)]">UBC-NLP/AraT5-base</span>
                <span className="text-[var(--success)]">Exact Match</span>
              </div>
            </div>
          </div>

          {/* Explicitly Labeled Test-Set Results */}
          <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-mono text-xs font-semibold text-[var(--text-primary)] tracking-wide">
                Reported Test-Set Benchmarks
              </h4>
              <span className="font-mono text-[11px] text-[var(--accent)]">
                Evaluated on Test Dataset
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard
                value="95.70%"
                label="Exact Match"
                subtext="Full taxonomy path"
              />
              <StatCard
                value="97.40%"
                label="Main Category"
                subtext="Top-level accuracy"
              />
              <StatCard
                value="~250K"
                label="Articles Curated"
                subtext="Cleaned Arabic corpus"
              />
              <StatCard
                value="6"
                label="Main Categories"
                subtext="Multi-tier branching"
              />
            </div>
          </div>
        </div>

        {/* Research Stages Grid */}
        <div className="mt-10">
          <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-4">
            Research & Methodology Lifecycle
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pipelineStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="group rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 sm:p-5 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_6px_20px_rgba(79,189,186,0.14)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      STAGE_{stage.step}
                    </span>
                    <Icon className="h-4 w-4 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="font-heading text-sm font-semibold text-[var(--text-primary)]">
                    {stage.title}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                    {stage.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
