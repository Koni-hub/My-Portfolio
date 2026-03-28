import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import AboutMe from "../components/AboutMe.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import EducationWork from "../components/EducationWork.jsx";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg-page)" }}
    >
      <div className="relative z-10">
        <Navbar />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce animate-infinite animate-duration-500 ${
            showScrollButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          style={{ backgroundColor: "var(--color-bg-card)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              "var(--color-timeline-card-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-bg-card)";
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} style={{ color: "var(--color-text-accent)" }} />
        </button>

        <Hero />
        <EducationWork />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
