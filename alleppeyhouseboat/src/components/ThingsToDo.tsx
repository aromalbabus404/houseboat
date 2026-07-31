"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Package } from "@/lib/mockData";

interface ThingsToDoProps {
  packages: Package[];
}

const categoryEmojis: Record<string, string> = {
  "kayaking": "🛶 ",
  "shikara": "🛥️ ",
  "speedboat": "🚤 ",
  "village-tour": "🌴 ",
  "fishing": "🎣 ",
  "sunset-cruise": "🌅 "
};

export default function ThingsToDo({ packages }: ThingsToDoProps) {
  // Extract activity packages from the CMS packages
  const activities = packages.filter((pkg) =>
    ["shikara", "kayaking", "speedboat", "village-tour", "fishing", "sunset-cruise"].includes(pkg.category)
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
              LOCAL SIGHTSEEING
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight">
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

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, idx) => {
            const displayTitle = `${categoryEmojis[act.category] || ""}${act.title}`;
            const displayPrice = typeof act.price === 'number' ? `₹${act.price.toLocaleString()}` : act.price;
            
            return (
              <motion.div
                key={act.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={`/packages/${act.slug}`}
                  className="block group relative h-[300px] w-full rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Background Image */}
                  <Image
                    src={act.images?.[0] || "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200"}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm text-accent font-sans text-[10px] font-bold">
                    Starting {displayPrice}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-5 inset-x-6 z-20 text-white flex flex-col justify-end">
                    <h3 className="font-serif text-lg font-bold mb-1.5 drop-shadow">
                      {displayTitle}
                    </h3>
                    <p className="font-sans text-xs text-white/80 leading-relaxed max-w-[250px] drop-shadow-sm">
                      {act.shortDescription}
                    </p>
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
