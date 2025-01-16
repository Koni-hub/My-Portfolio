// -----------------
// Hero Data
import profile from "../assets/profile/me.jpg";
import profile_shades from "../assets/profile/me-shades.png";

export const heroData = {
  title: "Full Stack Developer",
  image: profile,
  image_shades: profile_shades,
  fullName: "Argie Delgado",
  location: "PH Marikina",
  linkedin: "https://www.linkedin.com/in/argie-delgado-889935334/",
  github: "https://github.com/Koni-hub",
  email: "delgadoargie04z@gmail.com",
};

// -----------------
// About Data
export const aboutData = {
  name: "Argie",
  nickname: "Gie",
  experience: 3,
  exp_freelance: "1+",
  work: "Full Stack Developer",
  age: "18",
  quote:
    "Code with passions, debug with patience, and celebrate every successful build",
};

// Programming languages with brief descriptions
export const programming_lang = [
  [
    "Java",
    "A versatile, object-oriented language for building robust applications",
  ],
  ["C++", "A powerful language for high-performance and system programming"],
  [
    "Node.js",
    "A runtime environment for executing JavaScript on the server side",
  ],
  ["PHP", "A server-side scripting language designed for web development"],
  [
    "C#",
    "A modern, object-oriented language developed by Microsoft for the .NET platform",
  ],
  [
    "JavaScript",
    "A dynamic language for creating interactive client-side web applications",
  ],
];

export const services = [
  { text: "Mobile/App Development" },
  { text: "Game Development" },
];

export const stats = [
  { label: "Entry Level", value: "Junior" },
  { label: "Projects Completed", value: "21+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Countries Reached", value: "2+" },
];

export const initialTechResources = [
  "HTML",
  "The standard markup language for web pages",
  "CSS",
  "The styling language that describes the presentation of a document",
  "Tailwind CSS",
  "A utility-first CSS framework",
];

export const additionalTechResources = [
  "Bootstrap",
  "A popular CSS framework for building responsive websites",
  "Spring Boot",
  "A Java-based framework for creating stand-alone applications",
  "React",
  "A JavaScript library for building user interfaces",
  "Firebase",
  "A platform for web and mobile app development",
  "MySQL",
  "An open-source relational database management system",
  "SQlite",
  "A lightweight, serverless database engine",
  "Docker",
  "A platform for developing and deploying applications in containers",
  "MongoDB",
  "A NoSQL database for modern applications",
  "Vue.js",
  "A progressive JavaScript framework for building UIs",
  "Express.js",
  "A minimal and flexible Node.js web application framework",
  "Git",
  "A distributed version control system",
  "GitHub",
  "A platform for hosting and collaborating on Git repositories",
  "Laravel",
  "A PHP framework for web application development",
];

// -----------------
// Timeline Data
import fortuneHighSchool from "../assets/education/fortune-high-school.jpg";
import stiCollegeMarikina from "../assets/education/sti-college-marikina.png";
// import freelancer_logo from "../assets/education/freelancer.jpg";
import nbi_logo from "../assets/education/nbi.jpg";
import tesda_region_logo from "../assets/project-logo/tesda-reg-III.png";
import gym_system_logo from "../assets/project-logo/gym-system.png";
import shermelle_logo from "../assets/project-logo/sharlogs.png";
import human_information_logo from "../assets/project-logo/human-info-system.jpg";

