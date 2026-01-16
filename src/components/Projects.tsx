import { useEffect, useMemo, useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects, ProjectCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Power Systems",
  "Embedded",
  "Automation",
  "Design/CAD",
];

const categoryColors: Record<ProjectCategory, string> = {
  "Power Systems": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "Embedded": "bg-green-500/10 text-green-500 border-green-500/20",
  "Automation": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Design/CAD": "bg-purple-500/10 text-purple-500 border-purple-500/20",
};

const projectImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  2: "https://images.unsplash.com/photo-1509390221805-d1c887a72a00?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  3: "https://images.unsplash.com/photo-1759138884006-0903cf0af1b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  4: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  5: "https://images.unsplash.com/photo-1617994452722-4145e196248b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  6: "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  7: "https://images.unsplash.com/photo-1721244653652-268631ec049a?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  8: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  9: "https://plus.unsplash.com/premium_photo-1661946559786-fcfd73b340b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    Object.values(projectImages).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Calculate visible project IDs based on active filter
  const visibleProjectIds = activeFilter === "All" 
    ? null 
    : new Set(projects.filter((p) => p.category === activeFilter).map((p) => p.id));

  return (
    <motion.section
      id="projects"
      className="relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
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
          className="text-center mb-12"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of engineering projects demonstrating expertise in power systems,
            embedded development, and automation
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-3 md:py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          key={activeFilter} // Force re-render when filter changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects
            .filter((project) => 
              visibleProjectIds === null || visibleProjectIds.has(project.id)
            )
            .map((project) => (
              <motion.div
                key={project.id}
                className="glass-card p-6 flex flex-col cursor-pointer group transition-opacity duration-200 opacity-100"
                onClick={() => setSelectedProject(project)}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-border bg-secondary/30">
                  <img
                    src={projectImages[project.id]}
                    alt={`${project.title} preview`}
                    className="h-32 md:h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Category badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-background text-xs text-muted-foreground rounded"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                {/* Outcome */}
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span className="font-medium">{project.outcome}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="mb-2">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${
                        categoryColors[selectedProject.category]
                      }`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Role */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Role
                    </h4>
                    <p className="text-muted-foreground">{selectedProject.role}</p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="skill-chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.details && (
                    <>
                      {/* Overview */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Overview
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.details.overview}
                        </p>
                      </div>

                      {/* Problem */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Problem
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.details.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Approach
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.details.approach}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Results
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.details.results}
                        </p>
                      </div>

                      {/* Learnings */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Learnings
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.details.learnings}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Outcome highlight */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-medium">
                      Outcome: {selectedProject.outcome}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default Projects;
