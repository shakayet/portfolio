import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "AutoParts",
      category: "Multi-Vendor Platform",
      whatItDoes: "A highly scalable B2B/B2C marketplace backend enabling multiple vendors to manage and sell automotive parts globally.",
      problemSolved: "Traditional auto parts systems lacked unified inventory and secure payment flows. Vendors struggled to manage stock across multiple regions without performance bottlenecks.",
      contribution: "Architected the entire backend from the ground up, designing the database schema, API gateway, and security protocols.",
      keyFeatures: ["Multi-vendor inventory management", "Secure payment processing", "Advanced search & filtering"],
      techHighlights: "Implemented dual-token JWT authentication, Redis for caching complex queries, and an AWS S3/CloudFront pipeline for high-speed media delivery.",
      impact: "Reduced API response times by 40% and enabled secure onboarding for over 100+ concurrent vendor sessions without degraded performance.",
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "AWS S3", "CloudFront"],
      github: "https://github.com/shakayet/AutoParts-E-commerce-Marketplace.git",
      live: "https://jbay.shop/",
      image: "/autoparts.png"
    },
    {
      title: "Schaefer-tutoring",
      category: "LMS Backend",
      whatItDoes: "A production-ready backend for a real-time online learning platform supporting live tutoring and course management.",
      problemSolved: "The platform needed a reliable way to handle real-time student-tutor interactions, track presence, and securely process recurring subscription payments.",
      contribution: "Engineered the core API, integrated Stripe billing, and built the real-time WebSocket infrastructure.",
      keyFeatures: ["Real-time messaging", "Live presence tracking", "Automated subscription billing"],
      techHighlights: "Utilized Socket.IO for low-latency communication and integrated complex Stripe webhook logic to automatically update user subscription states and handle payment failures.",
      impact: "Successfully facilitated hundreds of concurrent live tutoring sessions and automated 100% of the manual billing processes.",
      techStack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Stripe"],
      github: "https://github.com/shakayet/LMS---online-learning-platform-.git",
      live: "https://www.schaefer-tutoring.com/",
      image: "/schaefer-tutoring.png"
    },
    {
      title: "B2B MarketPlace",
      category: "E-Commerce Architecture",
      whatItDoes: "A comprehensive backend for a B2B produce marketplace featuring complex corporate credit systems and dynamic invoicing.",
      problemSolved: "Wholesale produce buyers needed a way to purchase on credit and have their invoices automatically synced with their accounting software.",
      contribution: "Led the backend development focusing on third-party accounting integrations and corporate user authentication.",
      keyFeatures: ["Corporate credit limits", "Automated invoice generation", "Role-based corporate accounts"],
      techHighlights: "Built a robust, fault-tolerant integration with the QuickBooks Online API to ensure real-time synchronization of customers, products, and invoices.",
      impact: "Eliminated manual accounting data entry, saving the financial team approximately 20 hours per week and eliminating synchronization errors.",
      techStack: ["Node.js", "MongoDB", "QuickBooks API", "Firebase Auth"],
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-2' : ''} sticky top-32`}>
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
                
                <div className={`lg:col-span-6 flex flex-col ${index % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'} z-10`}>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">What it does</h4>
                      <p className="text-muted-foreground font-light text-base leading-relaxed">{project.whatItDoes}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">Problem it solves</h4>
                      <p className="text-muted-foreground font-light text-base leading-relaxed">{project.problemSolved}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">My Contribution</h4>
                      <p className="text-muted-foreground font-light text-base leading-relaxed">{project.contribution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">Technical Highlights</h4>
                      <p className="text-muted-foreground font-light text-base leading-relaxed">{project.techHighlights}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-2">Impact</h4>
                      <p className="text-muted-foreground font-light text-base leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                  
                  <ul className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx} className="text-xs font-mono font-medium text-zinc-400 border border-border px-3 py-1">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-6 items-center pt-6 border-t border-border">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-zinc-400 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider relative group/link">
                      <FaGithub className="h-5 w-5" /> Code
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-zinc-400 transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider relative group/link">
                        <ExternalLink className="h-5 w-5" /> Live
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
