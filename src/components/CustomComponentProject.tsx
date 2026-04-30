import { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projectCategories, projectComponentData } from "@/Constant";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";

export default function CustomComponentProject() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(searchQuery);
  }, 300);

  return () => clearTimeout(timer);
}, [searchQuery]);

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

const handleOpenProject = (href: string) => {
    navigate(`/project#${href}`)

}

    const filteredProjects = projectComponentData.filter((project) => {
  const search = debouncedSearch.toLowerCase();

  return project.title.toLowerCase().includes(search);
});

    return (
        <section id="custom-component-project" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
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
                            My Custom Component Project
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="app-text-description text-lg max-w-2xl mx-auto"
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
                    <Input placeholder="Search projects..." className="z-20 w-full md:w-auto text-white" 
                    onChange={(e) => setSearchQuery(e.target.value)}
                     />
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
                            className="py-2 z-10 group normal-bg rounded-xl overflow-hidden border normal-bg-two"
                            onClick={() => handleOpenProject(project.href || "")}
                        >
                            <div className="text-white pl-4">{project.title}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
