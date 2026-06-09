import { motion } from "framer-motion";
import { Code, Timer, Terminal, BarChart3, Share2, Cloud, Shield, Zap, Globe, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";
import zuupCodeImg from "@/assets/zuupcode-screenshot.png";
import zuupTimeImg from "@/assets/zuuptime-screenshot.png";

const codeFeatures = [
  { icon: Terminal, title: "30+ Languages", desc: "Python, JavaScript, Java, C++, Rust, Go and more — real execution via Piston engine" },
  { icon: Code, title: "Monaco Editor", desc: "VS Code's editor with syntax highlighting, IntelliSense, and keyboard shortcuts" },
  { icon: Share2, title: "Instant Sharing", desc: "Share code via URL — no signup needed to view" },
  { icon: Cloud, title: "Cloud Save", desc: "Sign in and projects save automatically across devices" },
];

const timeFeatures = [
  { icon: Timer, title: "Auto Tracking", desc: "Starts when you type, stops when you break — down to the second" },
  { icon: BarChart3, title: "Language Stats", desc: "See your real tech stack breakdown and time distribution" },
  { icon: Globe, title: "Leaderboards", desc: "Private leaderboards for teams and hackathons" },
  { icon: Shield, title: "Privacy First", desc: "Your data is yours — export to JSON/CSV, no AI training" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ecosystemApps = [
  { name: "Zuup Theme", url: "https://theme.zuup.dev/" },
  { name: "Zuup Giza", url: "https://giza.zuup.dev/" },
  { name: "Zuup Time", url: "https://time.zuup.dev/" },
  { name: "Zuup Counseling", url: "https://counseling.zuup.dev/" },
  { name: "Zuup Validate", url: "https://validate.zuup.dev/" },
  { name: "Zuup Workshops", url: "https://workshops.zuup.dev/" },
  { name: "Zuup People", url: "https://people.zuup.dev/" },
  { name: "Zuup Mail", url: "https://mail.zuup.dev/" },
];

const communityLinks = [
  { name: "User Dashboard", url: "https://dashboard.zuup.dev/profile" },
  { name: "Slack Community", url: "https://faraway.zuup.dev/slack" },
  { name: "Open Source (GitHub)", url: "https://github.com/jagrit0711" },
];

const ZuupTools = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-6">
            Zuup Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Developer Tools.{" "}
            <span className="text-primary">Built by Zuup.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free, open-source tools designed for students, makers, and developers. No paywalls, no trackers — just tools that work.
          </p>
        </motion.div>

        {/* ZuupCode */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Screenshot */}
            <a href="https://code.zuup.dev" target="_blank" rel="noopener noreferrer" className="block relative group">
              <div className="overflow-hidden">
                <img
                  src={zuupCodeImg}
                  alt="ZuupCode — browser-based IDE with 30+ languages and real code execution"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={20} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white px-2 py-1 rounded">Browser IDE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">ZuupCode</h3>
                  <p className="text-gray-300 text-sm mt-1 font-medium">Write code. Run it. Right here.</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-[4px_4px_0px_white] border-2 border-white group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_white] transition-all">
                  Open ZuupCode <ExternalLink size={14} />
                </span>
              </div>
            </a>

            {/* Features */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {codeFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fade}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="rounded-xl bg-muted p-4 border-2 border-transparent hover:border-border transition-colors"
                    >
                      <Icon size={20} className="text-primary mb-2" />
                      <h4 className="text-foreground font-semibold text-sm mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "JavaScript", "TypeScript", "Java", "C++", "Rust", "Go", "Ruby", "PHP", "Swift"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {lang}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">+20 more</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ZuupTime */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Screenshot */}
            <a href="https://time.zuup.dev" target="_blank" rel="noopener noreferrer" className="block relative group">
              <div className="overflow-hidden">
                <img
                  src={zuupTimeImg}
                  alt="ZuupTime — open-source coding time tracker with analytics and leaderboards"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Timer size={20} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white px-2 py-1 rounded">Time Tracker</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">ZuupTime</h3>
                  <p className="text-gray-300 text-sm mt-1 font-medium">Track your coding time, for free.</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-[4px_4px_0px_white] border-2 border-white group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_white] transition-all">
                  Open ZuupTime <ExternalLink size={14} />
                </span>
              </div>
            </a>

            {/* Features */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {timeFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fade}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="rounded-xl bg-muted p-4 border-2 border-transparent hover:border-border transition-colors"
                    >
                      <Icon size={20} className="text-primary mb-2" />
                      <h4 className="text-foreground font-semibold text-sm mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Zap size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Works with VS Code · JetBrains · Vim · Neovim · Sublime Text · and more</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* More Ecosystem Apps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">More Apps</span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {ecosystemApps.map((app, i) => (
              <a
                key={i}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground">{app.name}</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Community & Profile</span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-strong rounded-xl p-5 flex items-center justify-between hover:border-primary/50 transition-colors group"
              >
                <span className="text-sm font-semibold text-foreground">{link.name}</span>
                <ExternalLink size={16} className="text-primary group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://code.zuup.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_hsl(var(--foreground))] transition-all"
          >
            Start Coding Free <ChevronRight size={16} />
          </a>
          <a
            href="https://time.zuup.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white font-bold text-foreground border-2 border-border shadow-[4px_4px_0px_hsl(var(--border))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_hsl(var(--border))] transition-all"
          >
            <Timer size={16} /> Track Your Time
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ZuupTools;
