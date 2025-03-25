import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const openResume = () => {
    const pdfUrl = "/resume.pdf";
    window.open(`${pdfUrl}#view=FitH&zoom=110`, "_blank", "noopener,noreferrer,width=900,height=1000");
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center ${
        darkMode ? "bg-primary-bg text-dark" : "bg-light-bg text-light"
      } overflow-hidden`}
    >
      <div className="container mx-auto pt-60 px-6 md:px-20 flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
        <div className="md:w-1/2 space-y-8">
          <h1 className={`text-7xl font-extrabold ${darkMode ? 'text-dark' : 'text-light'}`}>
            Hi, I am <span className={`text-7xl font-extrabold ${darkMode ? "text-[#A855F7]" : "text-[#52631f]"}`}>Canberk</span>
          </h1>

          <p className="text-4xl font-semibold leading-snug text-gray-800 dark:text-gray-200">
            I am a{" "}
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Computer Vision Enthusiast",
                "Machine Learning Practitioner",
                "Bug Exterminator",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={500}
              loop
              className="text-[#537336] dark:text-[#dd6ce0]" // Change text color in dark mode
            />
          </p>


          <div className="mt-6 flex justify-center md:justify-start">
  <button
    onClick={openResume}
    className={`px-8 py-4 ${
      darkMode
        ? "bg-gradient-to-r from-[#7C3AED] to-[#9333EA]"
        : "bg-[#8A9A5B] text-light hover:bg-[#7c8c4c] transition-colors"
    } text-white text-2xl font-semibold rounded-full shadow-lg flex items-center justify-center gap-4 w-64 transition-transform transform hover:scale-110 hover:from-[#6D28D9] hover:to-[#8B5CF6]`}
  >
    <FaFilePdf className="text-3xl" />
    Resume
  </button>
</div>


          <div className="flex space-x-10 text-7xl mt-8 justify-center md:justify-start">
          <a
  href="https://github.com/CodeNBucket"
  target="_blank"
  className={`hover:text-[#A855F7] transition-transform transform hover:scale-125 ${
    darkMode ? "text-text-dark" : "text-text-light hover:text-[#a4bf4e]"
  }`}
>
  <FaGithub />
</a>
<a
  href="https://linkedin.com/in/turgut-canberk-diner"
  target="_blank"
  className={`hover:text-[#A855F7] transition-transform transform hover:scale-125 ${
    darkMode ? "text-text-dark" : "text-text-light hover:text-[#a4bf4e]"
  }`}
>
  <FaLinkedin />
</a>
<a
  href="mailto:canberkdiner@hotmail.com"
  className={`hover:text-[#A855F7] transition-transform transform hover:scale-125 ${
    darkMode ? "text-text-dark" : "text-text-light hover:text-[#a4bf4e]"
  }`}
>
  <FaEnvelope />
</a>

          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
  <img
    src={darkMode ? "/images/developer-illustration.svg" : "/images/developer-illustration-light.svg"}
    alt="Developer at desk"
    className="w-96 md:w-full drop-shadow-xl animate-fadeIn"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
