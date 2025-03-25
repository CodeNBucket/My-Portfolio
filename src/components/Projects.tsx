import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

import reactIcon from "../assets/icons/react.png";
import springIcon from "../assets/icons/springboot.png";
import sqlIcon from "../assets/icons/sql.png";
import pythonIcon from "../assets/icons/python.png";
import djangoIcon from "../assets/icons/django.png";
import tensorflowIcon from "../assets/icons/tensorflow.png";
import opencvIcon from "../assets/icons/opencv.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import typescriptIcon from "../assets/icons/typescript.png";
import htmlIcon from "../assets/icons/html.png";

const projects = [
  {
    title: "Rent Finder",
    description: "A web application similar to Airbnb, where users can add, update, and delete property listings, as well as make reservations. It uses Natural Language Processing (NLP) to detect fake reviews and analyze sentiment, ensuring that users can trust the feedback they read. This helps guests make informed decisions, while property owners can easily manage their listings.",
    techStack: ["React", "SpringBoot", "SQL", "Python"],
    icons: [reactIcon, springIcon, sqlIcon, pythonIcon],
    githubLinks: {
      frontend: "https://github.com/CodeNBucket/GraduationProject-Front-end",
      backend: "https://github.com/CodeNBucket/GraduationProject-Back-end",
      machineLearning: "https://github.com/CodeNBucket/GraduationProject-MLAlgorithm",
    },
  },
  {
    title: "Vision-Based Projects",
    description: "AI-powered computer vision projects for real-time custom-labeled tomato counting and vehicle tracking using YOLOv8, OpenCV, and TensorFlow. These solutions leverage advanced image processing and machine learning for accurate and efficient tracking and counting.",
    techStack: ["Python", "OpenCV", "TensorFlow"],
    icons: [pythonIcon, opencvIcon, tensorflowIcon],
    githubLinks: {
      vehicleTracking: "https://github.com/CodeNBucket/vehicle-tracking",
      tomatoCounter: "https://github.com/CodeNBucket/Custom-Tomato-Counter",
    },
  },
  {
    title: "Aircraft Backend System",
    description: "A Django REST API for managing aircraft assembly, parts inventory, and team coordination. It allows adding, updating, and tracking aircraft, parts, and teams, with secure API endpoints to control access and ensure efficient data management throughout the workflow.",
    techStack: ["Django", "SQL", "Python"],
    icons: [djangoIcon, sqlIcon, pythonIcon],
    githubLinks: {
      repository: "https://github.com/CodeNBucket/Django-Ucak",
    },
  },
  {
    title: "Personal Portfolio Website",
    description: "The website you're exploring right now – crafted with React, TypeScript, HTML and Tailwind CSS",
    techStack: ["React", "TypeScript", "Tailwind CSS", "HTML"],
    icons: [reactIcon, typescriptIcon, tailwindIcon, htmlIcon],
    githubLinks: {
      repository: "https://github.com/CodeNBucket/My-Portfolio",
    },
  },
];

const Projects = forwardRef<HTMLDivElement, { darkMode: boolean; highlightedProjects: Set<number> }>(
  ({ darkMode, highlightedProjects }, ref) => {
    return (
      <section
        ref={ref}
        id="projects"
        className={`py-20 ${darkMode ? "bg-primary-bg text-text-dark" : "bg-light-bg text-text-light"}`}
      >
        <div className="container mx-auto px-6 md:px-20">
          <h3 className="text-lg font-semibold tracking-widest uppercase mb-2">My Work</h3>
          <h2 className="text-6xl font-extrabold mb-16">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-full rounded-xl p-8 shadow-2xl   flex flex-col justify-between ${
                  darkMode
                    ? "bg-[#16213E] text-text-dark"
                    : "bg-[#F5F5F5] text-text-light"
                } ${highlightedProjects.has(index) ? (darkMode ? "border-4 border-yellow-500" : "border-4 border-[#6c7a43]") : ""}`}
              >
                <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-text-dark" : "text-text-light"}`}>
                  {project.title}
                </h3>

                <p className={`text-lg mb-6 ${darkMode ? "text-[#DDDDDD]" : "text-text-light"}`}>
                  {project.description}
                </p>

                <div className="flex gap-4 mb-6">
                  {project.icons.map((icon, idx) => (
                    <div key={idx} className="group relative">
                      <img
                        src={icon}
                        alt={project.techStack[idx]}
                        className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-125 hover:shadow-lg"
                      />
                      <span
                        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 ${
                          darkMode ? "bg-black text-white" : "bg-white text-black"
                        } text-sm px-2 py-1 rounded-md transition-opacity duration-300`}
                      >
                        {project.techStack[idx]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {Object.entries(project.githubLinks).map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-white justify-center gap-3 px-4 py-2 rounded-lg shadow-md transition duration-300 font-medium hover:text-white ${
                        label === "frontend"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : label === "backend"
                          ? "bg-green-600 hover:bg-green-700"
                          : label === "machineLearning"
                          ? "bg-purple-600 hover:bg-purple-700"
                          : label === "vehicleTracking"
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : label === "tomatoCounter"
                          ? "bg-red-600 hover:bg-red-700"
                          : label === "repository"
                          ? "bg-teal-600 hover:bg-teal-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      <FaGithub /> {label.charAt(0).toUpperCase() + label.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default Projects;
