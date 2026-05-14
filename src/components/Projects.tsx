import React, { useState } from 'react';
import { ExternalLink, Zap, Server, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Lightbox from './ui/Lightbox';

interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  architecture: string[];
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
      impact: "Reduced manual vendor coordination time by ~65% via automated inventory sync and real-time order tracking.",
      architecture: [
        "Modular Service-Oriented Architecture with RBAC",
        "Geo-proximity search logic for sub-second vendor discovery",
        "Resilient payment pipelines with Stripe Connect integration"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "AWS S3", "CloudFront", "Socket.IO", "Stripe"],
      image: "/autoparts.png",
      github: "https://github.com/shakayet/AutoParts-E-commerce-Marketplace.git",
      live: "https://jbay.shop/"
    },
    {
      title: "Schaefer Tutoring",
      category: "LMS Platform",
      description: "A high-availability LMS platform focused on real-time educational delivery and secure media streaming.",
      impact: "Successfully handled 500+ concurrent live video sessions with zero reported downtime during peak usage.",
      architecture: [
        "Low-latency video consultation engine via Agora SDK",
        "Secure media processing pipeline for encrypted content",
        "Automated subscription management with Stripe webhooks"
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
      impact: "Automated 90% of accounting reconciliation tasks via real-time QuickBooks sync, saving ~20 hours/week.",
      architecture: [
        "Real-time bidirectional accounting sync with QuickBooks",
        "Threshold-based automated credit limit management",
        "Multi-channel alert system (Socket.IO + Firebase FCM)"
      ],
      techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "QuickBooks", "Firebase FCM", "Winston"],
      image: "/b2b-marketplace.png",
      github: "https://github.com/shakayet/B2B-Ecommerce.git",
      live: "https://www.unifiedproduces.com/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">04 / Selected Works</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering solutions for <br className="hidden sm:block" />
              <span className="text-gradient italic font-serif">complex</span> commerce.
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-24 md:gap-40">
          {projectList.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start group">
              {/* Info Side */}
              <div className="lg:col-span-6 flex flex-col gap-10 lg:order-1">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="mono-label text-primary font-bold">{project.category}</span>
                    <span className="text-[10px] text-muted-foreground opacity-50">/ 0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] border-l-primary/50 border-l-2">
                     <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Zap size={18} className="text-primary mt-1 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-1">Impact</span>
                      <p className="text-xs md:text-sm text-white/90 font-medium leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">System Design Highlights</span>
                  <div className="grid grid-cols-1 gap-3">
                    {project.architecture.map((item, aIdx) => (
                      <div key={aIdx} className="flex gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300">
                        <div className="mt-1 shrink-0">
                          <Server size={14} className="text-secondary opacity-70" />
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground bg-white/[0.03] border border-white/[0.05] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all group/btn w-full sm:w-auto"
                  >
                    <FaGithub size={16} /> 
                    <span>Codebase</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-none w-full sm:w-auto"
                  >
                    <ExternalLink size={16} /> 
                    <span>Deployment</span>
                  </a>
                </div>
              </div>

              {/* Media Side */}
              <div 
                className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl glass-card cursor-none group/img lg:order-2 shadow-[0_0_30px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-700 p-2"
                onClick={() => setSelectedProject({ image: project.image, title: project.title })}
              >
                <div className="w-full h-full relative rounded-xl overflow-hidden bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                
                {/* Custom Cursor Overlay for Project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center text-[9px] md:text-[10px] uppercase font-bold tracking-widest scale-50 group-hover/img:scale-100 transition-transform duration-500 shadow-2xl">
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
