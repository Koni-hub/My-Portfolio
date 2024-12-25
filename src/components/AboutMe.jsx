import { about_me } from "../constants/index.js";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-center text-5xl py-5">About Me</h1>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="relative w-full max-w-3xl min-h-[400px] bg-cover bg-center rounded-lg"></div>
      </div>
    </>
  );
};

export default AboutMe;
