import { useState, useEffect } from "react";
import { Mail, FolderGit2, ChevronRight, Code2 } from "lucide-react";
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
      className="py-24 px-6 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div
        className={`max-w-6xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light">
            <span className="text-gray-500 dark:text-gray-400">about</span> me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Get to know more about me and what I do
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            {/* Profile Info */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Hi, I&apos;m{" "}
                <span className="text-cyan-600 dark:text-cyan-400">
                  {aboutData.name} ({aboutData.nickname})
                </span>
              </h1>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-6 rounded-xl">
                <div className="space-y-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Age
                  </p>
                  <p className="font-medium">{aboutData.age} Years Old</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Current Work
                  </p>
                  <p className="font-medium">{aboutData.work}</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Freelancer Experience
                  </p>
                  <p className="font-medium">
                    {aboutData.exp_freelance} years as a freelancer
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              &quot;{aboutData.quote}&quot;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="flex items-center gap-2 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-6 py-3 rounded-xl transition-colors">
                  <Mail size={20} />
                  Get in Touch
                </button>
              </a>
              <a href="#projects">
                <button className="flex items-center gap-2 border border-cyan-600 dark:border-cyan-500 text-cyan-600 dark:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 px-6 py-3 rounded-xl transition-colors">
                  <FolderGit2 size={20} />
                  View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Services */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-6 rounded-xl space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ChevronRight
                  size={20}
                  className="text-cyan-600 dark:text-cyan-400"
                />
                Programming Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {programming_lang.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-6 rounded-xl space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ChevronRight
                  size={20}
                  className="text-cyan-600 dark:text-cyan-400"
                />
                Services
              </h2>
              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.text}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="p-2 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                      <Code2 />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none p-6 rounded-xl text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
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
