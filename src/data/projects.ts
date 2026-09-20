import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "helix-ai",
    name: "Helix AI",
    tagline: "Legal AI & RAG Platform",
    description:
      "A legal document intelligence platform built for a U.S.-based client, combining retrieval-augmented generation with a user-scoped long-term memory system.",
    problem:
      "Legal teams needed fast, trustworthy answers from dense case documents and depositions, without losing the nuance a human reviewer would catch.",
    approach: [
      "Designed RAG pipelines and a long-term memory system driven by LLM tool calling (memory_add, memory_remove, memory_replace)",
      "Built document summarization and Q&A over depositions using Azure OpenAI GPT-4.1",
      "Redesigned the chat flow as a LangGraph state graph — routing decisions, memory/history loading, and dedicated deposition and general-chat subgraphs",
      "Added a financial document pipeline for scanned cheque batches using PaddleOCR, PyMuPDF, and vision-LLM extraction with deterministic validation",
      "Integrated a self-hosted SearXNG search tool into the chatbot via tool-calling",
    ],
    impact: [
      "Resolved cross-document memory bleed by moving to a scoped memory schema",
      "Cut manual review time on deposition summaries through consistent, formatting-safe generation",
    ],
    stack: ["Angular 18", "FastAPI", "Python", "Azure OpenAI", "LangGraph", "SQL Server", "PaddleOCR"],
    featured: true,
  },
  {
    id: "mental-wellness-bot",
    name: "Mental Wellness Bot",
    tagline: "Conversational support assistant",
    description:
      "A conversational assistant designed to offer supportive, judgment-free check-ins and gentle guidance toward healthier routines.",
    problem:
      "Many people hesitate to reach out for support in the moment they need it most — a low-friction, always-available first touchpoint can help.",
    approach: [
      "Built a conversational flow tuned for empathetic, non-clinical responses",
      "Layered in guardrails to redirect toward real support resources when needed",
    ],
    impact: ["Served as a foundation for exploring safe, human-centered conversational design"],
    stack: ["Python", "LLM Prompting", "NLP"],
  },
  {
    id: "floodwatch",
    name: "FloodWatch",
    tagline: "Flood detection with YOLOv8",
    description:
      "A computer-vision system that flags flood-prone conditions from camera footage using a fine-tuned YOLOv8 model.",
    problem:
      "Early, automated visual detection of rising water levels can give communities a critical head start before flooding becomes dangerous.",
    approach: [
      "Trained and fine-tuned a YOLOv8 object detection model on flood-scene imagery",
      "Built an inference pipeline for near real-time footage analysis",
    ],
    impact: ["Demonstrated a viable low-cost early-warning detection approach"],
    stack: ["YOLOv8", "Python", "OpenCV"],
  },
  {
    id: "crowd-detection",
    name: "Crowd Detection",
    tagline: "Real-time crowd density estimation",
    description:
      "A computer-vision project for detecting and estimating crowd density from video feeds, aimed at public safety monitoring use cases.",
    problem:
      "Manual monitoring of crowd density at events or public spaces doesn't scale, and delayed detection of overcrowding is a real safety risk.",
    approach: [
      "Applied object detection to estimate people-count and density per frame",
      "Tuned the model for accuracy under occlusion and varied camera angles",
    ],
    impact: ["Produced a working proof-of-concept for density-based alerting"],
    stack: ["Python", "Computer Vision", "OpenCV"],
  },
  {
    id: "phishing-detection",
    name: "WhalingGuard",
    tagline: "ML-based phishing detection",
    description:
      "A machine-learning system for detecting phishing and whaling attempts, developed as a foundational research project with a published conference paper.",
    problem:
      "Targeted phishing (whaling) attacks against executives are highly convincing and often bypass traditional filters built for generic spam.",
    approach: [
      "Engineered features from email metadata and content patterns specific to whaling attempts",
      "Trained and evaluated classical ML classifiers for detection accuracy",
      "Published findings in a peer-reviewed conference paper",
    ],
    impact: ["Formed the foundation of an academic publication on ML-based phishing detection"],
    stack: ["Python", "Scikit-learn", "ML"],
  },
];
