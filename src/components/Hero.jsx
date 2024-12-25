import { hero_section } from "../constants/index.js";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Hero = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <div
      id="hero-section"
      className={`relative w-full min-h-screen flex items-center justify-center text-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center px-6">
        {hero_section.length > 0 ? (
          hero_section.map((hero, index) => (
            <div
              key={index}
              className={`mb-12 transform transition-all duration-700 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                {/* Profile Image */}
                <div className="relative group">
                  {/* Original image */}
                  <img
                    className="rounded-full border-4 border-white shadow-lg object-cover transform transition-all duration-500 group-hover:opacity-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                    src={hero.image}
                    alt="Profile"
                    width={120}
                    height={120}
                    style={{ width: "120px", height: "120px" }}
                  />

                  {/* Glasses image (visible only on hover) */}
                  <img
                    className="absolute inset-0 rounded-full border-4 border-white shadow-lg object-cover transform transition-all duration-500 opacity-0 group-hover:opacity-100 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                    src={hero.image_shades}
                    alt="Profile with Glasses"
                    width={120}
                    height={120}
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4 sm:mt-0">
                  {hero.fullName}
                </p>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 transition-all duration-700 transform ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {hero.title}
              </h1>

              {/* location and flag */}
              <div className="flex items-center justify-center mt-4 sm:mt-6">
                <span className="text-lg sm:text-xl font-medium text-white">
                  📍 Marikina City, Philippines 🇵🇭
                </span>
              </div>

              <p
                className={`text-lg sm:text-xl md:text-2xl font-medium tracking-tight mt-4 sm:mt-6 lg:mt-8 transition-all duration-700 transform ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`} // Slide-up effect for description
              >
                <span className="font-semibold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                  I will discover my potential
                </span>{" "}
                <span className="text-white">and</span>{" "}
                <span className="font-semibold text-cyan-500 group-hover:bg-cyan-500 group-hover:text-cyan-400 transition-all duration-300">
                  achieve greatness
                </span>{" "}
                <span className="text-white">with you.</span>
              </p>

              <div
                className={`flex justify-center items-center gap-6 mt-6 transition-all duration-700 transform ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <button className="text-white flex gap-2 hover:scale-105 justify-center items-center bg-cyan-500 border-outline px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300">
                  <FaFileDownload />
                  Resume
                </button>
                {/* Social Icons */}
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 hover:rotate-6 transition-all duration-300"
                >
                  <FaLinkedin
                    size={30}
                    className="text-gray-500 hover:text-blue-500"
                  />
                </a>
                <a
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 hover:rotate-6 transition-all duration-300"
                >
                  <FaGithub
                    size={30}
                    className="text-gray-500 hover:text-white"
                  />
                </a>
                <a
                  href={`mailto:${hero.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 hover:rotate-6 transition-all duration-300"
                >
                  <FaEnvelope
                    size={30}
                    className="text-gray-500 hover:text-red-500"
                  />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              No Data Available
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
