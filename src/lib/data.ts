// Portfolio Data for Bassam Mahdi

export const personalInfo = {
  name: "Bassam Mahdi",
  title: "Electrical Engineering Graduate",
  subtitle: "Building the Future of Power Systems & Embedded Solutions",
  email: "bmahdi.eng@gmail.com",
  phone: "+1 (819) 230-9076",
  linkedin: "https://linkedin.com/in/Bassam-Mahdi",
  github: "https://github.com/Bassam070",
  location: "Ottawa, ON",
  bio: `I'm an Electrical Engineering graduate from the University of Ottawa with a passion for power systems, control systems, and embedded technologies. My experience spans from designing autonomous vehicle circuits to developing SCADA simulations and renewable energy models. I thrive on solving complex engineering challenges and delivering measurable results.`,
  highlights: [
    "BASc in Electrical Engineering",
    "Engineering Management & Entrepreneurship Focus",
    "Power Systems & Controls Specialist",
    "Hands-on Embedded Systems Experience",
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Barista",
    company: "Starbucks",
    location: "Ottawa, ON",
    period: "May 2022 – Present",
    description: [
      "Delivered exceptional customer service under high-pressure environments, maintaining composure during peak hours",
      "Trained and mentored new team members using positive reinforcement and coaching techniques",
      "Maintained operational standards and organized daily cleaning schedules for equipment areas",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Electrical Engineer",
    company: "uOttawa Autonomous Vehicle Team",
    location: "Ottawa, ON",
    period: "Oct 2022 – Sept 2023",
    description: [
      "Designed and tested electrical circuits for autonomous vehicle systems and robotic components",
      "Evaluated robot motors under varying voltage conditions to optimize performance and efficiency",
      "Collaborated with cross-functional teams to integrate electrical systems with mechanical and software components",
    ],
    type: "engineering",
  },
];

export type ProjectCategory = "Power Systems" | "Embedded" | "Automation" | "Design/CAD";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  role: string;
  tools: string[];
  outcome: string;
  details?: {
    overview: string;
    problem: string;
    approach: string;
    results: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wind Farm Power Model (~500 MW)",
    category: "Power Systems",
    description: "Developed a comprehensive wind farm power generation model capable of producing approximately 500 MW of clean energy.",
    role: "Lead Designer",
    tools: ["MATLAB", "Simulink", "PowerWorld"],
    outcome: "Validated transmission efficiency with 5% loss margin",
    details: {
      overview: "A large-scale wind farm simulation modeling power generation, transmission, and grid integration.",
      problem: "Need to design a sustainable energy solution that efficiently generates and transmits power to the grid.",
      approach: "Created detailed models of wind turbines, transformers, and transmission lines using MATLAB/Simulink.",
      results: "Successfully modeled 500 MW generation capacity with validated efficiency metrics.",
      learnings: "Gained deep understanding of renewable energy integration and grid stability challenges.",
    },
  },
  {
    id: 2,
    title: "Substation Power Regulation System",
    category: "Power Systems",
    description: "Designed a substation system regulating power distribution for facilities with 500+ connected devices.",
    role: "Systems Engineer",
    tools: ["PowerWorld", "AutoCAD", "CDEGS"],
    outcome: "Reliable power distribution to 500+ devices",
    details: {
      overview: "A comprehensive substation design for industrial power distribution.",
      problem: "Ensure stable and reliable power delivery to a large number of devices with varying load requirements.",
      approach: "Implemented advanced protection schemes and load balancing algorithms.",
      results: "Achieved 99.9% uptime for connected devices with minimal voltage fluctuations.",
      learnings: "Mastered protection coordination and power quality management.",
    },
  },
  {
    id: 3,
    title: "Step-up/Step-down Transformer Systems",
    category: "Power Systems",
    description: "Engineered transformer systems using Y/Delta configurations achieving approximately 90% efficiency.",
    role: "Design Engineer",
    tools: ["MATLAB", "Simulink", "LTSpice"],
    outcome: "~90% transformer efficiency",
    details: {
      overview: "High-efficiency transformer design for power transmission applications.",
      problem: "Minimize power losses during voltage transformation while maintaining reliability.",
      approach: "Optimized core materials and winding configurations using simulation-driven design.",
      results: "Achieved 90% efficiency rating, exceeding industry standards.",
      learnings: "Deep understanding of electromagnetic design principles and thermal management.",
    },
  },
  {
    id: 4,
    title: "SCADA Simulation with Siemens Step 7",
    category: "Automation",
    description: "Built a SCADA simulation system for monitoring and controlling transmission lines with advanced error detection.",
    role: "Automation Engineer",
    tools: ["Siemens Step 7", "FESTO", "PuTTY"],
    outcome: "99% transmission line error detection rate",
    details: {
      overview: "Industrial SCADA system for real-time power grid monitoring.",
      problem: "Rapidly detect and respond to transmission line faults to prevent outages.",
      approach: "Implemented PLC-based monitoring with custom alarm logic and HMI interfaces.",
      results: "Detected 99% of transmission line errors within milliseconds.",
      learnings: "Expertise in industrial automation and real-time control systems.",
    },
  },
  {
    id: 5,
    title: "STATCOM Voltage Regulation Model",
    category: "Power Systems",
    description: "Modeled a STATCOM system in MATLAB/Simulink for reactive power compensation and voltage stability.",
    role: "Power Systems Analyst",
    tools: ["MATLAB", "Simulink"],
    outcome: "Reduced voltage deviation to 10%",
    details: {
      overview: "Advanced power electronics simulation for grid voltage support.",
      problem: "Maintain voltage stability in grids with fluctuating renewable energy sources.",
      approach: "Designed control algorithms for dynamic reactive power compensation.",
      results: "Reduced voltage deviation from 25% to 10% under varying load conditions.",
      learnings: "Mastered power electronics and FACTS device applications.",
    },
  },
  {
    id: 6,
    title: "Faculty Building Renovation (LEED Gold)",
    category: "Design/CAD",
    description: "Renovated faculty building electrical systems per NEC & CEC standards, achieving LEED Gold compliance.",
    role: "Electrical Designer",
    tools: ["Revit", "AutoCAD", "AGI32"],
    outcome: "LEED Gold certification achieved",
    details: {
      overview: "Sustainable electrical system redesign for an academic building.",
      problem: "Upgrade aging electrical infrastructure while meeting green building standards.",
      approach: "Integrated energy-efficient lighting, smart controls, and renewable energy systems.",
      results: "Achieved LEED Gold certification with 30% energy reduction.",
      learnings: "Expertise in sustainable design and building codes compliance.",
    },
  },
  {
    id: 7,
    title: "Fitness Tracker — Arduino Uno",
    category: "Embedded",
    description: "Built a health monitoring system using temperature, ECG, and pulse sensors with Arduino Uno.",
    role: "Embedded Developer",
    tools: ["Arduino", "C++", "Sensors"],
    outcome: "Real-time health data processing",
    details: {
      overview: "Wearable health monitoring prototype with multiple biosensors.",
      problem: "Create an affordable device for continuous health parameter monitoring.",
      approach: "Integrated multiple sensors with custom signal processing algorithms.",
      results: "Achieved accurate real-time health data with low power consumption.",
      learnings: "Sensor integration, signal processing, and embedded C++ programming.",
    },
  },
  {
    id: 8,
    title: "Printer Availability System — Raspberry Pi",
    category: "Embedded",
    description: "Developed a ROS-based system to monitor and indicate printer usage status in real time.",
    role: "Systems Developer",
    tools: ["Raspberry Pi", "ROS", "SolidWorks", "Python"],
    outcome: "Real-time printer status monitoring",
    details: {
      overview: "IoT solution for office printer availability tracking.",
      problem: "Reduce time wasted walking to unavailable printers in large office spaces.",
      approach: "Used ROS for communication and designed custom housing for sensors.",
      results: "Successfully deployed system providing instant availability updates.",
      learnings: "ROS development, IoT integration, and mechanical design.",
    },
  },
  {
    id: 9,
    title: "Accessible Donation Bin — Multisim",
    category: "Design/CAD",
    description: "Designed a mechanical donation bin with validated electronic circuits using recycled materials.",
    role: "Design Engineer",
    tools: ["SolidWorks", "Multisim", "Recycled Materials"],
    outcome: "Cost-effective accessible design",
    details: {
      overview: "Sustainable product design for community donation collection.",
      problem: "Create an accessible, low-cost donation bin for community use.",
      approach: "Combined mechanical design with electronic validation and sustainable materials.",
      results: "Reduced manufacturing cost by 40% while maintaining quality standards.",
      learnings: "Sustainable design practices and circuit validation techniques.",
    },
  },
];

