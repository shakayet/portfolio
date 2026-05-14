import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Efficient coding across multiple paradigms and systems.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C', 'C++']
  },
  {
    title: 'Software Engineering',
    description: 'Highly scalable APIs and real-time interaction systems.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    skills: ['Node.js', 'Express', 'REST API', 'Socket.IO', 'WebRTC', 'Agora', 'Webhooks']
  },
  {
    title: 'Performance & Scale',
    description: 'Message queues and high-performance caching strategies.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    skills: ['BullMQ', 'RabbitMQ', 'Redis Caching', 'Rate Limiting', 'Queue Processing', 'Structured Logging']
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Containerization and reliable cloud deployments.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    skills: ['Docker', 'Nginx', 'PM2', 'AWS Ecosystem', 'DigitalOcean', 'Cloudflare', 'CI/CD']
  },
  {
    title: 'Database & Systems',
    description: 'Resilient data modeling and high-performance storage.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma']
  },
  {
    title: 'FinTech & Payments',
    description: 'Secure and reliable financial transaction processing.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    skills: ['Stripe', 'PayPal', 'Google Pay', 'Apple Pay', 'QuickBooks']
  },
  {
    title: 'Security & Docs',
    description: 'Robust security measures and API documentation.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    skills: ['JWT/OAuth', 'bcrypt', 'Zod', 'CORS', 'Swagger/OpenAPI', 'Firebase Auth']
  },
  {
    title: 'Testing & Workflow',
    description: 'Streamlined collaboration and testing lifecycle.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    skills: ['Git Ecosystem', 'Jest', 'Supertest', 'Postman', 'Project Management', 'Figma']
  }
];
