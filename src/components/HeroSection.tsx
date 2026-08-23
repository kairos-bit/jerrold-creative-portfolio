import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">CREATIVE DESIGNER, VIDEOGRAPHER & PHOTOGRAPHER

            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-foreground mb-6">
              Jerrold
              <br />
              Christian
              <br />
              <span className="text-gradient">Canoneo</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">Crafting meaningful digital experiences through design, videographer, photography, and creative storytelling.

            </p>
            <div className="flex gap-4">
              <a
                href="#work"
                className="px-8 py-3.5 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary transition-colors duration-300">
                
                View My Work
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 rounded-full border border-border text-foreground font-body text-sm font-medium hover:border-foreground transition-colors duration-300">
                
                About Me
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center">
            
            <div className="relative w-80 md:w-96">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img
                src={heroPortrait}
                alt="Jerrold Christian M. Canoneo"
                className="relative rounded-3xl w-full object-cover aspect-[3/4] shadow-2xl" />
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-12 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border">
                
                <p className="font-display text-2xl font-bold text-foreground">4+</p>
                <p className="font-body text-xs text-muted-foreground">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>);

};

export default HeroSection;