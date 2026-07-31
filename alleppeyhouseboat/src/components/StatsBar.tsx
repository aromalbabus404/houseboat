"use aspiration-level";
import { Award, Star, Users } from "lucide-react";
import { SiteSettings } from "@/lib/mockData";

interface StatsBarProps {
  settings: SiteSettings;
}

export default function StatsBar({ settings }: StatsBarProps) {
  const statsList = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      value: `${(settings.reviewCount + 1000).toLocaleString()}+`,
      label: "Happy Guests Welcomed",
      description: "Unforgettable backwater memories",
    },
    {
      icon: <Star className="w-8 h-8 text-accent fill-accent" />,
      value: `${settings.googleRating} / 5.0`,
      label: `Google Business Rating`,
      description: `Based on ${settings.reviewCount} verified reviews`,
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      value: `${settings.yearsRunning}+ Years`,
      label: "Running Experiences",
      description: "Local crew & trusted boats since 2014",
    },
  ];

  return (
    <section className="relative -mt-12 z-40 max-w-6xl mx-auto px-6 mb-16">
      <div className="glass-panel grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10 rounded-3xl shadow-xl">
        {statsList.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-5 md:justify-center group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-extrabold text-primary-dark">
                {stat.value}
              </span>
              <span className="font-sans text-sm font-semibold text-charcoal/90 mt-0.5">
                {stat.label}
              </span>
              <span className="font-sans text-xs text-charcoal/65 mt-0.5">
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
