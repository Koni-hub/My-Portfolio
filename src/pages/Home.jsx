import AboutMe from "../components/AboutMe.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import EducationWork from "../components/EducationWork.jsx";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Hero Section */}
        <EducationWork />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
