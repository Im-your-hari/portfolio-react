import { experience } from "../../data/experience";
import { Reveal } from "../ui/Reveal";
import "./ExperienceTimeline.css";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="section-heading">
            <span className="section-heading__index">04 · Experience</span>
            <h2>Where the work happened</h2>
          </div>
        </Reveal>

        <ol className="timeline">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 90} className="timeline__item">
              <li>
                <div className={`timeline__node ${entry.current ? "timeline__node--current" : ""}`} />
                <div className="timeline__card glass glass--interactive">
                  <div className="timeline__card-head">
                    <div>
                      <h3 className="timeline__role">{entry.role}</h3>
                      <p className="timeline__org">{entry.org}</p>
                    </div>
                    <span className="tag">{entry.period}</span>
                  </div>
                  <p className="timeline__summary">{entry.summary}</p>
                  <ul className="timeline__highlights">
                    {entry.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
