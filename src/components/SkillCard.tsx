import React from 'react';
import type { SkillCategory } from '../types';
import CategoryIcon from './CategoryIcon';
import { motion, type Variants } from 'framer-motion';

interface SkillCardProps {
  category: SkillCategory;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-background p-10 flex flex-col h-full group hover:bg-zinc-900/50 transition-colors duration-500"
    >
      <div className="flex flex-col mb-10">
        <div className="w-10 h-10 flex items-center justify-center text-foreground mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <CategoryIcon path={category.icon} />
        </div>
        <h3 className="text-2xl font-serif font-semibold tracking-wide text-foreground">
          {category.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {category.skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="text-xs font-mono font-medium tracking-tight text-muted-foreground bg-zinc-900 px-3 py-1.5 border border-border group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
