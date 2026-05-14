import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/8801869943362"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: 2, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed bottom-10 right-10 z-[100] w-16 h-16 flex items-center justify-center bg-background/80 border border-primary/30 text-primary shadow-2xl backdrop-blur-2xl rounded-2xl group hover:border-primary transition-all duration-500 hover:shadow-primary/20"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
      <FaWhatsapp className="w-8 h-8 relative z-10" />
      
      {/* Dynamic Pulse Effect */}
      <span className="absolute inset-0 rounded-2xl border border-primary/50 animate-ping opacity-20 group-hover:hidden"></span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-6 px-4 py-2 bg-background/90 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none rounded-lg backdrop-blur-xl">
        Chat with me
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
