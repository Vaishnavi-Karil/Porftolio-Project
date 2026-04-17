// import PorftolioVideo from "../public/assets/video/portflio_project.mp4";

import {
  FiAward,
  FiBook,
  FiBriefcase,
  FiClipboard,
  FiCode,
  FiFileText,
  FiHome,
  FiLayout,
  FiMail,
  FiMonitor,
  FiSettings,
  FiTag,
  FiTool,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaVuejs,
  FaAngular,
  FaPython,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGraphql,
  SiRedis,
  SiGooglecloud,
  SiFirebase,
  SiFigma,
} from 'react-icons/si';

// Skill categories with icons and project usage notes
export const skillCategories = [
  {
    name: 'Frontend',
    icon: FiCode,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    skills: [
      {
        name: 'React.js',
        icon: FaReact,
        value: 92,
        usage: 'Portfolio, E-commerce, Dashboard apps',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        value: 88,
        usage: 'SSR apps, SEO-friendly websites',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        value: 85,
        usage: 'Type-safe enterprise applications',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        value: 90,
        usage: 'Interactive web applications',
      },
      {
        name: 'Redux Toolkit',
        icon: SiRedux,
        value: 85,
        usage: 'State management in SPAs',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        value: 82,
        usage: 'Rapid UI development',
      },
    ],
  },
  {
    name: 'Backend',
    icon: FiMonitor,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    skills: [
      {
        name: 'Node.js',
        icon: FaNodeJs,
        value: 88,
        usage: 'REST APIs, Real-time apps',
      },
      {
        name: 'Express.js',
        icon: FaNodeJs,
        value: 85,
        usage: 'Web server framework',
      },
      {
        name: 'Python',
        icon: FaPython,
        value: 75,
        usage: 'Automation scripts, APIs',
      },
      {
        name: 'GraphQL',
        icon: SiGraphql,
        value: 78,
        usage: 'Flexible API queries',
      },
      {
        name: 'REST APIs',
        icon: FiCode,
        value: 90,
        usage: 'Backend services integration',
      },
    ],
  },
  {
    name: 'Database',
    icon: FaDatabase,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    skills: [
      {
        name: 'MongoDB',
        icon: SiMongodb,
        value: 85,
        usage: 'Document storage, MERN stack',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        value: 80,
        usage: 'Relational data, blogs',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        value: 78,
        usage: 'Complex queries, analytics',
      },
      {
        name: 'Redis',
        icon: SiRedis,
        value: 72,
        usage: 'Caching, session storage',
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: FaAws,
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    skills: [
      {
        name: 'AWS',
        icon: FaAws,
        value: 75,
        usage: 'S3, Amplify, Lambda, RDS',
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
        value: 78,
        usage: 'Auth, Realtime DB, Hosting',
      },
      { name: 'Docker', icon: FaDocker, value: 70, usage: 'Containerization' },
      { name: 'Linux', icon: FaLinux, value: 72, usage: 'Server management' },
    ],
  },
];

// Legacy skills format (kept for backward compatibility)
export const skills = [
  { name: 'React.js & Next.js', value: 90 },
  { name: 'Node.js & Express', value: 85 },
  { name: 'MongoDB & Mongoose', value: 80 },
  { name: 'Redux Toolkit', value: 85 },
  { name: 'PostgreSQL & MySQL', value: 80 },
  { name: 'AWS (Amplify, S3, RDS)', value: 70 },
];

export const services = [
  {
    title: 'Web Design',
    description: 'Creating beautiful and functional websites',
    icon: FiMonitor,
  },
  {
    title: 'Development',
    description: 'Full-stack MERN development services',
    icon: FiCode,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design approaches',
    icon: FiLayout,
  },
  {
    title: 'Consulting',
    description: 'Technical consulting and architecture',
    icon: FiClipboard,
  },
  {
    title: 'Branding',
    description: 'Complete brand identity solutions',
    icon: FiTag,
  },
  {
    title: 'SEO',
    description: 'Search engine optimization services',
    icon: FiTrendingUp,
  },
];



export const stats = [
  {
    value: '3+',
    label: 'Years Experience in MERN Development',
    icon: FiBriefcase,
  },
  {
    value: '5+',
    label: 'Real-World Projects (Frontend + Backend)',
    icon: FiCode,
  },
  {
    value: '4+',
    label: 'Expertise in React, Node.js, MongoDB, AWS',
    icon: FiTool,
  },
  {
    value: '5+',
    label: 'Hands-on Experience with Production Applications',
    icon: FiAward,
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Portfolio Application',
    category: 'web',
    description:
      'A responsive personal portfolio showcasing skills, projects, and professional experience with modern UI/UX.',
    techStack: ['React', 'Vite', 'CSS'],
    highlights: ['Responsive Design', 'Modern UI', 'Smooth Animations'],
    productionLink: 'https://portfolio-fullstack-mern-and-reactj.vercel.app/',
    githubLink: 'https://github.com/Vaishnavi-Karil/Porftolio-Project',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
  {
    id: 2,
    title: 'Blog Application',
    category: 'fullstack',
    description:
      'Full-featured blog platform with user authentication, CRUD operations, and admin dashboard.',
    techStack: ['Next.js', 'MySQL', 'Authentication'],
    highlights: ['User Authentication', 'Admin Dashboard', 'CRUD Operations'],
    productionLink: 'https://kanban-web-app.vercel.app',
    githubLink: 'https://kanban-web-app.vercel.app',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
  {
    id: 3,
    title: 'Fake Store Application',
    category: 'web',
    description:
      'E-commerce frontend with product listings, cart functionality, and seamless user experience.',
    techStack: ['React', 'Axios', 'API Integration'],
    highlights: ['Cart Functionality', 'API Integration', 'Responsive UI'],
    productionLink: 'https://kanban-web-app.vercel.app',
    githubLink: 'https://kanban-web-app.vercel.app',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
  {
    id: 4,
    title: 'Kanban Web Application',
    category: 'web',
    description:
      'Task management tool with drag-and-drop functionality for organizing projects and workflows.',
    techStack: ['React', 'JSON Server', 'Drag & Drop'],
    highlights: ['Drag & Drop', 'Task Management', 'Real-time Updates'],
    productionLink: 'https://kanban-web-app.vercel.app',
    githubLink: 'https://kanban-web-app.vercel.app',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
  {
    id: 5,
    title: 'Shopping Application',
    category: 'web',
    description:
      'E-commerce shopping platform with product catalog, search, and checkout functionality.',
    techStack: ['React', 'Figma', 'State Management'],
    highlights: ['Product Catalog', 'Search Functionality', 'Checkout Flow'],
    productionLink: 'https://kanban-web-app.vercel.app',
    githubLink: 'https://kanban-web-app.vercel.app',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
  {
    id: 6,
    title: 'Shopping REST API',
    category: 'backend',
    description:
      'Backend API for e-commerce with product management, user auth, and order processing.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    highlights: ['RESTful API', 'User Authentication', 'Order Management'],
    productionLink: 'https://kanban-web-app.vercel.app',
    githubLink: 'https://kanban-web-app.vercel.app',
    // videoLink: '/assets/video/portflio_project.mp4',
  },
];
export const contact = {
  name: 'Vaishnavi Karil',
  location: 'Pune, Maharastra , India',
  phone: '+91 9111706639',
  email: 'vaishnavigkaril@gmail.com',
  address: 'Pune, Maharastra , India',
};
export const navbar = [
  { text: 'Home', icon: FiHome, id: 'hero' },
  { text: 'About', icon: FiUser, id: 'about' },
  { text: 'Resume', icon: FiFileText, id: 'resume' },
  { text: 'Portfolio', icon: FiBriefcase, id: 'portfolio' },
  { text: 'Certifications', icon: FiAward, id: 'certifications' },
  { text: 'Education', icon: FiBook, id: 'education' },
  { text: 'Services', icon: FiSettings, id: 'services' },
  { text: 'Contact', icon: FiMail, id: 'contact' },
];
