import React from 'react';
import type { SkillCategory } from '../types';
import CategoryIcon from './CategoryIcon';
import { motion } from 'framer-motion';
import { 
  SiTypescript, SiJavascript, SiPython, SiC, SiCplusplus, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, 
  SiRedis, SiDocker, SiNginx, SiGithubactions, 
  SiDigitalocean, SiCloudflare, SiStripe, SiPaypal, SiGooglepay, 
  SiApplepay, SiGit, SiGithub, SiGitlab, SiJira, SiClickup, 
  SiFigma, SiEslint, SiPrettier, SiJest, SiPostman, SiSwagger, 
  SiJsonwebtokens, SiSocketdotio, SiPrisma, SiRabbitmq, 
  SiFirebase, SiZod, SiVite, 
  SiWebrtc, SiAgora, SiPm2, SiQuickbooks
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { 
  Activity, ShieldCheck, Timer, FileText, RefreshCw, Lock, TestTube, Webhook 
} from 'lucide-react';

const iconMap: Record<string, { icon: React.ElementType, color: string }> = {
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'C': { icon: SiC, color: '#A8B9CC' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'Node.js (Express.js)': { icon: SiNodedotjs, color: '#339933' },
  'Express': { icon: SiExpress, color: '#ffffff' },
  'MongoDB (Mongoose)': { icon: SiMongodb, color: '#47A248' },
  'PostgreSQL (Prisma)': { icon: SiPostgresql, color: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Redis Caching': { icon: SiRedis, color: '#DC382D' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Nginx': { icon: SiNginx, color: '#009639' },
  'AWS (EC2, S3, CloudFront)': { icon: FaAws, color: '#FF9900' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  'DigitalOcean': { icon: SiDigitalocean, color: '#0080FF' },
  'Cloudflare': { icon: SiCloudflare, color: '#F38020' },
  'Stripe': { icon: SiStripe, color: '#008CDD' },
  'PayPal': { icon: SiPaypal, color: '#003087' },
  'Google Pay': { icon: SiGooglepay, color: '#4285F4' },
  'Apple Pay': { icon: SiApplepay, color: '#ffffff' },
  'Git': { icon: SiGit, color: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#ffffff' },
  'GitLab': { icon: SiGitlab, color: '#FC6D26' },
  'Jira': { icon: SiJira, color: '#0052CC' },
  'ClickUp': { icon: SiClickup, color: '#7B68EE' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'ESLint': { icon: SiEslint, color: '#4B32C3' },
  'Prettier': { icon: SiPrettier, color: '#F7B93E' },
  'Jest': { icon: SiJest, color: '#C21325' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'Swagger/OpenAPI': { icon: SiSwagger, color: '#85EA2D' },
  'Webhooks': { icon: Webhook, color: '#00BFA5' },
  'Agora': { icon: SiAgora, color: '#0096E6' },
  'WebRTC': { icon: SiWebrtc, color: '#ffffff' },
  'BullMQ': { icon: Activity, color: '#DC382D' },
  'Queue Processing': { icon: Activity, color: '#DC382D' },
  'PM2': { icon: SiPm2, color: '#2B037A' },
  'CI/CD': { icon: RefreshCw, color: '#F05032' },
  'bcrypt': { icon: Lock, color: '#888888' },
  'CORS': { icon: ShieldCheck, color: '#4CAF50' },
  'Rate Limiting': { icon: Timer, color: '#FF9800' },
  'REST API Design': { icon: SiPostman, color: '#FF6C37' },
  'Supertest': { icon: TestTube, color: '#C21325' },
  'Structured Logging': { icon: FileText, color: '#4FC3F7' },
  'QuickBooks': { icon: SiQuickbooks, color: '#2CA01C' },
  'JWT': { icon: SiJsonwebtokens, color: '#ffffff' },
  'JWT/OAuth': { icon: SiJsonwebtokens, color: '#ffffff' },
  'WebSockets (Socket.IO)': { icon: SiSocketdotio, color: '#ffffff' },
  'Prisma': { icon: SiPrisma, color: '#2D3748' },
  'RabbitMQ': { icon: SiRabbitmq, color: '#FF6600' },
  'Firebase Auth': { icon: SiFirebase, color: '#FFCA28' },
  'Zod': { icon: SiZod, color: '#3E67B1' },
  'Vite': { icon: SiVite, color: '#646CFF' }
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-10 flex flex-col h-full group relative overflow-hidden rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Background Glow */}
      <div className="absolute -inset-full bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-10">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
              <CategoryIcon path={category.icon} />
            </div>
            <span className="text-4xl font-bold font-mono opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 select-none">
              0{index + 1}
            </span>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
        
        {/* Skills Tag Section */}
        <div className="flex flex-wrap gap-3 mt-auto pt-10 border-t border-white/[0.05]">
          {category.skills.map((skill, idx) => {
            const item = iconMap[skill];
            const Icon = item?.icon;
            const brandColor = item?.color || '#888888';
            
            return (
              <div 
                key={idx} 
                className="group/skill flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div 
                  className="flex items-center justify-center transition-colors duration-300"
                  style={{ color: '#888888' }} // Initial gray color
                >
                  <div className="group-hover/skill:scale-110 transition-transform duration-300" style={{ color: brandColor }}>
                    {Icon ? <Icon size={18} /> : <span className="text-[10px] font-mono opacity-50">{skill[0]}</span>}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground group-hover/skill:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
