import { motion } from "framer-motion";
import { School2 } from "lucide-react";

const SchoolsTrust = () => {
  return (
    <section className="py-24 bg-card/30 border-y border-border/30">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center mb-6 text-muted-foreground">
            <School2 size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Trusted by schools building the next generation.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            We partner directly with educational institutions to bring our workshops, clubs, and real-world opportunities into the classroom.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Placeholder logos for schools - sleek monochrome text to look premium */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center h-16 border border-border/50 rounded-xl bg-background/50 hover:bg-background hover:border-primary/30 transition-colors cursor-default">
                <span className="font-bold text-xl tracking-tight">Institution {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolsTrust;
