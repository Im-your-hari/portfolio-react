import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import { useRotatingWord } from "../../hooks/useRotatingWord";
import "./Hero.css";

export function Hero() {
  const role = useRotatingWord(profile.roles, 2200);

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__kicker">
          <span className="hero__kicker-dot" />
          {profile.isOpenToWork ? "Available for new opportunities ·" : ""} {profile.location}
        </p>

        <h1 className="hero__title">
          {/* {profile.shortName} builds systems where */}
          I turn complexity into intelligence;
          <br />
          {/* software meets{" "}  */}
          <span className="hero__role" key={role}>
          <i>#</i> {role}
          </span>
        </h1>

        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            View my work
            <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>

        <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
