import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ImageItem } from "@/data/projects";

interface GalleryModalProps {
  gallery: ImageItem;
  onClose: () => void;
}

// Uniform thumbnail grid for one gallery, with a full-screen viewer for each photo.
const GalleryModal = ({ gallery, onClose }: GalleryModalProps) => {
  const [active, setActive] = useState<number | null>(null);
  const count = gallery.images.length;
  const thumbAspect = gallery.aspect === "landscape" ? "aspect-[4/3]" : "aspect-[4/5]";

  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  // Lock page scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (active === null) onClose();
        else setActive(null);
      }
      if (active !== null && e.key === "ArrowRight") step(1);
      if (active !== null && e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onClose, step]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-x-0 bottom-0 top-6 md:inset-x-6 md:top-10 mx-auto max-w-6xl flex flex-col rounded-t-2xl md:rounded-2xl bg-background overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6 px-6 md:px-10 py-6 border-b border-border">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
              {count} {count === 1 ? "Photo" : "Photos"}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{gallery.title}</h2>
            <p className="font-body text-sm text-muted-foreground mt-2 max-w-2xl">{gallery.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="shrink-0 w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Uniform grid */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {gallery.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-xl bg-card ${thumbAspect}`}
              >
                <img
                  src={image}
                  alt={`${gallery.title} ${index + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full-screen viewer */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          >
            <motion.img
              key={gallery.images[active]}
              src={gallery.images[active]}
              alt={`${gallery.title} ${active + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[82vh] object-contain rounded-lg"
            />

            <p className="absolute top-6 left-6 font-body text-sm text-white/70">
              {active + 1} / {count}
            </p>
            <button
              type="button"
              aria-label="Close photo"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryModal;
