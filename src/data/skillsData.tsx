import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Node.js, Express, TypeScript — for building highly scalable and maintainable APIs.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    skills: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'RESTful APIs', 'GraphQL', 'Microservices', 'WebSocket']
  },
  {
    title: 'Database',
    description: 'PostgreSQL, MongoDB, Redis — for resilient data modeling and high-performance caching.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Prisma', 'SQL/NoSQL']
  },
  {
    title: 'Tools & DevOps',
    description: 'Docker, AWS, CI/CD — for automated testing, containerization, and reliable deployments.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    skills: ['Git & GitHub', 'Docker', 'AWS (S3, EC2)', 'Cloudinary', 'CI/CD Pipelines', 'Postman', 'Linux']
  },
  {
    title: 'Frontend & Others',
    description: 'React, Next.js, Tailwind — for delivering complete full-stack features when required.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  }
];
