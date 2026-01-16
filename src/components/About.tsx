import { Zap, Cpu, Settings, Award } from "lucide-react";
import { personalInfo } from "@/lib/data";

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
    icon: Settings,
    title: "Automation",
    description: "SCADA, PLCs, and industrial control systems",
  },
  {
    icon: Award,
    title: "Design Excellence",
    description: "CAD, sustainable design, and code compliance",
  },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate engineer with hands-on experience in designing and implementing
            complex electrical systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
            
            {/* Quick facts */}
            <div className="space-y-3">
              {personalInfo.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 group cursor-default"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
