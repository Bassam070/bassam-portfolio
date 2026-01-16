import { GraduationCap, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";
import { education, awards } from "@/lib/data";

const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
      }}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="section-title">Education & Awards</h2>
          <p className="section-subtitle mx-auto">
            Academic foundation in electrical engineering with specialized focus areas
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Education Card */}
          <motion.div
            className="glass-card p-8"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {education.degree}
                </h3>
                <p className="text-primary">{education.school}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Focus: {education.focus}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Award className="w-4 h-4" />
                <span className="font-medium">{education.scholarship}</span>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="skill-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards Card */}
          <motion.div
            className="glass-card p-8"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Awards & Recognition
                </h3>
                <p className="text-muted-foreground">Achievements & honors</p>
              </div>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-4 bg-secondary rounded-lg border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional achievements placeholder */}
            <div className="mt-6 p-4 border border-dashed border-border rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                More achievements coming soon...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
