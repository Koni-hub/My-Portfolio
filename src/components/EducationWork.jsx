import { useEffect, useState } from "react";
import { GraduationCap, Briefcase, Award, Code, UserCheck } from "lucide-react";
import { timelineData } from "../constants/index.js";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationWork = () => {
  const [filter, setFilter] = useState("all");
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

  // eslint-disable-next-line react/prop-types
  const TimelineIcon = ({ type }) =>
    type === "education" ? (
      <GraduationCap
        size={14}
        className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
      />
    ) : (
      <Briefcase
        size={14}
        className="sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400"
      />
    );

  const filteredData = timelineData.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section
      id="workeducation"
      className="py-24 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Filter Tabs */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-xl sm:text-2xl font-light text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <span className="text-gray-500 dark:text-gray-400">
              Experience & Education
            </span>
          </h2>
          <p
            className="text-sm sm:text-base font-light text-center mb-6 text-gray-600 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Explore my professional journey and educational background,
            showcasing my skills and experiences.
          </p>

          {/* Filter Buttons */}
          <div
            className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button
              onClick={() => setFilter("work")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                filter === "work"
                  ? "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400"
                  : "bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800/50"
              }`}
            >
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span>Work</span>
              <span className="text-xs sm:text-sm">
                ({timelineData.filter((item) => item.type === "work").length})
              </span>
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-sm sm:text-base ${
                filter === "education"
                  ? "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                  : "bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800/50"
              }`}
            >
              <GraduationCap size={14} className="sm:w-4 sm:h-4" />
              <span>Education</span>
              <span className="text-xs sm:text-sm">
                (
                {
                  timelineData.filter((item) => item.type === "education")
                    .length
                }
                )
              </span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-cyan-500/30" />

          {filteredData.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              className={`relative mb-8 sm:mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-8 lg:pr-12 ml-8 sm:ml-12 md:ml-auto"
                  : "md:pl-8 lg:pl-12 ml-8 sm:ml-12 md:ml-0"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? "-left-4 sm:-left-8 md:-left-3"
                    : "-left-4 sm:-left-8 md:-left-3"
                } w-4 sm:w-6 h-4 sm:h-6 bg-gray-50 dark:bg-gray-900 border-4 ${
                  item.type === "education"
                    ? "border-cyan-500"
                    : "border-purple-500"
                } rounded-full transform -translate-y-1/2`}
              />

              {/* Content card */}
              <div className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-lg p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                  <img
                    src={item.logo}
                    alt={item.organization}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <TimelineIcon type={item.type} />
                      <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.organization}
                    </h3>
                    <div
                      className={`text-xs sm:text-sm ${
                        item.type === "education"
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-purple-600 dark:text-purple-400"
                      }`}
                    >
                      {item.degree}
                    </div>
                  </div>
                </div>

                {/* Content sections for education and work entries */}
                {item.type === "education" && (
                  <div className="space-y-3 sm:space-y-4">
                    {item.achievements && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <Award
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Achievements
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4 sm:ml-5">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="list-disc text-xs sm:text-sm"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.projects && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <Code
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Projects
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4 sm:ml-5">
                          {item.projects.map((project, i) => (
                            <li
                              key={i}
                              className="list-disc text-xs sm:text-sm"
                            >
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.relevantSkills && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <UserCheck
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Relevant Skills
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {item.relevantSkills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {item.type === "work" && (
                  <div className="space-y-3 sm:space-y-4">
                    {item.achievements && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <Award
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Achievements
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4 sm:ml-5">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="list-disc text-xs sm:text-sm"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.projects && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <Code
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Projects
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4 sm:ml-5">
                          {item.projects.map((project, i) => (
                            <li
                              key={i}
                              className="list-disc text-xs sm:text-sm"
                            >
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.relevantSkills && (
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-medium flex items-center gap-2">
                          <UserCheck
                            size={14}
                            className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400"
                          />
                          Relevant Skills
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {item.relevantSkills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWork;
