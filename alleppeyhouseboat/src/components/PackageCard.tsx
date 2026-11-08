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
  const isSharingHouseboat = pkg.category === "houseboat-sharing";
  const friendlyCategory = isHouseboat
    ? (isSharingHouseboat ? "Sharing" : "Private")
    : pkg.category === "sharing-boat-ride"
    ? "Sharing Boat"
    : pkg.category;

  return (
    <Link 
      href={`/packages/${pkg.slug}`}
      className="block relative h-[260px] sm:h-[320px] md:h-[400px] w-full rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-350 border border-primary/5 bg-primary-dark/5 cursor-pointer"
    >
      {/* 1. FULL COVER BACKGROUND IMAGE */}
      <Image
        src={pkg.images[0] || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600"}
        alt={pkg.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      
      {/* Gradient overlay for bottom readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

      {/* 2. TOP BADGES */}
      <div className="absolute top-2.5 right-2.5 sm:top-4.5 sm:right-4.5 z-20 flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-dark font-sans text-[10px] sm:text-xs font-bold shadow-sm">
        <span>{pkg.rating}</span>
        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-accent text-accent" />
      </div>

      <div className="absolute top-2.5 left-2.5 sm:top-4.5 sm:left-4.5 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-md text-accent font-sans text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest">
        {isHouseboat ? `${friendlyCategory} Houseboat` : friendlyCategory}
      </div>

      {/* 3. TRANSPARENT DETAILS OVERLAY */}
      <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-6 flex items-end justify-between gap-2 sm:gap-4 z-20">
        <div className="flex flex-col min-w-0 text-white">
          <span className="font-serif text-sm sm:text-base md:text-lg font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] truncate">
            {pkg.title}
          </span>
          <span className="font-sans text-[11px] sm:text-xs font-semibold mt-0.5 sm:mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-white/90">
            ₹{Math.min(
              pkg.price,
              pkg.dayCruisePrice !== undefined && pkg.dayCruisePrice !== null ? pkg.dayCruisePrice : Infinity,
              pkg.overnightPrice !== undefined && pkg.overnightPrice !== null ? pkg.overnightPrice : Infinity
            ).toLocaleString()}
          </span>
        </div>

        {/* Circular Action Arrow Button */}
        <div
          className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white group-hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow shrink-0"
        >
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary-dark" />
        </div>
      </div>
    </Link>
  );
}
