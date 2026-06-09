import { motion } from "framer-motion";
import { useState } from "react";
import TransparentMoza from "./TransparentMoza";

const FinalCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-40 bg-background relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          {/* Moza Rocket Skateboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-64 h-80 md:w-96 md:h-[450px] relative flex-shrink-0 group cursor-pointer mt-12 md:mt-0"
          >
            {/* Fun Text pointing to Moza */}
            <div 
              className="absolute -top-8 -right-4 md:-top-12 md:-right-24 text-primary font-bold text-2xl md:text-3xl rotate-6 z-20 pointer-events-none drop-shadow-md whitespace-nowrap"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              he made the rocket skateboard!
              {/* Pointing down-left to the Moza */}
              <svg className="w-12 h-12 absolute -bottom-8 left-0 md:-bottom-10 md:-left-4 rotate-[110deg] text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 9c0 4.5 4.5 9 10 9" />
                <path d="M15 14l4 4-4 4" />
              </svg>
            </div>

            <TransparentMoza 
              src="/moza-rocket-skateboard-inverted.png" 
              alt="Moza Rocket Skateboard" 
              className="absolute inset-0 w-full h-full object-contain opacity-100 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 
              className="text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Ready to build cool {isHovered ? "sh*t?" : "stuff?"}
            </h2>
            
            {/* Professional font for description */}
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-medium">
              Join the community of teen coders, makers, and builders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="/join"
                className="px-10 py-4 bg-primary text-primary-foreground font-bold text-xl rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:bg-primary/90 transition-all"
                style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
              >
                Join Zuup
              </a>
              <a
                href="#programs"
                className="px-10 py-4 bg-transparent text-muted-foreground font-bold text-xl rounded-2xl border-2 border-border hover:border-foreground transition-colors"
                style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
