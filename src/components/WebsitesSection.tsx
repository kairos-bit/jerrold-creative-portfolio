import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const websites = [
  {
    title: "Kairos Prod.",
    category: "Photography & Film Studio",
    year: "2026",
    description:
      "Website for my photography and videography studio in Iligan City. A cinematic, motion-led site showcasing weddings, graduations and milestone shoots.",
    tags: ["Web Design", "GSAP", "Smooth Scroll"],
    image: "/images/websites/kairos.webp",
    url: "https://kairos-bit.github.io/kairos-prod/",
  },
  {
    title: "Groomers on the Go!",
    category: "Home Service Pet Grooming",
    year: "2026",
    description:
      "Playful, on-brand site for a home service dog and cat grooming business, featuring an interactive before-and-after slider of real client results.",
    tags: ["Web Design", "Branding", "Interactive"],
    image: "/images/websites/groomers.webp",
    url: "https://groomers-on-the-go.vercel.app",
  },
];

const WebsitesSection = () => {
  return (
    <section id="websites" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">Web Projects</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured
              <br />
              Websites<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-muted-foreground max-w-xs text-right">
            Live websites I designed and built for real brands. Click through to explore them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {websites.map((site, i) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group block"
            >
              {/* Browser frame */}
              <div className="overflow-hidden rounded-2xl bg-card border border-border hover-lift group-hover:border-primary/30">
                <div className="flex items-center gap-2 px-4 h-9 border-b border-border bg-secondary/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                  <span className="ml-3 flex-1 truncate font-body text-xs text-muted-foreground">
                    {site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={site.image}
                    alt={`${site.title} website homepage`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                    {site.category} · {site.year}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{site.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2 max-w-md">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 font-body text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <ArrowUpRight size={18} className="text-background" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
