import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import kairosLogo from "@/assets/kairos-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's create
            <br />
            something great<span className="text-primary">.</span>
          </h2>
          <p className="font-body text-lg text-background/60 max-w-lg mx-auto mb-10">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jerroldcanoneo78@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium hover:bg-burnt-orange-glow transition-colors duration-300">
              <Mail size={18} />
              Send an Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-background/20 text-background font-body font-medium hover:border-background/50 transition-colors duration-300">
              View Resume
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <a
              href="https://www.facebook.com/jerrold.canoneo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-background/20 text-background hover:border-primary hover:text-primary transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/_rolddd_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-background/20 text-background hover:border-primary hover:text-primary transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577440140154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-background/20 text-background hover:border-primary hover:text-primary transition-colors duration-300">
              <img alt="Kairos" className="w-5 h-5 object-contain" src="/lovable-uploads/09ec0e0e-78d4-4196-929c-8eb0df2d74df.png" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ContactSection;