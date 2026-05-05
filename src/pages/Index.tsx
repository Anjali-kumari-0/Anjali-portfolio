import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomComponentProject from "@/components/CustomComponentProject";
import { TechStack } from "@/components/_my/TechStack";

export default function Index() {
  return (
    <div className="relative w-full min-h-screen global-bg">
      <Hero />
      <TechStack />
      {/* <About /> */}
      <Skills />
      <CustomComponentProject />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
