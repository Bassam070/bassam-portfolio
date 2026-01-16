import { Briefcase, CircuitBoard } from "lucide-react";
import { experiences } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            Professional journey combining technical expertise with customer-focused skills
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 mt-6 glow-primary-subtle" />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {exp.type === "engineering" ? (
                    <CircuitBoard className="w-5 h-5 text-primary" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-primary" />
                  )}
                </div>

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
