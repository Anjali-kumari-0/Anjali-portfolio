import { footerData } from "@/Constant";
import { easeInOut, easeOut, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [easeOut] },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-accent/20 rounded-full blur-3xl opacity-portfolio animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-portfolio-blue/20 rounded-full blur-3xl opacity-portfolio animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent shadow-md shadow-amber-50  normal-bg rounded-full border  app-border-portfolio-p">
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium app-text-portfolio">Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-portfolio-accent via-portfolio-blue to-portfolio-accent bg-clip-text text-transparent">
            Hi, I'm Anjali 👋
          </span>
          <br />
          <span className="app-text-normal">
            Crafting Seamless Web
            <br />
            Experiences with React
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl app-text-primary mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate Frontend Developer & UI Engineer specializing in React, TypeScript, and modern UI design. I build beautiful, performant, and accessible web applications that users love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="px-8 py-4 bg-gradient-portfolio text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-portfolio-accent/50 transition-all duration-300 flex items-center gap-2 group">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border-2 app-border-portfolio-primary app-text-portfolio rounded-lg font-semibold hover-bg-portfolio transition-all duration-300"
          >
            Download Resume
          </a>

        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          {footerData?.contactSocial?.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border-2 normal-border flex items-center justify-center app-text-primary app-border-hover-primary app-text-hover-primary transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>

        {/* Floating Element */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="relative h-80 mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-to-bg2 rounded-2xl border app-border-portfolio-p2 overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="app-text-description font-medium">Building the future of web</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm app-text-description">Scroll to explore</span>
          <div className="w-6 h-10 border-2 normal-border2 rounded-full flex justify-center">
            <div className="w-1 h-2 normal-bg-three rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
