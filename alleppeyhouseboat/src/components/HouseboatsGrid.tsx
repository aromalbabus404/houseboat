"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { Package } from "@/lib/mockData";

interface HouseboatsGridProps {
  packages: Package[];
}

export default function HouseboatsGrid({ packages }: HouseboatsGridProps) {
  // Filter only houseboat packages
  const houseboatPackages = packages.filter((pkg) => pkg.category.startsWith("houseboat-"));

  // Hide the section completely if there are no houseboats in the CMS
  if (houseboatPackages.length === 0) {
    return null;
  }

  return (
    <section className="py-10 md:py-[50px] bg-bg-cream">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-2 sm:mb-3">
            Our Fleet
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-2 sm:mb-4">
            Curated Houseboat Experiences
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/70">
            Explore our collection of premium and budget-friendly houseboats cruising through Alappuzha.
          </p>
        </div>

        {/* Packages Grid: 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {houseboatPackages.map((pkg, idx) => {
            return (
              <motion.div
                key={pkg.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full"
              >
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="block relative h-[250px] sm:h-[320px] md:h-[380px] w-full rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
                >
                  {/* 1. Full Cover Image */}
                  <Image
                    src={pkg.images[0] || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600"}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

                  {/* 2. Top Badges */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4.5 sm:right-4.5 z-20 flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-[10px] sm:text-xs font-bold shadow-sm">
                    <span>{pkg.rating}</span>
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-accent text-accent" />
                  </div>

                  <div className="absolute top-2.5 left-2.5 sm:top-4.5 sm:left-4.5 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-md text-accent font-sans text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider">
                    {pkg.category.replace("houseboat-", "")} <span className="hidden sm:inline">Houseboat</span>
                  </div>

                  {/* 3. Card Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 md:p-8 z-20 flex flex-col justify-end text-left">
                    <h3 className="font-serif text-xs sm:text-lg md:text-2xl text-white font-bold mb-1 sm:mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="hidden sm:block font-sans text-xs text-white/70 mb-4 line-clamp-2 leading-relaxed">
                      {pkg.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-2 sm:pt-4 mt-0.5 sm:mt-1">
                      <div className="flex flex-col">
                        <span className="font-sans text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider leading-none mb-0.5 sm:mb-1">
                          Starting From
                        </span>
                        <span className="font-sans text-xs sm:text-lg md:text-xl text-white font-extrabold leading-none">
                          ₹{Math.min(
                            pkg.price,
                            pkg.dayCruisePrice !== undefined && pkg.dayCruisePrice !== null ? pkg.dayCruisePrice : Infinity,
                            pkg.overnightPrice !== undefined && pkg.overnightPrice !== null ? pkg.overnightPrice : Infinity
                          ).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition duration-200 shrink-0">
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
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
