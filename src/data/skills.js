/**
 * Technical Skills Data
 * Grouped strictly into domain categories reflecting Ahmed's real software engineering profile.
 */

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, declarative, and high-performance user interfaces.",
    skills: [
      { name: "React 18 & Vite", context: "Component reuse, custom hooks, fast HMR builds" },
      { name: "TypeScript", context: "Strict static typing, robust interfaces, refactoring confidence" },
      { name: "TanStack Query", context: "Declarative server-state caching & zero prop drilling" },
      { name: "Tailwind CSS & Modern CSS", context: "Fluid layouts, design tokens, responsive typography" },
      { name: "JavaScript (ES6+)", context: "Asynchronous programming, closures, DOM orchestration" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Developing clean backend endpoints, security layers, and data validation.",
    skills: [
      { name: "RESTful APIs", context: "Endpoint contracts, HTTP error handling, pagination" },
      { name: "Python 3", context: "System scripting, data processing, backend services" },
      { name: "JWT Architecture", context: "Protected routing gates, stateless token authentication" },
      { name: "SQL & Relational Schemas", context: "Query optimization, normalization, schema design" },
      { name: "API Client Abstractions", context: "Decoupled UI state from backend transport layers" },
    ],
  },
  {
    id: "architecture",
    title: "Software Architecture",
    description: "Engineering maintainable systems with clean separation of concerns.",
    skills: [
      { name: "Clean Architecture", context: "Presentation → Application → Domain → Infrastructure" },
      { name: "SRS Compliance", context: "Translating structured specifications into functional code" },
      { name: "State Machines", context: "Deterministic state stepping and bidirectional histories" },
      { name: "CLI System Design", context: "Predictable command interfaces with safe execution flags" },
      { name: "Unit Testing & Pytest", context: "Mock adapters and automated regression validation" },
    ],
  },
  {
    id: "languages",
    title: "Core Computing & Languages",
    description: "Foundational computer science principles and algorithmic problem solving.",
    skills: [
      { name: "Python", context: "Primary language for systems logic and utility engineering" },
      { name: "C++", context: "Data structures, memory discipline, algorithmic efficiency" },
      { name: "Algorithms & Data Structures", context: "Sorting, searching, trees, recursion, complexity analysis" },
      { name: "Academic Merit", context: "GPA 3.84/4.00, Information Technology, Ibb University" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Ecosystem",
    description: "Workflows, version control, and desktop engineering toolkits.",
    skills: [
      { name: "Git & GitHub", context: "Disciplined commit history, branching, open-source repos" },
      { name: "PySide6 (Qt)", context: "Cross-platform desktop application development" },
      { name: "Linux & Bash", context: "Command-line environments, automation scripts, shell tools" },
      { name: "VS Code & Tooling", context: "Linting, debugging, bundle profiling, environment setups" },
    ],
  },
];
