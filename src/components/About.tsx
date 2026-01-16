import { Zap, Cpu, Settings, Award } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import aboutPhoto from "@/assets/ring.jpg";

const highlights = [
  {
    icon: Zap,
    title: "Power Systems",
    description: "Wind farms, substations, and transmission systems",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Arduino, Raspberry Pi, and sensor integration",
  },
  {
    icon: Award,
    title: "Design Excellence",
    description: "CAD, sustainable design, and code compliance",
  },
];

const About = () => {
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
      id="about"
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate engineer with hands-on experience in designing and implementing
            complex electrical systems
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 items-center lg:grid-cols-3 lg:items-stretch"
          variants={container}
        >
          {/* Bio */}
          <motion.div className="space-y-6 order-1 lg:self-stretch" variants={fadeUp}>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              {personalInfo.bio}
            </motion.p>
            
            {/* Quick facts */}
            <motion.div className="space-y-3" variants={container}>
              {personalInfo.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  variants={fadeUp}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {highlight}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div className="order-2 flex justify-center lg:self-stretch" variants={floatIn}>
            <motion.div
              className="w-full max-w-sm min-h-[420px] h-full overflow-hidden rounded-2xl border border-border bg-secondary/20 shadow-lg"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
              <motion.img
                src={aboutPhoto}
                alt="Bassam Mahdi portrait"
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ scale: 1.03 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            className="order-3 flex flex-wrap gap-4 items-stretch lg:self-stretch"
            variants={container}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 group cursor-default flex-1 min-w-[160px]"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
