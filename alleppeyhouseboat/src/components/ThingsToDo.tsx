"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Package } from "@/lib/mockData";

interface ThingsToDoProps {
  packages: Package[];
}

const getCategoryLabel = (cat: string) => {
  if (cat === "shikara") return "SHIKARA";
  if (cat === "kayaking") return "KAYAKING";
  if (cat === "speedboat") return "SPEEDBOAT";
  if (cat === "sharing-boat-ride") return "SHIKARA";
  if (cat === "sunset-cruise") return "SUNSET CRUISE";
  if (cat === "village-tour") return "VILLAGE TOUR";
  if (cat === "fishing") return "FISHING";
  return cat.replace("houseboat-", "").toUpperCase();
};

const getUnit = (category: string) => {
  if (category === "kayaking") return "person";
  if (category === "shikara") return "hour";
  if (category === "speedboat") return "trip";
  if (category === "sharing-boat-ride") return "hour";
  return "trip";
};

export default function ThingsToDo({ packages }: ThingsToDoProps) {
  // Extract activity packages from the CMS packages
  const activities = packages.filter((pkg) =>
    ["shikara", "kayaking", "speedboat", "sharing-boat-ride", "village-tour", "fishing", "sunset-cruise"].includes(pkg.category)
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-2 sm:mb-3">
              LOCAL SIGHTSEEING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-primary-dark font-bold leading-tight">
              Things to Do in Alleppey
            </h2>
          </div>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 font-sans text-sm font-bold text-primary hover:text-primary-light transition group"
          >
            <span>Explore All Activities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Activity Grid (2-cols on mobile, 4-cols on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {activities.map((act, idx) => {
            const displayPrice = typeof act.price === "number" ? act.price.toLocaleString() : act.price;
            const categoryLabel = getCategoryLabel(act.category);
            const unit = getUnit(act.category);

            return (
              <motion.div
                key={act.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full"
              >
                <Link
                  href={`/packages/${act.slug}`}
                  className="block relative h-[260px] sm:h-[320px] md:h-[380px] w-full rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
                >
                  {/* 1. Full Cover Image */}
                  <Image
                    src={act.images?.[0] || "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200"}
                    alt={act.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

                  {/* 2. Top Badges */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4.5 sm:right-4.5 z-20 flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-[10px] sm:text-xs font-bold shadow-sm">
                    <span>{act.rating || 4.8}</span>
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-accent text-accent" />
                  </div>

                  <div className="absolute top-2.5 left-2.5 sm:top-4.5 sm:left-4.5 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-md text-accent font-sans text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest">
                    {categoryLabel}
                  </div>

                  {/* 3. Floating Bottom Details Overlay */}
                  <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-6 flex items-end justify-between gap-2 sm:gap-4 z-20">
                    <div className="flex flex-col min-w-0 text-white">
                      <span className="font-serif text-sm sm:text-base md:text-lg font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] truncate group-hover:text-accent transition-colors">
                        {act.title}
                      </span>
                      <span className="font-sans text-[11px] sm:text-xs font-semibold mt-0.5 sm:mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-white/90">
                        ₹{displayPrice} <span className="text-[9px] sm:text-[10px] text-white/70">/ {unit}</span>
                      </span>
                    </div>

                    {/* Arrow Action Link */}
                    <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white group-hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary-dark" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
