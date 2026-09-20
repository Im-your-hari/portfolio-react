import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          
          {"" +profile.shortName+""}
          
          <span className="navbar__brand-dot" />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            
            <a key={link.id} href={`#${link.id}`}>
              {/* <u> */}
              {link.label}
            {/* </u> */}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary navbar__cta">
          Let's talk
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary" onClick={handleNavClick}>
            Let's talk
          </a>
        </nav>
      )}
    </header>
  );
}
