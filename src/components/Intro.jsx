import {
  Linkedin,
  Github,
  Mail,
  BarChart3,
  Database,
  Code2,
  PieChart,
} from "lucide-react";

import nidhiPic from "../assets/NS-self.png";
import leetcode from "../assets/leetcode.png";
// import cv from "../resume/NidhiSrivastav_CV.pdf";

export default function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* ================= LEFT ================= */}

          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-xl bg-violet-500/20 text-violet-300 text-sm font-medium border border-violet-500/20">
              Hello, I'm
            </span>

            {/* Name */}
            <h1 className="mt-5 text-5xl lg:text-7xl font-bold leading-tight">

              <span className="text-white">
                Nidhi{" "}
              </span>

              <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                Srivastav
              </span>

            </h1>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-semibold">

              <span className="text-cyan-400">
                Business Analyst
              </span>

              <span className="text-white">
                {" "} | {" "}
              </span>

              <span className="text-violet-400">
                Web Developer
              </span>

            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-400">

              Business Analyst skilled in procurement workflows, requirements documentation, and functional testing. Freelance web developer building responsive, end-to-end business websites tailored to client needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg hover:shadow-violet-500/30"
              > View My Work →
              </a>

              <a
                href="/Portfolio/resume/NidhiSrivastav.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl border border-violet-500 text-white font-semibold hover:bg-violet-500/10 transition duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://www.linkedin.com/in/nidhi-srivastav/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#111827] border border-slate-700 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Linkedin size={20}
                  className="text-gray-300 group-hover:text-violet-400 transition"
                />
              </a>

              <a
                href="https://github.com/nidhisrivastav28/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#111827] border border-slate-700 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Github size={20}
                  className="text-gray-300 group-hover:text-violet-400 transition"
                />
              </a>

              <a
                href="mailto:nidhisrivastav283@gmail.com"
                className="w-12 h-12 rounded-full bg-[#111827] border border-slate-700 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition"
              >
                <Mail size={20}
                  className="text-gray-300 group-hover:text-violet-400 transition"
                />
              </a>

              <a href="https://leetcode.com/u/nidhi_28/" target="_blank" rel="noreferrer"
                className="group w-12 h-12 rounded-full bg-[#111827] border border-slate-700 flex items-center justify-center hover:border-violet-500 transition-all duration-300 hover:-translate-y-1"
              >
                <img src={leetcode} alt="LeetCode" className="w-5 h-5"
                />
              </a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Purple Glow */}
            <div className="absolute w-[470px] h-[470px] rounded-full bg-violet-600 blur-[120px] opacity-20"></div>

            {/* Blue Glow */}
            <div className="absolute left-10 bottom-10 w-40 h-40 bg-blue-600 rounded-full blur-[90px] opacity-20"></div>

            {/* Dot Pattern */}
            <div
              className="absolute right-0 top-14 w-[340px] h-[340px] opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(#6d6dff 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
              }}
            ></div>

            {/* Small Floating Blur */}
            <div className="absolute top-28 right-8 w-6 h-6 rounded-full bg-blue-500 blur-md opacity-60"></div>

            <div className="absolute bottom-28 right-28 w-4 h-4 rounded-full bg-violet-500 blur-sm opacity-80"></div>

            <div className="absolute top-48 left-16 w-3 h-3 rounded-full bg-violet-500 opacity-70"></div>

            {/* Profile Image */}

            <div className="relative z-10">

              {/* Image Glow */}
              {/* Image Glow */}
              <div
                className="
    absolute
    inset-0
    rounded-full
    bg-gradient-to-r
    from-violet-500
    to-blue-500
    blur-3xl
    opacity-35
    scale-110
  "
              ></div>

              <img
                src={nidhiPic}
                alt="Nidhi Srivastav"
                className="
    relative
    w-64
    h-64
    sm:w-80
    sm:h-80
    lg:w-[430px]
    lg:h-[430px]
    rounded-full
    object-cover
    object-[center_10%]
    border-[6px]
    border-violet-500
    shadow-[0_0_60px_rgba(139,92,246,0.55)]
  "
              />

            </div>

            {/* Analytics */}

            <div
              className="absolute top-4 left-10 w-16 h-16 rounded-full bg-[#111827] border border-violet-500/30 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <BarChart3 className="text-violet-400" size={28} />
            </div>

            {/* Database */}

            <div
              className="absolute bottom-16 left-0 w-16 h-16 rounded-full bg-[#111827] border border-violet-500/30 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <Database className="text-violet-400" size={28} />
            </div>

            {/* Development */}

            <div
              className="absolute top-4 right-2 w-16 h-16 rounded-full bg-[#111827] border border-violet-500/30 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "3.5s" }}
            >
              <Code2 className="text-violet-400" size={28} />
            </div>

            {/* Dashboard */}

            <div
              className="absolute bottom-5 right-5 w-16 h-16 rounded-full bg-[#111827] border border-violet-500/30 flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "4.5s" }}
            >
              <PieChart className="text-violet-400" size={28} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}