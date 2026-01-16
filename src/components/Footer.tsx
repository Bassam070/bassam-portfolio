import { Heart, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-border bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        >
          {/* Logo and copyright */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-2"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="text-xl font-bold text-foreground">
              Bassam Mahdi
            </span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Made with love */}
          <motion.div
            className="flex items-center gap-1 text-sm text-muted-foreground"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and engineering precision</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-3"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
