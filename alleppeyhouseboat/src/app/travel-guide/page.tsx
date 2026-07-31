"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BookOpen, Calendar, IndianRupee, MapPin, Compass, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    id: "best-time",
    title: "Best Time to Visit Alleppey",
    icon: Calendar,
    content: `
      The absolute best time to visit Alappuzha is from **September to March** (Winter season). During these months, the humidity drops, and the temperature is extremely pleasant, hovering around 18°C to 30°C. 
      
      - **Winter (September to March):** Ideal weather for sightseeing and overnight houseboat cruises. Clear skies and cool breezes.
      - **Monsoon (June to August):** Perfect if you love lush green scenery and heavy rain. Great discounts are available, but lake activities might get paused during strong storms.
      - **Summer (April to May):** Warm and humid, but great for budget travelers as boat operators slash prices up to 50%.
    `
  },
  {
    id: "houseboat-price",
    title: "Alleppey Houseboat Price Guide",
    icon: IndianRupee,
    content: `
      Houseboat prices vary based on category (Deluxe, Premium, Luxury), number of bedrooms, and booking seasons.
      
      - **Deluxe Houseboat (1 Bedroom):** ₹7,500 - ₹9,500 per night. (AC runs from 9:00 PM to 6:00 AM. Includes all meals).
      - **Premium Houseboat (1 Bedroom):** ₹11,000 - ₹14,000 per night. (Full-time AC. Premium food & glass interiors).
      - **Luxury Glass Houseboat (1 Bedroom):** ₹18,000 - ₹24,000 per night. (Full-time AC, premium materials, customizable gourmet menu).
      - **Additional rooms:** Add approximately ₹3,000 to ₹5,000 per extra room.
    `
  },
  {
    id: "best-houseboats",
    title: "Best Houseboats in Alleppey",
    icon: Compass,
    content: `
      Choosing the best boat depends on your group size and budget. 
      
      - **For Couples:** Premium Glass Houseboats or Deluxe 1-Bedroom boats offer the best privacy and cozy environments.
      - **For Families:** 3-Bedroom to 5-Bedroom houseboats with spacious upper decks and child-friendly safety railings.
      - **Our Recommendation:** Look for boats with a valid licensing registration number issued by the Port Department, and ensure AC operational hours are agreed upon upfront.
    `
  },
  {
    id: "itineraries",
    title: "Alleppey 1-Day & 2-Day Itinerary",
    icon: Navigation,
    content: `
      ### 1-Day Itinerary (Day Cruise)
      - **10:30 AM:** Board the private houseboat at Finishing Point Jetty.
      - **11:00 AM - 01:00 PM:** Cruise through Punnamada Lake, starting points of Nehru Trophy Boat Race, and enter narrow village canals.
      - **01:00 PM:** Anchor for a fresh traditional Kerala lunch served onboard (Pearl Spot fish fry, rice, sambar, vegetable dishes).
      - **02:30 PM - 04:00 PM:** Cruise past backwater islands, watch duck farming, and toddy shops.
      - **04:00 PM:** Enjoy hot tea/coffee and banana fritters.
      - **05:00 PM:** Disembark at the jetty.

      ### 2-Day Itinerary (Overnight Stay)
      - **Day 1 (12:00 PM):** Check-in and board your private overnight houseboat. Enjoy the welcome drink.
      - **01:30 PM:** Stop for lunch in the calm lake shores.
      - **03:00 PM - 05:30 PM:** Leisurely cruise.
      - **05:30 PM:** Boat anchors near a local village bank (as per government safety rules, houseboats cannot cruise after dark). Take a village walk or book a 1-hour sunset kayak tour.
      - **08:00 PM:** Candlelit traditional dinner onboard.
      - **Day 2 (08:00 AM):** Cruise during breakfast. Check-out at 09:00 AM.
    `
  },
  {
    id: "things-to-do",
    title: "Things to Do in Alleppey",
    icon: BookOpen,
    content: `
      - **Overnight Houseboat Cruise:** The essential Kuttanad experience.
      - **Sunrise/Sunset Kayaking:** Paddle inside quiet canals too small for motorboats.
      - **Shikara Boat Rides:** Budget-friendly hourly tours that navigate village borders.
      - **Alappuzha Lighthouse & Beach:** Watch the sunset from the historic 19th-century lighthouse.
      - **Toddy Shop Food:** Taste local spicy preparations like crab, clams, and duck roast.
    `
  },
  {
    id: "places-near",
    title: "Best Places to Visit Near Alleppey",
    icon: MapPin,
    content: `
      - **Marari Beach (15 km):** Quiet, clean sandy beach famous for luxury resorts and organic fishing villages.
      - **Kumarakom (32 km):** Located on the other side of Vembanad Lake, famous for bird sanctuaries and luxury lagoon resorts.
      - **Pathiramanal Island:** A tiny birdwatcher's paradise island accessible only by boat in the middle of Vembanad Lake.
      - **Ambalappuzha Sri Krishna Temple (14 km):** Historic temple built in typical Kerala architectural style, famous for its sweet milk pudding (Palpayasam).
    `
  },
  {
    id: "alleppey-vs-kumarakom",
    title: "Alleppey vs Kumarakom",
    icon: Compass,
    content: `
      Both offer beautiful backwaters, but the experience is different:
      
      - **Alleppey:** Venice-like feel. Features a vast network of narrow residential canals, bustling water traffic, and a closer look at village daily life. It is the hub for houseboat bookings.
      - **Kumarakom:** Luxury resort feel. Quiet, expansive open waters of Vembanad lake. Best suited for high-end luxury resort stays, couples seeking complete isolation, and birdwatching.
    `
  },
  {
    id: "how-to-reach",
    title: "How to Reach Alleppey",
    icon: Navigation,
    content: `
      - **By Air:** Cochin International Airport (COK) is the nearest airport, located about **75 km** away. Taxis and buses run directly from airport terminals.
      - **By Train:** Alappuzha Railway Station (ALLP) is located within the city limits and connects directly to major cities like Kochi, Trivandrum, Chennai, and Bangalore.
      - **By Road:** KSRTC buses operate frequent services along the National Highway NH-66 from Ernakulam (Kochi) and Trivandrum.
    `
  }
];

