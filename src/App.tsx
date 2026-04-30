import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Galaxy from "./components/animation/galaxy/Galaxy";
import ProjectView from "./components/projectView/projectView";
// import "./styles/Colour.css";
// import { cn } from "./lib/utils";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    // 👉 Default = DARK
    if (saved === null) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else if (saved === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  //   useEffect(() => {
  //   // 1) Check localStorage preference
  //   const saved = localStorage.getItem("darkMode");

  //   if (saved === "true") {
  //     setIsDark(true);
  //     document.documentElement.classList.add("dark");
  //   } else if (saved === "false") {
  //     setIsDark(false);
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     // 2) No saved preference → use system theme
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;

  //     setIsDark(systemPrefersDark);

  //     if (systemPrefersDark) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }
  // }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue.toString());
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newValue;
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Custom Component project", href: "#custom-component-project" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <BrowserRouter>
      {/* <div className="bg-black w-full h-full"> */}
      <div className="relative w-full min-h-screen global-bg" >

        {/* <div className=" absolute inset-0  flex flex-col items-center"> */}
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 nav-bg backdrop-blur-md border-b nav-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-portfolio rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                AK
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
                Anjali
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`/${link.href}`}
                  className="text-sm font-medium app-text-primary app-text-hover-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button  */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden normal-bg border-t narmal-border">
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium app-text-primary app-text-hover-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16 relative w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/project" element={<ProjectView/>} />
          </Routes>
        </main>
        {/* </div> */}
        <div
          className="hidden dark:block"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1}
            glowIntensity={0.1}
            saturation={0.9}
            hueShift={100}
          />
        </div>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}
