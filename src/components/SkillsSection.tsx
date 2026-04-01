import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const skills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "HTML / CSS", level: 90 },
  { name: "SQL / MySQL", level: 70 },
  { name: "C", level: 65 },
];

const tools = ["Windows", "Linux", "MySQL", "Git"];

const SkillsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={ref} className="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 tracking-wider">
            Skill <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-12" />

          {/* Skill bars */}
          <div className="space-y-6 mb-12">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm tracking-wider text-foreground/80">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-crimson-glow rounded-full skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs tracking-wider text-muted-foreground border border-border/50 px-4 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
