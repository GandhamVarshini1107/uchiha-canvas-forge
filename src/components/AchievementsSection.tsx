import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const achievements = [
  { title: "3rd Place — IEEE Ideathon 2025", icon: "🥉" },
  { title: "2nd Place — Error Replica Competition (GMOCS)", icon: "🥈" },
  { title: "2nd Place — Technical Quiz (DEFESTA)", icon: "🥈" },
];

const certifications = [
  "Programming with Python — Internshala",
  "JavaScript — GeeksforGeeks",
  "Web Development — Cognifiyz",
];

const AchievementsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={ref} className="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 tracking-wider">
            Battle <span className="text-primary">Record</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-12" />

          {/* Achievements timeline */}
          <div className="space-y-6 mb-16">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-xl group-hover:glow-red transition-all duration-300 shrink-0">
                  {a.icon}
                </div>
                <div className="flex-1 glass-card rounded-lg px-6 py-4 group-hover:border-primary/30 transition-all duration-300">
                  <p className="text-sm tracking-wide text-foreground/80">{a.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h3 className="font-heading text-xl text-center mb-8 tracking-wider text-muted-foreground">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="glass-card rounded-lg p-5 text-center glow-red-hover transition-all duration-300">
                <p className="text-xs tracking-wider text-foreground/70 leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
