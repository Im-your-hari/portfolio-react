import type { ExperienceEntry, HighlightStat } from "../types/content";

export const experience: ExperienceEntry[] = [
  {
    id: "software-engineer",
    role: "Software Engineer",
    org: "Experion Technologies",
    period: "Jun 2026 — Present",
    summary:
      "Building LangGraph-based agentic workflows that combine RAG, intent classification, and long-term memory for context-aware AI responses.",
    highlights: [
      "Designing LangGraph state architecture for deposition and general-chat flows",
      "Building MCP integrations to connect the legal AI platform with external tools and data",
    ],
    current: true,
  },
  {
    id: "associate-software-engineer",
    role: "Associate Software Engineer",
    org: "Experion Technologies",
    period: "Mar 2024 — Jun 2026",
    summary:
      "Worked on a U.S.-based case management web application and its production live support team.",
    highlights: [
      "Designed an end-to-end RAG pipeline (FastAPI + LLM on Azure AI Foundry) for conversational querying of legal documents; maintained in production",
      "Core member of the Angular 8 to 18 migration: component refactoring, upgrade planning, feature continuity",
      "Built complex payment calculation logic with Outlook calendar integration using .NET and Microsoft Graph API",
      "Delivered an Angular 18 + .NET time-tracking application to the client",
      "Built MemoryEngine, a long-term memory system driven by LLM tool schemas",
    ],
  },
  {
    id: "ml-instructor",
    role: "Instructor",
    org: "Mathlab Institute",
    period: "Feb 2024 — Mar 2024",
    summary:
      "Delivered project-based training in Machine Learning, NLP, and YOLO-based computer vision.",
    highlights: [
      "Mentored four applied projects: sentiment analysis, flood detection, crowd counting, and phishing detection",
    ],
  },
];

export const achievements = [
  "R&R Award of Excellence (Q2 2025), Experion Technologies",
  "Published conference paper on ML-based phishing detection in ITCES International Conference",
  "Second Runner-Up, AWS Collaborated AI Hackathon",
];

export const highlightStats: HighlightStat[] = [
  { value: "2.8+", label: "Years of professional engineering experience" },
  { value: "5+", label: "AI & full-stack projects shipped" },
  { value: "1", label: "Published conference paper" },
];
