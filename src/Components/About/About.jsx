import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillBriefcaseFill,
  BsReverseLayoutSidebarReverse,
  BsFillBookFill,
  BsBuilding,
  BsClockFill,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="relative min-h-screen">

      {/* Content Section - Ensures text is above particles */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__fadeIn animate__animated">
          
          {/* Left Section: Intro */}
          <div className="text-left">
            <h1 className="text-5xl font-light">As a</h1>
            <p className="py-6">
              <strong>Passionate Full Stack Software Developer, Educator, and Machine Learning Enthusiast</strong>, 
              I bring experience in <strong>full-stack development (MERN stack), machine learning, and data science</strong>. 
              I specialize in <strong>React, Node.js, Express.js, and MongoDB</strong>, with a focus on <strong>scalable applications</strong>.
              <br /><br />
              As a competitive programmer, I have participated in <strong>ICPC Dhaka Regional three times</strong> (career-best rank: <strong>54</strong>) 
              and <strong>NCPC 2024</strong>. I was a pioneer in establishing a programming culture at my institute.
              <br /><br />
              I am always eager to <strong>explore new technologies, solve complex problems, and contribute to impactful projects</strong>.
            </p>
          </div>

          {/* Right Section: Skills */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-60">
            <h2 className="text-2xl font-bold mb-2">Technical Proficiencies:</h2>
            <ul className="list-disc list-inside">
              <li>Full Stack Development: <strong>ReactJS, Tailwind, Material UI, DaisyUI</strong></li>
              <li>Backend: <strong>ExpressJS, NodeJS, MongoDB</strong></li>
              <li>Deployment: <strong>AWS, Heroku, Render, Vercel</strong></li>
              <li>CI/CD: <strong>GitHub Actions, Bash scripting</strong></li>
              <li>Version Control: <strong>Git & GitHub</strong></li>
            </ul>
          </div>

          {/* Experience Section */}
          <div>
            <h1 className="text-3xl font-bold">Experience</h1>
            <div className="py-6">
              <div className="flex items-center">
                <BsBuilding />
                <p className="px-2 font-bold">President</p>
              </div>
              <div className="flex items-center">
                <BsFillBriefcaseFill />
                <p className="px-2 font-bold">Programming Club, Tejgaon College</p>
              </div>
              <div className="flex items-center">
                <BsClockFill />
                <p className="px-2">February 2023 - Present</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h1 className="text-3xl font-bold">Education</h1>
            <div className="py-6">
              <div className="flex items-center">
                <BsFillBookFill />
                <p className="px-2 font-bold">BSc in Computer Science</p>
              </div>
              <div className="flex items-center">
                <BsReverseLayoutSidebarReverse />
                <p className="px-2">Tejgaon College, Dhaka</p>
              </div>
              <div className="flex items-center">
                <BsClockFill />
                <p className="px-2">2018 - 2024</p>
              </div>
              <p className="mb-4">GPA: 3.54 (Out of 4.0)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
