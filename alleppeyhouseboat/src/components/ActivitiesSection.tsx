"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowUpRight } from "lucide-react";
import { Package } from "@/lib/mockData";

interface ActivitiesSectionProps {
  packages: Package[];
}

export default function ActivitiesSection({ packages }: ActivitiesSectionProps) {
  // Extract activity packages
  const activities = packages.filter((pkg) =>
    ["shikara", "kayaking", "speedboat"].includes(pkg.category)
  );

  return (
    <section className="py-[50px] bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
              Explore More
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight">
              More Ways to Experience Alleppey
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-sm md:text-right">
            Venture into narrow canals or speed across open lakes with our verified daytime water activities.
          </p>
        </div>

        {/* Activities List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => {
            return (
              <motion.div
                key={act.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="w-full"
              >
                <Link
                  href={`/packages/${act.slug}`}
                  className="block relative h-[380px] w-full rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
                >
                  {/* 1. Full Cover Image */}
                  <Image
                    src={act.images[0]}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

                  {/* 2. Top Badges */}
                  <div className="absolute top-4.5 right-4.5 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-xs font-bold shadow-sm">
                    <span>{act.rating}</span>
                    <Star className="w-3 h-3 fill-accent text-accent" />
                  </div>

                  <div className="absolute top-4.5 left-4.5 z-20 px-3 py-1.5 rounded-full bg-primary-dark/80 backdrop-blur-sm text-accent font-sans text-[9px] font-bold uppercase tracking-widest">
                    {act.category === "shikara" ? "Shikara" : act.category === "kayaking" ? "Kayaking" : "Speedboat"}
                  </div>

                  {/* 3. Floating Bottom Details Overlay */}
                  <div className="absolute bottom-5 inset-x-6 flex items-end justify-between gap-4 z-20">
                    <div className="flex flex-col min-w-0 text-white">
                      <span className="font-serif text-base md:text-lg font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] truncate">
                        {act.title}
                      </span>
                      <span className="font-sans text-xs font-semibold mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-white/90">
                        ₹{act.price.toLocaleString()} <span className="text-[10px] text-white/70">/ {act.category === "kayaking" ? "person" : act.category === "shikara" ? "hour" : "trip"}</span>
                      </span>
                    </div>

                    {/* Arrow Action Link */}
                    <div
                      className="w-11 h-11 rounded-full bg-white group-hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary-dark" />
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
