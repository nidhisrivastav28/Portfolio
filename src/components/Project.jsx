import { useState } from "react";

import {
  Code2,
  Brain,
  BarChart3,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import studyshala1 from "../assets/studyshala1.png";
import studyshala2 from "../assets/studyshala2.png";
import studyshala3 from "../assets/studyshala3.png";
import studyshala4 from "../assets/studyshala4.png";

import hangouthub from "../assets/hangouthub.png";
import hangouthub2 from "../assets/hangouthub2.png";
import hangouthub3 from "../assets/hangouthub3.png";
import hangouthub4 from "../assets/hangouthub4.png";
import hangouthub5 from "../assets/hangouthub5.png";

import patientadmission1 from "../assets/patientadmissionSystem.png";
import facialexpression from "../assets/facial_expression.png";
import salesdashboard from "../assets/sales_dashboard.png";


const projects = [
  {
    category: "Development",
    name: "HangOutHub",
    description:
      "Mood-based Spring Boot platform that helps users discover hangout places with authentication, AI chatbot, reviews and personalized recommendations.",
    tech: ["Spring Boot", "Java", "MySQL", "Thymeleaf"],
    github: "https://github.com/nidhisrivastav28/HangOutHub",
    live: "",
    images: [
      hangouthub2,
      hangouthub,
      hangouthub3,
      hangouthub4,
      hangouthub5,
    ],
  },

  {
    category: "Development",
    name: "StudyShala",
    description:
      "Online study notes sharing platform where students can upload, download and manage notes with secure authentication.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    github:
      "https://github.com/nidhisrivastav28/StudyShala---Your-Notes-Hub",
    live: "",
    images: [
      studyshala1,
      studyshala2,
      studyshala3,
      studyshala4,
    ],
  },

  {
    category: "Development",
    name: "Patient Admission System",
    description:
      "Hospital management system built using Spring Boot with patient registration, admission workflow and room allocation.",
    tech: ["Spring Boot", "Java", "MySQL", "Tailwind"],
    github:
      "https://github.com/nidhisrivastav28/PatientAdmissionSystem_new",
    live: "",
    images: [patientadmission1],
  },

  {
    category: "AI / ML",
    name: "Facial Emotion Recognition",
    description:
      "Deep learning model trained on FER2013 dataset for real-time facial emotion recognition.",
    tech: ["Python", "TensorFlow", "OpenCV", "Keras"],
    github: "",
    live: "",
    images: [facialexpression],
  },

  {
    category: "Data Analytics",
    name: "Sales Dashboard",
    description:
      "Interactive Power BI dashboard for KPI tracking, sales analysis and executive reporting.",
    tech: ["Power BI", "SQL", "Excel", "DAX"],
    github: "",
    live: "",
    images: [salesdashboard],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  const categories = [
    {
      name: "All Projects",
      icon: <Code2 size={18} />,
    },
    {
      name: "Development",
      icon: <Code2 size={18} />,
    },
    {
      name: "AI / ML",
      icon: <Brain size={18} />,
    },
    {
      name: "Data Analytics",
      icon: <BarChart3 size={18} />,
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">

          <div className="flex justify-center items-center gap-4">

            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <div className="relative px-7 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">

              <span className="uppercase tracking-[4px] text-sm text-violet-400 font-semibold">
                My Projects
              </span>

              {/* <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]"></div>

              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]"></div> */}

            </div>

            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></div>

          </div>

          <h2 className="mt-8 text-5xl lg:text-6xl font-bold">

            <span className="text-white">
              Things I've Built,
            </span>{" "}

            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
              Impact I Create
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            A collection of Web Development,
            Artificial Intelligence and Data
            Analytics projects focused on
            solving real-world problems.
          </p>

        </div>

        {/* Filter */}

        <div className="flex justify-center mb-14">

          <div className="flex flex-wrap gap-3 bg-[#0F172A] border border-slate-700 rounded-2xl p-2">

            {categories.map((item) => (

              <button
                key={item.name}
                onClick={() =>
                  setActiveCategory(item.name)
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition ${
                  activeCategory === item.name
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-800"
                }`}
              >
                {item.icon}
                {item.name}
              </button>

            ))}

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredProjects.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] =
    useState(0);

  const nextImage = () => {
    setCurrentImage(
      (prev) =>
        (prev + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + project.images.length) %
        project.images.length
    );
  };

  return (
    <div className="group bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/40 transition duration-300">

      <div className="relative overflow-hidden">

        <img
          src={project.images[currentImage]}
          alt={project.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-violet-600 text-xs font-semibold">
          {project.category}
        </div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm leading-7 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-slate-700 hover:border-violet-500 transition"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}

        </div>

      </div>

    </div>
  );
}