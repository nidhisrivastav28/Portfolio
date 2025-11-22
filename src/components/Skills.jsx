import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 40 },
  { name: "Python", level: 65 },
  { name: "MySQL", level: 80 },
  { name: "Problem Solving / DSA", level: 50 },
  { name: "Java", level: 65 },
  { name: "PHP", level: 60 },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="w-full py-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
          My Skills
        </h2>
        <p className="mb-8 text-gray-600">
          Technologies I work with & my proficiency
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transform transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full overflow-hidden relative">
                <div
                  className="h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: "linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6)",
                    backgroundSize: "600% 100%",
                    animation: visible ? "wave 3s linear infinite" : "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
      @keyframes wave {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 0%; }
      }
    `}
      </style>
    </section>

  );
}
