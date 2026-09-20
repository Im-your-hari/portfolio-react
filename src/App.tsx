import { AmbientBackground } from "./components/layout/AmbientBackground";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { TechStack } from "./components/techstack/TechStack";
import { Projects } from "./components/projects/Projects";
import { ExperienceTimeline } from "./components/experience/ExperienceTimeline";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
