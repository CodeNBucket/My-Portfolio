import React, { useState, useEffect } from "react";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      setIsMenuOpen(false); // Close menu on mobile when a link is clicked
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

  const getLinkClasses = (section: string) =>
    `text-lg md:text-xl font-medium transition-colors duration-200 ${
      activeSection === section
        ? darkMode
          ? "text-[#535bf2] font-semibold"
          : "text-[#b59386] font-semibold"
        : darkMode
        ? "text-text-dark hover:text-[#A855F7]"
        : "text-[#fff0db] hover:text-[#dbbaad]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center px-6 py-4 z-50">
      {/* Logo */}
      <h1
        className={`text-xl md:text-2xl font-bold tracking-wide ${
          darkMode ? "text-[#ccd8e0]" : "text-[#FFF0DB]"
        }`}
      >
        Turgut Canberk Diner
      </h1>

      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-between w-16 h-8 md:w-24 md:h-12 bg-gray-300 rounded-full relative shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 md:w-10 md:h-10 text-xl md:text-3xl flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${
            darkMode ? "translate-x-8 md:translate-x-12" : "translate-x-0"
          }`}
        >
          {darkMode ? "🌑" : "🌞"}
        </span>
      </button>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖️" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent text-white flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { id: "hero", label: "Home", offset: 0 },
          { id: "introduction", label: "Introduction", offset: 200 },
          { id: "skills", label: "Skills", offset: 320 },
          { id: "projects", label: "Projects", offset: 0 },
        ].map(({ id, label, offset }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => handleScroll(e, id, offset)} className={getLinkClasses(id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
     
    </nav>
  );
};

export default Navbar;
