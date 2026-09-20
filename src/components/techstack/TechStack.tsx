import { techStack } from "../../data/techStack";
import { Reveal } from "../ui/Reveal";
import { TechOrb } from "./TechOrb";
import "./TechStack.css";

export function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="section-heading">
            <span className="section-heading__index">02 · Stack</span>
            <h2>Tools I reach for</h2>
            <p>The proficiency rings reflect day-to-day fluency, not just familiarity.</p>
          </div>
        </Reveal>

        <div className="tech-grid">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 45}>
              <TechOrb {...tech} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
