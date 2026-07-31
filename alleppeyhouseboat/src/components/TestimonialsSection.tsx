"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const avatarColors = [
  "bg-red-500",
  "bg-[#4285F4]", // Google Blue
  "bg-[#34A853]", // Google Green
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-600",
];

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the carousel
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            Why Guests Love Us
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            Honest experiences shared by travelers who booked their private backwater escapes with our verified captains.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card Slot */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white border border-primary/5 rounded-[2.5rem] p-8 md:p-12 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Google G Logo in corner */}
                <div className="absolute top-8 right-8">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                {/* Top: User info block */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-full ${avatarColors[activeIndex % avatarColors.length]} text-white flex items-center justify-center font-sans font-bold text-xl shadow-sm uppercase shrink-0`}>
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-base font-extrabold text-primary-dark truncate pr-8">
                      {testimonials[activeIndex].name}
                    </span>
                    <span className="font-sans text-xs text-charcoal/50 font-medium mt-0.5">
                      Local Guide • Google Reviewer
                    </span>
                  </div>
                </div>

                {/* Middle: Review text content */}
                <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed italic mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Bottom: Stars & date review meta */}
                <div className="flex items-center justify-between border-t border-primary/5 pt-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: Math.floor(testimonials[activeIndex].rating) }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-charcoal/40 font-semibold">
                    {testimonials[activeIndex].date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                      activeIndex === idx ? "bg-primary w-6" : "bg-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-primary/10 bg-white hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow-sm focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-primary/10 bg-white hover:bg-bg-cream text-primary-dark flex items-center justify-center transition shadow-sm focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
