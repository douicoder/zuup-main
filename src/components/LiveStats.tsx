import { motion } from "framer-motion";
import { Activity, Database, Users, MessageSquare, CloudLightning, Code } from "lucide-react";

const stats = [
  { icon: CloudLightning, label: "Edge Functions Executed", value: "1,245,892", color: "text-yellow-400" },
  { icon: Database, label: "Supabase Auth Logins", value: "54,321", color: "text-green-400" },
  { icon: Activity, label: "Currently Online", value: "2,465", color: "text-primary" },
  { icon: Users, label: "Total Community Members", value: "123,057", color: "text-blue-400" },
  { icon: MessageSquare, label: "Total Slack Messages", value: "27,844", color: "text-[#E01E5A]" },
  { icon: Code, label: "Open Source Commits", value: "8,942", color: "text-purple-400" },
];

const LiveStats = () => {
  // Duplicate stats for seamless scrolling
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <section id="stats" className="py-12 bg-card border-y border-border overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200vw] sm:w-[150vw] md:w-[200vw] animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 py-4 border-r border-border/50 min-w-max"
            >
              <Icon className={`w-8 h-8 ${stat.color}`} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LiveStats;
