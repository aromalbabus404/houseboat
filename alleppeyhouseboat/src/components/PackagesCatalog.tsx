"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "@/lib/mockData";
import PackageCard from "./PackageCard";

interface PackagesCatalogProps {
  packages: Package[];
  videoSrc?: string;
}

const categories = [
  { id: "all", label: "All Packages" },
  { id: "day", label: "Day Cruise" },
  { id: "overnight", label: "Overnight Cruise" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
  { id: "premium", label: "Premium/Luxury" },
];

export default function PackagesCatalog({ packages, videoSrc }: PackagesCatalogProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages = packages.filter((pkg) => {
    // We only display items categorized as package- or houseboat- here
    if (!pkg.category.startsWith("package-") && !pkg.category.startsWith("houseboat-")) return false;
    
    if (activeFilter === "all") return true;
    if (activeFilter === "day") return pkg.category === "package-day" || pkg.category === "houseboat-private";
    if (activeFilter === "overnight") return pkg.category === "package-overnight" || pkg.category.startsWith("houseboat-") && pkg.category !== "houseboat-private";
    if (activeFilter === "honeymoon") return pkg.category === "package-honeymoon";
    if (activeFilter === "family") return pkg.category === "package-family";
    if (activeFilter === "premium") return pkg.category === "package-premium" || pkg.category === "houseboat-luxury";
    return true;
  });

  const defaultVideo = "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <div className="min-h-screen bg-bg-cream pb-20">
      {/* 1. HERO BANNER */}
      <div className="px-4 md:px-8 py-4 bg-bg-cream">
        <div className="relative w-full min-h-[320px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5 flex flex-col justify-center py-16 text-center">
          {/* Background video */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              src={videoSrc || defaultVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 drop-shadow-sm">
              Alleppey Cruise Packages
            </h1>
            <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
              Carefully curated day, overnight, honeymoon, and family packages to fit all budgets and preferences.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FILTER TABS */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-8">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-3xl bg-white shadow-sm border border-primary/5 max-w-3xl">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wide transition duration-150 focus:outline-none min-h-[44px] cursor-pointer ${
                    isActive ? "text-primary-dark z-10" : "text-charcoal/70 hover:text-primary-dark"
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activePackagesFilterBg"
                      className="absolute inset-0 bg-[#cdeed6] rounded-full -z-10 border border-primary/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. CATALOG LISTINGS GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <motion.div
                  layout
                  key={pkg.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="font-sans text-base text-charcoal/60 mb-4">
                  No packages found in this category.
                </p>
                <a
                  href={`https://wa.me/917356462150?text=${encodeURIComponent(
                    "Hi! I want to enquire about custom tour packages in Alleppey."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-sm"
                >
                  Ask us on WhatsApp
                </a>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
