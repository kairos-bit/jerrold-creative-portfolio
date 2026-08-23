const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background border-t border-background/10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          JC<span className="text-primary">.</span>
        </p>
        <p className="font-body text-sm text-background/50">
          © {new Date().getFullYear()} Jerrold Christian M. Canoneo. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Dribbble", "Behance", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-sm text-background/50 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
