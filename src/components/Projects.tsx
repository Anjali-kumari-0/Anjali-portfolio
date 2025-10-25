import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: { opacity: 0, scale: 0.8 },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.",
      image: "🛍️",
      category: "react",
      tags: ["React", "TypeScript", "Tailwind", "Zustand"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "✅",
      category: "react",
      tags: ["React", "TypeScript", "Framer Motion"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Interactive portfolio showcase with smooth animations, dark mode support, and responsive design across all devices.",
      image: "💼",
      category: "tailwind",
      tags: ["React", "Tailwind", "Animations"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting capabilities.",
      image: "📊",
      category: "react",
      tags: ["React", "Charts", "Data Viz"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging application with WebSocket integration, user presence indicators, and message history.",
      image: "💬",
      category: "node",
      tags: ["React", "Node.js", "WebSocket"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 6,
      title: "Design System",
      description: "Comprehensive design system with reusable components, documentation, and Storybook integration.",
      image: "🎨",
      category: "tailwind",
      tags: ["ShadCN", "Tailwind", "Components"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "tailwind", label: "Tailwind CSS" },
    { id: "node", label: "Node.js" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Showcasing my best work across different technologies
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-12 h-1 bg-gradient-portfolio rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-portfolio text-white shadow-lg shadow-portfolio-purple/50"
                  : "bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:border-portfolio-purple dark:hover:border-portfolio-accent border border-gray-200 dark:border-slate-800"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover="hover"
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800"
            >
              {/* Image Area */}
              <div className="relative h-40 bg-gradient-soft overflow-hidden flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-portfolio-light/50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full border border-portfolio-purple/20 dark:border-portfolio-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-800">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 flex-1 px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-portfolio-purple/10 dark:hover:bg-portfolio-accent/10 transition-colors justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 flex-1 px-4 py-2 bg-gradient-portfolio text-white rounded-lg hover:shadow-lg transition-all justify-center group/link"
                  >
                    <span className="text-sm font-medium">Live</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
