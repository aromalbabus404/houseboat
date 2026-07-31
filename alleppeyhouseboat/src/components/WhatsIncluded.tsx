"use client";

import { motion } from "framer-motion";
import { Coffee, GlassWater, Utensils, Wind, ShieldAlert, Users, Ship } from "lucide-react";

const inclusions = [
  {
    icon: GlassWater,
    title: "Welcome Drink",
    desc: "Refreshing local tender coconut water or fresh fruit juice served instantly on boarding.",
  },
  {
    icon: Utensils,
    title: "Authentic Kerala Lunch",
    desc: "Freshly prepared onboard: local rice, vegetable curries, and traditional Pearl Spot (Karimeen) fish fry.",
  },
  {
    icon: Coffee,
    title: "Evening Tea & Snacks",
    desc: "Hot tea or coffee served with fresh local banana fritters (Pazham Pori) or onion pakodas.",
  },
  {
    icon: Wind,
    title: "Air Conditioned Bedrooms",
    desc: "Enjoy quiet sleep with standard cooling in deluxe boats (9 PM - 6 AM) or full-time premium cooling.",
  },
  {
    icon: Ship,
    title: "100% Private Cruise",
    desc: "Chartered boats for your group only. No sharing common lounges or dining spaces with strangers.",
  },
  {
    icon: Users,
    title: "Experienced 3-Man Crew",
    desc: "Every boat features a certified Captain, local navigator/guide, and dedicated onboard chef.",
  },
  {
    icon: ShieldAlert,
    title: "Full Safety Equipment",
    desc: "Standard life jackets, life buoys, fire extinguishers, first aid kit, and verified licensing onboard.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            ALL-INCLUSIVE COMFORT
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            What's Included in Overnight Stay
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            Enjoy full board hospitality with no hidden costs. Every overnight cruise includes these premium features.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusions.map((inc, idx) => (
            <motion.div
              key={inc.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-primary/5 shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-primary/5 rounded-xl text-primary w-fit mb-4">
                  <inc.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-primary-dark mb-2">
                  {inc.title}
                </h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  {inc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
