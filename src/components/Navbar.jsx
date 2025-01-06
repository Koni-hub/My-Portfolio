import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Get initial theme from localStorage or default to system
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#workeducation", label: "Timeline" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#newyear", label: "NY Countdown" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      // Scroll to the target element with smooth behavior
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const themeOptions = [
    { value: "light", icon: <Sun size={16} />, label: "Light" },
    { value: "dark", icon: <Moon size={16} />, label: "Dark" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${
            isScrolled
              ? "dark:bg-slate-900/80 backdrop-blur-sm shadow-lg"
              : "dark:bg-slate-900/60 backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-cyan-500 text-2xl font-bold dark:text-white">
                AD
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-600 transition-colors duration-200 text-sm font-medium"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}

              {/* Theme Switcher */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-lg text-gray-600 dark:bg-gray-800/50 hover:text-gray-600 transition-colors">
                  {theme === "light" && <Sun size={16} />}
                  {theme === "dark" && <Moon size={16} />}
                  <span className="text-sm">
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </span>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 py-2 shadow-lg bg-white text-gray-600 dark:bg-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleThemeChange(option.value)}
                      className={`w-full px-4 py-2 text-left flex items-center gap-2 text-gray-600 dark:hover:bg-gray-700/50 transition-colors ${
                        theme === option.value
                          ? "text-cyan-400"
                          : "text-gray-600"
                      }`}
                    >
                      {option.icon}
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Theme Button */}
              <button
                onClick={() => {
                  const nextTheme = theme === "light" ? "dark" : "light";
                  handleThemeChange(nextTheme);
                }}
                className="p-2 text-gray-300 hover:text-gray-300"
              >
                {theme === "light" && <Sun size={20} />}
                {theme === "dark" && <Moon size={20} />}
                {theme === "system" && <Monitor size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-gray-300 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white dark:bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-sm">
          <div className="pt-20 p-4">
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-cyan-500 text-lg font-medium transition-colors duration-200 text-center animate-fade-left"
                >
                  {link.label}
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
