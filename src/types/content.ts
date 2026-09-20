export interface TechItem {
  name: string;
  proficiency: number; // 0-100, drives the orb fill
  category: "frontend" | "backend" | "ai" | "infra";
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string[];
  impact: string[];
  stack: string[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface HighlightStat {
  value: string;
  label: string;
}
