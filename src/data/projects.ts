import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "helixAI",
    name: "Conversational AI Assistant",
    tagline: "AI Chatbot & RAG Platform",
    description:
      "A legal document intelligence platform for a U.S. client, combining RAG, a user-scoped long-term memory system, and MCP-based tool integrations.",
    problem:
      "Legal teams needed fast, trustworthy answers from dense case documents and depositions.",
    approach: [
      "Built an end-to-end RAG pipeline with FastAPI and LLMs on Azure AI Foundry for conversational querying of legal documents",
      "Designed a long-term memory system driven by LLM tool calling (memory_add, memory_remove, memory_replace)",
      "Redesigned the chat flow as a LangGraph state graph with intent classification, memory/history loading, and dedicated deposition and general-chat subgraphs",
      "Built an MCP connector manager (multi-MCP registry and client manager) to plug external tools and data into the chatbot",
      "Added a financial document pipeline for scanned cheque batches using PaddleOCR, PyMuPDF, and vision-LLM extraction with deterministic validation",
      "Integrated a DDGS search tool via tool calling",
    ],
    impact: [
      "Actively maintained in production",
      "Resolved cross-document memory bleed by moving to a scoped memory schema",
    ],
    stack: [
      "Angular 18",
      "FastAPI",
      "Python",
      "Azure OpenAI",
      "LangGraph",
      "MCP",
      "SQL Server",
      "PostgreSQL",
      "PaddleOCR",
    ],
    featured: true,
  },
  {
    id: "phishing-detection",
    name: "WhalingGuard",
    tagline: "ML-based phishing detection",
    description:
      "A machine-learning system for detecting phishing and whaling attempts, presented at the ITCES International Conference.",
    problem:
      "Targeted phishing against executives often bypasses filters built for generic spam.",
    approach: [
      "Engineered features from email metadata and content patterns",
      "Trained and evaluated classification models for detection accuracy",
      "Presented the findings at ITCES International Conference",
    ],
    impact: ["Published conference paper on ML-based phishing detection"],
    stack: ["Python", "Scikit-learn", "ML"],
  },
  {
    id: "mental-wellness-bot",
    name: "Mental Wellness Bot",
    tagline: "Sentiment analysis",
    description:
      "An NLP project that classifies text sentiment to support empathetic, judgment-free check-ins.",
    problem:
      "Understanding how someone feels from their text/voice needs reliable automated sentiment classification.",
    approach: [
      "Guided the NLP pipeline from preprocessing to model evaluation",
    ],
    impact: [
      "Delivered a working sentiment classifier that detects emotional tone in text to drive supportive, empathetic responses",
    ],
    stack: ["Python", "NLP", "Scikit-learn"],
  },
  {
    id: "floodwatch",
    name: "FloodWatch",
    tagline: "Flood detection with YOLO",
    description:
      "A computer-vision project that flags flood conditions from imagery using YOLO.",
    problem:
      "Early automated detection of rising water gives communities a head start.",
    approach: [
      "Trained a YOLO detection model on flood-scene imagery",
      "Built an inference pipeline for footage analysis",
    ],
    impact: ["Demonstrated a low-cost early-warning approach"],
    stack: ["YOLO", "Python", "OpenCV"],
  },
  {
    id: "crowd-detection",
    name: "Crowd Detection",
    tagline: "Crowd counting with YOLO",
    description:
      "A computer-vision project for counting people and estimating crowd density from video.",
    problem:
      "Manual crowd monitoring doesn't scale, and late detection of overcrowding is a safety risk.",
    approach: [
      "Applied object detection to count people per frame",
      "Tuned for occlusion and varied camera angles",
    ],
    impact: ["Working proof-of-concept for density-based alerting"],
    stack: ["YOLO", "Python", "OpenCV"],
  },

  {
    id: "time-tracking-app",
    name: "Time-Tracking Application",
    tagline: "Angular 18 + .NET",
    description:
      "A time-tracking application built and delivered to the client.",
    problem:
      "Teams needed a simple, reliable way to log and review working time.",
    approach: [
      "Built the Angular 18 front end and .NET back end",
      "Translated client requirements into deliverables",
    ],
    impact: ["Delivered to the client"],
    stack: ["Angular 18", ".NET", "C#"],
  },
];
