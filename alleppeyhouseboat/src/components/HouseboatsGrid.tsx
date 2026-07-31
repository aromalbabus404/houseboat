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
    <section className="py-[50px] bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            Our Fleet
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            Curated Houseboat Experiences
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            Explore our collection of premium and budget-friendly houseboats cruising through Alappuzha.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="block relative h-[380px] w-full rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
                >
                  {/* 1. Full Cover Image */}
                  <Image
                    src={pkg.images[0] || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600"}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

                  {/* 2. Top Rating Badge */}
                  <div className="absolute top-4.5 right-4.5 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-xs font-bold shadow-sm">
                    <span>{pkg.rating}</span>
                    <Star className="w-3 h-3 fill-accent text-accent" />
                  </div>

                  {/* 3. Card Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end text-left">
                    <h3 className="font-serif text-xl md:text-2xl text-white font-bold mb-2 group-hover:text-accent transition-colors duration-200">
                      {pkg.title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 mb-4 line-clamp-2 leading-relaxed">
                      {pkg.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-1">
                      <div className="flex flex-col">
                        <span className="font-sans text-[9px] text-white/40 uppercase tracking-widest leading-none mb-1">
                          Starting From
                        </span>
                        <span className="font-sans text-lg md:text-xl text-white font-extrabold leading-none">
                          ₹{pkg.price.toLocaleString()}
                          <span className="text-xs text-white/50 font-normal">/Night</span>
                        </span>
                      </div>
                      
                      <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition duration-200">
                        <ArrowUpRight className="w-4 h-4" />
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
