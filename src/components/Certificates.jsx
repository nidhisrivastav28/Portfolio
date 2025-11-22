import { useState, useEffect, useRef } from "react";
import cert1 from '../assets/cert4.png';
import cert2 from '../assets/cert3.png';
import cert3 from '../assets/cert2.png';
import cert4 from '../assets/cert1.png';

const certificates = [
  { name: "Mobile & Web Technology — RCCIIT", image: cert1 },
  { name: " Programming using Java—Infosys-Springboard", image: cert2 },
  { name: "Industrial Training-Euphoria GenX", image: cert3 },
  { name: " Data Analytics (No/Low Code) — Anudip Foundation", image: cert4 },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 3;
  const containerRef = useRef(null);

  // Duplicate certificates for seamless forward slide
  const slides = [...certificates, ...certificates];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset without visual jump
    if (current >= certificates.length) {
      setTimeout(() => {
        setCurrent(0);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = `translateX(0%)`;
          // Force reflow to re-enable transition
          void containerRef.current.offsetWidth;
          containerRef.current.style.transition = "transform 0.5s ease";
        }
      }, 500); // match transition duration
    }
  }, [current]);

  return (
    <section id="certificates" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-10">Certificates</h2>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(current * 100) / itemsPerSlide}%)`,
            }}
          >
            {slides.map((cert, idx) => (
              <div key={idx} className="flex-shrink-0 w-1/3 px-2">
                <div className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-60 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
