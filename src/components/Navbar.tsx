import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "work" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);

    // If already on the homepage, just scroll to the section
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    // If inside a project page, go back to homepage first
    navigate("/");

    // Wait for homepage to render, then scroll to section
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground"
        >
          JC<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary transition-colors duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-lg text-foreground text-left"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                className="font-body text-lg text-foreground text-left"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;