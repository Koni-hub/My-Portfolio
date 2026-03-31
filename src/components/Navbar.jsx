import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Monitor, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("system");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const applyTheme = (newTheme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }

    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLangMenu(false);
    localStorage.setItem("language", lang);
  };

  const navLinks = [
    { href: "#home", labelKey: "nav.home" },
    { href: "#workeducation", labelKey: "nav.timeline" },
    { href: "#about", labelKey: "nav.about" },
    { href: "#projects", labelKey: "nav.projects" },
    { href: "#contact", labelKey: "nav.contact" },
    // { href: "#newyear", labelKey: "nav.newyear" },
  ];

  const themeOptions = [
    { value: "light", icon: <Sun size={16} />, label: t("theme.light") },
    { value: "dark", icon: <Moon size={16} />, label: t("theme.dark") },
  ];

  const languageOptions = [
    { value: "en", label: "EN", fullLabel: "English" },
    { value: "zh", label: "中文", fullLabel: "中文 (Chinese)" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  /* =======================
     SHARED STYLE HELPERS
  ======================= */
  const iconBtnStyle = {
    color: "var(--color-text-secondary)",
    backgroundColor: "var(--color-icon-bg)",
  };
  const onEnterAccent = (e) =>
    (e.currentTarget.style.color = "var(--color-text-accent)");
  const onLeaveSecondary = (e) =>
    (e.currentTarget.style.color = "var(--color-text-secondary)");

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled
            ? "color-mix(in srgb, var(--color-bg-page) 90%, transparent)"
            : "color-mix(in srgb, var(--color-bg-page) 70%, transparent)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(4px)",
          boxShadow: isScrolled ? "0 4px 24px 0 var(--color-orb-left)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ── */}
            <div className="flex-shrink-0">
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--color-text-accent)" }}
              >
                AD
              </span>
            </div>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={onEnterAccent}
                  onMouseLeave={onLeaveSecondary}
                >
                  {t(link.labelKey)}
                </a>
              ))}

              {/* Language Switcher */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setShowLangMenu((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-md transition-colors"
                  style={iconBtnStyle}
                  onMouseEnter={onEnterAccent}
                  onMouseLeave={onLeaveSecondary}
                >
                  <Languages size={16} />
                  <span className="text-sm font-medium">
                    {language === "en" ? "EN" : "中文"}
                  </span>
                </button>

                {showLangMenu && (
                  <div
                    className="absolute right-0 mt-2 w-44 py-2 shadow-lg rounded-lg z-50"
                    style={{ backgroundColor: "var(--color-bg-card)" }}
                  >
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleLanguageChange(option.value)}
                        className="w-full px-4 py-2 text-left flex items-center gap-2 transition-colors"
                        style={{
                          color:
                            language === option.value
                              ? "var(--color-text-accent)"
                              : "var(--color-text-secondary)",
                        }}
                        onMouseEnter={(e) => {
                          if (language !== option.value)
                            e.currentTarget.style.backgroundColor =
                              "var(--color-filter-btn-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <span className="text-sm font-semibold w-8">
                          {option.label}
                        </span>
                        <span className="text-sm">{option.fullLabel}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Switcher */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-md transition-colors"
                  style={iconBtnStyle}
                  onMouseEnter={onEnterAccent}
                  onMouseLeave={onLeaveSecondary}
                >
                  {theme === "light" && <Sun size={16} />}
                  {theme === "dark" && <Moon size={16} />}
                  {theme === "system" && <Monitor size={16} />}
                  <span className="text-sm capitalize">
                    {t(`theme.${theme}`) || theme}
                  </span>
                </button>

                <div
                  className="absolute right-0 mt-2 w-40 py-2 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  style={{ backgroundColor: "var(--color-bg-card)" }}
                >
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleThemeChange(option.value)}
                      className="w-full px-4 py-2 text-left flex items-center gap-2 transition-colors"
                      style={{
                        color:
                          theme === option.value
                            ? "var(--color-text-accent)"
                            : "var(--color-text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        if (theme !== option.value)
                          e.currentTarget.style.backgroundColor =
                            "var(--color-filter-btn-hover)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {option.icon}
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="md:hidden flex items-center gap-3">
              {/* Language toggle (cycles EN ↔ 中文) */}
              <button
                onClick={() =>
                  handleLanguageChange(language === "en" ? "zh" : "en")
                }
                className="px-2 py-1 rounded-md text-xs font-bold transition-colors"
                style={iconBtnStyle}
              >
                {language === "en" ? "中文" : "EN"}
              </button>

              {/* Theme toggle */}
              <button
                onClick={() =>
                  handleThemeChange(theme === "light" ? "dark" : "light")
                }
                className="p-2 transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={onEnterAccent}
                onMouseLeave={onLeaveSecondary}
              >
                {theme === "light" && <Sun size={20} />}
                {theme === "dark" && <Moon size={20} />}
                {theme === "system" && <Monitor size={20} />}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={onEnterAccent}
                onMouseLeave={onLeaveSecondary}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden backdrop-blur-md"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-bg-page) 95%, transparent)",
          }}
        >
          <div className="pt-20 p-4">
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium transition-colors text-center"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={onEnterAccent}
                  onMouseLeave={onLeaveSecondary}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
