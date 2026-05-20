// import PorftolioVideo from "../public/assets/video/portflio_project.mp4";
import {
  FiAward,
  FiBook,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiCode,
  FiFileText,
  FiGlobe,
  FiHome,
  FiLayout,
  FiMail,
  FiMapPin,
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

// export const portfolioItems = [
//   {
//     id: 1,
//     title: 'Portfolio Application',
//     category: 'web',
//     description:
//       'A responsive personal portfolio showcasing skills, projects, and professional experience with modern UI/UX.',
//     techStack: ['React', 'Vite', 'CSS'],
//     highlights: ['Responsive Design', 'Modern UI', 'Smooth Animations'],
//     productionLink: 'https://portfolio-fullstack-mern-and-reactj.vercel.app/',
//     githubLink: 'https://github.com/Vaishnavi-Karil/Porftolio-Project',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
//   {
//     id: 2,
//     title: 'Blog Application',
//     category: 'fullstack',
//     description:
//       'Full-featured blog platform with user authentication, CRUD operations, and admin dashboard.',
//     techStack: ['Next.js', 'MySQL', 'Authentication'],
//     highlights: ['User Authentication', 'Admin Dashboard', 'CRUD Operations'],
//     productionLink: 'https://kanban-web-app.vercel.app',
//     githubLink: 'https://kanban-web-app.vercel.app',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
//   {
//     id: 3,
//     title: 'Fake Store Application',
//     category: 'web',
//     description:
//       'E-commerce frontend with product listings, cart functionality, and seamless user experience.',
//     techStack: ['React', 'Axios', 'API Integration'],
//     highlights: ['Cart Functionality', 'API Integration', 'Responsive UI'],
//     productionLink: 'https://kanban-web-app.vercel.app',
//     githubLink: 'https://kanban-web-app.vercel.app',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
//   {
//     id: 4,
//     title: 'Kanban Web Application',
//     category: 'web',
//     description:
//       'Task management tool with drag-and-drop functionality for organizing projects and workflows.',
//     techStack: ['React', 'JSON Server', 'Drag & Drop'],
//     highlights: ['Drag & Drop', 'Task Management', 'Real-time Updates'],
//     productionLink: 'https://kanban-web-app.vercel.app',
//     githubLink: 'https://kanban-web-app.vercel.app',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
//   {
//     id: 5,
//     title: 'Shopping Application',
//     category: 'web',
//     description:
//       'E-commerce shopping platform with product catalog, search, and checkout functionality.',
//     techStack: ['React', 'Figma', 'State Management'],
//     highlights: ['Product Catalog', 'Search Functionality', 'Checkout Flow'],
//     productionLink: 'https://kanban-web-app.vercel.app',
//     githubLink: 'https://kanban-web-app.vercel.app',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
//   {
//     id: 6,
//     title: 'Shopping REST API',
//     category: 'backend',
//     description:
//       'Backend API for e-commerce with product management, user auth, and order processing.',
//     techStack: ['Node.js', 'Express', 'MongoDB'],
//     highlights: ['RESTful API', 'User Authentication', 'Order Management'],
//     productionLink: 'https://kanban-web-app.vercel.app',
//     githubLink: 'https://kanban-web-app.vercel.app',
//     // videoLink: '/assets/video/portflio_project.mp4',
//   },
// ];
export const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Web Application',
    slug: 'ecommerce-web-app',
    category: 'fullstack',
    description:
      'A full-featured e-commerce platform with product listing, cart functionality, user authentication, and secure checkout. Built with modern UI and optimized performance.',
    fullDescription:
      'ShopEase is a complete e-commerce platform designed to deliver a seamless shopping experience. Users can browse products, filter items, add to cart, and securely checkout. The platform includes authentication, order tracking, and a fully functional admin dashboard to manage products, categories, and orders.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'PgAdmin'],
    features: [
      'User Authentication (JWT)',
      'Product Browsing & Filtering',
      'Add to Cart & Wishlist',
      'Secure Checkout Flow',
      'Order Management System',
      'Admin Dashboard',
      'Responsive UI Design',
    ],
    duration: 'Jan 2024 – Apr 2024',
    role: 'Full Stack Developer',
    status: 'Completed',
    productionLink: 'https://your-live-project.vercel.app',
    githubLink: 'https://github.com/Vaishnavi-Karil/ecommerce-project',
    image: '/assets/img/eccomerce-web-app.png',
  },
];
export const projectDetails = [
  {
    id: 1,

    title: 'E-Commerce Web Application',

    category: 'Fullstack Web Application',

    description:
      'A full-featured e-commerce platform with product listing, cart functionality, user authentication, and secure checkout.',

    fullDescription:
      'ShopEase is a complete e-commerce platform designed to deliver a seamless shopping experience. Users can browse products, filter items, add to cart, and securely checkout. The platform includes authentication, order tracking, and a fully functional admin dashboard to manage products, categories, and orders.',

    duration: 'Jan 2024 – Apr 2024',
    role: 'Full Stack Developer',
    status: 'Completed',

    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
    ],

    features: [
      'User Authentication (JWT)',
      'Product Browsing & Filtering',
      'Add to Cart & Wishlist',
      'Secure Checkout Flow',
      'Order Management System',
      'Admin Dashboard',
      'Responsive UI Design',
    ],

    liveUrl: 'https://your-live-project.vercel.app',
    githubUrl: 'https://github.com/Vaishnavi-Karil/ecommerce-project',

    image: '/assets/img/ecommerce-web-app.png',
  },
];

