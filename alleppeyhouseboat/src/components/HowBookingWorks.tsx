"use client";

import { motion } from "framer-motion";
import { Ship, Calendar, MessageSquare, CheckSquare, Smile } from "lucide-react";

const steps = [
  {
    icon: Ship,
    title: "Choose Boat",
    description: "Explore our collection of deluxe, premium, and luxury houseboats or day activities.",
  },
  {
    icon: Calendar,
    title: "Select Date",
    description: "Pick your preferred check-in date and details about guest counts & rooms.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Us",
    description: "Click book to open a direct WhatsApp chat with prefilled package details.",
  },
  {
    icon: CheckSquare,
    title: "Confirm Booking",
    description: "We confirm boat availability instantly. Pay 30% advance to lock details.",
  },
  {
    icon: Smile,
    title: "Enjoy Cruise",
    description: "Board your private houseboat at the jetty and pay the balance on check-in.",
  },
];

export default function HowBookingWorks() {
  return (
    <section className="py-20 bg-[#0F3B3A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            SIMPLE PROCESS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream font-bold leading-tight mb-4">
            How Booking Works
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/70">
            Book your dream backwater cruise in five easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -right-1 bg-accent text-primary-dark w-6 h-6 rounded-full flex items-center justify-center font-sans text-xs font-extrabold shadow-sm">
                {idx + 1}
              </div>

              {/* Icon frame */}
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-accent mb-6 group-hover:scale-105 transition-transform duration-300">
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-lg font-bold text-cream mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-cream/70 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
