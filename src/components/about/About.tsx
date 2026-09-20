import { profile } from "../../data/profile";
import { highlightStats } from "../../data/experience";
import { Reveal } from "../ui/Reveal";
import "./About.css";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__grid">
        <Reveal className="about__text">
          <div className="section-heading">
            <span className="section-heading__index">01 · About</span>
            <h2>Engineering that holds up under real use</h2>
          </div>
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="about__stats">
          {highlightStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="stat-card glass glass--interactive">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
