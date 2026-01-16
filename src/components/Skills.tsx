import { Code, Cpu, Wrench, Monitor, PenTool, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: skills.languages,
    color: "text-blue-400",
  },
  {
    title: "Circuit & Software",
    icon: Cpu,
    skills: skills.circuitSoftware,
    color: "text-green-400",
  },
  {
    title: "Automation & PLC",
    icon: Wrench,
    skills: skills.automation,
    color: "text-yellow-400",
  },
  {
    title: "Lab Equipment",
    icon: Monitor,
    skills: skills.labEquipment,
    color: "text-purple-400",
  },
  {
    title: "Design Tools",
    icon: PenTool,
    skills: skills.designTools,
    color: "text-pink-400",
  },
  {
    title: "Networking",
    icon: Wifi,
    skills: skills.networking,
    color: "text-cyan-400",
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="relative bg-secondary/30"
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
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit spanning hardware, software, and design disciplines
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
