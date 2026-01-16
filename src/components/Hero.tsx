import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
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

      <div className="relative z-10 section-container text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Open to Opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
          {personalInfo.name}
        </h1>

        {/* Title with gradient */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold gradient-text mb-6 animate-fade-in animation-delay-200">
          {personalInfo.title}
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-300">
          Specializing in power systems, control systems, and embedded technologies.
          Turning complex engineering challenges into measurable solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-400">
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
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-500">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
