import { useState } from "react";
import { projects } from "../constants/index.js";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section id="projects" className="py-12 px-4 text-white relative">
      <h2 className="text-2xl font-light text-center mb-16">
        <span className="text-gray-400">My</span> Projects
      </h2>

      <div className="flex items-center justify-center w-full relative">
        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 text-2xl text-white bg-opacity-50 p-2 rounded-full"
        >
          &#10094;
        </button>

        <div
          className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg"
          style={{
            backgroundImage: `url(${projects[currentIndex].imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-slate-900/80 p-6 rounded-lg shadow-lg max-w-xs text-justify">
              <h2 className="text-xl font-semibold mb-4">
                {projects[currentIndex].title}
              </h2>
              <p className="text-gray-300 mb-4">
                {projects[currentIndex].description}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Technologies: {projects[currentIndex].technologies}
              </p>
              <a href="#!" className="text-blue-400 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={handleNext}
          className="absolute right-4 text-2xl text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Projects;