// export const projectDetails = {
//   'ecommerce-web-app': {
//     title: 'E-Commerce Web Application',

//     description:
//       'A full-featured e-commerce platform with product listing, cart functionality, user authentication, and secure checkout.',

//     fullDescription:
//       'ShopEase is a modern e-commerce web application designed to provide users with a seamless shopping experience. Users can browse products, add items to cart, manage orders, and complete secure payments. The platform also includes an admin dashboard for managing products, users, and orders.',

//     techStack: [
//       'React',
//       'Node.js',
//       'Express.js',
//       'MongoDB',
//       'Tailwind CSS',
//       'JWT',
//     ],

//     features: [
//       'User Authentication (JWT)',
//       'Product Listing & Categories',
//       'Shopping Cart Management',
//       'Secure Checkout Process',
//       'Order Management System',
//       'Admin Dashboard',
//       'Responsive Design',
//       'Search & Filter Products',
//     ],

//     duration: 'Jan 2024 – Mar 2024',
//     role: 'Full Stack Developer',
//     status: 'Completed',

//     productionLink: 'https://your-live-project.vercel.app',
//     githubLink: 'https://github.com/Vaishnavi-Karil/ecommerce-project',

//     image: '/assets/img/eccomerce-web-app.png',
//     headerImage: '/assets/img/eccomerce-web-app.png',

//     gallery: [
//       '/assets/img/eccomerce-web-app.png',
//       '/assets/img/eccomerce-web-app.png',
//       '/assets/img/eccomerce-web-app.png',
//     ],
//   },
// };

export const contact = {
  name: 'Vaishnavi Karil',
  location: 'Pune, Maharastra , India',
  phone: '+91 9111706639',
  email: 'vaishnavigkaril@gmail.com',
  address: 'Pune, Maharastra , India',
};
export const navbar = [
  { text: 'Home', icon: FiHome, id: 'hero', path: '/' },
  { text: 'About', icon: FiUser, id: 'about', path: '/about' },
  { text: 'Experience', icon: FiFileText, id: 'resume', path: '/resume' },
  { text: 'Technical Expertise', icon: FiCode, id: 'skills', path: '/skills' },
  { text: 'Portfolio', icon: FiBriefcase, id: 'portfolio', path: '/portfolio' },
  { text: 'Certifications', icon: FiAward, id: 'certifications', path: '/certifications' },
  { text: 'Education', icon: FiBook, id: 'education', path: '/education' },
  { text: 'Services', icon: FiSettings, id: 'services', path: '/services' },
  { text: 'Contact', icon: FiMail, id: 'contact', path: '/contact' },
];

// ── Resume Section ─────────────────────────────────────────

