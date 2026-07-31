"use client";

import Link from "next/link";
import { Package } from "@/lib/mockData";
import PackageCard from "./PackageCard";
import { ArrowRight } from "lucide-react";

interface PopularPackagesProps {
  packages: Package[];
}

export default function PopularPackages({ packages }: PopularPackagesProps) {
  // Show 3 packages: Honeymoon, Family, Deluxe Houseboat (or similar popular ones)
  const popularSlugs = ["honeymoon-package", "family-package", "1-bedroom-deluxe-houseboat", "royal-luxury-glass-houseboat"];
  const featured = packages.filter((p) => popularSlugs.includes(p.slug)).slice(0, 3);

  // If we can't find specific ones, fall back to first 3 packages
  const displayPackages = featured.length > 0 ? featured : packages.slice(0, 3);

  return (
    <section className="py-20 bg-bg-cream border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
              BEST SELLING
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight">
              Popular Cruise Packages
            </h2>
          </div>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 font-sans text-sm font-bold text-primary hover:text-primary-light transition group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
