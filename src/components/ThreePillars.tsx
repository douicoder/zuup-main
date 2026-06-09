import { motion } from "framer-motion";
import { Users, Trophy, Globe } from "lucide-react";
import TransparentMoza from "./TransparentMoza";

const pillars = [
  {
    icon: <Users size={32} />,
    title: "Empowerment",
    description: "Teaching underprivileged youth digital skills and freelancing to make them completely independent.",
    moza: "/moza-teaching-inverted.png",
    imgPos: "-top-32 -left-20 w-48 h-48",
    link: "/empower"
  },
  {
    icon: <Trophy size={32} />,
    title: "Events & Hardware",
    description: "Insane hackathons, giving out free hardware, and sending top hackers to places like Japan for free (FAR AWAY!).",
    moza: "/moza-soldering-inverted.png",
    imgPos: "-top-24 left-1/2 -translate-x-1/2 w-48 h-48",
    link: "/events"
  },
  {
    icon: <Globe size={32} />,
    title: "SaaS & Open Source",
    description: "Building software for fun, open-sourcing it to the world, and integrating it into the massive Zuup ecosystem.",
    moza: "/moza-laptop-inverted.png",
    imgPos: "-top-28 -right-16 w-48 h-48",
    link: "/saas"
  }
];

const ThreePillars = () => {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <div className="text-center mb-32">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Three Pillars
          </h2>
          <p 
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            How Zuup creates <span className="text-primary">impact.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative p-8 pt-12 rounded-[2rem] bg-background border-2 border-border/70 hover:border-border transition-all duration-500 flex flex-col items-center text-center mt-12 md:mt-0 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Moza Image absolutely positioned on the box border with hover effect */}
              <div className={`absolute z-20 ${pillar.imgPos} pointer-events-none transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-4 group-hover:rotate-3`}>
                <TransparentMoza 
                  src={pillar.moza} 
                  alt={pillar.title} 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between w-full">
                <div>
                  <h3 
                    className="text-4xl font-bold mb-6 text-primary"
                    style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
                  >
                    {pillar.title}
                  </h3>
                  {/* Professional font for readability */}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <a 
                  href={pillar.link}
                  className="inline-flex justify-center items-center gap-2 mt-8 text-2xl font-bold text-foreground group/link w-fit mx-auto"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  <span className="underline decoration-wavy decoration-primary underline-offset-[6px]">
                    learn more
                  </span>
                  <span className="text-primary transition-transform group-hover/link:translate-x-2 text-3xl">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
