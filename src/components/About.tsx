import React from 'react';
import { Cpu } from 'lucide-react';
import { 
  SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, 
  SiGithubactions
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const About: React.FC = () => {
  const stack = [
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
    { icon: SiGithubactions, name: 'CI/CD', color: '#F05032' },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">01 / Background</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Narrative Content */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Building systems that <br />
                <span className="text-gradient italic font-serif">endure</span> and scale.
              </h2>
              <div className="h-px w-24 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
              <p>
                I am a software engineer dedicated to the art of backend engineering. I transform complex requirements into simple, scalable, and reliable systems that form the backbone of modern digital experiences.
              </p>
              <p>
                With a strong foundation in competitive programming (ICPC), I bring a rigorous approach to algorithm design and performance optimization, ensuring every line of code serves a purpose.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
              <div className="flex flex-col gap-2">
                <span className="mono-label">Experience</span>
                <span className="text-xl font-medium">3+ Years</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mono-label">Projects</span>
                <span className="text-xl font-medium">15+ Finished</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mono-label">Focus</span>
                <span className="text-xl font-medium">Backend</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mono-label">Status</span>
                <span className="text-xl font-medium text-primary">Available</span>
              </div>
            </div>
          </div>

          {/* Visual/Tech Stack Side */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-border group">
              <img 
                src="/profile.jpg" 
                alt="Shakayet Hossain" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col gap-1">
                  <span className="mono-label text-white/70">Backend Developer</span>
                  <span className="text-xl font-medium text-white uppercase tracking-wider">Shakayet Hossain</span>
                </div>
              </div>
            </div>

            <div className="p-8 border border-border/50 flex flex-col gap-8 bg-white/[0.01] rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="mono-label">Core Infrastructure Stack</span>
                <Cpu size={14} className="text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-3">
                {stack.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group/item flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div 
                      className="flex items-center justify-center transition-colors duration-300"
                    >
                      <item.icon 
                        size={18} 
                        className="transition-transform duration-300 group-hover/item:scale-110" 
                        style={{ color: item.color }} 
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground group-hover/item:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
