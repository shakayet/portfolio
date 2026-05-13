import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillsData';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">02 / Competencies</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              A comprehensive technical <br />
              <span className="text-gradient italic font-serif">ecosystem</span> for scale.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Specialized in building high-availability backend systems, optimizing database performance, and engineering cloud-native infrastructures.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
