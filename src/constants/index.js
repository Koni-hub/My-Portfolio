import profile from "../assets/profile/me.jpg";
import profile_shades from "../assets/profile/me-shades.png";
import profile_fb from "../assets/profile/profile-pic.png";

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

export const aboutData = {
  name: "Argie",
  nickname: "Gie",
  experience: 3,
  quote:
    "Code with passions, debug with patients, and celebrate every successful build",
  image: profile_fb,
  testimonial: {
    author: "Project Manager",
    text: "A dedicated developer with exceptional problem-solving skills",
  },
};

export const about_me = {
  name: "Argie",
  image: profile_fb,
  quote: "The tricks is having skills",
  description: `I am a passionate full stack developer with a knack for creating robust and scalable web applications.`,
  experience: `2-3`,
  testimonial: {
    text: "Argie's dedication to crafting seamless user experiences is truly inspiring. The solutions he developed for us were innovative and delivered on time.",
    author: "Jane Smith",
  },
};

// -----------------

export const projects = [
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase my skills, experience, and projects.",
    technologies: "React, Tailwind CSS",
    imageUrl: "https://via.placeholder.com/600x400?text=My+Portfolio", // Placeholder image URL
  },
  {
    title: "E-Commerce App",
    description:
      "An e-commerce platform with a modern UI for shopping, checkout, and order tracking.",
    technologies: "React, Node.js, MongoDB",
    imageUrl: "https://via.placeholder.com/600x400?text=E-Commerce+App", // Placeholder image URL
  },
  {
    title: "Blogging Platform",
    description:
      "A blogging platform where users can post articles, comment, and like posts.",
    technologies: "Django, Python, PostgreSQL",
    imageUrl: "https://via.placeholder.com/600x400?text=Blogging+Platform", // Placeholder image URL
  },
];
