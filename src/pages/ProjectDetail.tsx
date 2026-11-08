import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, type ImageItem } from "@/data/projects";
import GalleryModal from "@/components/GalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";




const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<ImageItem | null>(null);

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
    video.vertical
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : video.urls.length === 1
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
        video.urls.length === 1 && !video.vertical ? "max-w-3xl w-full" : ""
      }`}
    >
      <video
        controls
        ref={(el) => {
          if (el) videoRefs.current.push(el);
        }}
        onPlay={() => handlePlay(videoRefs.current.indexOf(document.activeElement as HTMLVideoElement))}
        // Reels ship with a matching .jpg poster so they don't preload
        poster={video.vertical ? url.replace(/\.mp4$/, ".jpg") : undefined}
        preload={video.vertical ? "none" : undefined}
        playsInline
        className={`w-full object-cover ${video.vertical ? "aspect-[9/16]" : "aspect-video"}`}
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

    {/* Every cover uses the same frame so the grid stays uniform */}
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {project.gallery.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setSelectedGallery(item)}
          className="text-left group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5]">
            <img
              src={item.cover}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur font-body text-xs text-foreground">
              {item.images.length} {item.images.length === 1 ? "photo" : "photos"}
            </span>
            <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight size={18} className="text-primary-foreground" />
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  </motion.div>
)}
  {project.websites && project.websites.length > 0 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="mb-20"
  >
    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
      Live Websites
    </h2>

    <div className="grid gap-10 md:grid-cols-2">
      {project.websites.map((site) => (
        <a
          key={site.url}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="space-y-4 group block"
        >
          {/* Browser frame */}
          <div className="overflow-hidden rounded-2xl bg-card border border-border group-hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 px-4 h-9 border-b border-border bg-secondary/60">
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
              <span className="ml-3 truncate font-body text-xs text-muted-foreground">
                {site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
            <img
              src={site.cover}
              alt={`${site.title} website homepage`}
              className="w-full aspect-video object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {site.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
              {site.description}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-full bg-foreground text-background font-body text-sm font-medium group-hover:bg-primary transition-colors duration-300">
              Visit live site <ArrowUpRight size={16} />
            </span>
          </div>
        </a>
      ))}
    </div>
  </motion.div>
)}
          <AnimatePresence>
            {selectedGallery && (
              <GalleryModal gallery={selectedGallery} onClose={() => setSelectedGallery(null)} />
            )}
          </AnimatePresence>

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
