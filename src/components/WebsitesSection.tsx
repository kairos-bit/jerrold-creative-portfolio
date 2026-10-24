import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const websites = [
  {
    title: "Kairos Prod.",
    category: "Photography & Film Studio",
    image: "/images/websites/kairos.webp",
    url: "https://kairos-bit.github.io/kairos-prod/",
  },
  {
    title: "Groomers on the Go!",
    category: "Home Service Pet Grooming",
    image: "/images/websites/groomers.webp",
    url: "https://groomers-on-the-go.vercel.app",
  },
];

interface WebsitesSectionProps {
  index: number;
}

// Sits in the Selected Works grid as one tile holding both live websites.
const WebsitesSection = ({ index }: WebsitesSectionProps) => {
  return (
    <motion.div
      id="websites"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card ring-1 ring-inset ring-border">
        <div className="md:aspect-[4/3] grid grid-cols-2 gap-3 sm:gap-5 p-3 sm:p-6 content-center">
          {websites.map((site) => (
            <a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Browser frame */}
              <div className="overflow-hidden rounded-lg sm:rounded-xl border border-border bg-background hover-lift group-hover:border-primary/40">
                <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 h-5 sm:h-7 border-b border-border bg-secondary/60">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/15" />
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/15" />
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground/15" />
                </div>
                <div className="aspect-[5/6] overflow-hidden">
                  <img
                    src={site.image}
                    alt={`${site.title} website homepage`}
                    loading="lazy"
                    className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-2 sm:mt-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-display text-xs sm:text-base font-semibold text-foreground truncate">
                    {site.title}
                  </h4>
                  <p className="hidden sm:block font-body text-xs text-muted-foreground truncate">{site.category}</p>
                </div>
                <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <ArrowUpRight size={14} className="text-background" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Below-image info, matching ProjectCard */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Featured Websites</h3>
          <p className="font-body text-sm text-muted-foreground">Web Design & Development</p>
        </div>
        <span className="font-body text-xs text-muted-foreground">2026</span>
      </div>
    </motion.div>
  );
};

export default WebsitesSection;
