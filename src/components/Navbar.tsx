import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-5 bg-background/95 backdrop-blur-sm border-b border-border' : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-xl font-serif font-bold tracking-tight text-foreground">
          Shakayet.
        </a>
        
        <nav className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full sm:w-80 md:w-auto bg-background md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 md:gap-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-border md:border-none z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
          {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="px-6 py-2.5 text-sm font-medium border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <button 
          className="md:hidden relative z-50 w-6 h-5 flex flex-col justify-between focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[1px] bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
          <span className={`w-full h-[1px] bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[1px] bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
