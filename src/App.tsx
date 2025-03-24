import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [highlightedProjects, setHighlightedProjects] = useState<Set<number>>(new Set());
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  const handleSkillClick = (index: number) => {
    const newHighlightedProjects = new Set<number>();

    if (index === 0) {
      newHighlightedProjects.add(0);
      newHighlightedProjects.add(3);
    } else if (index === 1) {
      newHighlightedProjects.add(0);
      newHighlightedProjects.add(2);
    } else if (index === 2) {
      newHighlightedProjects.add(0);
      newHighlightedProjects.add(1);
    }

    setHighlightedProjects(newHighlightedProjects);

    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Introduction darkMode={darkMode} />
      <Skills darkMode={darkMode} onSkillClick={handleSkillClick} />
      <Projects
        darkMode={darkMode}
        ref={projectsRef}
        highlightedProjects={highlightedProjects}
      />
      <Footer />
    </div>
  );
};

export default App;
