import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Galaxy from "./components/animation/galaxy/Galaxy";
// import { cn } from "./lib/utils";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <BrowserRouter>
      {/* <div className="bg-black w-full h-full"> */}
        <div className="relative w-full min-h-screen bg-black dark:bg-slate-950" >

          {/* <div className=" absolute inset-0  flex flex-col items-center"> */}
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-transparent dark:bg-slate-950/80 backdrop-blur-md border-b  dark:border-slate-800">
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
                      href={link.href}
                      className="text-sm font-medium text-gray-400 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Right Actions */}
                {/* <div className="flex items-center gap-4">
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

                  // {/* Mobile Menu Button 
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
                </div> */}
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
                  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-accent transition-colors py-2"
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
              </Routes>
            </main>
          {/* </div> */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // zIndex: -1,
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
