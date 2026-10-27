// All site copy lives here. Anything starting with "TODO" renders highlighted
// so you can spot what's left to fill in. Only state numbers you can defend.

export const isTodo = (s: string) => s.startsWith("TODO");

export const profile = {
  name: "Naveen",
  headline: "I build backend and agentic AI systems that run in production.",
  intro:
    "I'm looking for Software Engineer roles focused on backend engineering, full-stack development, and AI-powered applications. My strongest areas are Python, FastAPI, distributed systems, and building practical AI solutions using RAG and agentic workflows.",
  email: "naveenrawat.work@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/NaveenRawat19" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-rawat-372a791b6/" },
    { label: "Resume", href: "https://drive.google.com/file/d/1eNd5Cxjl7S4quHHrRYutLmW8hj-treXJ/view?usp=sharing" },
  ],
};

export type ArchNode = {
  id: string;
  label: string;
  note: string;
  col: number;
  row: number;
  placeholder?: boolean;
};
export type Architecture = { nodes: ArchNode[]; edges: [string, string][] };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  problem: string;
  build: string;
  decisions: string[];
  architecture: Architecture;
  outcome: string;
  links: { label: string; href: string }[];
};

// Replace nodes, notes and edges per project with the real architecture.
// col/row place a node on the grid; placeholder: true draws it dashed.
const placeholderArch: Architecture = {
  nodes: [
    { id: "client", label: "Client", note: "TODO: what the user-facing side is", col: 0, row: 0, placeholder: true },
    { id: "api", label: "API", note: "TODO: what the API layer does", col: 1, row: 0, placeholder: true },
    { id: "core", label: "Core service", note: "TODO: the main logic or model call", col: 2, row: 0, placeholder: true },
    { id: "store", label: "Data store", note: "TODO: what is stored and why", col: 3, row: 0, placeholder: true },
    { id: "ext", label: "External service", note: "TODO: third-party API or integration", col: 2, row: 1, placeholder: true },
  ],
  edges: [
    ["client", "api"],
    ["api", "core"],
    ["core", "store"],
    ["api", "ext"],
  ],
};

export const projects: Project[] = [
  {
    slug: "syncflix",
    name: "SyncFlix",
    tagline: "Real-time watch-party app.",
    role: "TODO: solo / lead / contributor, and what you owned",
    stack: ["TODO: add stack"],
    problem: "TODO: what problem does it solve, and for whom?",
    build: "TODO: what you built and how it works, in a short paragraph.",
    decisions: [
      "TODO: one design decision and the trade-off (e.g. how playback stays in sync)",
      "TODO: a second decision",
    ],
    architecture: placeholderArch,
    outcome: "TODO: a defensible outcome. 'Deployed and live' beats an invented metric.",
    links: [
      { label: "Live demo", href: "TODO" },
      { label: "Repository", href: "TODO" },
    ],
  },
  {
    slug: "trailvio",
    name: "Trailvio",
    tagline: "AI job hunt.",
    role: "TODO: solo / lead / contributor, and what you owned",
    stack: ["TODO: add stack"],
    problem: "TODO: what problem does it solve, and for whom?",
    build: "TODO: what you built and how it works, in a short paragraph.",
    decisions: [
      "TODO: one design decision and the trade-off",
      "TODO: a second decision",
    ],
    architecture: placeholderArch,
    outcome: "TODO: a defensible outcome.",
    links: [
      { label: "Live demo", href: "TODO" },
      { label: "Repository", href: "TODO" },
    ],
  },
  {
    slug: "finraa",
    name: "FINRAA",
    tagline: "TODO: one-line description.",
    role: "TODO: solo / lead / contributor, and what you owned",
    stack: ["TODO: add stack"],
    problem: "TODO: what problem does it solve, and for whom?",
    build: "TODO: what you built and how it works, in a short paragraph.",
    decisions: [
      "TODO: one design decision and the trade-off",
      "TODO: a second decision",
    ],
    architecture: placeholderArch,
    outcome: "TODO: a defensible outcome.",
    links: [
      { label: "Live demo", href: "TODO" },
      { label: "Repository", href: "TODO" },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Wells Fargo",
    period: "August 2023 – present",
    points: [
      "Built and enhanced automation services for database provisioning, patching, and disaster recovery using Python and Ansible, streamlining infrastructure operations.",
      "Developed FastAPI backend services and React-TypeScript interfaces, integrating Redis, Celery, and secure secret management to improve application reliability and operational efficiency.",
    ],
  },
];

export const education = {
  school: "NIT Surat",
  degree: "B.Tech, Electrical Engineering",
};

// Illustrative only: a generic agent run, no timings or metrics.
export const agentSteps = [
  {
    id: "receive",
    title: "Receive",
    text: "The request arrives with its context: who is asking, what they asked, and what the agent is allowed to do.",
    example: "request: \"Summarize this week's filings\"\nscope: read-only",
  },
  {
    id: "plan",
    title: "Plan",
    text: "The agent breaks the request into sub-tasks and decides which specialist handles each one.",
    example: "plan:\n  1. find the filings\n  2. extract key changes\n  3. draft the summary",
  },
  {
    id: "act",
    title: "Call tools",
    text: "Each sub-task calls tools (APIs, databases, retrieval) and gets structured results back.",
    example: "tool: search_documents\nargs: { query: \"weekly filings\" }\nresult: 12 documents",
  },
  {
    id: "check",
    title: "Check",
    text: "Results are validated before anything is shown: schema checks, grounding against sources, and retries when a step fails.",
    example: "check: every claim has a source\ncheck: output matches schema\nretry: none needed",
  },
  {
    id: "respond",
    title: "Respond",
    text: "The answer goes back with its sources, so a person can verify it instead of trusting it.",
    example: "answer: \"Three filings changed...\"\nsources: [doc 2, doc 5, doc 9]",
  },
];
