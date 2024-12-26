import { useState } from "react";
import { GraduationCap, Briefcase, Award, Code, UserCheck } from "lucide-react";
import { timelineData } from "../constants/index.js";

const EducationWork = () => {
  const [filter, setFilter] = useState("all");

  // eslint-disable-next-line react/prop-types
  const TimelineIcon = ({ type }) =>
    type === "education" ? (
      <GraduationCap size={16} className="text-cyan-600 dark:text-cyan-400" />
    ) : (
      <Briefcase size={16} className="text-purple-600 dark:text-purple-400" />
    );

  const filteredData = timelineData.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section
      id="workeducation"
      className="py-24 px-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Filter Tabs */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light text-center">
            <span className="text-gray-500 dark:text-gray-400">Experience</span>{" "}
            &{" "}
            <span className="text-gray-500 dark:text-gray-400">Education</span>
          </h2>
          <p className="text-md font-light text-center mb-6 text-gray-600 dark:text-gray-300">
            Explore my professional journey and educational background,
            showcasing my skills and experiences.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter("work")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                filter === "work"
                  ? "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400"
                  : "bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800/50"
              }`}
            >
              <Briefcase size={16} />
              <span>Work</span>
              <span className="text-sm">
                ({timelineData.filter((item) => item.type === "work").length})
              </span>
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                filter === "education"
                  ? "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                  : "bg-gray-100 dark:bg-gray-800/30 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800/50"
              }`}
            >
              <GraduationCap size={16} />
              <span>Education</span>
              <span className="text-sm">
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
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 ml-12 md:ml-auto"
                  : "md:pl-12 ml-12 md:ml-0"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "-left-8 md:-left-3" : "-left-8 md:-left-3"
                } w-6 h-6 bg-gray-50 dark:bg-gray-900 border-4 ${
                  item.type === "education"
                    ? "border-cyan-500"
                    : "border-purple-500"
                } rounded-full transform -translate-y-1/2`}
              />

              {/* Content card */}
              <div className="bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.logo}
                    alt={item.organization}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <TimelineIcon type={item.type} />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">
                      {item.organization}
                    </h3>
                    <div
                      className={`text-sm ${
                        item.type === "education"
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-purple-600 dark:text-purple-400"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>

                {/* Content sections for education entries */}
                {item.type === "education" && (
                  <div className="space-y-4">
                    {item.achievements && (
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Award
                            size={16}
                            className="text-cyan-600 dark:text-cyan-400"
                          />
                          Achievements
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-5">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="list-disc text-sm">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.projects && (
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Code
                            size={16}
                            className="text-cyan-600 dark:text-cyan-400"
                          />
                          Projects
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-5">
                          {item.projects.map((project, i) => (
                            <li key={i} className="list-disc text-sm">
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.relevantSkills && (
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <UserCheck
                            size={16}
                            className="text-cyan-600 dark:text-cyan-400"
                          />
                          Relevant Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relevantSkills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full"
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
