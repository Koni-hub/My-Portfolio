/* eslint-disable react/prop-types */
import { ChevronDown, ExternalLink, YoutubeIcon } from "lucide-react";
import { projects } from "../constants/index.js";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project, index, t, language }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  // Resolves { en, zh } objects or returns plain strings as-is
  const r = (field) =>
    field && typeof field === "object" && ("en" in field || "zh" in field)
      ? (field[language] ?? field.en)
      : field;

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
          alt={r(project.title)}
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
          {r(project.title)}
        </h3>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {r(project.description)}
        </p>

        <div>
          <p
            className="text-xs mb-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("projects.technologies")}
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
        </div>

        {project.links && (
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {project.links.source && project.links.source !== "#" && (
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
                <YoutubeIcon size={16} />
                Demo
              </a>
            )}
            {project.links.website && project.links.website !== "#" && (
              <a
                href={project.links.website}
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
                <ExternalLink size={16} />
                {t("projects.visit")}
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
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  const hasMore = displayCount < projects.length;

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

  const showingLabel =
    language === "zh"
      ? `显示 ${displayCount} / ${projects.length} 个项目`
      : `Showing ${displayCount} of ${projects.length} projects`;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-8 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-xl lg:text-2xl font-light">
            <span style={{ color: "var(--color-text-secondary)" }}>
              {t("projects.title")}
            </span>
          </h2>
          <p
            className="mt-2 text-sm lg:text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {language === "zh"
              ? "探索我最近的项目和作品"
              : "Explore some of my recent work and side projects"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {projects.slice(0, displayCount).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              t={t}
              language={language}
            />
          ))}
        </div>

        {/* Load More */}
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
              {language === "zh" ? "查看更多项目" : "View More Projects"}
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          </div>
        )}

        {/* Count */}
        <div
          className="text-center mt-4 lg:mt-6 text-xs lg:text-sm"
          style={{ color: "var(--color-text-muted)" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          {showingLabel}
        </div>
      </div>
    </section>
  );
};

export default Projects;
