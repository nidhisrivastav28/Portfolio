import { FaPaintBrush, FaMusic, FaFootballBall, GiDancer, FaBook, FaCode } from "react-icons/fa";

export default function About() {
    return (
        <section id="ab" className="w-full py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">

                {/* Left Text */}
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        I’m Nidhi Srivastav, a passionate Web Developer who loves creating
                        clean, modern and user-friendly digital experiences. I enjoy working
                        with frontend and backend technologies and constantly learning new things.
                    </p>

                    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                        With a strong foundation in HTML, CSS, JavaScript, React, Java, Springboot, PHP and MySQL,
                        I aim to build impactful projects that solve real-world problems.
                    </p>

                    
                </div>

                {/* Right Interests / Icons */}
                <div className="grid grid-cols-3 gap-14 text-gray-700 text-3xl md:ml-44 ">
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <FaPaintBrush />
                        <span className="text-sm font-medium">Painting</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <FaMusic />
                        <span className="text-sm font-medium">Singing</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <FaFootballBall />
                        <span className="text-sm font-medium">Sports</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <GiDancer />
                        <span className="text-sm font-medium">Dancing</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <FaBook />
                        <span className="text-sm font-medium">Reading</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg gap-4 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <FaCode />
                        <span className="text-sm font-medium">Coding</span>
                    </div>
                </div>
                

            </div>
            <a href="#skills" className="mt-6 ml-30 bg-black text-white px-7 py-3 rounded-lg font-medium hover:scale-105 hover:text-red-300 hover:cursor-pointer transition inline-block">
                        Know More
                    </a>
        </section>
    );
}
