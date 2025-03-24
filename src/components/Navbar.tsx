import React, { useState, useEffect } from "react";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
    offset = 0
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getLinkClasses = (section: string) => {
    return `text-lg md:text-xl font-medium transition-colors duration-200 
      ${activeSection === section
        ? darkMode
          ? "text-[#535bf2] font-semibold"
          : "text-[#b59386] font-semibold"
        : darkMode
        ? "text-text-dark hover:text-[#A855F7]"
        : "text-[#fff0db] hover:text-[#dbbaad]"
      }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center px-6 py-4 z-50">
      <h1
        className={`text-xl md:text-2xl font-bold tracking-wide ${
          darkMode ? "text-[#ccd8e0]" : "text-[#FFF0DB]"
        }`}
      >
        Turgut Canberk Diner
      </h1>
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-between w-24 h-12 bg-gray-300 rounded-full relative shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        <span
          className={`absolute top-1 left-1 w-10 h-10 text-3xl transition-all duration-300 ease-in-out ${
            darkMode ? "translate-x-12" : "translate-x-0"
          }`}
        >
          {darkMode ? "🌑" : "🌞"}
        </span>
      </button>
      <ul className="flex space-x-6">
        <li>
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "hero", 0)}
            className={getLinkClasses("hero")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#introduction"
            onClick={(e) => handleScroll(e, "introduction", 200)}
            className={getLinkClasses("introduction")}
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills", 320)}
            className={getLinkClasses("skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects", 0)}
            className={getLinkClasses("projects")}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
