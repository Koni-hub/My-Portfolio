import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecting when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Add background when scrolled
      } else {
        setIsScrolled(false); // Remove background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-6 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-slate-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">My Portfolio</div>

        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`lg:flex space-x-8 text-white ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <a href="#home" className="hover:text-cyan-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-cyan-300">
              Service
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-cyan-300">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
