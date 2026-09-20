import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { Reveal } from "../ui/Reveal";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="contact-card glass">
            <div className="contact-card__glow" />
            <span className="section-heading__index">05 · Contact</span>
            <h2 className="contact-card__title">Have a project in mind?</h2>
            <p className="contact-card__copy">
              I'm currently open to new roles and interesting collaborations —
              especially where applied AI meets real product work.
            </p>

            <div className="contact-card__actions">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                <Mail size={16} />
                {profile.email}
              </a>
              {profile.socials.map((social) => (
                <a key={social.url} href={social.url} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  {social.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