export const skills = {
  languages: [
    "Python", "C", "C++", "MATLAB", "Java", "Assembly", "Verilog"
  ],
  circuitSoftware: [
    "Simulink", "NI LabVIEW", "LTSpice", "KiCAD", "Altium Designer", "PowerWorld", "Quartus II"
  ],
  automation: [
    "Siemens Step 7", "FESTO", "Kylowave", "PID Controllers", "PuTTY", "ThingSpeak"
  ],
  labEquipment: [
    "Multimeters", "Oscilloscopes", "Logic Analyzer", "Function Generator", "Motors", "Generators", "Microcontrollers"
  ],
  designTools: [
    "Revit", "AutoCAD", "AGI32", "CDEGS", "SolidWorks", "OnShape", "TinkerCad", "InkScape", "Ultimaker Cura"
  ],
  networking: [
    "Wireshark", "Acrylic Suite", "Cisco Packet Tracer", "Espressif"
  ],
};

export const education = {
  degree: "BASc in Electrical Engineering",
  school: "University of Ottawa",
  location: "Ottawa, ON",
  focus: "Engineering Management & Entrepreneurship",
  scholarship: "University Entrance Scholarship",
  coursework: [
    "Capstone Project",
    "Electrical Power Transmission",
    "Electric Machines & Power Systems",
    "Wireless Communication Fundamentals",
    "Modern Control Systems",
    "Engineering Design",
    "Electronics I–III",
  ],
};

export const awards = [
  {
    title: "Master of Ceremony in ESL",
    description: "Recognized for exceptional public speaking and leadership abilities in English as a Second Language programs.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
