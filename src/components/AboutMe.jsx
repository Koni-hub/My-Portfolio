import { useState, useEffect } from "react";
import { Mail, FolderGit2, Code2 } from "lucide-react";
import { aboutData, programming_lang, stats } from "../constants/index.js";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  // Helper: resolves { en, zh } objects, or returns plain values as-is
  const r = (field) =>
    field && typeof field === "object" && ("en" in field || "zh" in field)
      ? (field[language] ?? field.en)
      : field;

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

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Stats resolved from translation keys (matching your translations object)
  const resolvedStats = [
    { label: t("stats.level"), value: t("stats.level_value") },
    {
      label: t("stats.projects"),
      value:
        stats.find((s) => s.label?.en === "Projects Completed")?.value ?? "25",
    },
    {
      label: t("stats.clients"),
      value: stats.find((s) => s.label?.en === "Happy Clients")?.value ?? "11",
    },
    {
      label: t("stats.countries"),
      value:
        stats.find((s) => s.label?.en === "Countries Reached")?.value ?? "2",
    },
  ];

  // Services from translation keys
  const services = [
    { key: "service.web" },
    { key: "service.ar" },
    { key: "service.game" },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg-section)",
        color: "var(--color-text-primary)",
      }}
    >
      <div
        className="max-w-6xl w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-xl sm:text-2xl font-light">
            <span style={{ color: "var(--color-text-secondary)" }}>
              {t("about.title")}
            </span>
          </h2>
          <p
            className="text-sm sm:text-base mt-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {t("about.intro")}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Left Column */}
          <div
            className="space-y-6 sm:space-y-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Info Card */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 rounded-xl shadow-lg"
              style={{ backgroundColor: "var(--color-bg-card)" }}
            >
              <div className="space-y-1">
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("about.age_label")}
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {aboutData.age}
                </p>
              </div>
              <div className="space-y-1">
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("about.work_label")}
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {r(aboutData.work)}
                </p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {/* No translation key for this yet — inline fallback */}
                  {language === "zh" ? "自由职业经验" : "Freelancer Experience"}
                </p>
                <p className="font-medium text-sm sm:text-base">
                  {language === "zh"
                    ? `${aboutData.exp_freelance} 年自由职业经验`
                    : `${aboutData.exp_freelance} year${aboutData.exp_freelance !== 1 ? "s" : ""} as a freelancer`}
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote
              className="text-lg italic pl-4 py-2 border-l-4"
              style={{
                color: "var(--color-text-secondary)",
                borderColor: "var(--color-gradient-to)",
              }}
            >
              {t("about.quote")}
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => handleScroll("contact")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base"
                style={{
                  background: `linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))`,
                  color: "var(--color-btn-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(to right, var(--color-btn-hover-from), var(--color-btn-hover-to))`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))`;
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                {t("contact.send")}
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base border"
                style={{
                  borderColor: "var(--color-btn-from)",
                  color: "var(--color-btn-from)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-icon-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <FolderGit2 size={18} className="sm:w-5 sm:h-5" />
                {t("projects.title")}
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="space-y-6 sm:space-y-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {/* Programming Skills */}
            <div className="space-y-4 sm:space-y-6">
              <h2
                className="text-lg sm:text-xl font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {t("about.skills")}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {programming_lang.map((skill) => (
                  <span
                    key={skill[0]}
                    title={r(skill[1])}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm cursor-default transition-colors"
                    style={{
                      backgroundColor: "var(--color-icon-bg)",
                      color: "var(--color-text-accent)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-icon-bg-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-icon-bg)";
                    }}
                  >
                    {skill[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h2
                className="text-lg sm:text-xl font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {t("about.services")}
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {services.map((service) => (
                  <div
                    key={service.key}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div
                      className="p-1.5 sm:p-2"
                      style={{ color: "var(--color-text-accent)" }}
                    >
                      <Code2 size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span
                      className="text-sm sm:text-base"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {t(service.key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          {resolvedStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-6 rounded-xl text-center transition-colors shadow-lg"
              style={{ backgroundColor: "var(--color-bg-card)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-timeline-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-card)";
              }}
            >
              <div
                className="text-xl sm:text-2xl font-bold mb-1"
                style={{ color: "var(--color-text-accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
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
