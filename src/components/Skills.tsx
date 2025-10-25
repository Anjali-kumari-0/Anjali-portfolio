import { motion } from "framer-motion";

export default function Skills() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const skillsData = [
    {
      icon: "⚛️",
      title: "React.js",
      description: "Building dynamic, component-based user interfaces",
      proficiency: 95,
    },
    {
      icon: "📘",
      title: "TypeScript",
      description: "Type-safe JavaScript for scalable applications",
      proficiency: 90,
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      description: "Utility-first CSS for rapid UI development",
      proficiency: 95,
    },
    {
      icon: "🎯",
      title: "Zustand",
      description: "Lightweight state management solution",
      proficiency: 85,
    },
    {
      icon: "🧩",
      title: "ShadCN/UI",
      description: "Beautiful, accessible UI components",
      proficiency: 90,
    },
    {
      icon: "✨",
      title: "Framer Motion",
      description: "Smooth animations and transitions",
      proficiency: 88,
    },
    {
      icon: "🔧",
      title: "Node.js",
      description: "Backend development with JavaScript",
      proficiency: 80,
    },
    {
      icon: "📦",
      title: "Vite",
      description: "Next-generation frontend tooling",
      proficiency: 88,
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
              My Skills
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Expertise in modern web technologies and frameworks
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-12 h-1 bg-gradient-portfolio rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {skill.description}
              </p>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  <span className="text-xs font-bold text-portfolio-purple dark:text-portfolio-accent">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-portfolio rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border border-portfolio-purple/0 group-hover:border-portfolio-purple dark:group-hover:border-portfolio-accent transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
