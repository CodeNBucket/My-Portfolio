import React, { useState, useRef, useEffect } from "react";
import music from "../assets/music.mp3";

import cssIcon from "../assets/icons/css.png";
import djangoIcon from "../assets/icons/django.png";
import javascriptIcon from "../assets/icons/javascript.png";
import gitIcon from "../assets/icons/git.png";
import htmlIcon from "../assets/icons/html.png";
import nodejsIcon from "../assets/icons/nodejs.png";
import pythonIcon from "../assets/icons/python.png";
import reactIcon from "../assets/icons/react.png";
import sqlIcon from "../assets/icons/sql.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import springboot from "../assets/icons/springboot.png";
import tensorflowIcon from "../assets/icons/tensorflow.png";
import opencvIcon from "../assets/icons/opencv.png";
import c from "../assets/icons/c.png";
import java from "../assets/icons/java.png";

const images = [
  { src: "/images/img4.png", title: "Frontend Developer" },
  { src: "/images/img.png", title: "Backend Developer" },
  { src: "/images/img3.png", title: "AI Engineer" },
];

const languages = [
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: java },
  { name: "SQL", icon: sqlIcon },
  { name: "C", icon: c },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
];

const technologies = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "SpringBoot", icon: springboot },
  { name: "TensorFlow", icon: tensorflowIcon },
  { name: "Django", icon: djangoIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "OpenCV", icon: opencvIcon },
  { name: "Git", icon: gitIcon },
];

const Skills: React.FC<{ darkMode: boolean; onSkillClick: (index: number) => void }> = ({ darkMode, onSkillClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handleClick = () => {
    const audio = audioRef.current;
    audio.play();
    audio.volume = 0.4;
    setIsPlaying(true);
    document.querySelectorAll(".tech-icon").forEach((icon) => {
      icon.classList.add("animate-dance");
    });
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    document.querySelectorAll(".tech-icon").forEach((icon) => {
      icon.classList.remove("animate-dance");
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", handleAudioEnded);
    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? "bg-primary-bg text-text-dark" : "bg-light-bg text-text-light"}`}
    >
      <div className="container mx-auto px-6 md:px-20 text-left">
        <style>
          {`
            @keyframes float-glow {
              0% { transform: translateY(0) scale(1); box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
              50% { transform: translateY(-10px) scale(1.05); box-shadow: 0 0 25px rgba(255, 255, 255, 0.5); }
              100% { transform: translateY(0) scale(1); box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
            }
            @keyframes shine {
              0% { box-shadow: 0 0 0px rgba(255, 255, 255, 0.8); }
              50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.9); }
              100% { box-shadow: 0 0 0px rgba(255, 255, 255, 0.8); }
            }
            @keyframes dance {
              0% { transform: rotate(0deg); }
              25% { transform: rotate(10deg); }
              50% { transform: rotate(0deg); }
              75% { transform: rotate(-10deg); }
              100% { transform: rotate(0deg); }
            }
            .animate-dance { animation: dance 1.08s infinite; }
          `}
        </style>

        <div className="flex justify-start gap-16 mb-40 items-start w-full">
          <div
            onClick={() => onSkillClick(0)}
            className={`w-80 h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-110 hover:animate-[float-glow_0.8s_ease-in-out_infinite] ${
              darkMode ? "bg-gradient-to-b from-[#FF5F6D] to-[#FFC371]" : "bg-gradient-to-b from-[#dea487] to-[#694b3d]"
            }`}
          >
            <img src={images[0].src} alt={images[0].title} className="w-80 h-48 object-cover rounded-lg" />
            <h3 className={`mt-4 text-2xl font-bold ${darkMode ? "text-white" : "text-[#ffece3]"}`}>{images[0].title}</h3>
          </div>

          <div
            onClick={() => onSkillClick(1)}
            className={`w-80 h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-110 hover:animate-[float-glow_0.8s_ease-in-out_infinite] ${
              darkMode ? "bg-gradient-to-b from-[#36D1DC] to-[#66C4E1]" : "bg-gradient-to-b from-[#e6c0ae] to-[#857066]"
            }`}
          >
            <img src={images[1].src} alt={images[1].title} className="w-48 h-48 object-cover rounded-lg" />
            <h3 className={`mt-4 text-2xl font-bold ${darkMode ? "text-white" : "text-[#ffece3]"}`}>{images[1].title}</h3>
          </div>

          <div
            onClick={() => onSkillClick(2)}
            className={`w-80 h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-110 hover:animate-[float-glow_0.8s_ease-in-out_infinite] ${
              darkMode ? "bg-gradient-to-b from-[#9B2CFF] to-[#D12CFF]" : "bg-gradient-to-b from-[#f7cbb5] to-[#cc9b83]"
            }`}
          >
            <img src={images[2].src} alt={images[2].title} className="w-60 h-48 object-cover rounded-lg" />
            <h3 className={`mt-4 text-2xl font-bold ${darkMode ? "text-white" : "text-[#ffece3]"}`}>{images[2].title}</h3>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-2">My Skills</h3>
            <h2 className="text-6xl font-extrabold">Tech Stack</h2>
          </div>

          {!videoPlayed && (
            <button
              onClick={() => {
                handleClick();
                setVideoPlayed(true);
              }}
              className={`px-8 py-3 rounded-xl text-xl font-semibold transition-all duration-300 ${
                darkMode ? "bg-[#FFD700] text-black hover:bg-[#FF8C00]" : "bg-[#7d663c] text-white hover:bg-[#bfa16b]"
              }`}
            >
              {isPlaying ? "Stop the Dance" : "Click at your own risk!"}
            </button>
          )}

          {videoPlayed && <div className="mr-32"><h2>:)</h2></div>}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-16">Technical Languages</h3>
          <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
            {languages.map((lang) => (
              <div key={lang.name} className="flex flex-col items-center">
                <div
                  className={`relative group w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-125 hover:animate-[shine_1s_ease-in-out] ${
                    darkMode ? "bg-gray-300" : "bg-gray-100"
                  }`}
                >
                  <img src={lang.icon} alt={lang.name} className="w-20 h-20 object-contain tech-icon" />
                  <span
                    className={`absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity duration-300 ${
                      darkMode ? "text-text-dark" : "text-text-light"
                    }`}
                  >
                    {lang.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-16">Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <div
                  className={`relative group w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-125 hover:animate-[shine_1s_ease-in-out] ${
                    darkMode ? "bg-gray-300" : "bg-gray-100"
                  }`}
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 object-contain tech-icon" />
                  <span
                    className={`absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity duration-300 ${
                      darkMode ? "text-text-dark" : "text-text-light"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
