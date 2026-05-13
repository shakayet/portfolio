import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">04 / Journey</div>
        
        <div className="flex flex-col gap-24">
          {/* 1. Professional Experience - Full Width */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <Briefcase size={20} className="text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Professional <span className="text-gradient italic font-serif">Evolution</span>
              </h2>
            </div>

            <div className="flex flex-col gap-12">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute -inset-full bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12 border-b border-border/50 pb-8">
                    <div className="flex flex-col gap-2">
                      <span className="mono-label text-primary">April 2024 — Present</span>
                      <h3 className="text-3xl font-bold tracking-tight text-white">SparkTech Agency</h3>
                    </div>
                    <div className="md:text-right">
                      <span className="text-lg font-medium text-white/90">Team Lead / Jr. Backend Developer</span>
                      <p className="text-sm text-muted-foreground mt-1">Full-time • Remote</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <span className="mono-label">Core Responsibilities</span>
                    </div>
                    <div className="lg:col-span-8">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                        <li className="flex gap-4">
                          <span className="text-primary mt-1.5">•</span>
                          <span>Leading a high-performing backend team to deliver complex projects on schedule.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary mt-1.5">•</span>
                          <span>Engineering scalable solutions with Node.js, Express, and MongoDB.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary mt-1.5">•</span>
                          <span>Implementing best practices: code reviews, automated testing, and clean architecture.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary mt-1.5">•</span>
                          <span>Optimizing performance with Redis caching and query optimization.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-primary mt-1.5">•</span>
                          <span>Streamlining deployments using Docker and CI/CD pipelines.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Academic & Competitive Foundation - Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <GraduationCap size={20} className="text-secondary" />
                <h2 className="text-2xl font-bold tracking-tight">Academic <span className="text-secondary italic">Foundation</span></h2>
              </div>
              
              <div className="glass-card p-8 group h-full">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="mono-label text-secondary">2018 — 2024</span>
                      <h4 className="text-xl font-bold text-white">B.Sc. in Computer Science & Engineering</h4>
                      <p className="text-muted-foreground">National University (Tejgaon College)</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-secondary font-bold px-3 py-1 border border-secondary/20 rounded-full">Graduated</span>
                  </div>
                  
                  <div className="pt-6 border-t border-border/50 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">CGPA</span>
                      <span className="text-sm font-mono text-white">3.54 / 4.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Club Role</span>
                      <span className="text-sm font-mono text-white">President, Programming Club</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Award size={20} className="text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">Competitive <span className="text-primary italic">Accolades</span></h2>
              </div>
              
              <div className="glass-card p-8 group h-full">
                <div className="flex flex-col gap-6">
                  <span className="mono-label">ICPC Regionals</span>
                  <div className="flex flex-col gap-4">
                    {[
                      { name: "ICPC Regional 2022", rank: "Rank 54", color: "from-primary/20" },
                      { name: "ICPC Regional 2021", rank: "Rank 86", color: "from-white/10" },
                      { name: "ICPC Regional 2023", rank: "Rank 104", color: "from-secondary/20" }
                    ].map((ach, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all duration-300">
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{ach.name}</span>
                        <span className="text-sm font-mono font-bold text-white">
                          {ach.rank}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Leadership & Impact - Full Width */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <Users size={20} className="text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Leadership & <span className="text-secondary italic">Impact</span>
              </h2>
            </div>

            <div className="glass-card p-8 md:p-12 group relative overflow-hidden">
              <div className="absolute -inset-full bg-gradient-to-tr from-secondary/0 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-border/50 pb-8">
                  <div className="flex flex-col gap-2">
                    <span className="mono-label text-secondary">2018 — 2024</span>
                    <h3 className="text-3xl font-bold tracking-tight text-white">Programming Club, Tejgaon College</h3>
                  </div>
                  <div className="md:text-right">
                    <span className="text-lg font-medium text-white/90 italic">President</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4">
                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                      Driving technical excellence and community growth through event organization and peer mentorship.
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "Organization", desc: "Organized a two-day CSE Fest and multiple programming workshops." },
                        { title: "Mentorship", desc: "Mentored students for ICPC and NCPC preparation." },
                        { title: "Technical Training", desc: "Conducted regular sessions on problem-solving and STL fundamentals." }
                      ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300">
                          <h4 className="text-xs uppercase tracking-widest text-secondary font-bold mb-3">{item.title}</h4>
                          <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
