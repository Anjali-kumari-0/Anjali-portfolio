import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const achievements = [
    "5+ years of frontend development experience",
    "Specialized in React.js and TypeScript",
    "Built 20+ production applications",
    "Expert in responsive design and accessibility",
    "Strong performance optimization skills",
    "Passionate about clean code and best practices",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 dark:from-portfolio-purple/10 dark:to-portfolio-blue/10 rounded-2xl border border-portfolio-purple/30 dark:border-portfolio-accent/20 overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">Frontend Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-12 h-1 bg-gradient-portfolio rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate Frontend Developer & UI Engineer with a deep love for creating beautiful, performant web applications. With 5+ years of experience building modern user interfaces, I've developed a strong expertise in React.js, TypeScript, and the entire modern web development ecosystem.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                My journey in web development has been driven by a commitment to crafting seamless user experiences. I believe that great UI is not just about aesthetics—it's about creating intuitive, accessible, and performant applications that solve real problems.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div variants={itemVariants} className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-portfolio-purple dark:text-portfolio-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300 text-base">{achievement}</span>
                </div>
              ))}
            </motion.div>

            {/* Skills Summary */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "ShadCN/UI"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-portfolio-light/50 dark:bg-slate-900 rounded-lg border border-portfolio-purple/20 dark:border-portfolio-accent/30 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-portfolio-purple dark:hover:border-portfolio-accent transition-colors text-center"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
