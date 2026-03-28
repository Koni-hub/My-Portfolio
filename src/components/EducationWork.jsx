/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { timelineData } from "../constants/index.js";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

/* =======================
   HELPERS
======================= */
const typeColor = (type) =>
  type === "education"
    ? "var(--color-timeline-education)"
    : "var(--color-timeline-work)";

const typeBg = (type) =>
  type === "education"
    ? "var(--color-timeline-education-bg)"
    : "var(--color-timeline-work-bg)";

const typeBorder = (type) =>
  type === "education"
    ? "var(--color-timeline-education-border)"
    : "var(--color-timeline-work-border)";

// Resolves { en, zh } bilingual objects or returns plain strings as-is
const lang = (field, language) =>
  field && typeof field === "object" ? (field[language] ?? field.en) : field;

/* =======================
   SUB-COMPONENT: TimelineContent
======================= */
const TimelineContent = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();

  // Resolve bilingual arrays or plain string arrays
  const achievements = lang(item.achievements, language);
  const technicalDetails = lang(item.technicalDetails, language);

  return (
    <div className="space-y-3">
      {/* Short description — always visible */}
      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
        {lang(item.description, language)}
      </p>

      {/* =======================
          EXPANDABLE SECTION
      ======================= */}
      <div
        className={`space-y-4 transition-all duration-300 ${
          isExpanded
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Achievements */}
        {achievements?.length > 0 && (
          <div className="space-y-2">
            <h4
              className="text-sm sm:text-base font-medium flex items-center gap-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Award
                size={14}
                className="sm:w-4 sm:h-4"
                style={{ color: typeColor(item.type) }}
              />
              {t("timeline.achievements")}
            </h4>
            <ul
              className="space-y-1 ml-4 sm:ml-5"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {achievements.map((achievement, i) => (
                <li key={i} className="list-disc text-xs sm:text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        {technicalDetails?.length > 0 && (
          <div className="space-y-2">
            <h4
              className="text-sm sm:text-base font-medium flex items-center gap-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              <Code
                size={14}
                className="sm:w-4 sm:h-4"
                style={{ color: typeColor(item.type) }}
              />
              {t("timeline.technical")}
            </h4>
            <ul
              className="space-y-1 ml-4 sm:ml-5"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {technicalDetails.map((detail, i) => (
                <li key={i} className="list-disc text-xs sm:text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Relevant Skills */}
        {item.relevantSkills?.length > 0 && (
          <div className="space-y-2">
            <h4
              className="text-sm sm:text-base font-medium flex items-center gap-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              <UserCheck
                size={14}
                className="sm:w-4 sm:h-4"
                style={{ color: typeColor(item.type) }}
              />
              {t("timeline.skills")}
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {item.relevantSkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full"
                  style={{
                    background: typeBg(item.type),
                    color: typeColor(item.type),
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Expand / collapse toggle */}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center gap-1 text-xs hover:underline mt-2 transition-transform duration-300"
        style={{ color: typeColor(item.type) }}
      >
        {isExpanded ? (
          <>
            {language === "zh" ? "收起" : "View Less"}{" "}
            <ChevronUp className="w-4 h-4 animate-bounce" size={14} />
          </>
        ) : (
          <>
            {language === "zh" ? "展开" : "View More"}{" "}
            <ChevronDown className="w-4 h-4 animate-bounce" size={14} />
          </>
        )}
      </button>
    </div>
  );
};

/* =======================
   MAIN COMPONENT: EducationWork
======================= */
const EducationWork = () => {
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(3);
    setShowMoreButton(true);
  }, [filter]);

  if (!mounted) return null;

  /* =======================
     HELPERS
  ======================= */
  const TimelineIcon = ({ type }) =>
    type === "education" ? (
      <GraduationCap
        size={14}
        className="sm:w-4 sm:h-4"
        style={{ color: "var(--color-timeline-education)" }}
      />
    ) : (
      <Briefcase
        size={14}
        className="sm:w-4 sm:h-4"
        style={{ color: "var(--color-timeline-work)" }}
      />
    );

  const filteredData = timelineData.filter((item) =>
    filter === "all" ? true : item.type === filter,
  );
  const visibleData = filteredData.slice(0, visibleCount);

  const handleViewMore = () => {
    const newCount = visibleCount + 3;
    setVisibleCount(newCount);
    if (newCount >= filteredData.length) setShowMoreButton(false);
  };

  const filterBtnStyle = (type) => {
    const isActive = filter === type;
    return {
      background: isActive ? typeBg(type) : "var(--color-filter-btn-bg)",
      color: isActive ? typeColor(type) : "var(--color-text-muted)",
    };
  };

  return (
    <section
      id="workeducation"
      className="py-24 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen transition-colors duration-300"
      style={{
        background: "var(--color-bg-section)",
        color: "var(--color-text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* =======================
            SECTION HEADER + FILTER TABS
        ======================= */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-xl sm:text-2xl font-light text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("timeline.title")}
          </h2>

          <p
            className="text-sm sm:text-base font-light text-center mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {language === "zh"
              ? "探索我的职业旅程和教育背景，展示我的技能、成就和经验。"
              : "Explore my professional journey and educational background, showcasing my skills, achievements and experiences."}
          </p>

          {/* Filter tab buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-2 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Work filter */}
            <button
              onClick={() => setFilter("work")}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base"
              style={filterBtnStyle("work")}
            >
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span>{t("timeline.work")}</span>
              <span className="text-xs sm:text-sm">
                ({timelineData.filter((i) => i.type === "work").length})
              </span>
            </button>

            {/* Education filter */}
            <button
              onClick={() => setFilter("education")}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base"
              style={filterBtnStyle("education")}
            >
              <GraduationCap size={14} className="sm:w-4 sm:h-4" />
              <span>{t("timeline.education")}</span>
              <span className="text-xs sm:text-sm">
                ({timelineData.filter((i) => i.type === "education").length})
              </span>
            </button>
          </div>
        </div>

        {/* =======================
            TIMELINE
        ======================= */}
        <div className="relative">
          {/* Vertical center line */}
          <div
            className="absolute left-4 md:left-1/2 h-full w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-timeline-work-border), var(--color-timeline-education-border))",
            }}
          />

          <div className="flex flex-col">
            {visibleData.map((item, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-duration="1000"
                data-aos-delay={index * 200}
                className={`relative mb-8 sm:mb-12 md:w-1/2 transition-all duration-500 ${
                  index % 2 === 0
                    ? "md:pr-8 lg:pr-12 ml-8 sm:ml-12 md:ml-auto"
                    : "md:pl-8 lg:pl-12 ml-8 sm:ml-12 md:ml-0"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-0 -left-4 sm:-left-8 md:-left-3 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-4 transform -translate-y-1/2"
                  style={{
                    background: "var(--color-bg-section)",
                    borderColor: typeBorder(item.type),
                  }}
                />

                {/* Card */}
                <div
                  className="shadow-lg rounded-lg p-4 sm:p-6 transition-all duration-300"
                  style={{ background: "var(--color-timeline-card-bg)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "var(--color-timeline-card-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "var(--color-timeline-card-bg)")
                  }
                >
                  {/* Card header: logo + meta */}
                  <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                    <img
                      src={item.logo}
                      alt={lang(item.organization, language)}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <TimelineIcon type={item.type} />
                        <span
                          className="text-xs sm:text-sm font-medium"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {lang(item.title, language)}
                      </h3>
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: typeColor(item.type) }}
                      >
                        {lang(item.position, language)}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {lang(item.organization, language)}
                      </div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <TimelineContent item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================
            VIEW MORE BUTTON
        ======================= */}
        {showMoreButton && filteredData.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300"
              style={{
                background: "var(--color-filter-btn-bg)",
                color: "var(--color-text-secondary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "var(--color-filter-btn-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "var(--color-filter-btn-bg)")
              }
            >
              {language === "zh" ? "查看更多" : "View More"}{" "}
              <ChevronDown className="w-4 h-4 animate-bounce" size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationWork;
