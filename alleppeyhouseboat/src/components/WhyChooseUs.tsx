"use client";

import { ShieldCheck, Award, Users, PhoneCall, Heart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Houseboats",
    description: "Every single vessel in our fleet undergoes strict quality and safety compliance audits before listing.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Enjoy direct owner rates with zero middleman commissions, hidden taxes, or platform charges.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Guided and manned by seasoned crew members who have navigated these backwater canals for decades.",
  },
  {
    icon: PhoneCall,
    title: "24/7 On-Cruise Support",
    description: "Dedicated land-based coordinators checking on you regularly to ensure a completely smooth experience.",
  },
  {
    icon: Heart,
    title: "Safe & Comfortable",
    description: "Equipped with certified life vests, backup power generation, fire safety, and child-safe railings.",
  },
  {
    icon: MessageSquare,
    title: "Easy WhatsApp Booking",
    description: "No complicated booking forms. Instant availability checking, direct booking confirmation via WhatsApp chat.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-bg-cream border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            THE TRUSTED CHOICE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            Why Book With Us
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            We bridge the gap between backwater travelers and houseboat owners to ensure a seamless, transparent, and memorable cruise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-3.5 bg-primary/5 rounded-2xl text-primary w-fit mb-5">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-dark mb-2">
                {feat.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
