import React, { useState } from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Lightbox from './ui/Lightbox';

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  github: string;
  live: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{ image: string, title: string } | null>(null);

  const projectList: Project[] = [
    {
      title: "AutoParts",
      category: "Marketplace",
      description: "A robust multi-vendor marketplace optimized for high-traffic automotive catalog management and location-aware searching.",
      highlights: [
        "Architected a modular service-oriented system with role-based access control (RBAC).",
        "Engineered custom search logic for geo-proximity sorting and multi-criteria filtering.",
        "Integrated AWS S3 and CloudFront CDN for sub-second asset delivery globally."
      ],
      techStack: ["Node.js", "Express", "MongoDB", "AWS S3", "CloudFront", "Socket.IO", "Stripe", "Zod"],
      image: "/autoparts.png",
      github: "https://github.com/shakayet/AutoParts-E-commerce-Marketplace.git",
      live: "https://jbay.shop/"
    },
    {
      title: "Schaefer Tutoring",
      category: "LMS Platform",
      description: "A high-availability LMS platform focused on real-time educational delivery and secure media streaming.",
      highlights: [
        "Integrated Agora SDK for low-latency, real-time video consultations.",
        "Developed a secure media processing pipeline for course content storage and streaming.",
        "Implemented PostgreSQL-based progress persistence and course management."
      ],
      techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Agora SDK", "Stripe", "Prisma"],
      image: "/schaefer-tutoring.png",
      github: "https://github.com/shakayet/LMS---online-learning-platform-.git",
      live: "https://www.schaefer-tutoring.com/"
    },
    {
      title: "B2B MarketPlace",
      category: "Wholesale",
      description: "Enterprise-grade wholesale platform focused on business process automation and financial transparency.",
      highlights: [
        "Architected real-time accounting sync using QuickBooks Online APIs.",
        "Engineered an automated Buyer Credit System for seamless B2B transaction flows.",
        "Implemented multi-channel business alerts via Socket.IO and Firebase FCM."
      ],
      techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "QuickBooks", "Firebase FCM", "Winston"],
      image: "/b2b-marketplace.png",
      github: "https://github.com/shakayet/B2B-Ecommerce.git",
      live: "https://www.unifiedproduces.com/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">03 / Selected Works</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering solutions for <br />
              <span className="text-gradient italic font-serif">complex</span> commerce.
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-32">
          {projectList.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start group">
              {/* Info Side */}
              <div className="lg:col-span-6 flex flex-col gap-10 lg:order-1">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="mono-label text-primary">{project.category}</span>
                    <span className="text-[10px] text-muted-foreground">/ 0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Technical Highlights Section */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Engineering Highlights</span>
                  <div className="grid grid-cols-1 gap-4">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300">
                        <div className="mt-1">
                          <Zap size={14} className="text-secondary" />
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-10 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} /> 
                    <span>Codebase</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> 
                    <span>Deployment</span>
                  </a>
                </div>
              </div>

              {/* Media Side */}
              <div 
                className="lg:col-span-6 relative aspect-video overflow-hidden rounded-2xl glass-card cursor-none group/img lg:order-2 shadow-[0_0_30px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-700 p-2"
                onClick={() => setSelectedProject({ image: project.image, title: project.title })}
              >
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>
                
                {/* Custom Cursor Overlay for Project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-[10px] uppercase font-bold tracking-widest scale-50 group-hover/img:scale-100 transition-transform duration-500">
                    View
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={!!selectedProject}
        imageSrc={selectedProject?.image || ''}
        title={selectedProject?.title || ''}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
