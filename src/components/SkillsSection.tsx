import { motion } from "framer-motion";
import { Video, Monitor, Camera, Code, PenTool, Layers } from "lucide-react";

const skills = [
  { icon: Video, title: "Video Editing", description: "Short forms, long forms, documentaries, montage, event coverage" },
  { icon: Monitor, title: "UI/UX Design", description: "Intuitive interfaces and user-centered experiences." },
  { icon: Camera, title: "Photography", description: "Landscape, portrait, and editorial photography." },
  { icon: Code, title: "Web Development", description: "Modern, responsive websites with clean code." },
  { icon: PenTool, title: "Videography", description: "Custom illustrations and visual storytelling." },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills & Services<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
