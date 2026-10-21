import { UserRound, BrainCircuit } from "lucide-react";

const businessAnalysisSkills = [
  { name: "Business Analysis", width: "85%" },
  { name: "Requirement Gathering", width: "80%" },
  { name: "SQL", width: "85%" },
  { name: "Excel", width: "85%" },
  { name: "Power BI", width: "70%" },
  { name: "Data Visualization", width: "80%" },
];

const technologySkills = [
  { name: "HTML", width: "95%" },
  { name: "CSS", width: "90%" },
  { name: "Python", width: "85%" },
  { name: "JavaScript", width: "70%" },
  { name: "MySQL", width: "85%" },
  { name: "WordPress", width: "87%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] px-8 pb-4"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* LEFT CARD */}

        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-8">

          <div className="flex items-center gap-3">

            <UserRound className="text-violet-400" />

            <h2 className="text-3xl font-bold text-white">
              About Me
            </h2>

          </div>

          <p className="mt-8 text-gray-400 leading-8">
            I'm a Business Analyst with a strong foundation in Data Analytics and Web Development. I work on understanding business requirements, process analysis, software testing, and building data-driven solutions that improve efficiency and decision-making.
          </p>

          <p className="mt-8 text-gray-400 leading-8">
            I enjoy bridging the gap between business and technology by transforming ideas into practical, user-centric, and impactful digital solutions.
          </p>

          <button
            className="mt-10 px-8 py-4 rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-blue-600
            text-white
            font-semibold
            hover:scale-105
            transition"
          ><a href="https://www.linkedin.com/in/nidhi-srivastav/">
            Know More About Me
            </a>
          </button>

        </div>

        {/* RIGHT CARD */}

        <div className="lg:col-span-2 bg-[#0f172a] rounded-2xl border border-slate-800 p-8">

          <div className="flex items-center gap-3 mb-10">

            <BrainCircuit className="text-blue-400" />

            <h2 className="text-3xl font-bold text-white">
              My Skills
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Business & Data */}

            <div>

              <h3 className="text-white font-semibold text-xl mb-6">
                Business & Data
              </h3>

              {businessAnalysisSkills.map((skill) => (

                <div
                  key={skill.name}
                  className="mb-5"
                >

                  <div className="flex justify-between text-gray-300 text-sm mb-2">

                    <span>{skill.name}</span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

                    <div
                      style={{ width: skill.width }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    ></div>

                  </div>

                </div>

              ))}

            </div>

            {/* Technology */}

            <div>

              <h3 className="text-white font-semibold text-xl mb-6">
                Technology
              </h3>

              {technologySkills.map((skill) => (

                <div
                  key={skill.name}
                  className="mb-5"
                >

                  <div className="flex justify-between text-gray-300 text-sm mb-2">

                    <span>{skill.name}</span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

                    <div
                      style={{ width: skill.width }}
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-400 rounded-full"
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}