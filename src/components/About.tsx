import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 text-foreground border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            About.
          </h2>
          <div className="w-12 h-1 bg-foreground"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden">
              <div className="absolute inset-0 bg-foreground mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10"></div>
              <img src="/profile.jpg" alt="Shakayet Hossain" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-border -z-10 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>
          
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light"
            >
              <p className="text-xl md:text-2xl text-foreground font-serif leading-snug">
                I am a software engineer who deeply enjoys solving real-world problems through code.
              </p>
              <p>
                I focus on building practical, scalable, and maintainable backend systems that solve tangible business problems. My expertise lies in designing robust architectures, integrating complex third-party APIs, and engineering solutions that scale gracefully under load.
              </p>
              <p>
                I care profoundly about clean code, system architecture, and actual user impact. Rather than over-engineering, I like turning complex requirements into simple, reliable, and production-ready solutions that teams can easily maintain and extend.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mt-16 border border-border"
            >
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Systems Deployed", value: "20+" },
                { label: "Engineering Teams", value: "Lead" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-background p-8 text-center flex flex-col justify-center items-center hover:bg-zinc-900/50 transition-colors duration-500">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">{stat.value}</h3>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
