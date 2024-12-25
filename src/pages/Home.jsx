import AboutMe from "../components/AboutMe.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Hero Section */}
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
