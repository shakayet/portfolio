import React from "react";
import { FaCode, FaDatabase, FaLaptopCode } from "react-icons/fa";
import { BsFillBriefcaseFill, BsTrophy, BsMortarboardFill } from "react-icons/bs";
import { SiMongodb, SiReact, SiNodedotjs, SiTailwindcss, SiExpress, SiFlask, SiCodeforces, SiCodechef, SiTensorflow, SiPytorch, SiScikitlearn, SiPostgresql} from "react-icons/si";
import icpcLogo from "../../Assets/icpc.png";
import ncpcLogo from "../../Assets/ncpc.png";


const About = () => {
  return (
    <div className="relative z-30 min-h-screen text-white px-6 py-12">
      <div className="container mx-auto space-y-12">

        {/* Competitive Programming Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Competitive Programming</h2>

          {/* ICPC Participation */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-gray-800/80">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <img src={icpcLogo} alt="ICPC Logo" className="w-12 h-12 rounded" /> ICPC Dhaka Regional
            </h3>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Participated: <span className="text-blue-400 font-semibold">3 times (2021, 2022, 2023)</span></li>
              <li>Best Rank: <span className="text-green-400 font-semibold">54</span></li>
              <li>Hosted by: <span className="text-blue-400 font-semibold">BUBT, Green University, BUBT</span></li>
            </ul>
          </div>

          {/* NCPC Participation */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 transition hover:scale-105">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <img src={ncpcLogo} alt="NCPC Logo" className="w-12 h-12 rounded" /> NCPC 2024 Finalist
            </h3>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Rank: <span className="text-green-400 font-semibold">66</span></li>
              <li>Hosted by: <span className="text-blue-400 font-semibold">Jahangirnagar University</span></li>
            </ul>
          </div>

          {/* Other Contests */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 transition hover:scale-105">
            <h3 className="text-2xl font-semibold">Other Contests</h3>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>BUET CSE Fest Programming Contest</li>
              <li>SEC Junior Programming Contest</li>
              <li>SUST Programming Contest (Twice)</li>
              <li>TC Programming Combat</li>
            </ul>
          </div>
        </section>

        {/* Problem Solving Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Problem Solving</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://codeforces.com/profile/srabons_thinkLab" target="_blank" rel="noreferrer">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 transition hover:scale-105">
                <SiCodeforces className="text-blue-500 text-4xl" />
                <div>
                  <p className="text-lg font-semibold">Codeforces</p>
                  <p className="text-gray-300">Problems Solved: <span className="text-green-400 font-semibold">700+</span></p>
                  <p className="text-gray-300">Best Rating: <span className="text-green-400 font-semibold">1312</span></p>
                </div>
              </div>
            </a>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 transition hover:scale-105">
              <SiCodechef className="text-yellow-500 text-4xl" />
              <div>
                <p className="text-lg font-semibold">CodeChef</p>
                <p className="text-gray-300">Problems Solved: <span className="text-green-400 font-semibold">200+</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Development (MERN-Stack)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FaLaptopCode /> Frontend
              </h3>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li><SiReact className="inline text-blue-400" /> React.js</li>
                <li><SiTailwindcss className="inline text-teal-400" /> Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FaCode /> Backend
              </h3>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li><SiNodedotjs className="inline text-green-500" /> Node.js</li>
                <li><SiExpress className="inline text-gray-400" /> Express.js</li>
                <li><SiFlask className="inline text-blue-400" /> Flask</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FaDatabase /> Database
              </h3>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                <li><SiMongodb className="inline text-green-400" /> MongoDB</li>
                <li><SiPostgresql className="inline text-green-400" /> PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Experience</h2>
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-gray-800/80 mt-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <BsFillBriefcaseFill /> President, Programming Club (Tejgaon College)
            </h3>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Conducted 3 "Basic-C" workshops, training 150+ students</li>
              <li>Organized "Programming Combat" contest</li>
              <li>Organized Tejgaon College CSE Fest 2024</li>
            </ul>
          </div>
        </section>

        {/* Machine Learning Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Machine Learning</h2>
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-gray-800/80">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <SiTensorflow className="text-yellow-500" /> Research & Implementation
            </h3>
            <p className="text-gray-300 mt-4">I conducted research on <a href="https://link.springer.com/chapter/10.1007/978-981-99-0550-8_14" target="blank"><span className="text-blue-400 font-semibold">"Employee Promotion Prediction"</span></a>, using supervised classification approaches.</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Algorithm: <span className="text-green-400 font-semibold">Random Forest</span></li>
              <li>Dataset: <span className="text-blue-400 font-semibold">78,000 employee records</span></li>
              <li>Evaluation Metric: <span className="text-green-400 font-semibold">Accuracy</span></li>
              <li>Key Features: Department, Region, Education, Gender, KPIs met, Awards, etc.</li>
            </ul>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-gray-800/80 mt-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <SiScikitlearn className="text-blue-400" /> Tools & Technologies
            </h3>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Python, Pandas, NumPy</li>
              <li>Scikit-Learn, TensorFlow</li>
              <li>Flask for Model Deployment</li>
              <li>Model Optimization & Bias Handling</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-2 pb-3 border-gray-700">Education</h2>
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-lg shadow-lg transition hover:scale-105 hover:bg-gray-800/80">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <BsMortarboardFill className="text-yellow-500" /> Bachelor of Science in Computer Science & Engineering
            </h3>
            <p className="text-gray-300 mt-4">Tejgaon College, National University</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Final CGPA: <span className="text-green-400 font-semibold">3.54/4.00</span></li>
              <li>Ranked 1st in the final semester in the National University</li>
              <li>Ranked 1st among batchmates based on overall CGPA</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
