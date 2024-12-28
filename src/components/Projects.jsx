/* eslint-disable react/prop-types */
import { Globe, Github, ChevronDown } from "lucide-react";
import { projects } from "../constants/index.js";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project, index }) => (
  <div
    className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl p-6 flex flex-col gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={200 + (index % 2) * 200}
  >
    {/* Project Image */}
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Project Info */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.split(", ").map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links && (
        <div className="flex gap-3 pt-2">
          {project.links.source && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              Source
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Globe size={16} />
              Website
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(4);
  const hasMore = displayCount < projects.length;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!mounted) return null;

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 4, projects.length));
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-light">
            <span className="text-gray-500 dark:text-gray-400">
              My Projects
            </span>{" "}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explore some of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.slice(0, displayCount).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button
              onClick={loadMore}
              className="group flex items-center gap-2 px-6 py-3 bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl transition-colors duration-300"
            >
              View More Projects
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          </div>
        )}

        {/* Project Count */}
        <div
          className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          Showing {displayCount} of {projects.length} projects
        </div>
      </div>
    </section>
  );
};

export default Projects;
