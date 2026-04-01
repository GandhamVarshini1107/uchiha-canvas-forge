const navItems = ["About", "Skills", "Projects", "Achievements", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-heading text-lg tracking-widest text-primary">
          G.V
        </a>
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile: simple scroll-based nav */}
        <div className="md:hidden">
          <a href="#contact" className="text-sm text-primary tracking-wider uppercase">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
