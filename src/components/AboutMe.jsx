import { User } from "lucide-react";
import { useState, useEffect } from "react";
import { aboutData } from "../constants/index.js";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 min-h-screen flex items-center justify-center text-white"
    >
      <div
        className={`max-w-6xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <h2 className="text-2xl font-light text-center mb-16">
          <span className="text-gray-400">about</span> me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img
                src={aboutData.image}
                alt="Profile"
                className="w-full aspect-square object-cover rounded-lg transition-all duration-500"
              />
              <div className="absolute inset-0 group-hover:bg-transparent transition-all duration-500 rounded-lg" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h3 className="text-3xl font-light">
                Hi, I&apos;m{" "}
                <span className="text-cyan-400 font-normal">
                  {aboutData.name}
                </span>
                <span className="text-gray-400"> ({aboutData.nickname})</span>
              </h3>

              <p className="text-lg text-gray-400 leading-relaxed">
                With {aboutData.experience} years of development experience, I
                specialize in creating clean, efficient, and scalable solutions.
              </p>
            </div>

            {/* Quote */}
            <p className="text-xl font-light italic text-gray-300">
              &quot;{aboutData.quote}&quot;
            </p>

            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-full">
                  <User size={20} className="text-cyan-400" />
                </div>
                <h4 className="text-lg font-medium">
                  {aboutData.testimonial.author}
                </h4>
              </div>
              <blockquote className="text-gray-400 italic">
                &quot;{aboutData.testimonial.text}&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
