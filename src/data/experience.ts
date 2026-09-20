import type { ExperienceEntry, HighlightStat } from "../types/content";

export const experience: ExperienceEntry[] = [
  {
    id: "software-engineer",
    role: "Software Engineer",
    org: "Experion Technologies",
    period: "Jun 2026 — Present",
    summary:
      "Promoted from Associate Software Engineer after building out RAG and memory infrastructure for a legal AI platform.",
    highlights: [
      "Designing a LangGraph-based state architecture for deposition and general-chat flows",
      "Received Experion's R&R Award of Excellence",
      "Placed Second Runner-Up at an AWS AI Hackathon",
    ],
    current: true,
  },
  {
    id: "associate-software-engineer",
    role: "Associate Software Engineer",
    org: "Experion Technologies",
    period: "2023 — 2026",
    summary:
      "Joined as an Associate Software Engineer, working across Angular, .NET, and FastAPI to build the Helix AI legal platform end-to-end.",
    highlights: [
      "Built MemoryEngine — a long-term memory system driven by LLM tool schemas",
      "Ported JWT authorization from .NET to FastAPI and built a sessions data layer on MSSQL",
      "Resolved deep Angular rendering and database connection-lifecycle bugs",
    ],
  },
  {
    id: "ml-instructor",
    role: "ML Instructor",
    org: "Mathlab Institute",
    period: "Before Experion",
    summary:
      "Guided postgraduate students through classical ML, NLP, and YOLOv8-based computer vision projects.",
    highlights: [
      "Mentored student projects across classical ML, NLP, and computer vision",
      "Built foundational teaching material for applied ML workflows",
    ],
  },
];

export const highlightStats: HighlightStat[] = [
  { value: "2.5+", label: "Years of professional engineering experience" },
  { value: "5+", label: "AI & full-stack projects shipped" },
  { value: "1", label: "Published conference paper" },
];
