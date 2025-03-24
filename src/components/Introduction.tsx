import React from "react";

interface IntroductionProps {
  darkMode: boolean;
}

const Introduction: React.FC<IntroductionProps> = ({ darkMode }) => {
  return (
    <section
      id="introduction"
      className={`relative pb-24 pt-[400px] flex items-center justify-center ${
        darkMode ? "bg-primary-bg text-text-dark" : "bg-light-bg text-text-light"
      } overflow-hidden`}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 flex flex-col items-start text-left relative z-10">
        <div className="w-full max-w-5xl space-y-4">
          <h3 className="text-lg font-semibold tracking-widest uppercase mb-1">
            Introduction
          </h3>
          <h2 className="text-6xl font-extrabold">About Me</h2>

          <p className="text-2xl leading-relaxed">
            I am Turgut Canberk Diner, a computer engineer specializing in backend, frontend, and artificial intelligence.
            My focus is on building scalable software solutions, working on AI-driven applications, and optimizing performance
            across different technologies.
          </p>

          <p className="text-2xl leading-relaxed">
            My expertise includes Java with Spring Boot, Python, React, and database technologies like SQL. I have
            experience in developing backend services, designing APIs, and working with artificial intelligence models,
            including NLP and real-time computer vision systems.
          </p>

          <p className="text-2xl leading-relaxed">
            I have worked on various projects ranging from web applications to AI-based automation systems.
            My interests extend into areas such as algorithmic trading, real-time data processing, and software-driven innovation.
            I am always exploring new technologies and looking for ways to improve performance and scalability in software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
