/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaStar, FaExternalLinkAlt, FaCodeBranch, FaHistory, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
}

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const GitHubStats: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);

  const username = 'shakayet';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          
          setUser(userData);
          // Only show top 4 for the UI
          setRepos(reposData.slice(0, 4));
          
          // Calculate total stars
          const stars = reposData.reduce((acc: number, repo: Repo) => acc + repo.stargazers_count, 0);
          setTotalStars(stars);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const theme = {
    light: ['#111111', '#1e1b4b', '#312e81', '#4338ca', '#6366f1'],
    dark: ['#111111', '#1e1b4b', '#312e81', '#4338ca', '#6366f1'],
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border overflow-hidden bg-background">
      <motion.div 
        className="max-w-screen-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="section-heading">06 / Open Source</motion.div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Commitment to <br />
              <span className="text-gradient italic font-serif">consistency</span> and code.
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Real-time synchronization with GitHub to showcase engineering maturity, active repository maintenance, and daily development streaks.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 lg:gap-16 lg:pt-4">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-4xl font-bold tabular-nums">{user?.public_repos ?? '--'}</span>
              <span className="mono-label text-[10px] text-primary uppercase tracking-[0.2em]">Repositories</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-4xl font-bold tabular-nums">{totalStars ?? '--'}</span>
              <span className="mono-label text-[10px] text-primary uppercase tracking-[0.2em]">Total Stars</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-4xl font-bold tabular-nums">{user?.followers ?? '--'}</span>
              <span className="mono-label text-[10px] text-primary uppercase tracking-[0.2em]">Followers</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Activity Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Heatmap Card */}
            <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 relative group overflow-hidden">
              <div className="flex flex-col gap-10 h-full">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <FaHistory size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold block">Contribution Calendar</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Yearly Activity</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] text-primary mono-label font-bold uppercase tracking-widest">Live</span>
                  </div>
                </div>

                <div className="flex justify-center items-center py-6 overflow-x-auto custom-scrollbar">
                  {!loading ? (
                    <GitHubCalendar 
                      username={username} 
                      blockSize={13}
                      blockMargin={5}
                      colorScheme="dark"
                      theme={theme as any}
                      fontSize={12}
                    />
                  ) : (
                    <div className="flex gap-2">
                      {Array.from({ length: 45 }).map((_, i) => (
                        <div key={i} className="w-3.5 h-3.5 bg-white/5 rounded-sm animate-pulse" style={{ animationDelay: `${i * 30}ms` }}></div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <FaCodeBranch size={14} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">Architecture Evolution</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                        Reflecting daily commits, modular restructuring, and system improvements across the technical ecosystem.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-secondary/10">
                      <FaFire size={14} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">Development Velocity</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                        Consistent delivery of high-quality code through rigorous maintenance and active open-source participation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Streak Card */}
              <motion.div variants={itemVariants} className="glass-card p-8 group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute -inset-full bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <FaFire size={20} className="text-secondary" />
                  </div>
                  <span className="text-lg font-bold">Contribution Streak</span>
                </div>
                <div className="flex justify-center items-center min-h-[120px]">
                  <img 
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000&stroke=6366f1&ring=6366f1&fire=6366f1&currStreakNum=6366f1&sideNums=6366f1&sideLabels=94a3b8&dates=94a3b8&currStreakLabel=6366f1`} 
                    alt="GitHub Streak" 
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </motion.div>

              {/* Language Card */}
              <motion.div variants={itemVariants} className="glass-card p-8 group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute -inset-full bg-gradient-to-tr from-secondary/0 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <FaCodeBranch size={20} className="text-primary" />
                  </div>
                  <span className="text-lg font-bold">Language Ecosystem</span>
                </div>
                <div className="flex justify-center items-center min-h-[120px]">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=6366f1&text_color=94a3b8&icon_color=6366f1`} 
                    alt="Top Languages" 
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="flex items-center justify-between px-2">
                 <span className="mono-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Recently Updated</span>
                 <div className="h-px flex-1 mx-4 bg-white/10"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {loading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-32 bg-white/[0.02] border border-white/[0.05] rounded-2xl animate-pulse"></div>
                  ))
                ) : (
                  repos.map((repo, idx) => (
                    <motion.a 
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group/repo relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover/repo:h-full transition-all duration-500"></div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-sm font-bold truncate max-w-[200px] group-hover/repo:text-primary transition-colors">
                          {repo.name}
                        </h4>
                        <FaExternalLinkAlt size={10} className="text-muted-foreground opacity-0 group-hover/repo:opacity-100 group-hover/repo:translate-x-1 group-hover/repo:-translate-y-1 transition-all" />
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-4 font-light leading-relaxed">
                        {repo.description || 'No description provided.'}
                      </p>
                      <div className="flex items-center gap-5 text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                          <span className="text-white/80 font-medium">{repo.language || 'Code'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaStar size={10} className="text-secondary" />
                          <span className="text-white/80 font-medium">{repo.stargazers_count}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))
                )}
              </div>

              <motion.a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full py-5 flex items-center justify-center gap-4 rounded-2xl bg-white text-black text-[11px] uppercase tracking-[0.3em] font-black hover:bg-primary hover:text-white transition-all duration-500 shadow-xl shadow-black/20"
              >
                <FaGithub size={18} />
                Explore Repositories
              </motion.a>
            </motion.div>

            {/* Extra Stats Card */}
            <motion.div variants={itemVariants} className="glass-card p-8 mt-auto relative overflow-hidden group">
               <div className="absolute -inset-full bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
               <div className="relative z-10">
                  <span className="text-[10px] text-primary mono-label uppercase tracking-widest block mb-4">Engineering Maturity</span>
                  <h4 className="text-xl font-bold mb-4">Codebase Integrity</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light mb-6">
                    Maintaining high standards of documentation, testing, and modular architecture across all public and private infrastructures.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    CI/CD Automated
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
