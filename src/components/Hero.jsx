/* eslint-disable react/no-unknown-property */
import { Github, Linkedin, Mail, FileDown, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { heroData } from "../constants/index.js";
import { useLanguage } from "../context/LanguageContext";
import Resume from "../assets/resume/ARGIE_P._DELGADO_RESUME.pdf";

const Hero = () => {
  /* =======================
     HOOK LOGIC
  ======================= */
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const showTimer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(showTimer);
  }, []);

  if (!mounted) return null;

  /* =======================
     HELPERS
  ======================= */
  const enterClass = () =>
    `transform transition-all duration-1000 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  // Resolve bilingual field — supports { en, zh } objects or plain strings
  const lang = (field) =>
    field && typeof field === "object" ? (field[language] ?? field.en) : field;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden transition-all duration-700 flex items-center justify-center animate-[aurora_20s_ease-in-out_infinite] bg-[length:300%_300%]"
      style={{ background: "var(--color-bg-page)" }}
    >
      {/* =======================
          FLOATING GRADIENT ORBS
      ======================= */}
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl animate-[orbFloat_12s_ease-in-out_infinite]"
        style={{ background: "var(--color-orb-left)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl animate-[orbFloat_18s_ease-in-out_infinite]"
        style={{ background: "var(--color-orb-right)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto mt-10 px-4 sm:px-6 pt-28 pb-16">
        <div className="space-y-6 sm:space-y-8 text-center">
          {/* =======================
              AVATAR
          ======================= */}
          <div
            className={`relative inline-block scale-100 ${enterClass()}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group inline-block">
              {/* Glow ring behind avatar */}
              <div
                className="absolute -inset-1 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, var(--color-avatar-ring-from), var(--color-avatar-ring-to))`,
                }}
              />

              {/* Floating avatar wrapper */}
              <div className="relative animate-[float_8s_ease-in-out_infinite] rounded-full">
                <div className="relative group">
                  {/* Default profile image */}
                  <img
                    className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 shadow-2xl transition-opacity duration-700 group-hover:opacity-0"
                    src={heroData.image}
                    alt="Profile"
                  />
                  {/* Hover image (with shades) */}
                  {heroData.image_shades && (
                    <img
                      className="absolute inset-0 rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      src={heroData.image_shades}
                      alt="Profile with Glasses"
                    />
                  )}
                </div>

                {/* Online activity dot */}
                <span
                  className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2"
                  style={{
                    background: "var(--color-dot-online)",
                    borderColor: "var(--color-dot-border)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* =======================
              GREETING + NAME
          ======================= */}
          <div
            className={`space-y-3 sm:space-y-4 ${enterClass()}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-2 sm:space-y-3">
              {/* Greeting line */}
              <p
                className="text-base sm:text-lg md:text-xl font-light tracking-wide"
                style={{ color: "var(--color-text-accent)" }}
              >
                <span
                  className="inline-block animate-wave"
                  style={{ transformOrigin: "70% 70%" }}
                >
                  ദ്ദി
                </span>{" "}
                {t("hero.greeting")}
              </p>

              {/* Full name with shimmer gradient */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span
                  className="bg-clip-text text-transparent animate-[shimmer_12s_linear_infinite] bg-[length:200%_100%]"
                  style={{
                    backgroundImage: `linear-gradient(
                      to right,
                      var(--color-gradient-from),
                      var(--color-gradient-via),
                      var(--color-gradient-to)
                    )`,
                  }}
                >
                  {lang(heroData.fullName)}
                </span>
              </h1>
            </div>

            {/* Job title */}
            <p
              className="text-xl sm:text-2xl md:text-3xl font-light"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {lang(heroData.title)}
            </p>

            {/* Location */}
            <div
              className="flex items-center justify-center gap-2 text-base sm:text-lg"
              style={{ color: "var(--color-text-muted)" }}
            >
              <MapPin
                size={16}
                className="sm:w-5 sm:h-5"
                style={{ color: "var(--color-text-accent)" }}
              />
              <span>{lang(heroData.location)}</span>
            </div>
          </div>

          {/* =======================
              ACTION BUTTONS
          ======================= */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 ${enterClass()}`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Download Resume button */}
            <button
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
              style={{
                background: `linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))`,
                color: "var(--color-btn-text)",
              }}
              onClick={() => window.open(Resume, "_blank")}
            >
              {/* Hover shimmer overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, var(--color-btn-hover-from), var(--color-btn-hover-to))`,
                }}
              />
              <div className="relative flex items-center justify-center gap-2">
                <FileDown size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">
                  {language === "zh" ? "下载简历" : "Download Resume"}
                </span>
              </div>
            </button>

            {/* Social icon links */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* LinkedIn */}
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full transition-all duration-300 ease-out hover:scale-110"
                style={{
                  background: "var(--color-icon-bg)",
                  color: "var(--color-icon-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--color-icon-bg-hover)";
                  e.currentTarget.style.color = "var(--color-icon-linkedin)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-icon-bg)";
                  e.currentTarget.style.color = "var(--color-icon-text)";
                }}
              >
                <Linkedin size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>

              {/* GitHub */}
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full transition-all duration-300 ease-out hover:scale-110"
                style={{
                  background: "var(--color-icon-bg)",
                  color: "var(--color-icon-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--color-icon-bg-hover)";
                  e.currentTarget.style.color = "var(--color-icon-github)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-icon-bg)";
                  e.currentTarget.style.color = "var(--color-icon-text)";
                }}
              >
                <Github size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>

              {/* Mail */}
              <a
                href={`mailto:${heroData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full transition-all duration-300 ease-out hover:scale-110"
                style={{
                  background: "var(--color-icon-bg)",
                  color: "var(--color-icon-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--color-icon-bg-hover)";
                  e.currentTarget.style.color = "var(--color-icon-mail)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-icon-bg)";
                  e.currentTarget.style.color = "var(--color-icon-text)";
                }}
              >
                <Mail size={20} className="relative z-10 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* =======================
              SCROLL INDICATOR
          ======================= */}
          <div
            className={`pt-8 sm:pt-12 ${enterClass()}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div
              className="flex flex-col items-center space-y-2"
              style={{ color: "var(--color-scroll-text)" }}
            >
              <span className="text-xs sm:text-sm font-light">
                {language === "zh" ? "向下滚动探索" : "Scroll to explore"}
              </span>
              <div
                className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center"
                style={{ borderColor: "var(--color-scroll-text)" }}
              >
                <div
                  className="w-1 h-2 sm:h-3 rounded-full animate-bounce mt-2"
                  style={{
                    background: `linear-gradient(to bottom, var(--color-scroll-bar-from), var(--color-scroll-bar-to))`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          KEYFRAME ANIMATIONS
      ======================= */}
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
