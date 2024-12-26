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
    { href: "#workeducation", label: "Work & Education" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const themeOptions = [
    { value: "light", icon: <Sun size={16} />, label: "Light" },
    { value: "dark", icon: <Moon size={16} />, label: "Dark" },
    // { value: "system", icon: <Monitor size={16} />, label: "System" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-slate-900/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-cyan-500 text-2xl font-bold dark:text-white">
              My Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Theme Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-lg text-gray-600 dark:bg-gray-800/50 hover:text-gray-600 transition-colors">
                {theme === "light" && <Sun size={16} />}
                {theme === "dark" && <Moon size={16} />}
                {theme === "system" && <Monitor size={16} />}
                <span className="text-sm">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 py-2 shadow-lg text-gray-600 dark:bg-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-20">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleThemeChange(option.value)}
                    className={`w-full px-4 py-2 text-left flex items-center gap-2  text-gray-600 dark:hover:bg-gray-700/50 transition-colors ${
                      theme === option.value ? "text-cyan-400" : "text-gray-600"
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
                const nextTheme =
                  theme === "light"
                    ? "dark"
                    : theme === "dark"
                    ? "system"
                    : "light";
                handleThemeChange(nextTheme);
              }}
              className="p-2 text-gray-300 hover:text-white"
            >
              {theme === "light" && <Sun size={20} />}
              {theme === "dark" && <Moon size={20} />}
              {theme === "system" && <Monitor size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm md:hidden"
          style={{ top: "64px" }}
        >
          <div className="p-4">
            <div className="flex flex-col space-y-8 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-cyan-500 text-lg font-medium transition-colors duration-200 text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
