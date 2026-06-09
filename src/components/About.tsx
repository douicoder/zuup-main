import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Globe, Heart, Zap, Shield, Target, Rocket, Lightbulb, Users2 } from "lucide-react";

const whatWeDo = [
  {
    icon: Lightbulb,
    title: "Workshops & Training",
    description: "Interactive sessions on technology, entrepreneurship, design, communication, leadership, and future-ready skills.",
  },
  {
    icon: Rocket,
    title: "Cohorts & Programs",
    description: "Highly selective programs that connect ambitious students with mentors, projects, and opportunities to accelerate their growth.",
  },
  {
    icon: Users2,
    title: "Community Building",
    description: "A nationwide network of students, educators, professionals, and organizations working together to create meaningful impact.",
  },
  {
    icon: Zap,
    title: "Hackathons & Innovation",
    description: "Supporting young innovators through challenges, competitions, and collaborative problem-solving experiences.",
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Partnering with schools, NGOs, and communities to ensure learning and opportunities reach those who need them most.",
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-medium text-foreground">
      {/* Intro */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Welcome to Zuup
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Zuup is a youth-led non-profit organization dedicated to creating opportunities for students and young people through education, innovation, leadership, and community-driven initiatives.
            </p>
            <p>
              Founded by young changemakers, Zuup believes that talent exists everywhere, but opportunity does not. Our mission is to bridge that gap by providing access to workshops, mentorship, cohorts, hackathons, skill development programs, networking opportunities, and real-world experiences that help individuals grow into confident leaders and creators.
            </p>
            <p className="font-bold text-foreground">
              Whether you're a student looking to learn, a volunteer looking to contribute, or an organization looking to create impact, Zuup provides a platform where ideas become action.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card-strong rounded-3xl p-8 bg-blue-50/50"
        >
          <Target size={32} className="text-blue-500 mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To build India's most impactful youth-driven ecosystem where every student has access to the skills, mentorship, opportunities, and network needed to succeed.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card-strong rounded-3xl p-8 bg-primary/5"
        >
          <Heart size={32} className="text-primary mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower young people through education, innovation, leadership, and community, creating pathways for personal growth, career success, and social impact.
          </p>
        </motion.div>
      </div>

      {/* What We Do */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          What We Do
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {whatWeDo.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6">
                <Icon size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* By the Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-strong rounded-3xl p-8 sm:p-12 bg-black text-white"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-white">By the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "Students Impacted", value: "1,000+" },
            { label: "Workshops & Events", value: "50+" },
            { label: "Across India", value: "Multiple Cities" },
            { label: "Leadership Team", value: "Youth-Led" },
            { label: "Active Users", value: "3,000" },
            { label: "Slack Community", value: "2,000+" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
