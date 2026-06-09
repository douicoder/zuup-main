import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import TransparentMoza from "./TransparentMoza";

const currentFocus = [
  "Global Hackathons",
  "Free Hardware Grants",
  "SaaS Ecosystem",
  "College Counseling",
  "Tech Empowerment"
];

const comingSoon = [
  "Hardware Incubator",
  "International Fellowships",
  "More Free Stuff"
];

const FutureVision = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      
      {/* Massive Background Mozas */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 -left-20 w-[500px] h-[500px] pointer-events-none z-0"
      >
        <TransparentMoza 
          src="/moza-building-inverted.png" 
          alt="Moza Builder" 
          className="w-full h-full object-contain -rotate-12"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-10 -right-20 w-[500px] h-[500px] pointer-events-none z-0"
      >
        <TransparentMoza 
          src="/moza-laptop-inverted.png" 
          alt="Moza Hacker" 
          className="w-full h-full object-contain rotate-12 scale-x-[-1]"
        />
      </motion.div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 
            className="text-5xl md:text-7xl font-bold text-foreground"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Building the future <br className="hidden md:block"/> 
            <span className="text-primary">of youth empowerment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] bg-background border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(255,61,127,0.5)] flex flex-col hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(255,61,127,0.6)] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 
                className="text-4xl font-bold text-foreground underline decoration-wavy decoration-primary underline-offset-[6px]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Current Focus
              </h3>
              <CheckCircle2 className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            
            <ul className="space-y-6">
              {currentFocus.map((item) => (
                <li key={item} className="flex items-center gap-4 text-2xl text-muted-foreground" style={{ fontFamily: "'Caveat', cursive" }}>
                  <span className="text-primary font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] bg-background border-2 border-border border-dashed shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex flex-col hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 
                className="text-4xl font-bold text-muted-foreground underline decoration-wavy decoration-muted-foreground underline-offset-[6px]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Coming Soon
              </h3>
              <Clock className="text-muted-foreground w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            
            <ul className="space-y-6">
              {comingSoon.map((item) => (
                <li key={item} className="flex items-center gap-4 text-2xl text-muted-foreground/60" style={{ fontFamily: "'Caveat', cursive" }}>
                  <span className="text-muted-foreground font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FutureVision;
