import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";




const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<null | {
  title: string;
  description: string;
  cover: string;
  images: string[];
  aspect?: "portrait" | "landscape";
}>(null);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary font-body hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">{project.category}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">{project.description}</p>
          </motion.div>

         {/* Hero image or video */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="mb-16"
>
  {project.image.endsWith(".mp4") ? (
    <video
      src={project.image}
      autoPlay
      loop
      muted
      playsInline
      className="w-full rounded-2xl object-cover aspect-video"
    />
  ) : (
    <img
      src={project.image}
      alt={project.title}
      className="w-full rounded-2xl object-cover aspect-video"
    />
  )}
</motion.div>

          {/* Details grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">About the Project</h2>
              <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Role
                </h3>
                <p className="font-body text-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Year
                </h3>
                <p className="font-body text-foreground">{project.year}</p>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

{project.videos && project.videos.length > 0 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="mb-20"
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
      Video Works
    </h2>

    <div className="grid gap-10">
      {project.videos.map((video, index) => (
  <div key={index} className="space-y-6">
    
    {/* Title + Description */}
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
        {video.title}
      </h3>
     <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
        {video.description}
      </p>
    </div>

    {/* Multiple Videos */}
   <div
  className={`grid gap-6 ${
    video.urls.length === 1
      ? "grid-cols-1 justify-items-center"
      : "md:grid-cols-2"
  }`}
>
      {video.urls.map((url, i) => {
  const globalIndex = `${index}-${i}`; // unique per video

  return (
    <div
      key={i}
      className={`overflow-hidden rounded-2xl bg-card border border-border ${
        video.urls.length === 1 ? "max-w-3xl w-full" : ""
      }`}
    >
      <video
        controls
        ref={(el) => {
          if (el) videoRefs.current.push(el);
        }}
        onPlay={() => handlePlay(videoRefs.current.indexOf(document.activeElement as HTMLVideoElement))}
        className="w-full aspect-video object-cover"
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
})}
      
    </div>
    {/* ✅ Divider (ONLY if not last item) */}
      {index !== project.videos.length - 1 && (
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">Next Section</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>
      )}

  </div>
))}
    </div>
  </motion.div>
)}
  {project.gallery && project.gallery.length > 0 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="mb-20"
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
      Project Gallery
    </h2>

    <div className="grid gap-10 md:grid-cols-2">
      {project.gallery.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setSelectedGallery(item)}
          className="text-left space-y-4 group"
        >
          <div className="overflow-hidden rounded-2xl bg-card border border-border">
          <img
  src={item.cover}
  alt={item.title}
  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
    item.aspect === "landscape"
      ? "aspect-video"
      : "aspect-[4/5]"
  }`}
/>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  </motion.div>
)}
 {selectedGallery && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
    <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background p-6">
      <button
        type="button"
        onClick={() => setSelectedGallery(null)}
        className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm bg-secondary text-secondary-foreground"
      >
        Close
      </button>

      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
          {selectedGallery.title}
        </h2>
        <p className="font-body text-muted-foreground">
          {selectedGallery.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {selectedGallery.images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
         <img
  src={image}
  alt={`${selectedGallery.title} ${index + 1}`}
  className="w-full h-auto"
/>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

          {/* Next project */}
          <div className="border-t border-border pt-12">
            <p className="font-body text-sm text-muted-foreground mb-3">Next Project</p>
            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-center justify-between"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
              <ArrowUpRight
                size={28}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
