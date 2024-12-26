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
  age: "∞",
  quote:
    "Code with passions, debug with patience, and celebrate every successful build",
};

export const programming_lang = [
  "Node.js",
  "C#",
  "C++",
  "Java",
  "JavaScript",
  "PHP",
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
// Education Data
import fortuneHighSchool from "../assets/education/fortune-high-school.jpg";
import stiCollegeMarikina from "../assets/education/sti-college-marikina.png";

export const educationData = [
  {
    period: "2024 - Present",
    institution: "STI College - Marikina Campus",
    degree: "Pursuing Associate Degree in Computer Science",
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
    period: "2023 - 2024",
    institution: "STI College - Marikina Campus",
    degree: "Associate Degree in Mobile App & Web Development",
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
      "Web Development (HTML, CSS, JavaScript, Node.js)",
      "Mobile App Development (React)",
      "Database Management (MySQL)",
      "Project Management (ClickUp)",
    ],
  },
  {
    period: "2018 - 2023",
    institution: "Fortune High School",
    degree: "High School Diploma",
    logo: fortuneHighSchool,
    achievements: [
      "Active involvement in school clubs",
      "Consistent academic performance",
      "Developed critical thinking and research skills",
    ],
    relevantSkills: [
      "Research and Analytical Skills",
      "Public Speaking and Presentation",
      "Team Leadership and Collaboration",
    ],
  },
];

// -----------------
// Work Experience Data
export const workData = [
  {
    type: "work",
    period: "2024 - Present",
    title: "Freelance Web Developer",
    organization: "Independent / Freelance",
    description:
      "Working on full-stack development projects for various clients",
    logo: "https://via.placeholder.com/64",
  },
];

// -----------------
// Timeline Data
export const timelineData = [
  // Work Experience
  {
    type: "work",
    period: "2024 - Present",
    title: "Freelance Web Developer",
    organization: "Independent / Freelance",
    description:
      "Working on full-stack development projects for various clients",
    logo: "https://via.placeholder.com/64",
  },
  // Education
  {
    type: "education",
    period: "2024 - Present",
    institution: "STI College - Marikina Campus",
    degree: "Pursuing Associate Degree in Computer Science",
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
    period: "2023 - 2024",
    institution: "STI College - Marikina Campus",
    degree: "Associate Degree in Mobile App & Web Development",
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
      "Web Development (HTML, CSS, JavaScript, Node.js)",
      "Mobile App Development (React)",
      "Database Management (MySQL)",
      "Project Management (ClickUp)",
    ],
  },
  {
    type: "education",
    period: "2018 - 2023",
    institution: "Fortune High School",
    degree: "High School Diploma",
    logo: fortuneHighSchool,
    achievements: [
      "Active involvement in school clubs",
      "Consistent academic performance",
      "Developed critical thinking and research skills",
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
    },
  },
  {
    title: "Human Information System",
    description:
      "A system for managing personal information, schedules, and health data for gym members.",
    technologies: "Laravel, Vue JS, PHP",
    imageUrl: humanInformationSystemImg,
    links: {
      source: "#",
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
    },
  },
];

// -----------------
// Contact Data
export const contactInfo = {
  email: "delgadoargie04z@gmail.com",
  phone: "+63 916 123 4567",
  location: "Metro Manila, Philippines",
};
