import { motion } from "framer-motion";
import TransparentMoza from "./TransparentMoza";

const StorySection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 max-w-5xl relative">
        
        {/* Moza Illustration Pointing to Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] -translate-y-20 pointer-events-none z-10"
        >
          <TransparentMoza 
            src="/moza-teaching-inverted.png" 
            alt="Moza Teaching" 
            className="w-full h-full object-contain opacity-90 scale-x-[-1]" 
            /* scale-x-[-1] flips the image horizontally so he points left towards the text */
          />
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative z-20">
          <div className="flex justify-center mb-6 lg:hidden">
            <TransparentMoza src="/moza-teaching-inverted.png" alt="Moza Teaching" className="w-40 h-40 object-contain scale-x-[-1] rotate-6" />
          </div>
          <h2 
            className="text-6xl md:text-8xl font-bold text-primary mb-16"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Why Zuup exists.
          </h2>
          
          <div className="space-y-12 text-2xl md:text-4xl font-medium tracking-tight text-muted-foreground/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Youth don't lack talent.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground"
            >
              They lack guidance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Zuup was built on a simple belief:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-primary font-bold"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px", fontSize: "1.2em" }}
            >
              Tech is the ultimate equalizer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-foreground"
            >
              We give you the tools. You build the future.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
