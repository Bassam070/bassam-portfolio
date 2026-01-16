import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import bassamPortrait from "@/assets/bassam-portrait.webp";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatIn = {
    hidden: { opacity: 0, scale: 0.96, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-container">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={container}
        >
          {/* Left side - Text content */}
          <motion.div className="text-center lg:text-left" variants={container}>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in"
              variants={fadeUp}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100"
              variants={fadeUp}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title with gradient */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold gradient-text mb-6 animate-fade-in animation-delay-200"
              variants={fadeUp}
            >
              {personalInfo.title}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in animation-delay-300"
              variants={fadeUp}
            >
              Specializing in power systems, control systems, and embedded technologies.
              Turning complex engineering challenges into measurable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in animation-delay-400"
              variants={fadeUp}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="w-full sm:w-auto gap-2 glow-primary-subtle hover:glow-primary transition-shadow"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-500"
              variants={fadeUp}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Portrait */}
          <motion.div className="flex items-center justify-center" variants={floatIn}>
            <motion.div
              className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-[100vh] flex items-center justify-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={bassamPortrait}
                alt="Bassam Mahdi - Electrical Engineering Graduate"
                className="w-auto h-full max-h-[100vh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
