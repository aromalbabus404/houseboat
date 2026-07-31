"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Check, MessageCircle, Phone, ArrowLeft, ShieldAlert, Award } from "lucide-react";
import { Package, SiteSettings } from "@/lib/mockData";

interface PackageDetailsViewProps {
  pkg: Package;
  settings: SiteSettings;
}

export default function PackageDetailsView({ pkg, settings }: PackageDetailsViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isHouseboat = pkg.category.startsWith("houseboat-");
  const friendlyCategory = pkg.category.replace("houseboat-", "");
  
  // Custom WhatsApp message
  const whatsappMessage = `Hi! I want to book the "${pkg.title}" package starting at ₹${pkg.price}. Please check availability.`;
  const whatsappUrl = `https://wa.me/917356462150?text=${encodeURIComponent(whatsappMessage)}`;

  // Determine back path
  const backPath = isHouseboat ? `/houseboats/${friendlyCategory}` : `/${pkg.category}`;
  const categoryLabel = isHouseboat ? `${friendlyCategory} houseboat` : pkg.category;

  return (
    <div className="min-h-screen bg-bg-cream pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. BREADCRUMBS & BACK LINK */}
        <div className="flex flex-wrap items-center justify-end gap-4 mb-8">

          <Link
            href={backPath}
            className="inline-flex items-center gap-1.5 text-sm font-sans font-bold text-primary hover:text-primary-light transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to catalog</span>
          </Link>
        </div>

        {/* 2. MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Active Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm bg-primary-dark/5 border border-primary/5">
              <Image
                src={pkg.images[activeImageIndex] || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800"}
                alt={`${pkg.title} - Main View`}
                fill
                priority
                className="object-cover"
              />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-dark text-accent font-sans text-[10px] font-bold uppercase tracking-wider">
                {isHouseboat ? `${friendlyCategory} Boat` : friendlyCategory}
              </div>
            </div>

            {/* Thumbnails list */}
            {pkg.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {pkg.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer focus:outline-none border-2 transition ${
                      activeImageIndex === idx ? "border-accent shadow" : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${pkg.title} - Thumbnail ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 15vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Booking & Details Column */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Package Identity */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: Math.floor(pkg.rating) }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-sans text-xs font-bold text-primary-light">
                  {pkg.rating} Rating
                </span>
                <span className="font-sans text-xs text-charcoal/50">•</span>
                <span className="font-sans text-xs text-charcoal/65 font-medium">
                  Verified Operator
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-primary-dark font-bold leading-tight mb-3">
                {pkg.title}
              </h1>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                {pkg.shortDescription}
              </p>
            </div>

            {/* Price Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-primary/5 mb-8">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-sans text-xs text-charcoal/50 uppercase tracking-wider">Starting Price</span>
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl md:text-3xl font-extrabold text-primary-dark">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="font-sans text-[10px] text-charcoal/50 -mt-1">All meals included</span>
                </div>
              </div>

              {/* No Hidden Charges Guarantee */}
              <div className="flex items-start gap-2.5 px-4 py-3 bg-accent-light/30 rounded-2xl border border-accent/25 mb-6">
                <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-primary-dark">100% Price Transparency</span>
                  <span className="font-sans text-[10px] text-charcoal/65 leading-normal mt-0.5">
                    No booking fees, port taxes, or hidden commission. Pay 30% to reserve, and remaining balance at jetty check-in.
                  </span>
                </div>
              </div>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-sm shadow-md active:scale-98 transition duration-150"
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.924C16.379 2.036 13.924 1.02 11.3 1.02c-5.41 0-9.81 4.396-9.813 9.801-.001 1.516.402 2.999 1.168 4.321L1.692 20.3l5.086-1.332L6.647 19.16zM17.186 14.156c-.288-.144-1.7-.84-1.962-.936-.263-.096-.454-.144-.646.144-.19.288-.737.936-.903 1.127-.166.19-.333.216-.62.072-.288-.144-1.215-.448-2.316-1.43-.856-.764-1.434-1.708-1.602-1.995-.168-.288-.018-.444.126-.587.13-.13.288-.336.43-.504.143-.168.19-.288.286-.48.096-.19.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.136-.232-.558-.468-.48-.646-.489-.167-.008-.36-.01-.55-.01-.19 0-.5.072-.762.36-.263.288-1.003.98-1.003 2.392 0 1.412 1.028 2.776 1.171 2.969.144.19 2.023 3.09 4.9 4.332.684.296 1.218.473 1.635.606.688.219 1.314.188 1.81.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
                  </svg>
                  <span>Check Availability / Book via WhatsApp</span>
                </a>
                
                <a
                  href="tel:+917356462150"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full hover:bg-primary-dark/5 text-primary-dark font-sans font-bold text-xs border border-primary/10 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Booking Helpline</span>
                </a>
              </div>

              {/* Trust Signal Badge */}
              <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] font-sans text-charcoal/50">
                <Award className="w-3.5 h-3.5 text-accent" />
                <span>Local Expert Guides • Certified Safe Vessels</span>
              </div>
            </div>

            {/* Inclusions Panel */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-bold text-primary-dark mb-4">Package Inclusions</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-charcoal/80">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="font-serif text-lg font-bold text-primary-dark mb-4">Full Description</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}
