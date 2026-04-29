import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500); // Mock submission
  };

  return (
    <section id="contact" className="py-32 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Get in Touch.
            </h2>
            <div className="w-12 h-1 bg-foreground mx-auto md:mx-0"></div>
          </div>
          <p className="text-muted-foreground font-light max-w-md text-base md:text-lg">
            Have a project in mind? Let's build something reliable and useful.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-zinc-950 p-10 lg:p-14 border border-border"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input id="name" required placeholder="John Doe" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input id="subject" required placeholder="Project Inquiry" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea id="message" required placeholder="Hello, I'd like to discuss..." className="bg-transparent border-0 border-b border-border rounded-none px-0 min-h-[120px] resize-none focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
              </div>
              
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-foreground text-background hover:bg-zinc-800 rounded-none h-14 uppercase tracking-widest text-sm font-mono mt-8 transition-colors duration-300">
                {isSubmitting ? "Sending..." : "Submit Message"}
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Location</h3>
              <p className="text-xl font-serif text-foreground">Dhaka, Bangladesh</p>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Email</h3>
              <a href="mailto:shakayet.dev@gmail.com" className="text-xl font-serif text-foreground hover:text-zinc-500 transition-colors inline-block relative group">
                shakayet.dev@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Phone / WhatsApp</h3>
              <a href="https://wa.me/8801869943362" target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-foreground hover:text-zinc-500 transition-colors inline-block relative group">
                +880 186 994 3362
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Availability</h3>
              <p className="text-xl font-serif text-foreground flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-500 border-2 border-background"></span>
                </span>
                Open for opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
