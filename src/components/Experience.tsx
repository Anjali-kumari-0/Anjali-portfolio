import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
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

  const experienceData = [
    {
      id: 1,
      type: "job",
      title: "Senior Frontend Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications, mentoring junior developers, and implementing performance optimizations.",
      skills: ["React", "TypeScript", "Team Leadership"],
      icon: Briefcase,
    },
    {
      id: 2,
      type: "job",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and Tailwind CSS, improved application performance by 40%, collaborated with design and backend teams.",
      skills: ["React", "Tailwind CSS", "REST APIs"],
      icon: Briefcase,
    },
    {
      id: 3,
      type: "education",
      title: "Advanced Web Development",
      company: "Online Learning Platform",
      period: "2019 - 2020",
      description: "Comprehensive bootcamp covering modern web development with focus on React, JavaScript, and full-stack development.",
      skills: ["React", "JavaScript", "Node.js"],
      icon: GraduationCap,
    },
    {
      id: 4,
      type: "job",
      title: "Junior Frontend Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Developed UI components, fixed bugs, implemented new features in React applications, and improved code quality.",
      skills: ["React", "HTML/CSS", "Git"],
      icon: Briefcase,
    },
    {
      id: 5,
      type: "education",
      title: "Bachelor of Technology",
      company: "University of Tech",
      period: "2015 - 2019",
      description: "Computer Science degree with specialization in web technologies and software development.",
      skills: ["Programming", "Web Dev", "Algorithms"],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
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
              My Journey
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Career milestones and professional growth
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-12 h-1 bg-gradient-portfolio rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-portfolio-purple to-portfolio-blue" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                    {/* Left Content or Empty */}
                    <div className={isLeft ? "order-1" : "order-2"}>
                      {isLeft && (
                        <div className="text-right space-y-2">
                          <p className="text-sm font-semibold text-portfolio-purple dark:text-portfolio-accent">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-portfolio-purple dark:text-portfolio-accent font-medium">
                            {item.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end pt-2">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-portfolio-light/50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-full border border-portfolio-purple/20 dark:border-portfolio-accent/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center Icon */}
                    <div className={isLeft ? "order-2" : "order-1"}>
                      <div className="flex justify-center">
                        <div className="relative w-14 h-14">
                          <div className="absolute inset-0 bg-gradient-portfolio rounded-full opacity-20" />
                          <div className="absolute inset-1 bg-white dark:bg-slate-950 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-portfolio-purple dark:text-portfolio-accent" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content or Empty */}
                    <div className={!isLeft ? "order-1" : "order-2"}>
                      {!isLeft && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-portfolio-purple dark:text-portfolio-accent">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-portfolio-purple dark:text-portfolio-accent font-medium">
                            {item.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-portfolio-light/50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-full border border-portfolio-purple/20 dark:border-portfolio-accent/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-800 ml-8 relative">
                    <div className="absolute -left-8 top-6 w-6 h-6 bg-gradient-portfolio rounded-full border-4 border-white dark:border-slate-900" />
                    <p className="text-sm font-semibold text-portfolio-purple dark:text-portfolio-accent mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-portfolio-purple dark:text-portfolio-accent font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-portfolio-light/50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full border border-portfolio-purple/20 dark:border-portfolio-accent/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
