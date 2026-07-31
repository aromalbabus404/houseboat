"use aspiration-level";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { Package } from "@/lib/mockData";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const isHouseboat = pkg.category.startsWith("houseboat-");
  const friendlyCategory = pkg.category.replace("houseboat-", "");

  return (
    <Link 
      href={`/packages/${pkg.slug}`}
      className="block relative h-[400px] w-full rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
    >
      {/* 1. FULL COVER BACKGROUND IMAGE */}
      <Image
        src={pkg.images[0] || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600"}
        alt={pkg.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      
      {/* Gradient overlay for bottom readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

      {/* 2. TOP BADGES */}
      <div className="absolute top-4.5 right-4.5 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-xs font-bold shadow-sm">
        <span>{pkg.rating}</span>
        <Star className="w-3 h-3 fill-accent text-accent" />
      </div>

      <div className="absolute top-4.5 left-4.5 z-20 px-3 py-1.5 rounded-full bg-primary-dark/80 backdrop-blur-sm text-accent font-sans text-[9px] font-bold uppercase tracking-widest">
        {isHouseboat ? `${friendlyCategory} Boat` : friendlyCategory}
      </div>

      {/* 3. TRANSPARENT DETAILS OVERLAY */}
      <div className="absolute bottom-5 inset-x-6 flex items-end justify-between gap-4 z-20">
        <div className="flex flex-col min-w-0 text-white">
          <span className="font-serif text-base md:text-lg font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] truncate">
            {pkg.title}
          </span>
          <span className="font-sans text-xs font-semibold mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-white/90">
            ₹{pkg.price.toLocaleString()} <span className="text-[10px] text-white/70">/ {isHouseboat ? "night" : "trip"}</span>
          </span>
        </div>

        {/* Circular Action Arrow Button (Now styled as simple div inside parent Link wrapper) */}
        <div
          className="w-11 h-11 rounded-full bg-white group-hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow shrink-0"
        >
          <ArrowUpRight className="w-5 h-5 text-primary-dark" />
        </div>
      </div>
    </Link>
  );
}
