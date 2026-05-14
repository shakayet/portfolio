import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-6 flex flex-col gap-8 md:gap-10">
            <a href="#hero" className="text-2xl font-medium tracking-tighter text-white uppercase group w-fit">
              Shakayet<span className="text-muted-foreground italic transition-all duration-500 group-hover:pl-2">.</span>
            </a>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-md">
              Building the next generation of scalable backend systems. Combining technical precision with creative problem-solving to build resilient digital foundations.
            </p>
            <div className="flex gap-8">
              {[
                { name: 'GitHub', url: 'https://github.com/shakayet', icon: FaGithub },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/srabon-shakhawat', icon: FaLinkedin },
                { name: 'WhatsApp', url: 'https://wa.me/8801869943362', icon: FaWhatsapp }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-white transition-all duration-300 p-2 -m-2"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10">
            <span className="mono-label">System Index</span>
            <ul className="grid grid-cols-2 lg:flex lg:flex-col gap-4">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-light text-muted-foreground hover:text-white transition-all duration-300 flex items-center gap-3 group">
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-10">
            <span className="mono-label">Current Deployment</span>
            <div className="p-6 md:p-8 border border-border bg-white/[0.01] flex flex-col gap-4 rounded-xl md:rounded-none">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Live Node</span>
              </div>
              <p className="text-[11px] font-light text-muted-foreground leading-relaxed">
                Operating from Dhaka, Bangladesh. Open for global collaborations and complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <span className="mono-label text-[8px] md:text-[9px]">
            © {new Date().getFullYear()} Shakayet Hossain. All rights reserved.
          </span>
          <span className="mono-label text-[8px] md:text-[9px]">
            Built with <span className="text-primary italic">Precision</span> in Dhaka
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
