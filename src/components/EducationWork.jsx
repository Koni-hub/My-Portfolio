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

const lang = (field, language) =>
  field && typeof field === "object" ? (field[language] ?? field.en) : field;

/*
  Desktop dot positioning: Tailwind can't cleanly alternate left/right
  for dynamically-indexed items, so we inject a tiny CSS block once.

  .tl-card-right .tl-dot  →  dot on left edge of card, touches centre spine
  .tl-card-left  .tl-dot  →  dot on right edge of card, touches centre spine
*/
const SPINE_STYLES = `
  @media (min-width: 768px) {
    .tl-card-right .tl-dot {
      left: -2.125rem;
      right: auto;
    }
    .tl-card-left .tl-dot {
      right: -2.125rem;
      left: auto;
    }
  }
`;

/* =======================
   TimelineContent
======================= */
const TimelineContent = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, t } = useLanguage();

  const achievements = lang(item.achievements, language);
  const technicalDetails = lang(item.technicalDetails, language);

  return (
    <div className="space-y-3">
      {/* Description — always visible */}
      <p
        className="text-xs sm:text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {lang(item.description, language)}
      </p>

      {/*
        Expandable section.
        Uses CSS grid-template-rows trick so we never need to hard-code a
        max-height cap that clips tall content.
      */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          opacity: isExpanded ? 1 : 0,
          transition: "grid-template-rows 0.35s ease, opacity 0.25s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="space-y-4 pt-2">
            {achievements?.length > 0 && (
              <div className="space-y-1.5">
                <h4
                  className="text-xs sm:text-sm font-medium flex items-center gap-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <Award
                    size={12}
                    style={{ color: typeColor(item.type), flexShrink: 0 }}
                  />
                  {t("timeline.achievements")}
                </h4>
                <ul
                  className="space-y-1 ml-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {achievements.map((a, i) => (
                    <li
                      key={i}
                      className="list-disc text-xs sm:text-sm leading-relaxed"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {technicalDetails?.length > 0 && (
              <div className="space-y-1.5">
                <h4
                  className="text-xs sm:text-sm font-medium flex items-center gap-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <Code
                    size={12}
                    style={{ color: typeColor(item.type), flexShrink: 0 }}
                  />
                  {t("timeline.technical")}
                </h4>
                <ul
                  className="space-y-1 ml-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {technicalDetails.map((d, i) => (
                    <li
                      key={i}
                      className="list-disc text-xs sm:text-sm leading-relaxed"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.relevantSkills?.length > 0 && (
              <div className="space-y-1.5">
                <h4
                  className="text-xs sm:text-sm font-medium flex items-center gap-1.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <UserCheck
                    size={12}
                    style={{ color: typeColor(item.type), flexShrink: 0 }}
                  />
                  {t("timeline.skills")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.relevantSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full"
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
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded((p) => !p)}
        className="flex items-center gap-1 text-xs hover:underline transition-colors duration-200"
        style={{ color: typeColor(item.type) }}
      >
        {isExpanded ? (
          <>
            {language === "zh" ? "收起" : "View Less"}
            <ChevronUp size={12} />
          </>
        ) : (
          <>
            {language === "zh" ? "展开" : "View More"}
            <ChevronDown size={12} />
          </>
        )}
      </button>
    </div>
  );
};

/* =======================
   EducationWork (main)
======================= */
const EducationWork = () => {
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const { language, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 900,
      offset: 80,
      once: true,
      easing: "ease-out-cubic",
    });

    // Inject dot-positioning styles once into <head>
    if (!document.getElementById("tl-spine-styles")) {
      const style = document.createElement("style");
      style.id = "tl-spine-styles";
      style.textContent = SPINE_STYLES;
      document.head.appendChild(style);
    }
  }, []);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  if (!mounted) return null;

  const filteredData = timelineData.filter((item) =>
    filter === "all" ? true : item.type === filter,
  );
  const visibleData = filteredData.slice(0, visibleCount);
  const hasMore = visibleCount < filteredData.length;

  /* Filter tab appearance */
  const filterBtnStyle = (key) => {
    const isActive = filter === key;
    if (!isActive)
      return {
        background: "var(--color-filter-btn-bg)",
        color: "var(--color-text-muted)",
      };
    if (key === "all")
      return {
        background: "var(--color-filter-btn-hover, rgba(120,120,120,0.15))",
        color: "var(--color-text-primary)",
      };
    return { background: typeBg(key), color: typeColor(key) };
  };

  const FILTERS = [
    { key: "all", label: language === "zh" ? "全部" : "All", icon: null },
    { key: "work", label: t("timeline.work"), icon: <Briefcase size={13} /> },
    {
      key: "education",
      label: t("timeline.education"),
      icon: <GraduationCap size={13} />,
    },
  ];

  return (
    <section
      id="workeducation"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300"
      style={{
        background: "var(--color-bg-section)",
        color: "var(--color-text-primary)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("timeline.title")}
          </h2>

          <p
            className="text-xs sm:text-sm lg:text-base font-light max-w-xl mx-auto mb-7 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {language === "zh"
              ? "探索我的职业旅程和教育背景，展示我的技能、成就和经验。"
              : "Explore my professional journey and educational background, showcasing my skills, achievements and experiences."}
          </p>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap justify-center gap-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {FILTERS.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 transition-all duration-300 text-xs sm:text-sm"
                style={filterBtnStyle(key)}
              >
                {icon}
                <span>{label}</span>
                <span className="opacity-50">
                  (
                  {key === "all"
                    ? timelineData.length
                    : timelineData.filter((i) => i.type === key).length}
                  )
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Timeline ──
          Spine strategy:
            • Two separate spine <div>s: one for mobile (left: 9px),
              one for desktop (left: 50%, hidden on mobile via `hidden md:block`).
              This avoids specificity conflicts when overriding with Tailwind.

          Card strategy:
            • Mobile  (<md): full-width, indented right of left spine via `pl-8`.
            • Desktop (≥md): half-width cards sitting on alternate sides of the
              centre spine. Even index → right side; odd index → left side.

          Dot strategy:
            • Mobile: `left-0` puts the 18 px dot centred on the 9 px spine.
            • Desktop: SPINE_STYLES CSS shifts the dot using `.tl-card-right/.tl-card-left`.
        ── */}
        <div className="relative">
          {/* Mobile spine */}
          <div
            aria-hidden="true"
            className="md:hidden absolute top-0 bottom-0 w-px pointer-events-none"
            style={{
              left: "9px",
              background:
                "linear-gradient(to bottom, var(--color-timeline-work-border), var(--color-timeline-education-border))",
            }}
          />

          {/* Desktop spine */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 bottom-0 w-px pointer-events-none"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, var(--color-timeline-work-border), var(--color-timeline-education-border))",
            }}
          />

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {visibleData.map((item, index) => {
              const side = index % 2 === 0 ? "right" : "left"; // desktop side

              return (
                <div
                  key={index}
                  data-aos={side === "right" ? "fade-left" : "fade-right"}
                  data-aos-duration="800"
                  data-aos-delay={Math.min(index * 80, 400)}
                  className={[
                    "relative",
                    // Mobile: indent to clear the left spine
                    "pl-8 sm:pl-10",
                    // Desktop: half-width on the correct side
                    "md:pl-0",
                    "md:w-[calc(50%-2rem)]",
                    side === "right"
                      ? "md:ml-[calc(50%+2rem)] tl-card-right" // right of centre spine
                      : "md:ml-0 tl-card-left", // left of centre spine
                  ].join(" ")}
                >
                  {/*
                    Dot
                    • Mobile:  left:0, size 18 px → visual centre at 9 px = spine position ✓
                    • Desktop: SPINE_STYLES repositions via .tl-card-right/.tl-card-left
                  */}
                  <div
                    className="tl-dot absolute top-5 left-0 z-10 rounded-full border-[3px]"
                    style={{
                      width: "18px",
                      height: "18px",
                      background: "var(--color-bg-section)",
                      borderColor: typeBorder(item.type),
                    }}
                  />

                  {/* Card */}
                  <div
                    className="rounded-xl shadow-md p-4 sm:p-5 transition-colors duration-300"
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
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={item.logo}
                        alt={lang(item.organization, language)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          {item.type === "education" ? (
                            <GraduationCap
                              size={12}
                              style={{
                                color: "var(--color-timeline-education)",
                                flexShrink: 0,
                              }}
                            />
                          ) : (
                            <Briefcase
                              size={12}
                              style={{
                                color: "var(--color-timeline-work)",
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <span
                            className="text-[10px] sm:text-xs font-medium"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {item.period}
                          </span>
                        </div>
                        <h3
                          className="text-sm sm:text-base lg:text-lg font-semibold leading-snug"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {lang(item.title, language)}
                        </h3>
                        <div
                          className="text-[11px] sm:text-xs font-medium mt-0.5"
                          style={{ color: typeColor(item.type) }}
                        >
                          {lang(item.position, language)}
                        </div>
                        <div
                          className="text-[10px] sm:text-xs mt-0.5"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {lang(item.organization, language)}
                        </div>
                      </div>
                    </div>

                    <TimelineContent item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── View More ── */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm transition-colors duration-300"
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
              {language === "zh" ? "查看更多" : "View More"}
              <ChevronDown size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationWork;
