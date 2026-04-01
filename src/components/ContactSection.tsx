import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const ContactSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-xl">
        <div ref={ref} className="fade-up text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4 tracking-wider">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />

          <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
            Every great mission begins with a conversation. Feel free to reach out.
          </p>

          <a
            href="mailto:varshini@example.com"
            className="inline-block border border-primary/50 text-primary px-8 py-3 rounded text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-red-hover"
          >
            Send a Message
          </a>

          {/* Social links placeholder */}
          <div className="flex justify-center gap-8 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wider">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="w-12 h-px bg-border mx-auto mb-6" />
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          © 2025 Gandham Varshini — Those who cannot acknowledge themselves will eventually fail.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
