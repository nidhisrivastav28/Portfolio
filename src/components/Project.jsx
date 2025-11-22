import { useState } from "react";
import studyshala1 from '../assets/studyshala1.png';
import studyshala2 from '../assets/studyshala2.png';
import studyshala3 from '../assets/studyshala3.png';
import studyshala4 from '../assets/studyshala4.png';
import hangouthub from '../assets/hangouthub.png';
import hangouthub2 from '../assets/hangouthub2.png';
import hangouthub3 from '../assets/hangouthub3.png';
import hangouthub4 from '../assets/hangouthub4.png';
import hangouthub5 from '../assets/hangouthub5.png';
import patientadmission1 from '../assets/patientadmissionSystem.png';

const projects = [
    {
        name: "HangOutHub",
        description: "A user-friendly Spring Boot web app to discover budget-friendly hangout spots based on mood and location, with a responsive UI, MySQL backend, and AI-powered interactive assistance.",
        tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
        link: "https://github.com/nidhisrivastav28/HangOutHub",
        images: [hangouthub2,hangouthub,hangouthub3,hangouthub4,hangouthub5],
        liveDemo: "", 
    },
    {
        name: "StudyShala: Your Notes Hub",
        description: "A user-friendly web app for students to upload, share, and access study notes seamlessly, built with HTML, CSS, JS, PHP, and MySQL.",
        tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
        link: "https://github.com/nidhisrivastav28/StudyShala---Your-Notes-Hub",
        images: [studyshala1, studyshala2, studyshala3, studyshala4],
        liveDemo: "", 
    },
    {
        name: "Patient Admission System",
        description: "A Spring Boot web application with TailwindCSS and MySQL for seamless management of patient admissions, medical records, and room allocations in hospitals.",
        tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
        link: "https://github.com/nidhisrivastav28/PatientAdmissionSystem_new",
        images: [patientadmission1,],
        liveDemo: "",
    },
    
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-white text-3xl font-bold mb-10">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % project.images.length);
    };
    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-white rounded-xl p-4 shadow-md overflow-hidden relative">
            <img
                src={project.images[current]}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Slider buttons */}
            {project.images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-transparent text-black text-4xl px-2 py-1 rounded cursor-pointer"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent text-black text-4xl px-2 py-1 rounded cursor-pointer"
                    >
                        ›
                    </button>
                </>
            )
            }

            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{project.description}</p>
            <div className="mt-3 flex gap-3 flex-wrap">
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" className="px-3 py-1 bg-black text-white rounded-lg text-sm">
                        Live Demo
                    </a>
                )}
                <a href={project.link} target="_blank" className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm">
                    GitHub
                </a>
            </div>
        </div >
    );
}
