import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import AboutMe from "../components/AboutMe.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import EducationWork from "../components/EducationWork.jsx";
import NewYearCountdown from "../components/NewYearCountdown.jsx";

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
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:hover:bg-gray-700 transition-all duration-300 z-50 animate-bounce animate-infinite animate-duration-500 ${
            showScrollButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className=" text-gray-600 dark:text-cyan-600" />
        </button>

        {/* Hero Section */}
        <Hero />

        {/* Education & Work Section */}
        <EducationWork />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* New Year Count Down */}
        <NewYearCountdown />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
