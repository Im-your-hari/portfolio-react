import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/content";
import { usePointerGlow } from "../../hooks/usePointerGlow";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { onMouseMove } = usePointerGlow<HTMLButtonElement>();

  return (
    <button
      className={`project-card glass ${project.featured ? "project-card--featured" : ""}`}
      onMouseMove={onMouseMove}
      onClick={() => onOpen(project)}
    >
      <div className="project-card__glow" />
      <div className="project-card__top">
        <span className="tag">{project.tagline}</span>
        <ArrowUpRight size={18} className="project-card__arrow" />
      </div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__stack">
        {project.stack.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </button>
  );
}
