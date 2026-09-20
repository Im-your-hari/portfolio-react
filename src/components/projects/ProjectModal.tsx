import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/content";
import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal glass"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="project-modal__close" onClick={onClose} aria-label="Close case study">
              <X size={18} />
            </button>

            <span className="tag">{project.tagline}</span>
            <h3 className="project-modal__title">{project.name}</h3>
            <p className="project-modal__desc">{project.description}</p>

            <div className="project-modal__section">
              <h4>The problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="project-modal__section">
              <h4>Approach</h4>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal__section">
              <h4>Impact</h4>
              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal__stack">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="project-modal__links">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn btn--ghost">
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
