"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, Check, Phone, ArrowLeft, ShieldAlert, Award,
  Bed, Users, Clock, UtensilsCrossed, CalendarX, MapPin 
} from "lucide-react";
import { Package, SiteSettings } from "@/lib/mockData";

interface PackageDetailsViewProps {
  pkg: Package;
  settings: SiteSettings;
}

export default function PackageDetailsView({ pkg, settings }: PackageDetailsViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isHouseboat = pkg.category.startsWith("houseboat-");
  const isPackage = pkg.category.startsWith("package-");
  const friendlyCategory = pkg.category.replace("houseboat-", "").replace("package-", "");
  
  // Tomorrow's date utility for default date input
  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  // State fields
  const [bookingDate, setBookingDate] = useState(getTomorrowDateString());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [couples, setCouples] = useState(1);

  // Determine if this package defaults to overnight stay
  const isOvernightFirst = isHouseboat && 
                           pkg.category !== "houseboat-private" && 
                           pkg.category !== "shikara" && 
                           !pkg.category.includes("day");

  const [cruiseType, setCruiseType] = useState<"day" | "overnight">(isOvernightFirst ? "overnight" : "day");

  // Calculate specific price for Day Cruise (prefer CMS custom price, otherwise fallback to default calculation)
  const dayCruisePriceVal = pkg.dayCruisePrice !== undefined && pkg.dayCruisePrice !== null
    ? pkg.dayCruisePrice
    : (isOvernightFirst ? Math.round(pkg.price * 0.7) : pkg.price);

  // Calculate specific price for Overnight stay (prefer CMS custom price, otherwise fallback to default calculation)
  const overnightPriceVal = pkg.overnightPrice !== undefined && pkg.overnightPrice !== null
    ? pkg.overnightPrice
    : (isOvernightFirst ? pkg.price : pkg.price + 4000);

  // Dynamic pricing calculations based on selected option
  const calculatedPrice = cruiseType === "day" ? dayCruisePriceVal : overnightPriceVal;

  // Format date nicely for the message (e.g. 15 Aug 2026)
  const formattedDate = bookingDate ? new Date(bookingDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }) : "Not selected";

  // Custom WhatsApp message containing all selected parameters
  const whatsappMessage = `Hi! I would like to book the following package:

⛵ Package: ${pkg.title}
📅 Date: ${formattedDate}
👥 Guests: ${adults} Adults, ${children} Children, ${couples} Couples
🕒 Cruise Option: ${cruiseType === "overnight" ? "Overnight Stay" : "Day Cruise"}
💰 Total Price: ₹${calculatedPrice.toLocaleString()}

Please check availability.`;
  const whatsappUrl = `https://wa.me/917356462150?text=${encodeURIComponent(whatsappMessage)}`;

  // Determine back path
  const backPath = isHouseboat 
    ? `/houseboats` 
    : isPackage 
      ? `/packages` 
      : `/activities`;

  return (
    <div className="min-h-screen bg-bg-cream pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. BREADCRUMBS & BACK LINK */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 font-sans text-xs text-charcoal/50">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <span>/</span>
            <Link href={backPath} className="hover:text-primary capitalize transition">{friendlyCategory}</Link>
            <span>/</span>
            <span className="text-charcoal/80 font-semibold truncate max-w-[200px]">{pkg.title}</span>
          </div>

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
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-md text-accent font-sans text-[10px] font-extrabold uppercase tracking-wider">
                {isHouseboat ? `${friendlyCategory} Houseboat` : friendlyCategory}
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
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? "fill-current" : "text-charcoal/20"}`} />
                  ))}
                </div>
                <span className="font-sans text-xs font-bold text-primary-light">
                  {pkg.rating} Rating
                </span>
                <span className="font-sans text-xs text-charcoal/50">•</span>
                <span className="font-sans text-xs text-charcoal/65 font-medium">
                  Verified Captain
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-primary-dark font-bold leading-tight mb-3">
                {pkg.title}
              </h1>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                {pkg.shortDescription}
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-4 bg-white rounded-3xl p-5 border border-primary/5 mb-6">
              {pkg.bedrooms && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-xl text-primary">
                    <Bed className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-charcoal/50 uppercase">Bedrooms</span>
                    <span className="font-sans text-xs font-bold text-primary-dark">{pkg.bedrooms} BR Private</span>
                  </div>
                </div>
              )}
              {pkg.capacity && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-xl text-primary">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-charcoal/50 uppercase">Capacity</span>
                    <span className="font-sans text-xs font-bold text-primary-dark">{pkg.capacity}</span>
                  </div>
                </div>
              )}
              {pkg.duration && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-xl text-primary">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-charcoal/50 uppercase">Duration</span>
                    <span className="font-sans text-xs font-bold text-primary-dark">{pkg.duration}</span>
                  </div>
                </div>
              )}
              {pkg.foodIncluded && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-xl text-primary">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-charcoal/50 uppercase">Meals</span>
                    <span className="font-sans text-xs font-bold text-primary-dark truncate max-w-[140px]" title={pkg.foodIncluded}>
                      {pkg.foodIncluded}
                    </span>
                  </div>
                </div>
              )}
              {pkg.checkIn && pkg.checkOut && (
                <div className="flex items-center gap-3 col-span-2 border-t border-primary/5 pt-3">
                  <div className="p-2 bg-primary/5 rounded-xl text-primary">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between w-full font-sans text-xs text-primary-dark font-bold pr-2">
                    <span>Check-in: {pkg.checkIn}</span>
                    <span>Check-out: {pkg.checkOut}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Price Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-primary/5 mb-8">
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-sans text-xs text-charcoal/50 uppercase tracking-wider font-bold">Estimated Price</span>
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl md:text-3xl font-extrabold text-primary-dark">
                    ₹{calculatedPrice.toLocaleString()}
                  </span>
                  <span className="font-sans text-[10px] text-charcoal/50 -mt-1">All taxes included</span>
                </div>
              </div>

              {/* Cruise Type Radio Button Style Selector */}
              <div className="mb-6">
                <span className="font-sans text-xs font-bold text-primary-dark uppercase tracking-wider block mb-2.5">
                  Cruise Option
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-200 ${
                    cruiseType === "day" 
                      ? "bg-[#cdeed6]/45 border-[#20ba5a] text-primary-dark font-extrabold shadow-sm" 
                      : "bg-white border-primary/10 text-charcoal hover:bg-primary/5"
                  }`}>
                    <input 
                      type="radio" 
                      name="cruiseType" 
                      value="day" 
                      checked={cruiseType === "day"} 
                      onChange={() => setCruiseType("day")} 
                      className="sr-only" 
                    />
                    <span className="font-sans text-xs">Day Cruise</span>
                    <span className="font-sans text-[10px] opacity-75 mt-1 font-semibold">
                      ₹{dayCruisePriceVal.toLocaleString()}
                    </span>
                  </label>
                  <label className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-200 ${
                    cruiseType === "overnight" 
                      ? "bg-[#cdeed6]/45 border-[#20ba5a] text-primary-dark font-extrabold shadow-sm" 
                      : "bg-white border-primary/10 text-charcoal hover:bg-primary/5"
                  }`}>
                    <input 
                      type="radio" 
                      name="cruiseType" 
                      value="overnight" 
                      checked={cruiseType === "overnight"} 
                      onChange={() => setCruiseType("overnight")} 
                      className="sr-only" 
                    />
                    <span className="font-sans text-xs">Overnight stay</span>
                    <span className="font-sans text-[10px] opacity-75 mt-1 font-semibold">
                      ₹{overnightPriceVal.toLocaleString()}
                    </span>
                  </label>
                </div>
              </div>

              {/* Travel Date Selector */}
              <div className="mb-6">
                <label htmlFor="bookingDate" className="font-sans text-xs font-bold text-primary-dark uppercase tracking-wider block mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  value={bookingDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-primary/10 bg-white font-sans text-sm text-primary-dark font-semibold focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 cursor-pointer"
                />
              </div>

              {/* Guest Counts (Adults, Children, Couples) */}
              <div className="mb-6">
                <span className="font-sans text-xs font-bold text-primary-dark uppercase tracking-wider block mb-2.5">
                  Guests Details
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Adults */}
                  <div className="flex flex-col gap-1.5 p-3 bg-bg-cream/40 rounded-2xl border border-primary/5 text-center">
                    <span className="font-sans text-[9px] text-charcoal/50 font-bold uppercase tracking-wider">Adults</span>
                    <div className="flex items-center justify-between gap-1">
                      <button 
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        -
                      </button>
                      <span className="font-sans text-xs font-bold text-primary-dark min-w-[12px]">{adults}</span>
                      <button 
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex flex-col gap-1.5 p-3 bg-bg-cream/40 rounded-2xl border border-primary/5 text-center">
                    <span className="font-sans text-[9px] text-charcoal/50 font-bold uppercase tracking-wider">Children</span>
                    <div className="flex items-center justify-between gap-1">
                      <button 
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        -
                      </button>
                      <span className="font-sans text-xs font-bold text-primary-dark min-w-[12px]">{children}</span>
                      <button 
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Couples */}
                  <div className="flex flex-col gap-1.5 p-3 bg-bg-cream/40 rounded-2xl border border-primary/5 text-center">
                    <span className="font-sans text-[9px] text-charcoal/50 font-bold uppercase tracking-wider">Couples</span>
                    <div className="flex items-center justify-between gap-1">
                      <button 
                        onClick={() => setCouples(Math.max(0, couples - 1))}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        -
                      </button>
                      <span className="font-sans text-xs font-bold text-primary-dark min-w-[12px]">{couples}</span>
                      <button 
                        onClick={() => setCouples(couples + 1)}
                        className="w-6 h-6 rounded-full bg-white hover:bg-primary/5 text-primary-dark border border-primary/10 flex items-center justify-center font-bold text-xs cursor-pointer select-none active:scale-90 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* No Hidden Charges Guarantee */}
              <div className="flex items-start gap-2.5 px-4 py-3 bg-accent-light/30 rounded-2xl border border-accent/25 mb-6">
                <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-primary-dark">100% Price Transparency</span>
                  <span className="font-sans text-[10px] text-charcoal/65 leading-normal mt-0.5">
                    No booking fees or hidden charges. Pay 30% advance to reserve, balance at jetty check-in.
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
                  <span>Book on WhatsApp</span>
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

            {/* Facilities Panel */}
            {pkg.facilities && pkg.facilities.length > 0 && (
              <div className="mb-8 border-t border-primary/5 pt-6">
                <h3 className="font-serif text-lg font-bold text-primary-dark mb-4">Onboard Facilities</h3>
                <div className="flex flex-wrap gap-2.5">
                  {pkg.facilities.map((fac, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-primary/10 font-sans text-xs font-bold text-primary-dark shadow-sm">
                      {fac}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Description */}
            <div className="border-t border-primary/5 pt-6 mb-8">
              <h3 className="font-serif text-lg font-bold text-primary-dark mb-4">Full Description</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

            {/* Location Address */}
            {pkg.location && (
              <div className="border-t border-primary/5 pt-6 mb-8">
                <h3 className="font-serif text-lg font-bold text-primary-dark mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Boarding Location</span>
                </h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                  {pkg.location}
                </p>
              </div>
            )}

            {/* Cancellation Policy */}
            {pkg.cancellationPolicy && (
              <div className="border-t border-primary/5 pt-6 bg-accent-light/10 p-5 rounded-3xl border border-accent/10">
                <h3 className="font-serif text-base font-bold text-primary-dark mb-2 flex items-center gap-2">
                  <CalendarX className="w-4 h-4 text-accent" />
                  <span>Cancellation Policy</span>
                </h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  {pkg.cancellationPolicy}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
