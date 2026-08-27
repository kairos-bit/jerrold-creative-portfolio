  import { motion } from "framer-motion";
  import { ArrowUpRight } from "lucide-react";
  import { Link } from "react-router-dom";
  import type { Project } from "@/data/projects";

  interface ProjectCardProps {
    project: Project;
    index: number;
  }

  const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to={`/project/${project.id}`} className="group block">
          <div className="relative overflow-hidden rounded-2xl bg-card hover-lift">
            <div className="aspect-[4/3] overflow-hidden">
  {project.image.endsWith(".mp4") ? (
    <video
      src={project.image}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )}
</div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-primary-foreground/70 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
          {/* Below-image info */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{project.category}</p>
            </div>
            <span className="font-body text-xs text-muted-foreground">{project.year}</span>
          </div>
        </Link>
      </motion.div>
    );
  };

  export default ProjectCard;
