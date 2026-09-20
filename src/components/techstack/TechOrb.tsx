import type { TechItem } from "../../types/content";
import "./TechOrb.css";

const RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CATEGORY_LABEL: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI / ML",
  infra: "Infra",
};

export function TechOrb({ name, proficiency, category }: TechItem) {
  const offset = CIRCUMFERENCE - (proficiency / 100) * CIRCUMFERENCE;

  return (
    <div className="tech-orb glass glass--interactive" tabIndex={0}>
      <div className="tech-orb__ring-wrap">
        <svg viewBox="0 0 72 72" className="tech-orb__ring">
          <circle cx="36" cy="36" r={RADIUS} className="tech-orb__ring-track" />
          <circle
            cx="36"
            cy="36"
            r={RADIUS}
            className="tech-orb__ring-fill"
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <span className="tech-orb__value">{proficiency}</span>
      </div>
      <span className="tech-orb__name">{name}</span>
      <span className="tech-orb__category">{CATEGORY_LABEL[category]}</span>
    </div>
  );
}
