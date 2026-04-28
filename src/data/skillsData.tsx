import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "C"],
    icon: (
      <>
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </>
    )
  },
  {
    title: "Backend & Frameworks",
    skills: ["Node.js", "Express.js", "REST API", "WebSockets", "JWT / OAuth"],
    icon: (
      <>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </>
    )
  },
  {
    title: "Databases & ORM",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "MySQL"],
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </>
    )
  },
  {
    title: "Cloud & Storage",
    skills: ["AWS S3", "AWS CloudFront", "AWS EC2", "DigitalOcean", "Cloudflare"],
    icon: (
      <>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </>
    )
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "Nginx", "PM2", "GitHub Actions", "CI/CD Pipelines"],
    icon: (
      <>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </>
    )
  },
  {
    title: "Security & Payments",
    skills: ["Stripe", "PayPal", "Apple Pay", "JWT", "bcrypt", "CORS", "Rate Limiting"],
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </>
    )
  },
  {
    title: "Testing & Observability",
    skills: ["Jest", "Supertest", "Postman", "OpenTelemetry", "Sentry", "Logging"],
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </>
    )
  },
  {
    title: "Architecture & Workflow",
    skills: ["Git", "System Design", "Microservices", "Jira", "Figma", "Agile"],
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </>
    )
  }
];