export const resumeSummary = {
  heading: 'Senior MERN Stack Developer',
  text: `I build scalable, high-performance web applications that users love and
businesses rely on. With expertise spanning React.js, Next.js, Node.js, PostgreSQL,
and AWS, I bridge the gap between elegant frontend experiences and resilient backend
systems — delivering solutions that are fast, maintainable, and built for growth.`,
  pills: [
    { label: 'Pune, India',       icon: FiMapPin,       type: 'default'   },
    { label: 'Immediate Joiner',  icon: FiCheckCircle,  type: 'available' },
    { label: 'Open to Relocate',  icon: FiGlobe,        type: 'default'   },
  ],
};

export const resumeStats = [
  { value: '5+',  label: 'Years in Tech',        sub: 'Full-Stack Engineering', icon: FiBriefcase },
  { value: '10+', label: 'Projects Shipped',      sub: 'Frontend & Backend',    icon: FiCode      },
  { value: '4',   label: 'Companies',             sub: 'Diverse Domains',       icon: FiAward     },
  { value: '8+',  label: 'Technologies',          sub: 'Production-Ready',      icon: FiTool      },
];

export const resumeExperience = [
  {
    company: 'NeoSOFT Private Limited',
    role: 'Senior Software Developer — MERN Stack',
    period: '2025 – Present',
    location: 'Pune, India',
    current: true,
    highlights: [
      'Architected a full-stack Blog Platform with Next.js, MySQL, CRUD operations, and secure user authentication',
      'Built a real-time Kanban board with drag-and-drop task management using React.js and JSON Server',
      'Engineered state management patterns that eliminated UI sync issues across complex multi-view flows',
      'Designed and maintained RESTful backend APIs supporting rapid, parallel frontend development',
    ],
    tech: ['Next.js', 'React.js', 'MySQL', 'JSON Server', 'REST APIs', 'Authentication'],
  },
  {
    company: 'Axonic Health Pvt. Ltd.',
    role: 'Software Developer — Full Stack React & Node',
    period: '2022 – 2024',
    location: 'Pune, India',
    current: false,
    highlights: [
      'Built hospital resource management dashboards with React.js and Material UI serving 500+ daily active users',
      'Designed and integrated REST APIs using Node.js, Express, and PostgreSQL for a high-availability backend',
      'Developed interactive data visualisations with ApexCharts for real-time clinical and business reporting',
      'Implemented role-based access control and state management with Redux Toolkit and React Query',
    ],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Redux Toolkit', 'ApexCharts', 'Material UI'],
  },
  {
    company: 'Phixman Technologies Pvt. Ltd.',
    role: 'Full Stack Developer — React.js & Admin Dashboard',
    period: '2021 – 2022',
    location: 'Pune, India',
    current: false,
    highlights: [
      'Developed a multi-role Admin Dashboard managing sub-admins, service providers, and customers at scale',
      'Implemented time scheduling, automated workflows, and real-time push notification systems',
      'Built invoice management and revenue-sharing modules across multi-category electronics services',
      'Drove feedback-loop improvements that measurably increased operational efficiency and customer satisfaction',
    ],
    tech: ['React.js', 'Node.js', 'REST APIs', 'Real-time Notifications', 'Workflow Automation'],
  },
  {
    company: 'Infobyd Software Solution Pvt. Ltd.',
    role: 'Software Developer — React Native Mobile Application',
    period: '2020 – 2021',
    location: 'Indore, India',
    current: false,
    highlights: [
      'Delivered a dual-platform Stackholder product: Web Admin Dashboard and React Native mobile app for users',
      'Designed a complete mobile UI with accessible, responsive layouts across Android and iOS',
      'Built auction, bidding, and direct-sell features with real-time notifications and transaction processing',
      'Implemented document upload, multi-level approval workflows, and role-based permission systems',
    ],
    tech: ['React Native', 'React.js', 'REST APIs', 'Authentication', 'Mobile UI', 'Role-Based Access'],
  },
  {
    company: 'Asprarrow Technologies',
    role: 'Trainee Developer — React.js & Node.js',
    period: '2019 – 2020',
    location: 'Indore, India',
    current: false,
    highlights: [
      'Contributed to full-stack web application development using JavaScript, React.js, and Node.js',
      'Built RESTful APIs and integrated frontend modules shipped to production',
      'Adopted agile development practices, Git version control, and collaborative code-review workflows',
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'REST APIs', 'Git'],
  },
];
