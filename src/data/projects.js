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
    github: "https://github.com/ahmed-altaweel/FWallet",
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
    id: "ftool",
    title: "File Management Utility",
    category: "Systems & CLI",
    categories: ["Systems & CLI", "Clean Architecture"],
    visualType: "terminal",
    featured: true,
    shortDescription:
      "Python command-line file manipulation utility built with 4-layer decoupled Clean Architecture.",
    description:
      "A command-line file manipulation and management utility developed in Python with strict separation of concerns following Clean Architecture principles (Presentation → Application → Domain → Infrastructure). Designed as an exploration of system architecture and Python packaging.",
    technologies: [
      "Python 3",
      "Clean Architecture",
      "CLI Design",
      "Argparse",
      "Filesystem API",
      "Pytest",
    ],
    github: "https://github.com/ahmed-altaweel/FTool",
    demo: null,
    architecture:
      "Clean Architecture with 4 distinct decoupled layers: Presentation (CLI parser & formatted output), Application (Use Cases & orchestration), Domain (Entities, file filters, and path rules), and Infrastructure (OS filesystem bindings).",
    problem:
      "Ad-hoc file manipulation scripts are notoriously brittle, mingling filesystem I/O directly with argument parsing and string manipulation, making unit testing and safe rollback virtually impossible.",
    approach:
      "Architected with pure domain entities independent of operating system details. Implemented safe deletion flags, recursive traversal safeguards, and predictable CLI syntax (e.g. `ftool del --final -r s`). Each use case is individually unit-tested with mock filesystem adapters.",
    results: [
      {
        metric: "Architecture Layers",
        value: "4 Layers",
        note: "Presentation → Application → Domain → Infra",
      },
      {
        metric: "Separation of Concerns",
        value: "Strict",
        note: "Domain rules have zero external I/O dependencies",
      },
      {
        metric: "Command Safety",
        value: "Confirmation Flags",
        note: "Safe dry-run preview and explicit delete targets",
      },
      {
        metric: "Testability",
        value: "100% Mockable",
        note: "Unit tested with mock filesystem adapters",
      },
    ],
    challenges:
      "Enforcing strict layer boundaries in Python without framework overhead, and handling cross-platform filesystem permission quirks safely.",
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
