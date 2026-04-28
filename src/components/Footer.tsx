import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-16 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#hero" className="text-2xl font-serif font-bold tracking-tight text-foreground inline-block mb-3">
            Shakayet.
          </a>
          <p className="text-muted-foreground font-light text-sm max-w-xs mx-auto md:mx-0">
            © {new Date().getFullYear()} Shakayet Hossain.<br />
            Designed with absolute minimalism.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/shakayet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/srabon-shakhawat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:shakayet.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
