"use aspiration-level";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Package } from "@/lib/mockData";
import PackageCard from "./PackageCard";

interface ActivityLandingPageProps {
  category: "shikara" | "kayaking" | "speedboat" | "village-tour" | "fishing" | "sunset-cruise";
  title: string;
  tagline: string;
  description: string;
  packages: Package[];
}

export default function ActivityLandingPage({
  category,
  title,
  tagline,
  description,
  packages,
}: ActivityLandingPageProps) {
  // Filter packages in this category
  const filteredPackages = packages.filter((pkg) => pkg.category === category);

  return (
    <div className="min-h-screen bg-bg-cream pb-20">
      {/* 1. HERO BANNER */}
      <div className="relative bg-primary-dark py-24 text-center border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-1.5 font-sans text-xs text-cream/65 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent font-bold">{title}</span>
          </div>

          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            {tagline}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-cream font-bold mb-4">
            {title} in Alleppey
          </h1>
          <p className="font-sans text-sm md:text-base text-cream/70 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* 2. DYNAMIC PACKAGES GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center max-w-md mx-auto">
            <p className="font-sans text-base text-charcoal/60 mb-6">
              Currently, no packages are published under {title}. Please check back soon or inquire directly via WhatsApp.
            </p>
            <a
              href={`https://wa.me/917356462150?text=${encodeURIComponent(
                `Hi! I'm interested in booking a ${title} tour in Alleppey. Please let me know what options are available.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-sm shadow-md transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
