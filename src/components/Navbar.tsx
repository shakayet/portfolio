import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-8 left-0 w-full z-50 px-4 md:px-6"
    >
      <div className={`container mx-auto max-w-5xl glass-island transition-all duration-700 ${scrolled ? 'py-3 px-6 md:px-8' : 'py-4 md:py-5 px-6 md:px-10'}`}>
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-medium tracking-tighter text-white group flex items-center gap-4">
            <div className="relative w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-primary transition-colors duration-500">
              <span className="text-xs font-bold">S</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
            </div>
            <span className="hidden sm:block uppercase tracking-[0.3em] text-[10px] font-bold">Shakayet</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="group flex items-center gap-3 px-6 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
            >
              Let's Talk
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </nav>

          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 left-6 right-6 p-12 md:hidden flex flex-col gap-10 items-center bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem]"
          >
            {navLinks.concat([{ name: 'Contact', href: '#contact' }]).map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
