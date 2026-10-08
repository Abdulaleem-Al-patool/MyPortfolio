/**
 * Projects Data Registry
 * Data-driven repository for all software engineering projects.
 */

export const filterCategories = [
  "All",
  "Full-Stack",
  "Clean Architecture",
  "Systems & CLI",
  "Algorithms",
];

export const projects = [
  {
    id: "fwallet",
    title: "FWallet Financial Dashboard",
    category: "Full-Stack",
    categories: ["Full-Stack", "Clean Architecture"],
    visualType: "ledger",
    featured: true,
    shortDescription:
      "Merchant e-wallet dashboard with TanStack Query server-state sync and decoupled JWT auth.",
    description:
      "A complete merchant e-wallet web application engineered strictly according to a formal Software Requirements Specification (SRS). It provides merchant account overview, provider integrations, multi-source financial transfers, ledger balance tracking, profile settings, and decoupled JWT authentication flow.",
    technologies: [
      "React 18",
      "Vite",
      "TanStack React Query",
      "React Router",
      "Lucide Icons",
      "JWT Architecture",
    ],
    github: "https://github.com/Abdulaleem-Al-patool/FWallet",
    demo: null,
    architecture:
      "Modular Component Architecture with TanStack React Query for declarative server-state synchronization, React Router for protected navigation gates, and an isolated API client layer decoupling UI from backend endpoints.",
    problem:
      "Financial merchant dashboards frequently suffer from tightly coupled API calls, messy conditional re-rendering of account states, and brittle balance synchronization across multiple funding providers.",
    approach:
      "Built against a formal Software Requirements Specification (SRS). Implemented clean API client abstractions, optimistic UI updates via React Query, declarative form validation, authenticated route guards, and granular UI component reuse.",
    results: [
      {
        metric: "SRS Compliance",
        value: "100%",
        note: "All documented functional modules implemented",
      },
      {
        metric: "Routing Architecture",
        value: "Protected Gates",
        note: "JWT-oriented auth context & role validation",
      },
      {
        metric: "State Management",
        value: "Zero Prop Drilling",
        note: "Server state managed via TanStack Query cache",
      },
      {
        metric: "Transfer Modes",
        value: "Multi-Source",
        note: "Provider-to-provider, bank, and merchant transfers",
      },
    ],
    challenges:
      "Managing complex form workflows across multi-source transfers, ensuring immediate cache invalidation upon ledger updates, and enforcing accessible keyboard navigation throughout table ledgers.",
  },
 {
    id: "safe-rm",
    title: "Safe-RM — Safe & Recoverable File Deletion",
    category: "Systems & CLI",
    categories: ["Systems & CLI", "Security"],
    visualType: "terminal",
    featured: true,
    shortDescription:
      "Python CLI tool that replaces `rm` with safe trash-based deletion, risk analysis, and full restore.",
    description:
      "A modular command-line file deletion system for Linux that intercepts `rm` and replaces it with a safer workflow: path validation, risk classification, security gating, move-to-trash with UUID tracking, JSON metadata, and one-command restore. Built with a strict separation between scanning, analysis, security, storage, and presentation layers — tested with 20 unit tests.",
    technologies: [
      "Python 3.12+",
      "pathlib",
      "argparse",
      "shutil",
      "logging",
      "JSON Metadata",
      "UUID Tracking",
      "Pytest",
      "Entry Points (pyproject.toml)",
    ],
    github: "https://github.com/Abdulaleem-Al-patool/Safe-rm-Original-Copy",
    demo: null,
    architecture:
      "Modular layered design with decoupled components: (1) Scanner — extracts filesystem metadata via pathlib/stat, (2) Analyzer — classifies risk into LOW/MEDIUM/HIGH/CRITICAL based on location, type, ownership, and recursive intent, (3) Security Layer — enforces allow/confirm/block decisions and blocks dangerous paths & path traversal, (4) Trash Manager — moves items to ~/.safe-trash with UUID filenames and JSON metadata, (5) Logger — records every operation, and (6) CLI — pure presentation layer using argparse with a `safe-rm` entry point.",
    problem:
      "The native `rm` command on Linux is unforgiving: it deletes files permanently with no recovery, offers no warning before destroying critical paths like `/etc` or `/boot`, provides no audit trail, and is trivially exploited via path traversal (`../`). A single keystroke can destroy a system.",
    approach:
      "Built a replacement CLI that keeps `rm`'s ergonomics but adds a gated safety pipeline: scan → analyze → security-check → move-to-trash → log. Every risky path is classified before anything touches the disk. Critical paths (`/`, `/etc`, `/root`, `/proc`, `/sys`, `/dev`, `/boot`) are hard-blocked, high-risk paths require explicit confirmation, and every deleted file is preserved with full metadata (original path, timestamp, size, permissions, inode) enabling lossless restore. Circular safety is enforced by refusing path traversal and never following symlinks. The tool is installed system-wide as a single `safe-rm` command via `pyproject.toml` entry points.",
    results: [
      {
        metric: "Modular Components",
        value: "6 Modules",
        note: "Scanner · Analyzer · Security · Trash · Logger · CLI",
      },
      {
        metric: "Risk Levels",
        value: "4 Tiers",
        note: "LOW → MEDIUM → HIGH → CRITICAL with allow/confirm/block gating",
      },
      {
        metric: "Recoverability",
        value: "100% Restore",
        note: "UUID-based trash with JSON metadata and collision handling",
      },
      {
        metric: "Test Coverage",
        value: "20 Passing Tests",
        note: "Scanner, analyzer, security, trash ops, Unicode & edge cases",
      },
      {
        metric: "Safety Enforcement",
        value: "Path Hard-Blocking",
        note: "Blocks /, /etc, /boot, /usr, /root + path traversal + symlinks",
      },
      {
        metric: "Audit Trail",
        value: "Full Logging",
        note: "Every DELETE / RESTORE / BLOCK event timestamped to disk",
      },
    ],
    challenges:
      "Designing a risk-scoring engine that stays accurate across both user sandboxes and system paths without false positives — while keeping the CLI fast enough to replace `rm` in daily use. Additionally, implementing collision-safe restores (cancel / rename / replace) and preventing symlink-following attacks required careful handling of pathlib internals and stat metadata.",
  },
  {
    id: "algorithm-simulator",
    title: "Algorithm Simulator — State Machine Visualizer",
    category: "Algorithms",
    categories: ["Algorithms", "Systems & CLI"],
    visualType: "simulator",
    featured: true,
    shortDescription:
      "Interactive algorithm visualizer in PySide6 with deterministic bidirectional step execution.",
    description:
      "An educational desktop visualization tool built with PySide6 for stepping through classic computer science algorithms (GCD, Fibonacci, sorting, searching, and string matching) with interactive Previous/Next control and deterministic seed reproduction.",
    technologies: [
      "Python",
      "PySide6 (Qt)",
      "Algorithms & Data Structures",
      "State Machines",
      "Mathematical Computing",
    ],
    github: "https://github.com/ahmed-altaweel",
    demo: null,
    architecture:
      "Event-driven visualizer decoupling algorithmic execution into a generator-based state machine. The algorithmic engine yields intermediate state snapshots, which the Qt UI layer consumes to render arrays, pointers, and call trees.",
    problem:
      "Traditional animation loops run asynchronously and make it difficult for learners to pause, reverse, examine variable invariants, or inspect exact step-by-step memory states at arbitrary stages.",
    approach:
      "Decoupled the domain calculation logic completely from the PySide6 UI. Implemented a bidirectional step history allowing users to step forward and backward through algorithm iterations, inspect variables at each step, and supply fixed random seeds for reproducible runs.",
    results: [
      {
        metric: "Algorithm Types",
        value: "5 Classes",
        note: "GCD, Fibonacci, Sorting, Searching, String Matching",
      },
      {
        metric: "Execution Control",
        value: "Bidirectional",
        note: "Full Previous / Next step-through controls",
      },
      {
        metric: "Run Reproducibility",
        value: "Deterministic",
        note: "Seed-based pseudo-random input generation",
      },
      {
        metric: "Coupling",
        value: "Decoupled",
        note: "PySide6 UI communicates via pure state transitions",
      },
    ],
    challenges:
      "Implementing efficient reverse-stepping without recalculating the entire execution trace from scratch for long-running sorting algorithms.",
  },
  {
    id: "arabic-news-classifier",
    title: "Arabic Text Classification Pipeline",
    category: "Systems & CLI",
    categories: ["Systems & CLI", "Full-Stack"],
    visualType: "pipeline",
    featured: true,
    shortDescription:
      "Automated Arabic text normalization and hierarchical classification pipeline.",
    description:
      "An automated pipeline for ingesting, cleansing, and categorizing Arabic textual content. Spans data collection of ~250K articles, normalization of typographical variance, taxonomy mapping, model fine-tuning, and structured JSON inference output.",
    technologies: [
      "Python",
      "Hugging Face",
      "Pandas",
      "Data Cleansing",
      "PyTorch",
      "REST API Serving",
    ],
    github: "https://github.com/ahmed-altaweel",
    demo: null,
    architecture:
      "Clean data ingestion and preprocessing pipeline that transforms raw unstructured Arabic news corpora into normalized hierarchical tokens with structured schema evaluation.",
    problem:
      "Arabic text exhibits significant morphological variety, typographical noise, and complex topic hierarchies that require specialized cleansing rules.",
    approach:
      "Engineered automated normalization regex filters, deduplication routines, and balanced taxonomy trees with structured evaluation benchmarking.",
    results: [
      {
        metric: "Exact Match",
        value: "95.70%",
        note: "On the evaluated test set",
      },
      {
        metric: "Main Category",
        value: "97.40%",
        note: "High-level classification accuracy",
      },
      {
        metric: "Dataset Scale",
        value: "~250K",
        note: "Cleaned Arabic articles processed",
      },
      {
        metric: "Hierarchy Depth",
        value: "3 Levels",
        note: "Main → Subcategory → Fine-grained",
      },
    ],
    challenges:
      "Handling typographical irregularities across different media sources while keeping preprocessing latency under strict limits.",
  },
];
