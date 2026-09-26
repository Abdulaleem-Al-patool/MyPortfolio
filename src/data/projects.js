/**
 * Projects Data Registry
 * Data-driven repository for all engineering projects.
 * Adding a project here requires ZERO changes to component code.
 */

export const filterCategories = [
  "All",
  "AI & NLP",
  "Software Engineering",
  "Frontend",
  "Algorithms",
  "Research",
];

export const projects = [
  {
    id: "arabic-news-hierarchical-classifier",
    title: "Arabic News Hierarchical Classifier",
    category: "AI & NLP",
    categories: ["AI & NLP", "Research"],
    visualType: "pipeline",
    featured: true,
    shortDescription:
      "Hierarchical Arabic news classification via sequence-to-sequence text generation using AraT5.",
    description:
      "A complete end-to-end NLP system for categorizing Arabic news articles into a multi-tier hierarchical taxonomy using sequence-to-sequence text generation with UBC-NLP/AraT5-base. The pipeline spans automated collection of ~250K articles, rule-based cleansing, category normalization, hierarchical label design, model fine-tuning, and strict evaluation.",
    technologies: [
      "Python",
      "AraT5 (UBC-NLP/AraT5-base)",
      "Hugging Face Transformers",
      "PyTorch",
      "Pandas",
      "Google Colab",
      "Web Scraping",
    ],
    // Placeholders for external links
    github: "#", // TODO: Add GitHub repository URL once published
    demo: null,
    huggingFace: "#", // TODO: Add Hugging Face model checkpoint URL
    paper: "#", // TODO: Add research paper / technical report link
    architecture:
      "Sequence-to-Sequence (AraT5-base Encoder-Decoder). The article body is tokenized and fed to the encoder, while the decoder autoregressively generates the hierarchical path: 'Main Category > Subcategory > Fine Category'.",
    problem:
      "Arabic news articles carry dense, topically nested information. Standard flat classification models collapse subtle distinctions (e.g. distinguishing between domestic macroeconomics, corporate earnings, and international trade within 'Economy'), while training separate classifiers for every branch causes error cascading.",
    approach:
      "Framed hierarchical classification as a conditioned text-to-text generation task using UBC-NLP/AraT5-base. Articles are cleaned and preprocessed through an automated pipeline, normalized to eliminate typographical variance (e.g. alef variations, taa marbutah), and assigned hierarchical path targets. AraT5 was fine-tuned using custom loss weighting and evaluated across both exact hierarchy matches and level-wise accuracy.",
    results: [
      { metric: "Exact Match (Full Path)", value: "95.70%", note: "On the evaluated test set" },
      { metric: "Main Category Accuracy", value: "97.40%", note: "On the evaluated test set" },
      { metric: "Dataset Size", value: "~250K", note: "Cleaned Arabic articles across sources" },
      { metric: "Hierarchy Depth", value: "3 Levels", note: "Main → Subcategory → Fine-grained" },
    ],
    challenges:
      "Handling morphological richness and dialectal bleeding in Arabic text, resolving class imbalance across specialized news categories, and designing a robust tokenization pipeline that preserves semantic boundaries.",
    pipelineSteps: [
      { step: "01", name: "Data Collection", desc: "~250K raw articles collected across verified Arabic news portals" },
      { step: "02", name: "Cleaning & Normalization", desc: "Deduplication, diacritic removal, punctuation normalization" },
      { step: "03", name: "Hierarchical Labeling", desc: "Structured 3-level taxonomy mapping (Main → Sub → Fine)" },
      { step: "04", name: "AraT5 Fine-Tuning", desc: "Seq2seq training on Google Colab GPU environment" },
      { step: "05", name: "Evaluation", desc: "Exact Match (95.70%) & Main Category (97.40%) on test set" },
      { step: "06", name: "Model Serving", desc: "Inference pipeline with structured JSON category output" },
    ],
  },
  {
    id: "fwallet",
    title: "FWallet",
    category: "Software Engineering",
    categories: ["Software Engineering", "Frontend"],
    visualType: "ledger",
    featured: true,
    shortDescription:
      "React merchant e-wallet web interface engineered from a structured Software Requirements Specification.",
    description:
      "A complete merchant e-wallet frontend application engineered strictly according to a formal Software Requirements Specification (SRS). It provides merchant account overview, provider integrations, multi-source financial transfers, ledger balance tracking, profile settings, and a decoupled JWT authentication flow.",
    technologies: [
      "React",
      "Vite",
      "TanStack React Query",
      "React Router",
      "Lucide Icons",
      "JWT Architecture",
    ],
    github: "#", // TODO: Add GitHub repository URL once published
    demo: null,
    huggingFace: null,
    paper: null,
    architecture:
      "Modular Component Architecture with TanStack React Query for declarative server-state synchronization, React Router for protected navigation gates, and an isolated API client layer decoupling UI from backend endpoints.",
    problem:
      "Financial merchant dashboards frequently suffer from tightly coupled API calls, messy conditional re-rendering of account states, and brittle balance synchronization across multiple funding providers.",
    approach:
      "Built against a formal Software Requirements Specification (SRS). Implemented clean API client abstractions, optimistic UI updates via React Query, declarative form validation, authenticated route guards, and granular UI component reuse.",
    results: [
      { metric: "SRS Compliance", value: "100%", note: "All documented functional modules implemented" },
      { metric: "Routing Architecture", value: "Protected Gates", note: "JWT-oriented auth context & role validation" },
      { metric: "State Management", value: "Zero Prop Drilling", note: "Server state managed via TanStack Query cache" },
      { metric: "Transfer Modes", value: "Multi-Source", note: "Provider-to-provider, bank, and merchant transfers" },
    ],
    challenges:
      "Managing complex form workflows across multi-source transfers, ensuring immediate cache invalidation upon ledger updates, and enforcing accessible keyboard navigation throughout table ledgers.",
  },
  {
    id: "ftool",
    title: "FTool",
    category: "Software Engineering",
    categories: ["Software Engineering"],
    visualType: "terminal",
    featured: true,
    shortDescription:
      "Local CLI file-management utility in Python engineered with layered Clean Architecture.",
    description:
      "A command-line file manipulation and management utility developed in Python with strict separation of concerns following Clean Architecture principles (Presentation → Application → Domain → Infrastructure). Designed as an exploration of system architecture and Python packaging rather than a commercial product.",
    technologies: [
      "Python",
      "Clean Architecture",
      "CLI Design",
      "Argparse / Click",
      "Filesystem API",
      "Pytest",
    ],
    github: "#", // TODO: Add GitHub repository URL once published
    demo: null,
    huggingFace: null,
    paper: null,
    architecture:
      "Clean Architecture with 4 distinct decoupled layers: Presentation (CLI parser & formatted output), Application (Use Cases & orchestration), Domain (Entities, file filters, and path rules), and Infrastructure (OS filesystem bindings).",
    problem:
      "Ad-hoc file manipulation scripts are notoriously brittle, mingling filesystem I/O directly with argument parsing and string manipulation, making unit testing and safe rollback virtually impossible.",
    approach:
      "Architected with pure domain entities independent of operating system details. Implemented safe deletion flags, recursive traversal safeguards, and predictable CLI syntax (e.g. `ftool del --final -r s`). Each use case is individually unit-tested with mock filesystem adapters.",
    results: [
      { metric: "Architecture Layers", value: "4 Layers", note: "Presentation → Application → Domain → Infra" },
      { metric: "Separation of Concerns", value: "Strict", note: "Domain rules have zero external I/O dependencies" },
      { metric: "Command Safety", value: "Confirmation Flags", note: "Safe dry-run preview and explicit delete targets" },
      { metric: "Product Scope", value: "Local Utility", note: "Engineered as an architectural case study" },
    ],
    challenges:
      "Enforcing strict layer boundaries in Python without framework overhead, and handling cross-platform filesystem permission quirks safely.",
  },
  {
    id: "algorithm-simulator",
    title: "Algorithm Simulator",
    category: "Algorithms",
    categories: ["Algorithms"],
    visualType: "simulator",
    featured: true,
    shortDescription:
      "Step-through algorithmic visualizer in PySide6 with deterministic state stepping.",
    description:
      "An educational desktop visualization tool built with PySide6 for stepping through classic computer science algorithms (GCD, Fibonacci, sorting, searching, and string matching) with interactive Previous/Next control and deterministic seed reproduction.",
    technologies: [
      "Python",
      "PySide6 (Qt)",
      "Algorithms & Data Structures",
      "State Machines",
      "Mathematical Computing",
    ],
    github: "#", // TODO: Add GitHub repository URL once published
    demo: null,
    huggingFace: null,
    paper: null,
    architecture:
      "Event-driven visualizer decoupling algorithmic execution into a generator-based state machine. The algorithmic engine yields intermediate state snapshots, which the Qt UI layer consumes to render arrays, pointers, and call trees.",
    problem:
      "Traditional animation loops run asynchronously and make it difficult for learners to pause, reverse, examine variable invariants, or inspect exact step-by-step memory states at arbitrary stages.",
    approach:
      "Decoupled the domain calculation logic completely from the PySide6 UI. Implemented a bidirectional step history allowing users to step forward and backward through algorithm iterations, inspect variables at each step, and supply fixed random seeds for reproducible runs.",
    results: [
      { metric: "Algorithm Types", value: "5 Classes", note: "GCD, Fibonacci, Sorting, Searching, String Matching" },
      { metric: "Execution Control", value: "Bidirectional", note: "Full Previous / Next step-through controls" },
      { metric: "Run Reproducibility", value: "Deterministic", note: "Seed-based pseudo-random input generation" },
      { metric: "Coupling", value: "Decoupled", note: "PySide6 UI communicates via pure state transitions" },
    ],
    challenges:
      "Implementing efficient reverse-stepping without recalculating the entire execution trace from scratch for long-running sorting algorithms.",
  },
];
