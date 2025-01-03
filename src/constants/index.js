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

export const programming_lang = [
  "Java",
  "C++",
  "Node.js",
  "PHP",
  "C#",
  "JavaScript",
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
    period: "July 2024 - Dec 2024",
    title: "Document Controller System",
    organization: "TESDA Region 3",
    description:
      "Developed a document controller system to streamline TESDA Region 3's document processing workflow",
    logo: tesda_region_logo,
    achievements: [
      "Developed and implemented a document tracking system with role-based access control, improving document processing workflow efficiency.",
      "Create an audit logging system to track user actions and maintain document history.",
      "Developed dashboard analytics for monitoring documents status (completed, pending, rejected).",
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
      "Implemented dynamic personnel tracking system with unique identifier generation",
      "Built multi-role access system supporting Admin, Principal, and Personnel user types.",
      "Implemented automated PDF generation for Personnel Data Form (PDF) and Personal Data Sheet (PDS).",
      "Built secure employee data management system",
    ],
    technicalDetails: [
      "Frontend: Tailwind CSS for responsive design optimized for mobile users.",
      "Database: MySQL with optimized queries",
      "Backend: Laravel PHP framework for robust system architecture.",
      "Database: MySQL for efficient personnel data management.",
    ],
    relevantSkills: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "API Development",
    ],
  },
  // Gym Management System
  {
    type: "work",
    period: "September 2024 - December 2024",
    title: "Gym Management System",
    organization: "Fitness Center Management",
    description:
      "Developed comprehensive gym management system handling membership and workout tracking for JMNID Gym.",
    logo: gym_system_logo,
    achievements: [
      "Built multi-role access system supporting Admin, Principal, and Personnel user types",
      "Implemented dynamic personnel tracking system with unique identifier generation.",
    ],
    technicalDetails: [
      "Full Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
      "Styling: Tailwind CSS for responsive design",
    ],
    relevantSkills: ["MERN Stack", "Tailwind CSS", "UX/UI Design"],
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
      "Backend: PHP for server-side logic",
      "Database: MySQL for data management",
    ],
    relevantSkills: ["PHP", "MySQL"],
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
      "Managed and organized office records",
      "Assisted in data management operations",
      "Maintained data privacy protocols",
    ],
    technicalDetails: [
      "Digitized case files and records",
      "Implemented data validation processes",
    ],
    relevantSkills: [
      "Data Entry",
      "Database Management",
      "Data Privacy",
      "Office Administration",
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
      "Active in coding competitions",
      "Participated in tech project teams",
      "Focused on practical programming skills",
    ],
    technicalDetails: [
      "Mobile app development projects",
      "Database system design",
      "Team-based development work",
    ],
    relevantSkills: [
      "Mobile Development",
      "Database Management",
      "Team Collaboration",
      "Problem Solving",
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
      "Learned full-stack development",
      "Led group coding projects",
      "Built responsive web applications",
    ],
    technicalDetails: [
      "Web development projects",
      "System development",
      "Frontend and backend integration",
    ],
    relevantSkills: [
      "Web Development",
      "Mobile Development",
      "Database Management",
      "Project Management",
    ],
  },
  {
    type: "education",
    period: "January 2017 - June 2022",
    title: "High School Diploma",
    organization: "Fortune High School",
    logo: fortuneHighSchool,
    achievements: [
      "Participated in tech clubs",
      "Maintained good academic standing",
      "Developed foundation skills",
    ],
    technicalDetails: [
      "Basic programming concepts",
      "Computer literacy",
      "Problem-solving skills",
    ],
    relevantSkills: ["Basic Programming", "Computer Skills", "Teamwork"],
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
