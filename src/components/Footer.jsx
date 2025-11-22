import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full py-8 mt-20
      bg-linear-to-r from-[#dbeafe] via-[#f3e8ff] to-[#fde2e4]
      text-center text-gray-900 rounded-t-2xl shadow-inner"
    >
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://linkedin.com" target="_blank">
          <Linkedin size={22} className="hover:scale-110 transition" />
        </a>

        <a href="https://github.com" target="_blank">
          <Github size={22} className="hover:scale-110 transition" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm font-medium tracking-wide">
        © {new Date().getFullYear()} Nidhi Srivastav • All Rights Reserved
      </p>
      <p className="text-sm font-medium tracking-wide italic">
        nidhisrivastav283@gmail.com
      </p>
    </footer>
  );
}
