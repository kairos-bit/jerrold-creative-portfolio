import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Selected
              <br />
              Works<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs text-right">            A curated selection of projects spanning branding, UI/UX design, web development, and photography.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
