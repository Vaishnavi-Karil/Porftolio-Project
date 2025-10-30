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
} from "react-icons/fi";

export const skills = [
  { name: "React.js & Next.js", value: 90 },
  { name: "Node.js & Express", value: 85 },
  { name: "MongoDB & Mongoose", value: 80 },
  { name: "Redux Toolkit", value: 85 },
  { name: "PostgreSQL & MySQL", value: 80 },
  { name: "AWS (Amplify, S3, RDS)", value: 70 },
];

export const services = [
  {
    title: "Web Design",
    description: "Creating beautiful and functional websites",
    icon: FiMonitor,
  },
  {
    title: "Development",
    description: "Full-stack MERN development services",
    icon: FiCode,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design approaches",
    icon: FiLayout,
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture",
    icon: FiClipboard,
  },
  {
    title: "Branding",
    description: "Complete brand identity solutions",
    icon: FiTag,
  },
  {
    title: "SEO",
    description: "Search engine optimization services",
    icon: FiTrendingUp,
  },
];

// export const stats = [
//   { value: 3, label: "Years of Experience", icon: "💼" },
//   { value: 5, label: "Completed Projects", icon: "👨‍💻" },
//   { value: 12, label: "Technologies Mastered", icon: "🛠️" },
//   { value: 5, label: "Certifications", icon: "🏫" },
// ];

export const stats = [
  { value: 3, label: "Years of Experience", icon: FiBriefcase },
  { value: 5, label: "Completed Projects", icon: FiCode },
  { value: 12, label: "Technologies Mastered", icon: FiTool },
  { value: 5, label: "Certifications", icon: FiAward },
];

// export const portfolioItems = [
//   {
//     id: 1,
//     title: "Porfolio Application",
//     category: "web",
//     description: "Frontend Web Application using React JS",
//     productionLink: "https://portfolio-fullstack-mern-and-reactj.vercel.app/",
//     githubLink: "https://github.com/Vaishnavi-Karil/Porftolio-Project",
//     videoLink: PorftolioVideo,
//   },
//   {
//     id: 2,
//     title: "Blog Application",
//     category: "fullstack",
//     description: "Next.js Fullstack Application using Mysql Database",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },
//   {
//     id: 3,
//     title: "Fake Store Application",
//     category: "web",
//     description: "Shopping Frontend Application using React Js and Axios",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },

//   {
//     id: 4,
//     title: "kanban Web Application",
//     category: "web",
//     description: "Kanban Frontend Application using React.js",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },
//   {
//     id: 5,
//     title: "Shopping Application",
//     category: "web",
//     description: "Developer Clone of Shopping Application using figma",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },
//   {
//     id: 6,
//     title: "Shopping Application REST API",
//     category: "backend",
//     description:
//       "REST API development using node.js, express, mongoose and Mongodb",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },
//   {
//     id: 7,
//     title: "Shopping Application",
//     category: "mobile",
//     description: "React Native",
//     productionLink: "https://kanban-web-app.vercel.app",
//     githubLink: "https://kanban-web-app.vercel.app",
//     videoLink: PorftolioVideo,
//   },
// ];
export const portfolioItems = [
  {
    id: 1,
    title: "Portfolio Application",
    category: "web",
    description: "Frontend Web Application using React JS",
    productionLink: "https://portfolio-fullstack-mern-and-reactj.vercel.app/",
    githubLink: "https://github.com/Vaishnavi-Karil/Porftolio-Project",
    videoLink: "/assets/video/portflio_project.mp4",
  },
  {
    id: 2,
    title: "Blog Application",
    category: "fullstack",
    description: "Next.js Fullstack Application using Mysql Database",
    productionLink: "https://kanban-web-app.vercel.app",
    githubLink: "https://kanban-web-app.vercel.app",
    videoLink: "/assets/video/portflio_project.mp4",
  },
  {
    id: 3,
    title: "Fake Store Application",
    category: "web",
    description: "Shopping Frontend Application using React Js and Axios",
    productionLink: "https://kanban-web-app.vercel.app",
    githubLink: "https://kanban-web-app.vercel.app",
    videoLink: "/assets/video/portflio_project.mp4",
  },
  {
    id: 4,
    title: "Kanban Web Application",
    category: "web",
    description: "Kanban Frontend Application using React.js",
    productionLink: "https://kanban-web-app.vercel.app",
    githubLink: "https://kanban-web-app.vercel.app",
    videoLink: "/assets/video/portflio_project.mp4",
  },
  {
    id: 5,
    title: "Shopping Application",
    category: "web",
    description: "Developer Clone of Shopping Application using Figma",
    productionLink: "https://kanban-web-app.vercel.app",
    githubLink: "https://kanban-web-app.vercel.app",
    videoLink: "/assets/video/portflio_project.mp4",
  },
  {
    id: 6,
    title: "Shopping Application REST API",
    category: "backend",
    description:
      "REST API development using Node.js, Express, Mongoose and MongoDB",
    productionLink: "https://kanban-web-app.vercel.app",
    githubLink: "https://kanban-web-app.vercel.app",
    videoLink: "/assets/video/portflio_project.mp4",
  },
];
export const navbar = [
  { text: "Home", icon: FiHome, id: "hero" },
  { text: "About", icon: FiUser, id: "about" },
  { text: "Resume", icon: FiFileText, id: "resume" },
  { text: "Portfolio", icon: FiBriefcase, id: "portfolio" },
  { text: "Certifications", icon: FiAward, id: "certifications" },
  { text: "Education", icon: FiBook, id: "education" },
  { text: "Services", icon: FiSettings, id: "services" },
  { text: "Contact", icon: FiMail, id: "contact" },
];
