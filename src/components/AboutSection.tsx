import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle fog decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={ref} className="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 tracking-wider">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-12" />

          <div className="glass-card rounded-lg p-8 md:p-12 glow-red-hover transition-all duration-500">
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base mb-6">
              Computer Science Engineering undergraduate with strong foundations in 
              <span className="text-primary"> Python</span>, 
              <span className="text-primary"> Java</span>, and 
              <span className="text-primary"> Web Technologies</span>. 
              Passionate about building real-world projects and participating in hackathons.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Like a shinobi perfecting their jutsu, I believe in mastering the fundamentals 
              and applying them with precision. Every line of code is deliberate, every project 
              a mission worth completing.
            </p>

            {/* Roles */}
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-4">
              <span className="text-xs tracking-wider text-muted-foreground uppercase bg-secondary/50 px-4 py-2 rounded">
                🎯 Event Organizer — CSE Dept (2024–25)
              </span>
              <span className="text-xs tracking-wider text-muted-foreground uppercase bg-secondary/50 px-4 py-2 rounded">
                🌐 Coordinator — MITS Web Club (2025–26)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
