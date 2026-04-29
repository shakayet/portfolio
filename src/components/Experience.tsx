import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(lineRef.current, 
      { height: '0%' },
      { 
        height: '100%', 
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    <section id="experience" className="py-32 bg-zinc-950 text-foreground border-t border-border" ref={container}>
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Experience.
          </h2>
          <div className="w-12 h-1 bg-foreground mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mb-32 pl-8 relative">
          <div className="absolute top-0 left-0 w-[1px] h-full bg-border"></div>
          <div ref={lineRef} className="absolute top-0 left-0 w-[2px] bg-foreground origin-top"></div>
          
          <div className="relative pb-16 last:pb-0">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="absolute -left-8 -translate-x-1/2 w-3 h-3 bg-background border-2 border-foreground"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-background border border-border p-10 hover:bg-zinc-900/50 transition-colors duration-500"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-8 border-b border-border">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Team Lead / Jr. Backend Developer</h3>
                  <p className="text-muted-foreground font-mono text-sm mt-2">SparkTech Agency</p>
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-foreground bg-zinc-900 px-4 py-2 border border-border">April 2024 – Present</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Led a high-performing backend team to deliver multiple complex projects on schedule, mentoring developers and driving technical excellence.",
                  "Architected and implemented scalable backend solutions using Node.js/Express and MongoDB for enterprise clients.",
                  "Instituted best practices like code reviews and automated testing to reduce defects and streamline development.",
                  "Enhanced API performance using Redis caching and optimized database queries.",
                  "Established CI/CD pipelines and containerized deployments using Docker and GitHub Actions."
                ].map((item, idx) => (
                  <li key={idx} className="relative pl-6 text-muted-foreground font-light text-base leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Education & Extracurricular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border">
          <div className="bg-background p-10 lg:p-14 flex flex-col hover:bg-zinc-900/50 transition-colors duration-500">
            <h3 className="text-3xl font-serif font-bold mb-10 text-foreground">Achievements.</h3>
            <ul className="flex flex-col gap-4 mb-12">
              {[
                { name: "ICPC Dhaka Regional 2021", rank: "Rank 86" },
                { name: "ICPC Dhaka Regional 2022", rank: "Rank 54" },
                { name: "ICPC Dhaka Regional 2023", rank: "Rank 104" }
              ].map((ach, idx) => (
                <li key={idx} className="flex justify-between items-center pb-4 border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground last:border-0 last:pb-0">
                  <strong className="text-foreground font-medium">{ach.name}</strong> <span>{ach.rank}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-serif font-bold mb-8 text-foreground mt-auto">Education.</h3>
            <div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">B.Sc. in Computer Science</h4>
              <p className="text-muted-foreground font-mono text-sm mb-6">National University</p>
              <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-500 pb-4 border-b border-border">
                <span>2018 – 2024</span>
                <span className="text-foreground">GPA: 3.54</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-10 lg:p-14 flex flex-col hover:bg-zinc-900/50 transition-colors duration-500">
            <h3 className="text-3xl font-serif font-bold mb-10 text-foreground">Leadership.</h3>
            <div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">President, Programming Club</h4>
              <p className="text-muted-foreground font-mono text-sm mb-6">Tejgaon College</p>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10 pb-4 border-b border-border">
                <span>2018 – 2024</span>
              </div>
              <ul className="space-y-6">
                {[
                  "Organized a two-day CSE Fest and multiple programming workshops on problem solving and STL fundamentals.",
                  "Mentored student teams for ICPC and NCPC preparation.",
                  "Developed and led regular problem-solving sessions.",
                  "Fostered teamwork, leadership, and continuous learning."
                ].map((item, idx) => (
                  <li key={idx} className="relative pl-6 text-muted-foreground font-light text-base leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
