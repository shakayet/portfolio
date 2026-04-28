import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "AutoParts",
      category: "Multi-Vendor Platform",
      description: "A scalable backend for an auto-parts marketplace. Implemented dual-token JWT authentication and integrated AWS S3 and CloudFront for media.",
      techStack: ["Node.js", "AWS S3", "CloudFront", "Socket.IO"],
      github: "https://github.com/shakayet/AutoParts-E-commerce-Marketplace.git",
      live: "https://jbay.shop/",
      image: "/autoparts.png"
    },
    {
      title: "Schaefer-tutoring",
      category: "LMS Backend",
      description: "A production-ready backend for a real-time online learning platform. Implemented Socket.IO for live tutoring sessions and presence tracking.",
      techStack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Stripe"],
      github: "https://github.com/shakayet/LMS---online-learning-platform-.git",
      live: "https://www.schaefer-tutoring.com/",
      image: "/schaefer-tutoring.png"
    },
    {
      title: "B2B MarketPlace",
      category: "E-Commerce Architecture",
      description: "A comprehensive backend for a B2B produce marketplace with credit systems. Integrated QuickBooks Online for syncing customers and invoices.",
      techStack: ["Node.js", "MongoDB", "QuickBooks API", "Firebase"],
      github: "https://github.com/shakayet/B2B-Ecommerce.git",
      live: "https://www.unifiedproduces.com/",
      image: "/b2b-marketplace.png"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-zinc-950 text-foreground border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Selected Works.
          </h2>
          <div className="w-12 h-1 bg-foreground mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col gap-32">
          {projectList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden border border-border group-hover:border-zinc-700 transition-colors duration-500">
                    {project.image ? (
                      <div className="w-full h-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 ease-out"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105 ease-out">
                        <span className="font-serif text-6xl md:text-8xl font-bold tracking-tighter text-foreground uppercase">{project.title.substring(0, 2)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} z-10`}>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                    {project.title}
                  </h3>
                  
                  <div className={`bg-background/95 backdrop-blur-md border border-border p-8 mb-8 ${index % 2 !== 0 ? 'lg:-mr-12' : 'lg:-ml-12'} shadow-2xl relative`}>
                    <p className="text-muted-foreground font-light leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  <ul className={`flex flex-wrap gap-4 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {project.techStack.map((tech, idx) => (
                      <li key={idx} className="text-xs font-mono font-medium text-zinc-500">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-6 items-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-zinc-500 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider relative group/link">
                      <FaGithub className="h-4 w-4" /> Code
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-zinc-500 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider relative group/link">
                        <ExternalLink className="h-4 w-4" /> Live
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover/link:w-full"></span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
