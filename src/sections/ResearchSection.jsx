import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { Database, Filter, GitBranch, Cpu, CheckCircle2, Server } from 'lucide-react';
import { projects } from '../data/projects.js';
import './ResearchSection.css';

export default function ResearchSection() {
  const nlpProject = projects.find(
    (p) => p.id === 'arabic-news-hierarchical-classifier'
  );

  const exactMatchMetric =
    nlpProject?.results?.find((r) => r.metric.includes('Exact Match'))?.value || '95.70%';
  const mainCatMetric =
    nlpProject?.results?.find((r) => r.metric.includes('Main Category'))?.value || '97.40%';
  const datasetMetric =
    nlpProject?.results?.find((r) => r.metric.includes('Dataset Size'))?.value || '~250K';

  const pipelineStages = [
    {
      step: '01',
      title: 'Corpus Collection & Synthesis',
      icon: Database,
      desc: 'Aggregated ~250,000 articles across varied Arabic news portals, normalizing heterogeneous schemas.',
    },
    {
      step: '02',
      title: 'Morphological Preprocessing',
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
    <section id="research" className="research-section">
      <div className="container">
        <SectionHeader
          number="03"
          title="AI & Research: Arabic Hierarchical NLP"
          subtitle="A systematic exploration of hierarchical text-to-text generation for complex Arabic media categorization."
        />

        {/* Technical Rationale Card */}
        <div className="research-rationale-card reveal-on-scroll">
          <div className="research-rationale-top">
            <div className="research-rationale-content">
              <span className="research-rationale-tag">
                Research Rationale
              </span>
              <h3 className="research-rationale-title">
                Why Hierarchical Generation with AraT5?
              </h3>
              <p className="research-rationale-text">
                Arabic news carries dense, topically nested information. Flat multi-class classifiers force arbitrary single-label decisions, losing the contextual parent category, while cascaded binary classifiers suffer from exponential error accumulation down the decision tree.
              </p>
              <p className="research-rationale-text">
                By conditioning an encoder-decoder Transformer (<code className="font-mono" style={{ color: 'var(--text-primary)' }}>UBC-NLP/AraT5-base</code>) to autoregressively generate structured classification paths, the model learns relational taxonomy dependencies natively in its representation space.
              </p>
            </div>

            {/* Arabic Taxonomy Sample Callout */}
            <div className="research-sample-callout">
              <div className="research-sample-label">
                Sample Generated Path
              </div>
              <div className="research-sample-path">
                اقتصاد &gt; أسواق مالية &gt; أسهم
              </div>
              <div className="research-sample-translation">
                Economy &gt; Financial Markets &gt; Equities
              </div>
              <div className="research-sample-footer">
                <span style={{ color: 'var(--accent)' }}>UBC-NLP/AraT5-base</span>
                <span style={{ color: 'var(--success)' }}>Exact Match</span>
              </div>
            </div>
          </div>

          {/* Explicitly Labeled Test-Set Results */}
          <div className="research-benchmarks-wrap">
            <div className="research-benchmarks-header">
              <h4 className="research-benchmarks-title">
                Reported Test-Set Benchmarks
              </h4>
              <span className="research-benchmarks-sub">
                Evaluated on Test Dataset
              </span>
            </div>

            <div className="research-benchmarks-grid">
              <StatCard
                value={exactMatchMetric}
                label="Exact Match"
                subtext="Full taxonomy path"
              />
              <StatCard
                value={mainCatMetric}
                label="Main Category"
                subtext="Top-level accuracy"
              />
              <StatCard
                value={datasetMetric}
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
        <div className="reveal-on-scroll">
          <h3 className="research-stages-heading">
            Research & Methodology Lifecycle
          </h3>
          <div className="research-stages-grid">
            {pipelineStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="research-stage-card"
                >
                  <div className="research-stage-header">
                    <span className="research-stage-num">
                      STAGE_{stage.step}
                    </span>
                    <Icon className="research-stage-icon" />
                  </div>
                  <div className="research-stage-title">
                    {stage.title}
                  </div>
                  <div className="research-stage-desc">
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
