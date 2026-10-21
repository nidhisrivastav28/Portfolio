import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  ChevronDown,
  Linkedin,
  Github,
} from "lucide-react";

import leetcode from "../assets/leetcode.png";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-[#050816]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto h-20 px-8 grid grid-cols-3 items-center">

          {/* Brand */}

          <div>
            <h1 className="text-4xl font-bold italic text-violet-500 cursor-pointer select-none">
              Nidhi
            </h1>
          </div>

          {/* Desktop Navigation */}

          <ul className="hidden md:flex justify-center items-center gap-10">

            {navItems.map((item, index) => (

              <li key={item.name} className="relative group">
                <a href={item.link}
                  className="text-gray-300 hover:text-violet-400 transition-colors duration-300 text-sm font-medium"
                >{item.name}
                </a>

                {/* Active Underline */}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-violet-500 transition-all duration-300
                  
                  ${index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }
                  
                  `}
                ></span>

              </li>

            ))}

          </ul>

          {/* Right Side */}

          

          {themeMenu && (

            <div className="absolute top-16 right-0 w-44 rounded-xl bg-[#111827] border border-slate-700 shadow-xl overflow-hidden">

              <button className="w-full px-4 py-3 text-left hover:bg-slate-800 text-gray-300">
                🌙 Dark
              </button>

              <button className="w-full px-4 py-3 text-left hover:bg-slate-800 text-gray-300">
                ☀️ Light
              </button>
            </div>
          )}
          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex justify-end text-white"
          >
            <Menu size={30} />
          </button>

        </div>
      </nav>

      {/* Overlay */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />

      )}

      {/* Mobile Drawer */}

      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-80
        bg-[#050816]
        z-50
        shadow-2xl
        p-6
        transition-transform
        duration-300
        
        ${open
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
      >

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold text-violet-500">
              Nidhi.
            </h2>

            {/* <p className="text-sm text-gray-400 mt-1">
              Data Analyst | Developer
            </p> */}

          </div>

          <button
            onClick={() => setOpen(false)}
          >

            <X
              size={28}
              className="text-white"
            />

          </button>

        </div>

        {/* Navigation */}

        <div className="mt-12 flex flex-col gap-5">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="
              rounded-xl
              px-4
              py-3
              text-gray-300
              hover:bg-violet-600/20
              hover:text-violet-400
              transition
              "
            >

              {item.name}

            </a>

          ))}

        </div>

        {/* Social Icons */}

        <div className="absolute bottom-8 left-6 flex gap-5">

          <a
            href="https://www.linkedin.com/in/nidhi-srivastav-4aa298262/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >

            <Linkedin size={22} />

          </a>

          <a
            href="https://github.com/nidhisrivastav28"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >

            <Github size={22} />

          </a>

          <a
            href="https://leetcode.com/u/nidhi_28/"
            target="_blank"
            rel="noreferrer"
          >

            <img
              src={leetcode}
              alt="LeetCode"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />

          </a>

        </div>

      </div>
    </>
  );
}