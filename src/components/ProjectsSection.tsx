import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const projects = [
  {
    title: "Freelancing Website for Students",
    role: "Frontend Developer",
    description: "Built a responsive UI using HTML and CSS, focused on user experience and accessibility for student freelancers.",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Webclub ID Generator",
    role: "Python Developer",
    description: "Automated ID card generation system built with Python. Reduced manual effort and improved accuracy for the web club.",
    tech: ["Python", "Automation"],
  },
];

const ProjectsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 tracking-wider">
            Mission <span className="text-primary">Log</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-lg p-8 glow-red-hover transition-all duration-500 group hover:-translate-y-1"
              >
                <p className="text-xs tracking-[0.2em] text-primary uppercase mb-3">{project.role}</p>
                <h3 className="font-heading text-lg mb-4 tracking-wide group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] tracking-wider text-primary/70 border border-primary/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
