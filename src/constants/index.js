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
import freelancer_logo from "../assets/education/freelancer.jpg";
import nbi_logo from "../assets/education/nbi.jpg";

export const timelineData = [
  // Work Experience
  {
    type: "work",
    period: "January 2024 - Present",
    degree: "Freelance Web Developer",
    organization: "Freelance",
    description:
      "Full-stack developer specializing in business process automation and management systems using modern web technologies.",
    logo: freelancer_logo,
    achievements: [
      "Delivered 4 full-stack applications that improved client operational efficiency",
      "Maintained 95% client satisfaction rate through effective requirement gathering and implementation",
      "Reduced system response times by 40% through performance optimization",
      "Implemented secure authentication and data protection measures across all projects",
    ],
    projects: [
      "Developed a Document Control System with automated workflow tracking, version control, and search functionality using React.js and Node.js",
      "Engineered a Human Information System featuring employee data management, attendance tracking, and performance analytics using Laravel PHP",
      "Created a Fitness Gym Management Platform with membership tracking, workout planning, and progress monitoring functionality",
      "Built an Apartment Management System to streamline tenant management, maintenance requests, and payment processing",
    ],
    relevantSkills: [
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "PHP Development (Laravel Framework)",
      "Database Management (MySQL, MongoDB, phpMyAdmin)",
      "RESTful API Development",
    ],
  },
  {
    type: "work",
    period: "February 2024 - June 2024",
    degree: "Work Immersion - Data Encoder",
    organization: "NBI Riverbanks Satellite Office",
    description:
      "Gaining hands-on experience in data encoding and management as part of a work immersion program at the National Bureau of Investigation's Riverbanks Satellite Office in Marikina City, NCR.",
    logo: nbi_logo,
    achievements: [
      "Accurately encoded and organized over 500 records during the immersion period",
      "Supported data management and retrieval processes, improving overall office efficiency",
      "Adhered to data privacy standards, ensuring the confidentiality of sensitive information",
    ],
    projects: [
      "Contributed to the digitization of case files and other records into the office's database system",
      "Collaborated with the team to implement data validation processes for improved accuracy",
    ],
    relevantSkills: [
      "Data Entry and Encoding",
      "Attention to Detail",
      "Database Management",
      "Data Privacy and Confidentiality",
    ],
  },
  // Education
  {
    type: "education",
    period: "August 2024 - Present",
    degree: "Bachelor of Science in Computer Science",
    organization: "STI College - Marikina Campus",
    logo: stiCollegeMarikina,
    achievements: [
      "Active participant in coding events",
      "Collaborated in multi-disciplinary tech teams on real-world projects",
      "Gained hands-on experience in problem-solving and algorithm design",
    ],
    projects: [
      "Developed a mobile app for student services",
      "Designed and implemented a database management system for a mock business",
      "Contributed to the creation of an open source library platform as part of a team project",
    ],
    relevantSkills: [
      "Mobile App Development (Android Studio, Java)",
      "Database Management (SQL, Firebase)",
      "Team Collaboration (Git, Agile Methodologies)",
      "Problem Solving and Algorithm Design",
    ],
  },
  {
    type: "education",
    period: "November 2022 - July 2024",
    degree: "IT in Mobile App and Web Development",
    organization: "STI College - Marikina Campus",
    logo: stiCollegeMarikina,
    achievements: [
      "Mastered front-end and back-end technologies in web development",
      "Demonstrated strong project management and leadership skills in group projects",
      "Gained proficiency in building responsive websites and mobile applications",
    ],
    projects: [
      "Developed and deployed a fully functional website for a local business",
      "Collaborated in creating a system",
      "Created interactive web features with JavaScript, HTML, and CSS",
    ],
    relevantSkills: [
      "Web Development (HTML, CSS, JavaScript, React.js, Node.js)",
      "Mobile App Development (Java)",
      "Database Management (MySQL)",
      "Project Management (ClickUp)",
    ],
  },
  {
    type: "education",
    period: "January 2017 - June 2022",
    degree: "High School Diploma",
    organization: "Fortune High School",
    logo: fortuneHighSchool,
    achievements: [
      "Active involvement in school clubs",
      "Consistent academic performance",
      "Developed critical thinking and research skills",
    ],
    projects: [
      "Participated in the Science Fair and conducted an experiment on plant growth.",
      "Organized a Recycling Campaign in the community, collecting over 500 pounds of recyclables.",
      "Delivered a Public Presentation on environmental conservation to the school assembly.",
    ],
    relevantSkills: [
      "Research and Analytical Skills",
      "Public Speaking and Presentation",
      "Team Leadership and Collaboration",
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
