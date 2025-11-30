import { experienceData } from "@/Constant";
import { easeOut, motion } from "framer-motion";

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
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  

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
            className="app-text-description text-lg max-w-2xl mx-auto"
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
            {experienceData?.map((item, index) => {
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
                          <p className="text-sm font-semibold app-text-portfolio">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-bold app-text-normal">
                            {item.title}
                          </h3>
                          <p className="app-text-portfolio font-medium">
                            {item.company}
                          </p>
                          <p className="app-text-description text-sm">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end pt-2">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 normal-bg app-text-primary rounded-full border app-border-portfolio-p"
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
                          <div className="absolute inset-1 global-bg rounded-full border-4 dark-border flex items-center justify-center">
                            <Icon className="w-6 h-6 app-text-portfolio" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content or Empty */}
                    <div className={!isLeft ? "order-1" : "order-2"}>
                      {!isLeft && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold app-text-portfolio">
                            {item.period}
                          </p>
                          <h3 className="text-xl font-bold app-text-normal">
                            {item.title}
                          </h3>
                          <p className="app-text-portfolio font-medium">
                            {item.company}
                          </p>
                          <p className="app-text-description text-sm">
                            {item.description} {item.isKnowMore ? <a className="text-sm font-semibold app-text-portfolio" href={item.isKnowMore}>Know More</a> : null}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 normal-bg app-text-primary rounded-full border app-border-portfolio-p"
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
                  <div className="md:hidden normal-bg rounded-xl p-6 border nav-border ml-8 relative">
                    <div className="absolute -left-8 top-6 w-6 h-6 bg-gradient-portfolio rounded-full border-4 dark-border2" />
                    <p className="text-sm font-semibold app-text-portfolio mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-bold app-text-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="app-text-portfolio font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="app-text-description text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 normal-bg-two app-text-primary rounded-full border app-border-portfolio-p"
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