export const timelineData = [
  // Document Controller System
  {
    type: "work",
    period: "July 2024 - December 2024",
    title: "Document Controller System",
    organization: "TESDA Region 3",
    description:
      "Developed a document controller system to streamline TESDA Region 3's document processing workflow",
    logo: tesda_region_logo,
    achievements: [
      "Developed and implemented a document tracking system with role-based access control, improving document processing workflow efficiency.",
      "Created an audit logging system to track user actions and maintain document history.",
      "Developed dashboard analytics for monitoring document status (completed, pending, rejected).",
      "Built user-friendly interfaces for document creation, updating, and status management.",
    ],
    technicalDetails: [
      "Frontend: React.js with custom components for document management interface.",
      "Backend: Node.js and Express.js for RESTful API Development.",
      "Database: MySQL for document and audit log storage",
    ],
    relevantSkills: [
      "React.js",
      "Node.js",
      "MySQL",
      "API Development",
      "User Authentication",
      "Role-Based Access Control",
      "Dashboard Analytics",
    ],
  },

  // Human Information System
  {
    type: "work",
    period: "August 2024 - November 2024",
    title: "Human Information System",
    organization: "HR Management Solutions",
    description:
      "Developed HR Management Solutions, a human information system designed to enhance efficiency, accuracy, and automation across various human resource processes",
    logo: human_information_logo,
    achievements: [
      "Implemented dynamic personnel tracking system with unique identifier generation.",
      "Built multi-role access system supporting Admin, Principal, and Personnel user types.",
      "Implemented automated PDF generation for Personnel Data Form (PDF) and Personal Data Sheet (PDS).",
      "Built secure employee data management system.",
    ],
    technicalDetails: [
      "Frontend: Tailwind CSS for responsive design optimized for mobile users.",
      "Database: MySQL with optimized queries.",
      "Backend: Laravel PHP framework for robust system architecture.",
      "Database: MySQL for efficient personnel data management.",
    ],
    relevantSkills: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "API Development",
      "PDF Generation",
      "Multi-Role Access",
    ],
  },

  // Gym Management System
  {
    type: "work",
    period: "September 2024 - December 2024",
    title: "Gym Management System",
    organization: "JMNID Gym",
    description:
      "Developed comprehensive gym management system handling membership and workout tracking for JMNID Gym.",
    logo: gym_system_logo,
    achievements: [
      "Developed a multi-role access system enabling distinct functionalities for Admin and User roles.",
      "Implemented a system to efficiently track work tasks and meal plans.",
      "Designed and implemented a schedule planning system to organize tasks and activities efficiently.",
    ],
    technicalDetails: [
      "Full Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
      "Styling: Tailwind CSS for responsive design",
    ],
    relevantSkills: [
      "MERN Stack",
      "Tailwind CSS",
      "UX/UI Design",
      "User Access Management",
    ],
  },

  // Apartment Management System
  {
    type: "work",
    period: "August 2024 - September 2024",
    title: "Apartment Management System",
    organization: "Shermelle Properties",
    description:
      "Developed an Apartment Management System for Shermelle Properties to efficiently handle apartment operations and management tasks.",
    logo: shermelle_logo,
    achievements: [
      "Developed an intuitive and responsive user interface using Tailwind CSS, enabling seamless navigation and interaction for users.",
      "Built a secure and scalable backend with PHP and MySQL, ensuring reliable storage and efficient retrieval of property and tenant data.",
    ],
    technicalDetails: [
      "Frontend: Tailwind CSS for responsive, mobile-friendly design.",
      "Backend: PHP for server-side logic.",
      "Database: MySQL for data management.",
    ],
    relevantSkills: [
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Responsive Design",
      "Database Management",
    ],
  },
  // Work Immersion
  {
    type: "work",
    period: "February 2024 - June 2024",
    title: "Work Immersion - Data Encoder",
    organization: "NBI Riverbanks Satellite Office",
    description:
      "Handled data encoding and management at the NBI Riverbanks Satellite Office in Marikina City",
    logo: nbi_logo,
    achievements: [
      "Processed and encoded over 500 applicant records with high accuracy.",
      "Managed biometric data collection and verification processes.",
      "Assisted applicants through clearance application procedures.",
      "Maintained strict data privacy and confidentiality standards.",
    ],
    technicalDetails: [
      "Digitized case files and records, converting physical documents into digital formats for easier access and management.",
      "Implemented data validation processes to ensure data accuracy and consistency by checking for errors.",
    ],
    relevantSkills: [
      "Data Entry",
      "Database Management",
      "Data Privacy",
      "Office Administration",
      "Data Validation",
      "Document Digitization",
    ],
  },
  // Education - Current
  {
    type: "education",
    period: "August 2024 - Present",
    title: "Bachelor of Science in Computer Science",
    organization: "STI College - Marikina Campus",
    logo: stiCollegeMarikina,
    achievements: [
      "Active in coding competitions, participating regularly to sharpen problem-solving and programming skills.",
      "Participated in open-source tech project teams, contributing to collaborative development and innovation.",
      "Focused on developing practical programming skills through hands-on projects and real-world applications.",
    ],
    technicalDetails: [
      "Developed mobile apps, focusing on functionality and performance.",
      "Followed agile methodologies and Scrum practices for efficient project management and collaboration.",
      "Collaborated on team-based development projects to achieve shared goals.",
    ],
    relevantSkills: [
      "Mobile Development",
      "Agile Methodology",
      "Team Collaboration",
      "Problem Solving",
      "Software Development Life Cycle (SDLC)",
      "Version Control (Git)",
      "Cross-Platform Development",
      "UI/UX Design",
    ],
  },

  // Previous Education
  {
    type: "education",
    period: "November 2022 - July 2024",
    title: "IT in Mobile App and Web Development",
    organization: "STI College - Marikina Campus",
    logo: stiCollegeMarikina,
    achievements: [
      "Learned full-stack development, gaining skills in both front-end and back-end to build complete web applications.",
      "Led group coding projects, coordinating tasks and ensuring effective collaboration to achieve project goals.",
      "Built responsive web applications, ensuring they are optimized for various devices and screen sizes.",
    ],
    technicalDetails: [
      "Worked on web development projects, building dynamic and responsive websites.",
      "Engaged in system development, designing and building software solutions to meet specific user needs.",
      "Worked on frontend and backend integration, ensuring seamless communication between user interfaces and server-side functionality.",
    ],
    relevantSkills: [
      "Full-Stack Web Development",
      "Mobile Development",
      "Database Design and Management",
      "Project Management",
      "Team Collaboration and Leadership",
      "Frontend and Backend Integration",
      "Cross-Platform Development",
    ],
  },

  {
    type: "education",
    period: "January 2017 - June 2022",
    title: "High School Diploma",
    organization: "Fortune High School",
    logo: fortuneHighSchool,
    achievements: [
      "Participated in tech clubs, engaging in activities, discussions, and projects to enhance technical knowledge and skills.",
      "Maintained good academic standing by consistently achieving high grades and meeting academic requirements.",
      "Developed foundation skills by mastering key concepts and building a strong base for advanced learning.",
    ],
    technicalDetails: [
      "Mastered basic programming concepts, including variables, control structures, data types, and functions.",
      "Possess strong computer literacy, including proficiency in software applications, troubleshooting, and understanding of computer systems.",
      "Strong problem-solving skills, with the ability to analyze issues and develop effective solutions efficiently.",
    ],
    relevantSkills: [
      "Basic Programming",
      "Computer Skills",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

// -----------------
// Projects Data
import onlineOrderingSystemImg from "../assets/projects/online-ordering-system.png";
import documentControllerSystemImg from "../assets/projects/online-document-controller-system.png";
import apartmentManagementSystemImg from "../assets/projects/apartment-management-system.png";
import fitnessGymSystemImg from "../assets/projects/online-fitness-system.png";
import humanInformationSystemImg from "../assets/projects/online-human-information-system.png";
import bookManagementSystemImg from "../assets/projects/online-book-management-system.png";
import bookSummaryImg from "../assets/projects/static-book-summary.png";
import nexProxyImg from "../assets/projects/static-nex-proxy.png";
import cakeStoreImg from "../assets/projects/static-cake-store.png";

export const projects = [
  {
    title: "Online Ordering System",
    description:
      "A system for managing orders and sales for businesses during the G12 exposition event at STI College Marikina.",
    technologies: "MySQL, CSS, NodeJS, ReactJS",
    imageUrl: onlineOrderingSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Document Controller System",
    description:
      "A system to organize, track, and manage documents, ensuring easy access and updates.",
    technologies: "MySQL, NodeJS, ReactJS",
    imageUrl: documentControllerSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Apartment Management System",
    description:
      "A system designed to organize, track, and manage payments, allowing tenants to rent rooms and receive updates seamlessly.",
    technologies: "PHP, PhpMyAdmin, JavaScript",
    imageUrl: apartmentManagementSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Fitness Gym System",
    description:
      "A system for managing workout plans, meal schedules, and member progress at fitness gyms.",
    technologies: "MongoDB, NodeJS, ReactJS",
    imageUrl: fitnessGymSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Human Information System",
    description:
      "A system designed to manage and organize personal information efficiently and securely.",
    technologies: "Laravel, Vue JS, PHP",
    imageUrl: humanInformationSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Book Management System",
    description:
      "A system for managing book inventories, borrowing, and returning books in libraries or bookstores.",
    technologies: "Java, Firebase",
    imageUrl: bookManagementSystemImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Book Summary",
    description:
      "A system providing summaries of popular books to help users decide what to read next.",
    technologies: "HTML, Tailwind, JS",
    imageUrl: bookSummaryImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Nex Proxy",
    description:
      "A proxy service offering high-performance solutions for secure, fast internet access.",
    technologies: "HTML, CSS, JS",
    imageUrl: nexProxyImg,
    links: {
      source: "#",
      website: "#",
    },
  },
  {
    title: "Cake Store",
    description:
      "A system for managing cake orders, inventory, and delivery in bakeries.",
    technologies: "HTML, Bootstrap, JS",
    imageUrl: cakeStoreImg,
    links: {
      source: "#",
      website: "#",
    },
  },
];

// -----------------
// Contact Data
export const contactInfo = {
  email: "delgadoargie04z@gmail.com",
  location: "Metro Manila, Philippines",
};
