import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<<<<<<< HEAD
    <motion.nav
=======
    <nav
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
<<<<<<< HEAD
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
=======
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
    >
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
      >
        Skip to content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <motion.div
          className="flex items-center justify-between h-16 md:h-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {/* Logo */}
          <motion.a
=======
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
<<<<<<< HEAD
            variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
          >
            BM
          </motion.a>
=======
          >
            BM
          </a>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
<<<<<<< HEAD
              <motion.a
=======
              <a
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
<<<<<<< HEAD
                variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
              >
                {link.name}
              </motion.a>
=======
              >
                {link.name}
              </a>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
            ))}
          </div>

          {/* CTA Button */}
<<<<<<< HEAD
          <motion.div
            className="hidden md:block"
            variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
          >
=======
          <div className="hidden md:block">
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="/Resume.pdf" download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
<<<<<<< HEAD
          </motion.div>
=======
          </div>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
<<<<<<< HEAD
        </motion.div>
=======
        </div>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="outline" size="sm" className="w-full gap-2" asChild>
              <a href="/Resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </motion.nav>
=======
    </nav>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
  );
};

export default Navbar;
