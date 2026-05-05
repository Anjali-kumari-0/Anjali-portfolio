import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import portfolio from "./assets/porfolio.png"
import chatApp from "./assets/chatApp1.png"
import customComp from "./assets/customComp.png"
export const footerData = {
  logo: "AK",
  name: "Anjali",
  description:
    "Full Stack Developer crafting beautiful, performant web experiences with modern technologies.",
  quickLinkTitle: "Quick Links",
  quickLinks: ["Home", "About", "Skills", "Projects", "Contact"],
  contactTitle: "Connect",
  contactSocial: [
    {
      icon: Github,
      label: "GitHub",
      content: "Anjali-kumari-0",
      href: "https://github.com/Anjali-kumari-0",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      content: "anjaliannie06",
      href: "https://www.linkedin.com/in/anjaliannie06/",
    },
    {
      icon: Mail,
      label: "Email",
      content: "anjalirajwar222@gmail.com",
      href: "mailto:anjalirajwar222@gmail.com",
    },
  ],
  rights: "© 2025 Anjali Kumari. All rights reserved.",
};
export const achievements = [
  "2+ years of full stack development experience",
  "Proficient in React.js, TypeScript, Node.js, and MongoDB",
  "Developed and deployed 15+ production-grade web applications",
  "Skilled in designing scalable APIs and responsive UIs",
  "Focused on performance, accessibility, and clean architecture",
  "Strong advocate for best coding practices and maintainable codebases",
];
export const keySkills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Zustand",
  "ShadCN/UI",
  "Framer Motion",
  "Vite",
  "RESTful APIs",
  "Git & GitHub",
  "Deployment (Vercel / Render / AWS)",
];
export const experienceData = [
  // {
  //   id: 1,
  //   type: "job",
  //   title: "Senior Frontend Engineer",
  //   company: "Tech Innovations Inc.",
  //   period: "2022 - Present",
  //   description:
  //     "Leading frontend development team, architecting scalable React applications, mentoring junior developers, and implementing performance optimizations.",
  //   skills: ["React", "TypeScript", "Team Leadership"],
  //   icon: Briefcase,
  // },
  {
    id: 2,
    type: "job",
    title: "Team Lead",
    company: "Maya Data Privacy",
    period: "2023 - on going",
    description:
      "Developed responsive web applications using React and Tailwind CSS, improved application performance by 40%, collaborated with design and backend teams.",
    skills: ["React", "Tailwind CSS", "REST APIs"],
    icon: Briefcase,
  },
  {
    id: 3,
    type: "education",
    title: "Full Time Associate Developer",
    company: "Maya Data Privacy",
    period: "2023 - 2024",
    description:
      "Comprehensive bootcamp covering modern web development with focus on React, JavaScript, and full-stack development.",
    skills: ["React", "JavaScript", "Node.js"],
    icon: GraduationCap,
    isKnowMore: "/detail-associate",
  },
  {
    id: 4,
    type: "job",
    title: "Intern  Developer",
    company: "Maya Data Privacy",
    period: "March 2023 - Aug 2023",
    description:
      "Developed UI components, fixed bugs, implemented new features in React applications, and improved code quality.",
    skills: ["React", "HTML/CSS", "Git"],
    icon: Briefcase,
  },
  {
    id: 5,
    type: "education",
    title: "Bachelor of Technology",
    company: "BIT Sindri",
    period: "2019 - 2023",
    description:
      "Computer Science degree with specialization in web technologies and software development.",
    skills: ["Programming", "Web Dev", "Algorithms"],
    icon: GraduationCap,
  },
];
export const skillsHeader = {
  topTitle: "What I Do",
  title: "Building End-to-End Solutions",
  description: "I create robust and user-friendly applications from frontend to backend, ensuring seamless performance and scalability.",
};
export const skillsData = [
  // for skills section
  {
    icon: "⚛️",
    title: "React.js",
    description: "Building fast, modular, and interactive user interfaces",
    proficiency: 95,
  },
  {
    icon: "📘",
    title: "TypeScript",
    description: "Writing scalable, type-safe, and maintainable codebases",
    proficiency: 90,
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description: "Designing responsive and modern UI layouts efficiently",
    proficiency: 95,
  },
  {
    icon: "🧠",
    title: "Node.js",
    description: "Developing high-performance, event-driven backend services",
    proficiency: 85,
  },
  {
    icon: "🗄️",
    title: "MongoDB",
    description: "Designing and managing flexible, document-based databases",
    proficiency: 80,
  },
  {
    icon: "🚀",
    title: "Express.js",
    description: "Building RESTful APIs and server-side logic",
    proficiency: 82,
  },
  {
    icon: "🎯",
    title: "Zustand",
    description: "Lightweight and efficient state management for React apps",
    proficiency: 85,
  },
  {
    icon: "🧩",
    title: "ShadCN/UI",
    description: "Creating elegant, accessible, and consistent interfaces",
    proficiency: 90,
  },
  {
    icon: "✨",
    title: "Framer Motion",
    description: "Crafting smooth, engaging animations and transitions",
    proficiency: 88,
  },
  {
    icon: "⚡",
    title: "Vite",
    description: "Fast development and optimized builds for modern web apps",
    proficiency: 88,
  },
];
export const projectComponentData = [
  {
    id: 0,
    title: "Smart Select comp",
    href: "SmartSelect",
  },
  {
    id: 1,
    title: "Feature Highlight",
    href: "feature-highlight",
  },
  {
    id: 2,
    title: "Sidebar",
    href: "sidebar",
  },
  {
    id: 3,
    title: "Date Formatter",
    href: "dateFormatter",
  },
  // {
  //   id: 1,
  //   title: "Smart Form Builder",
  //   category: "react",
  //   href: "SmartFormBuilder",
  //   description:
  //     "Drag-and-drop form builder with conditional logic, dynamic field rendering from JSON, auto validation generation, and reusable schema-based form creation."
  // },
  {
    id: 4,
    title: "Server/Custom PDF Generator (JSON to PDF)",
    href: "pdfGenerator",
  },
  {
    id: 5,
    title: "Progress bar",
    href: "progressBar",
    description: "",
  },
  {
    id: 6,
    title: "Chart",
    href: "chart",
    description:
      "Interactive chart component with support for various chart types, real-time data updates, and customizable styling options.",
  },
  {
    id: 7,
    title: "Badge",
    href: "badge",
    description:
      "UI to create logical conditions (IF/AND/OR) and generate rule-based JSON configurations for decision-making systems.",
  },
  {
    id: 8,
    title: "Multi Select Dropdown",
    href: "multiSelectDropdown",
    description:
      "Render complete UI (forms, tables, cards) dynamically based on backend-provided JSON schema without hardcoding layouts.",
  },
  {
    id: 9,
    title: "Input",
    href: "input",
    description:
      "Timeline-based editor allowing users to drag, resize, and sequence animations or media clips similar to video editing tools.",
  },
  {
    id: 8,
    title: "Smart Search like github",
    href: "smartSearch",
    description:
      "Component system that dynamically shows or hides UI elements based on user roles and permissions.",
  },
  {
    id: 9,
    title: "Tab",
    href: "tab",
    description:
      "Interactive UI for testing APIs with support for headers, query params, request body, and formatted response preview.",
  },
  {
    id: 10,
    title: "Side-sheet",
    href: "sideSheet",
    description:
      "Smart search with fuzzy matching, ranking, suggestions, typo tolerance, and highlighted results.",
  },
];
export const projectsData = [
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description: "A modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.",
  //   image: "🛍️",
  //   category: "react",
  //   tags: ["React", "TypeScript", "Tailwind", "Zustand"],
  //   links: {
  //     github: "#",
  //     live: "#",
  //   },
  // },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //   image: "✅",
  //   category: "react",
  //   tags: ["React", "TypeScript", "Framer Motion"],
  //   links: {
  //     github: "#",
  //     live: "#",
  //   },
  // },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Interactive portfolio showcase with smooth animations, dark mode support, and responsive design across all devices.",
    image: portfolio,
    category: "tailwind",
    tags: ["React", "Tailwind", "Animations"],
    links: {
      github: "https://github.com/Anjali-kumari-0/Anjali-portfolio",
      live: "https://anjali-portfolio-wheat.vercel.app/",
    },
  },
  // {
  //   id: 4,
  //   title: "Analytics Dashboard",
  //   description: "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting capabilities.",
  //   image: "📊",
  //   category: "react",
  //   tags: ["React", "Charts", "Data Viz"],
  //   links: {
  //     github: "#",
  //     live: "#",
  //   },
  // },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Real-time messaging application with WebSocket integration, user presence indicators, and message history.",
    image: chatApp,
    category: "node",
    tags: ["React", "Node.js", "WebSocket"],
    links: {
      github: "https://github.com/Anjali-kumari-0/kaise-ho",
      live: "https://kaiseho-ui.web.app/",
    },
  },
  // {
  //   id: 6,
  //   title: "Design System",
  //   description: "Comprehensive design system with reusable components, documentation, and Storybook integration.",
  //   image: "🎨",
  //   category: "tailwind",
  //   tags: ["ShadCN", "Tailwind", "Components"],
  //   links: {
  //     github: "#",
  //     live: "#",
  //   },
  // },
  {
    id: 6,
    title: "UI Component Library",
    description:
      "A reusable UI component library built 'Single_select', 'multi_select' etc...",
    image: customComp,
    category: "frontend",
    tags: ["React", "TypeScript", "Tailwind"],
    links: {
      github: "#",
      live: "/project#SmartSelect",
    },
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "react", label: "React" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "node", label: "Node.js" },
];
export const associateDetail = {
  title: "A Year of Consistent Growth and Contribution",
  description1:
    "Over the past year, I’ve made 786 contributions to various projects, reflecting my consistency, growth, and commitment to continuous learning. The contribution pattern shows active involvement throughout the year, with peak productivity during mid-year months. This represents regular engagement in development, collaboration, and open-source improvement — highlighting both technical proficiency and discipline in coding practices.",
};
