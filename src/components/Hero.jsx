import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useState, useEffect } from "react";
import { heroData } from "../constants";
import Resume from "../assets/resume/Argie-Delgado_Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

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

  return (
    <section
      id="home"
      className="dark:bg-gray-900 w-full min-h-screen flex items-center justify-center text-white transition-all duration-1000 ease-out pb-3"
    >
      <div className="max-w-4xl px-6 mt-28">
        <div className="space-y-8 text-center">
          {/* Profile Image */}
          <div
            className="transition-all duration-1000 transform"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="relative group inline-block">
              <img
                className="rounded-full object-cover transition-all duration-500 w-32 h-32 sm:w-40 sm:h-40 ring-2 ring-white/20"
                src={heroData.image}
                alt="Profile"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
              <img
                className="absolute inset-0 rounded-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 w-32 h-32 sm:w-40 sm:h-40 ring-2 ring-white/20"
                src={heroData.image_shades}
                alt="Profile with Glasses"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-cyan-400">
              {heroData.fullName}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 font-light">
              {heroData.title}
            </p>
            <p className="text-base sm:text-lg text-gray-400 font-light">
              📍 Marikina City, Philippines 🇵🇭
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <button
              className="shadow-lg text-gray-500 group flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open(Resume, "_blank")}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FileDown size={20} className="text-cyan-400" />
              <span>Resume</span>
            </button>

            <div
              className="flex items-center gap-6"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors hover:rotate-6 duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:rotate-6 duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${heroData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors hover:rotate-6 duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
