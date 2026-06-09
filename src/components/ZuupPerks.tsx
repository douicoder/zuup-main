import { motion } from "framer-motion";
import { Terminal, Code2, Rocket, ArrowRight } from "lucide-react";

const perks = [
  {
    id: "schools",
    icon: Rocket,
    title: "School Clubs & Empowerment",
    description: "Start a Zuup Club at your high school. We provide the curriculum, the tools, and the network to build real projects from day one. We charge a small fee to keep things running and provide premium resources.",
    action: "Start a club",
    link: "/schools"
  },
  {
    id: "hackathons",
    icon: Code2,
    title: "Hackathons & Teaching",
    description: "We host massive international hackathons like FAR AWAY, and intense summer coding cohorts. No boring lectures—just pure building, competing, and learning by doing.",
    action: "View programs",
    link: "https://faraway.zuup.dev"
  },
  {
    id: "saas",
    icon: Terminal,
    title: "SaaS & Internal Tools",
    description: "We don't just teach; we build. Get access to our suite of internal apps, including people.zuup.dev for team management, our official branding guides, and premium developer tools.",
    action: "Access tools",
    link: "https://people.zuup.dev"
  }
];

const ZuupPerks = () => {
  return (
    <section id="perks" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Everything that comes <br />
            <span className="text-primary">with the ecosystem.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zuup isn't just events. We operate across three core pillars to empower the next generation of builders. We don't rely on donations; we build sustainable products and value-driven programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border-2 border-border p-8 rounded-2xl flex flex-col h-full shadow-[4px_4px_0px_hsl(var(--border))] hover:shadow-[4px_4px_0px_hsl(var(--primary))] hover:border-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{perk.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {perk.description}
                </p>
                <a
                  href={perk.link}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto w-fit"
                >
                  {perk.action}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ZuupPerks;
