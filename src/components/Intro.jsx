import nidhiPic from '../assets/nidhi.png';

export default function Intro() {
  return (
    <section id='home' className="w-full min-h-[80vh] flex items-center bg-gradient-to-r from-[#dbeafe] via-[#f3e8ff] to-[#fde2e4] px-6">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between w-full">

        {/* Left Text Section */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm Nidhi
          </h1>

          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Creative Web Developer | Frontend & Backend Enthusiast
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:scale-105 hover:text-red-300 hover:cursor-pointer transition inline-block"
            >
              View my Work
            </a>
            <a
              href="/resume/NidhiSrivastav_CV.pdf"
              target='_blank'
              className="bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:scale-105 hover:text-red-300 hover:cursor-pointer transition inline-block"
            >
              My Resume
            </a>

          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0">
          <img src={nidhiPic} alt="Nidhi" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:h-96 lg:w-97=6 rounded-full object-cover shadow-lg" />
        </div>

      </div>
    </section>
  );
}