import { useState } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";
import leetcode from "../assets/leetcode.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-3xl font-semibold tracking-wide text-gray-800">
          Nidhi Srivastav
        </h1>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-black transition cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-black transition cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-black transition cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-black transition cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-black transition cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Links */}

        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          ></div>
        )}

        {/* MOBILE SLIDE OVER MENU (Right side) */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-xl p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Menu</h2>

            <button onClick={() => setOpen(false)} className="text-gray-700">
              <X size={26} />
            </button>
          </div>

          {/* LINKS */}
          <div className="mt-8 space-y-4 text-gray-900 font-medium">
            <a href="#home" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
          </div>

          {/* FOOTER */}
          <div className="flex gap-4 px-3 py-2 text-gray-700">
            <a href="https://www.linkedin.com/in/nidhi-srivastav-4aa298262/" target="_blank" className="relative group cursor-pointer hover:text-red-300 transition">
              <Linkedin size={24} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition">
                LinkedIn
              </span>
            </a>

            <a href="https://github.com/nidhisrivastav28/" target="_blank" className="relative group cursor-pointer hover:text-red-300 transition">
              <Github size={24} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition">
                GitHub
              </span>
            </a>

            <a href="https://leetcode.com/u/nidhi_28/" target="_blank" className="relative group">
              <img src={leetcode} alt="leetcode" className="w-6 h-6 hover:text-red-300 transition" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition">
                LeetCode
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