export default function TravelGuidePage() {
  const [activeTab, setActiveTab] = useState("best-time");

  const currentArticle = articles.find((art) => art.id === activeTab) || articles[0];

  return (
    <>
      <Header />
      <main className="flex-grow bg-bg-cream pb-20">
        
        {/* 1. HERO BANNER */}
        <div className="px-4 md:px-8 py-4 bg-bg-cream">
          <div className="relative w-full min-h-[320px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5 flex flex-col justify-center py-16 text-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F3B3A]/85 z-10" />
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200')" }} />

            <div className="max-w-4xl mx-auto px-6 relative z-20">
              <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
                KERALA TOURISM PORTAL
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 drop-shadow-sm">
                Alleppey Travel Guide
              </h1>
              <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                Everything you need to know about pricing, itineraries, best times, and planning your backwater escape.
              </p>
            </div>
          </div>
        </div>

        {/* 2. DUAL COLUMN LAYOUT */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase mb-4 px-2">Table of Contents</span>
              {articles.map((art) => {
                const Icon = art.icon;
                const isActive = activeTab === art.id;
                return (
                  <button
                    key={art.id}
                    onClick={() => setActiveTab(art.id)}
                    className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl font-sans text-xs font-bold uppercase tracking-wider text-left border transition focus:outline-none min-h-[52px] cursor-pointer ${
                      isActive 
                        ? "bg-[#cdeed6] text-primary-dark border-primary/10 shadow-sm" 
                        : "bg-white text-charcoal/70 border-primary/5 hover:bg-white/70"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-primary" : "text-charcoal/40"}`} />
                    <span>{art.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-sm min-h-[500px]">
                <span className="font-sans text-[10px] text-accent font-extrabold uppercase tracking-widest block mb-4">
                  GUIDE ARTICLE
                </span>
                
                <h2 className="font-serif text-3xl md:text-4xl text-primary-dark font-bold mb-6">
                  {currentArticle.title}
                </h2>
                
                <div className="prose prose-sm md:prose-base font-sans text-charcoal/75 leading-relaxed whitespace-pre-line space-y-4">
                  {currentArticle.content.trim()}
                </div>

                {/* Direct Action Link */}
                <div className="mt-12 pt-8 border-t border-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold text-primary-dark">Ready to book your backwater escape?</span>
                    <span className="font-sans text-[11px] text-charcoal/50">Get free custom quotes directly from local captains.</span>
                  </div>
                  <a
                    href="https://wa.me/917356462150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm transition"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
