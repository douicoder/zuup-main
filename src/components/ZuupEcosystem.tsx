import { motion } from "framer-motion";
import { 
  Terminal, Shield, Zap, Box, Globe, 
  Clock, Heart, Mail, MapPin, ArrowRight
} from "lucide-react";
import TransparentMoza from "./TransparentMoza";

const features = [
  {
    title: "dashboard.zuup.dev",
    description: "Centralized command center and passwordless auth built on Cloudflare Workers."
  },
  {
    title: "code.zuup.dev",
    description: "Browser-based coding IDE for instantaneous, zero-setup development."
  },
  {
    title: "validate.zuup.dev",
    description: "Cryptographically verifiable digital certificates issued for hackathons and courses."
  },
  {
    title: "time.zuup.dev",
    description: "Log your coding time and track stats straight from any IDE."
  },
  {
    title: "counseling.zuup.dev",
    description: "Personalized guidance and mentorship platform for all active cohorts."
  },
  {
    title: "mail.zuup.dev",
    description: "Autonomous agentic email system built for massive scale."
  },
  {
    title: "workshops.zuup.dev",
    description: "Event portals and interactive skill-building sessions."
  },
  {
    title: "giza.zuup.dev",
    description: "Our international expansion testing phase in Egypt (Alpha)."
  },
  {
    title: "dubai.zuup.dev",
    description: "Scaling our youth empowerment mission to the UAE (Alpha)."
  }
];

const ZuupEcosystem = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border/50">
      
      {/* Background Scattered Mozas */}
      {/* Top Left Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-20 left-0 lg:left-10 w-72 h-72 opacity-40 pointer-events-none z-0"
      >
        <TransparentMoza src="/moza-teaching-inverted.png" alt="Moza" className="w-full h-full object-contain -rotate-12" />
      </motion.div>

      {/* Top Right Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-40 right-0 lg:right-10 w-80 h-80 opacity-40 pointer-events-none z-0"
      >
        <TransparentMoza src="/moza-floating-inverted.png" alt="Moza" className="w-full h-full object-contain rotate-12" />
      </motion.div>

      {/* Bottom Left Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="hidden md:block absolute bottom-32 left-0 lg:left-10 w-80 h-80 opacity-40 pointer-events-none z-0"
      >
        <TransparentMoza src="/moza-laptop-inverted.png" alt="Moza" className="w-full h-full object-contain scale-x-[-1] rotate-6" />
      </motion.div>

      {/* Bottom Right Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="hidden md:block absolute bottom-10 right-0 lg:right-10 w-72 h-72 opacity-40 pointer-events-none z-0"
      >
        <TransparentMoza src="/moza-soldering-inverted.png" alt="Moza" className="w-full h-full object-contain -rotate-6" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24 relative z-10">
          <h2 
            className="text-5xl md:text-7xl font-bold text-primary mb-6"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            More than programs.
          </h2>
          <p className="text-2xl text-muted-foreground font-medium">
            An ecosystem built for students.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, idx) => (
            <motion.a
              href={`https://${feature.title}`}
              target="_blank"
              rel="noopener noreferrer"
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-background border-2 border-foreground hover:bg-card transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.5)] hover:-translate-y-1 hover:-translate-x-1 block"
            >
              <h3 
                className="text-3xl font-bold text-foreground mb-6 flex items-center justify-between" 
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                <span className="underline decoration-wavy decoration-primary underline-offset-[6px]">
                  {feature.title}
                </span>
                <span className="text-primary transition-transform group-hover:translate-x-2 text-4xl">→</span>
              </h3>
              <p 
                className="text-2xl text-muted-foreground leading-relaxed" 
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {feature.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Mobile Alternate View */}
        <div className="flex flex-col items-center md:hidden relative z-10 mt-8">
          <div className="w-56 h-56 mb-8">
            <TransparentMoza src="/moza-laptop-inverted.png" alt="Moza Laptop" className="w-full h-full object-contain" />
          </div>
          <a
            href="https://dashboard.zuup.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Explore Zuup Ecosystem
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ZuupEcosystem;
