import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/content";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import "./Projects.css";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="section-heading">
            <span className="section-heading__index">03 · Work</span>
            <h2>Featured projects</h2>
            <p>A mix of client platforms, AI experiments, and applied research.</p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60} className="projects-grid__item">
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
