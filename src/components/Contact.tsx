import { useRef, useState } from "react";
import { easeOut, motion } from "framer-motion";
import { Send } from "lucide-react";
import { footerData } from "@/Constant";
import emailjs from "@emailjs/browser";

// Vite provides types for import.meta.env automatically, so no need to redeclare them.

export default function Contact() {
  // ✅ Add form ref for emailjs
  const form = useRef<HTMLFormElement>(null);

  // ✅ State for form and status message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Vite environment variables
  const env = import.meta.env;
  const SERVICE_ID = env.VITE_MAIL_SERVICE_ID;
  const TEMPLATE_ID = env.VITE_MAIL_TEMPLATE_ID;
  const PUBLIC_KEY = env.VITE_MAIL_PUBLIC_KEY;

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

  // Input handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStatus("Sending...");
    if (!form.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          form.current?.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again later.");
          console.error(error.text);
          setIsSubmitted(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="app-text-description text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's collaborate and create something amazing together.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-12 h-1 bg-gradient-portfolio rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold app-text-normal mb-8">
              Let's connect
            </h3>
            {footerData?.contactSocial?.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="z-10 flex items-start gap-4 p-4 normal-bg rounded-xl border nav-border app-border-hover-primary transition-all duration-300 group"
                >
                  <div className="z-10 w-12 h-12 bg-gradient-portfolio rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="z-10 font-semibold app-text-normal mb-1">
                      {item.label}
                    </h4>
                    <p className="app-text-description text-sm">
                      {item.content}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={form} onSubmit={handleSubmit} className=" space-y-6">
              <div className="z-10 relative">
                <label className="block text-sm font-medium app-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Anjali Kumari"
                  className="z-10 w-full px-4 py-3 normal-bg border normal-border rounded-lg app-text-normal normal-placeholder focus:outline-none focus-border-portfolio transition-colors"
                />
              </div>

              <div className="z-10 relative">
                <label className="block text-sm font-medium app-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className=" w-full px-4 py-3 normal-bg border normal-border rounded-lg app-text-normal normal-placeholder focus:outline-none focus-border-portfolio transition-colors"
                />
              </div>

              <div className="z-10 relative">
                <label className="block text-sm font-medium app-text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or how I can help..."
                  rows={5}
                  className="w-full px-4 py-3 normal-bg border normal-border rounded-lg app-text-normal normal-placeholder focus:outline-none focus-border-portfolio transition-colors resize-none"
                />
              </div>
              <div className="z-10">
                <motion.button
                  type="submit"
                  className={`z-10 w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-portfolio text-white hover:shadow-lg hover:shadow-portfolio-purple/50"
                    }`}
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                ><div className="z-10">
                    {isSubmitted ? (
                      <span>✓ Message Sent!</span>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </motion.button>
              </div>
              {/* ✅ Status text */}
              <p className="text-sm text-center app-text-description">{status}</p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
