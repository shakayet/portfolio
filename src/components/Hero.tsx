import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo('.hero-line', 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 1.5, stagger: 0.2, delay: 0.5 }
    )
    .fromTo('.hero-reveal',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      "-=1"
    );
  }, { scope: container });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden" ref={container}>
      <div className="noise"></div>
      
      {/* Background Glows */}
      <div className="glow-blob bg-primary/40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] -top-[10%] -right-[10%] mix-blend-screen"></div>
      <div className="glow-blob bg-secondary/30 w-[250px] md:w-[500px] h-[250px] md:h-[500px] top-[40%] -left-[10%] mix-blend-screen"></div>
      
      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center lg:items-end">
          
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mono-label"
                >
                  Software Engineer // 001
                </motion.span>
                <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-[15ch]">
                  Engineering <br className="hidden sm:block" />
                  <span className="text-gradient italic">Resilient</span> Systems.
                </h1>
              </div>

              <div className="h-px w-full bg-border origin-left hero-line"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <p className="hero-reveal text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-md">
                  Building high-performance digital foundations with a focus on scalability, security, and clean backend architecture.
                </p>
                <div className="hero-reveal flex flex-wrap gap-6 md:gap-8 items-center md:justify-end">
                  <a href="#projects" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-white transition-all duration-300">
                    Explore Work
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a href="/shakayet_backend.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground hover:text-white transition-colors duration-300 border-b border-border hover:border-white pb-1">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 w-full">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="hero-reveal flex flex-col gap-6 p-6 md:p-8 glass-card w-full">
                <div className="flex items-center justify-between">
                  <span className="mono-label">Active Node</span>
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold uppercase tracking-tighter text-white">Dhaka</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Bangladesh</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-mono text-white/90">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">Live Status</span>
                  </div>
                </div>
              </div>

              <div className="hero-reveal flex gap-8 px-2">
                <a href="https://github.com/shakayet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-all duration-300">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/srabon-shakhawat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-all duration-300">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Specs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:block opacity-5 select-none">
        <div className="text-[20vh] font-mono font-black uppercase tracking-tighter vertical-text rotate-180">
          Backend_Dev
        </div>
      </div>
    </section>
  );
};

export default Hero;
