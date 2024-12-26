import { useState, useEffect } from "react";
import { Mail, FolderGit2, Code2 } from "lucide-react";
import {
  aboutData,
  programming_lang,
  services,
  stats,
} from "../constants/index.js";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div
        className={`max-w-6xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-light">
            <span className="text-gray-500 dark:text-gray-400">about</span> me
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
            Get to know more about me and what I do
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-6 sm:space-y-8">
            {/* Profile Info */}
            <div className="space-y-4">
              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-4 sm:p-6 rounded-xl">
                <div className="space-y-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    Age
                  </p>
                  <p className="font-medium text-sm sm:text-base">
                    {aboutData.age} Years Old
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    Current Work
                  </p>
                  <p className="font-medium text-sm sm:text-base">
                    {aboutData.work}
                  </p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    Freelancer Experience
                  </p>
                  <p className="font-medium text-sm sm:text-base">
                    {aboutData.exp_freelance} years as a freelancer
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Quote */}
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-300 border-l-4 border-cyan-500 pl-4 py-2">
              {aboutData.quote}
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                  Get in Touch
                </button>
              </a>
              <a href="#projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-cyan-600 dark:border-cyan-500 text-cyan-600 dark:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base">
                  <FolderGit2 size={18} className="sm:w-5 sm:h-5" />
                  View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Services */}
          <div className="space-y-6 sm:space-y-8">
            {/* Skills */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl font-semibold">
                Programming Skills
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {programming_lang.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl font-semibold">Services</h2>
              <div className="grid gap-3 sm:gap-4">
                {services.map((service) => (
                  <div
                    key={service.text}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="p-1.5 sm:p-2 text-cyan-600 dark:text-cyan-400">
                      <Code2 size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-4 sm:p-6 rounded-xl text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
