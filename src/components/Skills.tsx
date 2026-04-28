import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillsData';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-32 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Expertise.
            </h2>
            <div className="w-12 h-1 bg-foreground mx-auto md:mx-0"></div>
          </div>
          <p className="text-muted-foreground font-light max-w-md text-base md:text-lg">
            A carefully curated stack of tools, frameworks, and technologies I leverage to build robust architectures.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border border border-border"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
