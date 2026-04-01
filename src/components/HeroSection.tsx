import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dark mysterious atmosphere"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Fog overlay */}
      <div className="absolute inset-0 fog pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Sharingan decorative element */}
      <div className="absolute top-1/4 right-[15%] w-16 h-16 rounded-full border-2 border-primary/20 sharingan-spin opacity-30 hidden lg:block">
        <div className="absolute top-1 left-1/2 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
        <div className="absolute bottom-2 left-1 w-2 h-2 rounded-full bg-primary" />
        <div className="absolute bottom-2 right-1 w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-sm md:text-base tracking-[0.4em] text-muted-foreground uppercase mb-6 animate-fade-in">
          Welcome to my world
        </p>
        <h1
          className="glitch text-4xl md:text-7xl lg:text-8xl font-heading font-bold tracking-wider mb-6"
          data-text="Gandham Varshini"
        >
          Gandham Varshini
        </h1>
        <p className="text-lg md:text-2xl text-primary tracking-[0.2em] font-light mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Crafting Code with Precision
        </p>
        <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Computer Science Engineering Student · Builder · Dreamer
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent mx-auto" />
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground mt-2 uppercase">Scroll</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
