import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const stats = [
{ value: "20+", label: "Projects Completed" },
{ value: "4+", label: "Years Experience" },
{ value: "10+", label: "Happy Clients" }];


const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <div className="relative">
              <img
                src={heroPortrait}
                alt="Jerrold Christian"
                className="rounded-2xl w-full max-w-sm object-cover aspect-square" />
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Designing with
              <br />
              purpose<span className="text-primary">.</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">I'm Jerrold Christian M. Canoneo — a multidisciplinary creative based in the Philippines. I specialize in crafting visual identities, designing intuitive digital products, and capturing stories through photography and videography.



            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              With a passion for clean aesthetics and meaningful design, I help brands and individuals
              communicate their vision through thoughtful, detail-oriented creative work.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) =>
              <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;