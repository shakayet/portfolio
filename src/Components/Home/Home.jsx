import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo from "../../Assets/srabon.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16">
      <div className="animate__animated animate__fadeIn">
        {/* Hero Section */}
        <div id="home" className="hero min-h-screen flex flex-col lg:flex-row-reverse items-center relative">
          {/* Profile Image */}
          <img
            alt="Profile"
            src={photo}
            className="w-64 md:w-80 lg:w-96 border-4 border-indigo-500 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl lg:pr-10 relative z-10"> {/* Added z-10 to keep text in front */}
            <h2 className="text-lg md:text-xl text-gray-300 font-light">Hey,</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Shakhawat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
              <Typewriter
                words={["MERN Stack Developer", "Machine Learning Enthusiast", "Competitive Programmer"]}
                loop={true}
                deleteSpeed={130}
                typeSpeed={100}
                delaySpeed={2000}
              />
            </h2>

            {/* About Me */}
            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              A passionate software developer, educator, and machine learning enthusiast. I specialize in full-stack web development (MERN stack), 
              machine learning, and data science, with hands-on experience in **Node.js, Express.js, React, and MongoDB**.
            </p>

            <p className="mt-3 text-gray-300 leading-relaxed text-lg">
              I have participated in **ICPC Dhaka Regional three times**, achieving a career-best ranking of 54, and competed in NCPC 2024. Over the years, 
              I have solved **1000+ problems on various online judges**, continuously refining my problem-solving skills.
            </p>

            <p className="mt-3 text-gray-300 leading-relaxed text-lg">
              I am always eager to explore new technologies, solve challenging problems, and contribute to impactful projects.
            </p>

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1uA8HnxfSNZKKmhvLxzaZbjXS8KLzzAzD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Updated Social Media Section */}
        <div className="mt-8 mb-10 text-center relative z-10"> {/* Added z-10 to the social section */}
          <h3 className="text-3xl font-semibold text-white mb-6">
            Connect with <span className="text-indigo-400">Me</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/shakayet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl p-3 rounded-full bg-blue-500 hover:bg-blue-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/srabon-shakhawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl p-3 rounded-full bg-blue-700 hover:bg-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-400/50 transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/srabon.shakhawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl p-3 rounded-full bg-blue-500 hover:bg-blue-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
