import React, { useRef } from 'react';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo('.reveal-text', 
      { y: 120, opacity: 0, rotateZ: 2 }, 
      { y: 0, opacity: 1, rotateZ: 0, duration: 1.4, stagger: 0.15, delay: 0.2 }
    )
    .fromTo('.reveal-fade',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 },
      "-=0.8"
    );
  }, { scope: container });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background" ref={container}>
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-background to-background -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-start md:items-center text-left md:text-center">
        <div className="max-w-4xl w-full flex flex-col items-start md:items-center">
          
          <div className="overflow-hidden mb-4 py-2">
            <h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
              Shakayet Hossain.
            </h1>
          </div>
          
          <div className="overflow-hidden mb-10 py-2">
            <h2 className="reveal-text text-3xl md:text-5xl lg:text-6xl font-serif text-muted-foreground leading-[1.1] tracking-tight">
              Backend Engineer.
            </h2>
          </div>
          
          <p className="reveal-fade text-lg md:text-xl text-muted-foreground max-w-2xl mb-14 leading-relaxed font-light">
            I build highly scalable, secure, and performant backend systems. 
            Specializing in cloud-native architecture, robust APIs, and sophisticated data solutions.
          </p>
          
          <div className="reveal-fade flex flex-wrap justify-start md:justify-center gap-6">
            <Button variant="outline" size="lg" className="rounded-none border-border hover:bg-foreground hover:text-background transition-all duration-300 h-14 px-8 text-sm tracking-wide">
              <a href="https://github.com/shakayet" target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full">
                <FaGithub className="mr-3 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border-border hover:bg-foreground hover:text-background transition-all duration-300 h-14 px-8 text-sm tracking-wide">
              <a href="https://linkedin.com/in/srabon-shakhawat" target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full">
                <FaLinkedin className="mr-3 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" className="rounded-none bg-foreground text-background hover:bg-zinc-800 transition-all duration-300 h-14 px-10 text-sm tracking-wide">
              <a href="#contact" className="flex items-center w-full h-full">
                Contact Me
              </a>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
