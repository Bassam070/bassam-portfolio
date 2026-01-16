import { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of engineering projects demonstrating expertise in power systems,
            embedded development, and automation
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 flex flex-col cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
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
            </div>
          ))}
        </div>

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
    </section>
  );
};

export default Projects;
