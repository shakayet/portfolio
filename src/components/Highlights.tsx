import React from 'react';
import { motion } from 'framer-motion';

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "OCR Receipt Parsing System",
      description: "Built an OCR-based receipt parser that automatically extracts price and category data from uploaded images to streamline financial tracking."
    },
    {
      title: "Stripe Subscription Integration",
      description: "Integrated complete Stripe subscription flows, including secure webhook handling, invoice generation, and persistent subscription state tracking."
    },
    {
      title: "Threshold Alert & Notification Engine",
      description: "Implemented a robust event-driven notification system for delivering automated monthly reports and real-time budget threshold alerts."
    },
    {
      title: "Automated Data Scraping Pipelines",
      description: "Engineered complex, resilient data extraction and workflow automation pipelines using headless browser automation with Puppeteer."
    },
    {
      title: "Secure Authentication Architecture",
      description: "Developed enterprise-grade authentication and role-based authorization flows utilizing dual-token JWT strategies and Redis-backed session management."
    },
    {
      title: "Scalable Media Processing",
      description: "Architected highly scalable file upload, validation, and image optimization pipelines backed by AWS S3 and served via CloudFront."
    }
  ];

  return (
    <section id="highlights" className="py-32 bg-background text-foreground border-t border-border">
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
              Engineering Highlights.
            </h2>
            <div className="w-12 h-1 bg-foreground mx-auto md:mx-0"></div>
          </div>
          <p className="text-muted-foreground font-light max-w-md text-base md:text-lg">
            A selection of complex backend features and architectural solutions I've engineered for production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-zinc-950 p-10 group hover:bg-zinc-900/50 transition-colors duration-500 flex flex-col justify-center"
            >
              <h3 className="text-xl font-serif font-bold text-foreground mb-4 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
