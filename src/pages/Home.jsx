import AboutMe from "../components/AboutMe.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background covering the entire page */}
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
