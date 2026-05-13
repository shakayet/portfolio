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
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 flex items-center justify-center bg-background border border-primary/20 text-primary shadow-2xl backdrop-blur-xl group hover:border-primary transition-colors duration-500"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      <FaWhatsapp className="w-6 h-6 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-background border border-primary/10 text-primary text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        Chat with me
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
