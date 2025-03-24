import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-700">
      <h2 className="text-4xl font-bold">👋 About Me</h2>
      <p className="text-lg mt-4 max-w-2xl text-center">
        I'm a passionate developer specializing in React and AI. 
        I love building innovative projects and solving complex problems.
      </p>
    </section>
  );
};

export default About;
