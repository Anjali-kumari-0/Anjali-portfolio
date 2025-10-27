import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { footerData } from "@/Constant";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-gray-900 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-portfolio rounded-lg flex items-center justify-center text-white font-bold text-lg">
                {footerData.logo}
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
                {footerData.name}
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {footerData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="z-10 space-y-4">
            <h3 className="font-semibold text-gray-500 dark:text-white">{footerData.quickLinkTitle}</h3>
            <ul className=" space-y-2">
              {footerData?.quickLinks?.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-portfolio-purple dark:hover:text-portfolio-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">{footerData.contactTitle}</h3>
            <div className="z-10 flex gap-4">
              {footerData?.contactSocial?.map((social) => {
                const Icon = social?.icon;
                return (
                  <a
                    key={social?.label}
                    href={social?.href}
                    aria-label={social?.label}
                    className="w-10 h-10 z-10 rounded-full border cursor-pointer border-gray-300 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-portfolio-purple dark:hover:border-portfolio-accent hover:text-portfolio-purple dark:hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-800 py-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>{footerData?.rights}</p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="z-10 cursor-pointer w-10 h-10 rounded-full border-2 border-portfolio-purple dark:border-portfolio-accent text-portfolio-purple dark:text-portfolio-accent flex items-center justify-center hover:bg-portfolio-purple/10 dark:hover:bg-portfolio-accent/10 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
