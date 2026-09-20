import { profile } from "../../data/profile";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__tag">Built with React, TypeScript &amp; Framer Motion</span>
      </div>
    </footer>
  );
}
