/* eslint-disable react/no-unknown-property */
import { Github, Linkedin, Mail, FileDown, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { heroData } from "../constants/index.js";
import Resume from "../assets/resume/ARGIE_P._DELGADO_RESUME.pdf";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const showTimer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden transition-all duration-700 bg-gradient-to-tr from-blue-50 via-indigo-100 to-white dark:bg-gradient-to-tr dark:from-slate-900 dark:via-slate-950 dark:to-gray-900 flex items-center justify-center animate-[aurora_20s_ease-in-out_infinite] bg-[length:300%_300%]"
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/30 dark:bg-indigo-900/30 rounded-full blur-3xl animate-[orbFloat_12s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-200/30 dark:bg-cyan-900/30 rounded-full blur-3xl animate-[orbFloat_18s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-10 px-4 sm:px-6 pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 text-center">
          {/* Profile + Messenger Note */}
          <div
            className={`relative inline-block transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group inline-block">
              {/* Glow underlay */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 dark:from-gray-600 dark:via-gray-500 dark:to-gray-700 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Avatar container with NEW ring behavior */}
              <div className="relative animate-[float_8s_ease-in-out_infinite] rounded-full">
                <div className="relative group">
                  <img
                    className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 shadow-2xl transition-opacity duration-700 group-hover:opacity-0"
                    src={heroData.image}
                    alt="Profile"
                  />
                  {heroData.image_shades && (
                    <img
                      className="absolute inset-0 rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      src={heroData.image_shades}
                      alt="Profile with Glasses"
                    />
                  )}
                </div>

                {/* Green Activity Dot */}
                <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                {/* Bubble Note */}
                <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-full bg-slate-800 dark:bg-slate-700 text-white px-5 py-3 rounded-xl shadow-xl text-xs sm:text-sm md:text-base max-w-[280px] text-center border border-slate-600 dark:border-slate-500 transition-all duration-300 ease-in-out">
                  Open for opportunities
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-slate-800 dark:border-t-slate-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Greeting and Name */}
          <div
            className={`space-y-3 sm:space-y-4 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg md:text-xl text-blue-600 dark:text-gray-300 font-light tracking-wide">
                👋 Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent animate-[shimmer_12s_linear_infinite] bg-[length:200%_100%]">
                  {heroData.fullName}
                </span>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-gray-400 font-light">
              {heroData.title}
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-gray-500 text-base sm:text-lg">
              <MapPin
                size={16}
                className="text-blue-500 dark:text-gray-400 sm:w-5 sm:h-5"
              />
              <span>Marikina City, Philippines</span>
            </div>
          </div>

          {/* Actions */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <button
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-medium shadow-lg hover:shadow-blue-400/50 transform hover:-translate-y-1 transition-all duration-300 ease-out"
              onClick={() => window.open(Resume, "_blank")}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <FileDown size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Download Resume</span>
              </div>
            </button>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full bg-slate-900/5 hover:bg-slate-900/10 dark:bg-gray-800/50 dark:hover:bg-gray-700/60 text-slate-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 ease-out hover:scale-110"
              >
                <Linkedin size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full bg-slate-900/5 hover:bg-slate-900/10 dark:bg-gray-800/50 dark:hover:bg-gray-700/60 text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 ease-out hover:scale-110"
              >
                <Github size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>
              <a
                href={`mailto:${heroData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full bg-slate-900/5 hover:bg-slate-900/10 dark:bg-gray-800/50 dark:hover:bg-gray-700/60 text-slate-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300 ease-out hover:scale-110"
              >
                <Mail size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`pt-8 sm:pt-12 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex flex-col items-center space-y-2 text-slate-400 dark:text-gray-600">
              <span className="text-xs sm:text-sm font-light">
                Scroll to explore
              </span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gradient-to-b from-blue-400 to-indigo-400 dark:from-gray-500 dark:to-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-gray-400 dark:to-gray-500 rounded-full animate-bounce mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes orbFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.05);
          }
        }
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
