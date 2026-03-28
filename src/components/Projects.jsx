/* eslint-disable react/prop-types */
import { ChevronDown, Youtube } from "lucide-react";
import { projects } from "../constants/index.js";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project, index }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  return (
    <div
      className="rounded-xl p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 transition-colors shadow-lg"
      style={{ backgroundColor: "var(--color-bg-card)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          "var(--color-timeline-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-bg-card)";
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={200 + (index % 2) * 200}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full ${
            isPortrait ? "object-contain" : "object-cover"
          }`}
          onLoad={(e) => {
            const { naturalWidth, naturalHeight } = e.target;
            setIsPortrait(naturalHeight > naturalWidth);
          }}
        />
      </div>

      <div className="space-y-3 lg:space-y-4">
        <h3
          className="text-lg lg:text-xl font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.split(", ").map((tech) => (
            <span
              key={tech}
              className="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm"
              style={{
                backgroundColor: "var(--color-filter-btn-bg)",
                color: "var(--color-text-secondary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {project.links.source && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 lg:gap-2 text-sm transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                }}
              >
                <Youtube size={16} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

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

  return (
    <section
      id="projects"
      className="py-12 lg:py-24 px-4 lg:px-6 min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-8 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-xl lg:text-2xl font-light">
            <span style={{ color: "var(--color-text-secondary)" }}>
              My Projects
            </span>
          </h2>
          <p
            className="mt-2 text-sm lg:text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Explore some of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {projects.slice(0, displayCount).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {hasMore && (
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button
              onClick={() =>
                setDisplayCount((prev) => Math.min(prev + 4, projects.length))
              }
              className="group flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl transition-colors duration-300 text-sm lg:text-base"
              style={{
                backgroundColor: "var(--color-icon-bg)",
                color: "var(--color-text-accent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-icon-bg-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-icon-bg)";
              }}
            >
              View More Projects
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          </div>
        )}

        <div
          className="text-center mt-4 lg:mt-6 text-xs lg:text-sm"
          style={{ color: "var(--color-text-muted)" }}
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
