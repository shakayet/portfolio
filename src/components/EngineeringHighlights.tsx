/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ShieldCheck, Activity, Cpu, Layers } from 'lucide-react';

const highlights = [
  {
    title: "OCR Receipt Processing Pipeline",
    description: "Built an intelligent OCR parser that reduced manual expense entry time by ~80%. Implemented keyword-based auto-categorization for multi-regional receipts.",
    metric: "80% Time Reduction",
    icon: <Cpu className="text-primary" size={24} />
  },
  {
    title: "Stripe Webhook Architecture",
    description: "Engineered a resilient subscription system with idempotent webhook handling, ensuring 100% financial data consistency across complex trial-to-paid transitions.",
    metric: "100% Data Integrity",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    title: "Real-time Notification Engine",
    description: "Architected a high-concurrency notification system using Socket.IO and FCM, delivering threshold-based business alerts and transactional updates with sub-100ms latency.",
    metric: "<100ms Latency",
    icon: <Activity className="text-primary" size={24} />
  },
  {
    title: "Background Job Orchestration",
    description: "Implemented robust queue processing using BullMQ and Redis for resource-intensive tasks like PDF generation and multi-channel reporting, offloading main thread congestion.",
    metric: "Zero Thread Blocking",
    icon: <Layers className="text-secondary" size={24} />
  }
];

const EngineeringHighlights: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border bg-white/[0.01] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading text-primary">02 / Technical Impact</div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
              Engineering <span className="text-gradient italic font-serif">highlights</span> and impact.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Selected achievements in backend architecture, system optimization, and high-stakes infrastructure delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 group relative overflow-hidden flex flex-col h-full">
              <div className="absolute -inset-full bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-2.5 md:p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                  </div>
                  <span className="mono-label text-[8px] bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">{item.metric}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                <div className="h-px w-full bg-white/[0.05] group-hover:bg-primary/30 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
