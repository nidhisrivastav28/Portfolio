import {
  Award,
  ExternalLink,
  Mail,
  MapPin,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const certificates = [
  {
    title: "Cloud with DevOps",
    provider: "Indian Institute of Internship",
    type: "Project-Based Industrial Training & Internship · Jul–Aug 2025",
    link: "#",
    color: "text-blue-400",
  },
  {
    title: "Mobile & Web Technology",
    provider: "RCCIIT",
    type: "Industrial Training",
    link: "#",
    color: "text-cyan-400",
  },
  {
    title: "Software Programmer (Python)",
    provider: "NASSCOM",
    type: "Professional Certification",
    link: "#",
    color: "text-green-400",
  },
  {
    title: "Data Analytics (Low-Code/No-Code)",
    provider: "Anudip Foundation",
    type: "Data Analytics Training",
    link: "#",
    color: "text-yellow-400",
  },
  {
    title: "Microsoft Excel",
    provider: "Udemy",
    type: "Beginner to Advanced with Data Analysis & AI",
    link: "#",
    color: "text-emerald-400",
  },
  {
    title: "Programming Using Java",
    provider: "Infosys Springboard",
    type: "Programming Certification",
    link: "#",
    color: "text-orange-400",
  },
  {
    title: "Affective Computing & HCI",
    provider: "NPTEL",
    type: "Examination · Affective Computing & Human-Computer Interaction",
    link: "#",
    color: "text-purple-400",
  },
];

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="certificates"
      className="py-5 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Heading ================= */}

        <div className="text-center mb-16">

          <div className="flex justify-center items-center gap-4">

            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <div className="relative px-7 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">

              <span className="uppercase tracking-[4px] text-sm text-violet-400 font-semibold">
                Achievements
              </span>

              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400"></div>

              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400"></div>

            </div>

            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></div>

          </div>

          <h2 className="mt-8 text-5xl lg:text-6xl font-bold">

            <span className="text-white">
              Certifications &
            </span>{" "}

            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Professional certifications validating my skills along with
            ways to connect for collaborations and opportunities.
          </p>

        </div>

        {/* ================= Main Container ================= */}

        <div className="rounded-3xl border border-slate-800 bg-[#0A101F] p-6">

          {/* ================= Certificates ================= */}

          <h3 className="flex items-center gap-3 text-2xl font-semibold mb-7">

            <div className="w-11 h-11 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Award className="text-violet-400" size={22} />
            </div>

            Certificates

          </h3>

          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(${currentIndex} * -${100 / 3}% - ${currentIndex * 6.67}px))`,
              }}
            >
              {certificates.map((item, index) => (
                <div
                  key={item.title}
                  className="
          flex-shrink-0
          w-full
          sm:w-[calc(50%-10px)]
          lg:w-[calc(33.333%-14px)]
          rounded-2xl
          border border-slate-800
          bg-[#0D1425]
          p-5
          hover:border-violet-500/40
          transition duration-300
        "
                >
                  <div className={`text-4xl mb-4 ${item.color}`}>
                    <Award size={30} />
                  </div>

                  <h4 className="font-semibold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-violet-400 text-sm mt-1">
                    {item.provider}
                  </p>

                  <p className="text-gray-400 text-sm mt-3 leading-6">
                    {item.type}
                  </p>

                  {item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-violet-400 hover:text-violet-300"
                    >
                      View Credential
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ================= Let's Connect ================= */}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-[#0D1425] px-8 py-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">

            {/* Let's Connect */}

            <div className="lg:col-span-4">
              <div className="flex gap-3">

                {/* Icon */}

                <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">

                  <MessageCircle className="text-violet-400" size={22} />

                </div>
                <div className="flex flex-col justify-center">

                  <h3 className="text-xl font-semibold">
                    Let's Connect
                  </h3>
                  {/* Text */}

                </div>
              </div>
              <div className="flex flex-col justify-center">

                <p className="text-gray-400 mt-3 leading-7 max-w-sm">
                  I'm always open to discussing new opportunities and interesting
                  projects.
                </p>

              </div>
            </div>

            {/* Email */}
            <div className="lg:col-span-3">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-lg bg-violet-500/15 flex items-center justify-center">

                  <Mail className="text-violet-400" size={20} />

                </div>

                <div>

                  <p className="text-white font-medium ">
                    Email
                  </p>

                  <a
                    href="mailto:nidhisrivastav28@gmail.com"
                    className="text-gray-400 text-sm hover:text-violet-400 transition"
                  >
                    nidhisrivastav28@gmail.com
                  </a>

                </div>

              </div>

            </div>

            {/* Location */}
            <div className="lg:col-span-2">

              <div className="flex items-center gap-2">

                <div className="w-11 h-11 rounded-lg bg-violet-500/15 flex items-center justify-center">

                  <MapPin className="text-violet-400" size={20} />

                </div>

                <div>

                  <p className="text-white font-medium">
                    Location
                  </p>

                  <p className="text-gray-400 text-sm">
                    Kolkata, India
                  </p>

                </div>

              </div>

            </div>

            {/* LinkedIn */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2">

                <div className="w-11 h-11 rounded-lg bg-violet-500/15 flex items-center justify-center">
                  <Linkedin className="text-violet-400" size={20} />
                </div>

                <div>
                  <p className="text-white font-medium">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/nidhisrivastav28"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 text-sm hover:text-violet-400 transition break-all"
                  >
                    linkedin.com/in/nidhisrivastav28
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FOOTER */}
      <div className="max-w-7xl mx-auto px-6 mt-2">

        <div className="flex justify-between items-center text-sm text-gray-500">

          <p>
            © 2026 Nidhi Srivastav. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with
            <span className="text-white">🤍</span>
          </p>

        </div>
      </div>
    </section >
  );
}