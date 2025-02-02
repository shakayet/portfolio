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
    <div className="relative min-h-screen bg-gray-900 text-white px-6">
      {/* Content Section */}
      <div className="relative z-30 container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate__fadeIn animate__animated">
          
          {/* Left Section: Intro */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-light">As a</h1>
            <p className="py-6 text-lg md:text-xl leading-relaxed">
              <strong>Passionate Full Stack Software Developer, Educator, and Machine Learning Enthusiast</strong>, 
              I bring experience in <strong>full-stack development (MERN stack), machine learning, and data science</strong>. 
              I specialize in <strong>React, Node.js, Express.js, and MongoDB</strong>, focusing on <strong>scalable applications</strong>.
              <br /><br />
              As a competitive programmer, I have participated in <strong>ICPC Dhaka Regional three times</strong> (career-best rank: <strong>54</strong>) 
              and <strong>NCPC 2024</strong>. I was a pioneer in establishing a programming culture at my institute.
              <br /><br />
              I am always eager to <strong>explore new technologies, solve complex problems, and contribute to impactful projects</strong>.
            </p>
          </div>

          {/* Right Section: Skills */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-60">
            <h2 className="text-2xl font-bold mb-4">Technical Proficiencies:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>Full Stack Development:</strong> ReactJS, Tailwind, Material UI, DaisyUI</li>
              <li><strong>Backend:</strong> ExpressJS, NodeJS, MongoDB</li>
              <li><strong>Deployment:</strong> AWS, Heroku, Render, Vercel</li>
              <li><strong>CI/CD:</strong> GitHub Actions, Bash scripting</li>
              <li><strong>Version Control:</strong> Git & GitHub</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">Experience</h1>
            <div className="py-4 space-y-3">
              <div className="flex items-center space-x-2">
                <BsBuilding className="text-blue-400" />
                <p className="font-bold">President</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillBriefcaseFill className="text-yellow-400" />
                <p className="font-bold">Programming Club, Tejgaon College</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsClockFill className="text-gray-400" />
                <p>February 2023 - Present</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="py-4 space-y-3">
              <div className="flex items-center space-x-2">
                <BsFillBookFill className="text-green-400" />
                <p className="font-bold">BSc in Computer Science</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsReverseLayoutSidebarReverse className="text-purple-400" />
                <p>Tejgaon College, Dhaka</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsClockFill className="text-gray-400" />
                <p>2018 - 2024</p>
              </div>
              <p className="mb-2"><strong>GPA:</strong> 3.54 (Out of 4.0)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
