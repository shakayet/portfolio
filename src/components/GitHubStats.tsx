import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubStats: React.FC = () => {
  // These would ideally be fetched from API, but for a static high-performance portfolio, 
  // we can use stylized placeholders or a custom heatmap SVG.
  // I will use a stylized representation of your GitHub activity.

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">06 / Open Source</div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center lg:text-left">
              Commitment to <br />
              <span className="text-gradient italic font-serif">consistency</span> and code.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed text-center lg:text-left">
              Active developer with a focus on backend infrastructure, open-source contributions, and continuous system improvement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold">500+</span>
              <span className="mono-label text-[10px] text-primary">Contributions</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold">15+</span>
              <span className="mono-label text-[10px] text-primary">Repositories</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold">365</span>
              <span className="mono-label text-[10px] text-primary">Day Streak</span>
            </div>
          </div>
        </div>

        {/* Stylized Heatmap Representation */}
        <div className="glass-card p-8 md:p-12 relative group overflow-hidden">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FaGithub size={24} className="text-muted-foreground" />
                <span className="text-lg font-medium">GitHub Activity Profile</span>
              </div>
              <a 
                href="https://github.com/shakayet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
              >
                Follow @shakayet
              </a>
            </div>

            <div className="grid grid-cols-7 md:grid-cols-24 lg:grid-cols-52 gap-2">
               {/* This generates a stylized heatmap grid */}
               {Array.from({ length: 156 }).map((_, i) => {
                 const opacity = Math.random() > 0.7 ? (Math.random() * 0.8 + 0.2) : 0.05;
                 const color = opacity > 0.5 ? 'bg-primary' : 'bg-white';
                 return (
                   <div 
                     key={i} 
                     className={`aspect-square rounded-sm ${color} transition-all duration-700 hover:scale-150 hover:z-20`}
                     style={{ opacity }}
                   ></div>
                 );
               })}
            </div>

            <div className="flex justify-between items-center text-[10px] text-muted-foreground font-mono">
              <span>Jan 2024</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white/5 rounded-sm"></div>
                  <div className="w-2 h-2 bg-primary/30 rounded-sm"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-sm"></div>
                  <div className="w-2 h-2 bg-primary rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
              <span>Dec 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
