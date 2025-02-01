import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-white animate__fadeIn animate__animated">
        <h2 className="text-3xl font-bold text-center mb-6">PROJECTS</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          {["All", "Frontend", "Backend", "Fullstack"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex items-center gap-2 px-5 py-2 border rounded-lg transition-all duration-300 
              ${filter === type ? "border-blue-500 bg-blue-600/30 text-white" : "border-gray-500 bg-gray-500/20 text-gray-300"} 
              hover:scale-105 hover:bg-blue-600/30 hover:border-blue-500 hover:text-white`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((proj) =>
              filter === "All"
                ? true
                : proj.type.toLowerCase().includes(filter.toLowerCase())
            )
            .map((p) => (
              <div key={p.id} className="w-[380px] mx-auto mb-5 glass rounded-lg shadow-lg">
                <figure>
                  <img className="w-full h-64 object-cover rounded-t-lg" src={p.img} alt={p.name} />
                </figure>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{p.name}</h2>
                  <p className="text-sm text-gray-300">{p.detail}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between mt-4">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-lg text-blue-300 transition-all duration-300 hover:scale-105 hover:bg-blue-600/30 hover:text-white"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Live Site
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 border border-gray-500 rounded-lg text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-gray-600/30 hover:text-white"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                  </div>

                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
