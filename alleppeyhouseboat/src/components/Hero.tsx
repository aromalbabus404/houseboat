"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SiteSettings } from "@/lib/mockData";

interface HeroProps {
  settings: SiteSettings;
}

export default function Hero({ settings }: HeroProps) {
  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <section className="px-4 md:px-8 py-4 bg-bg-cream">
      {/* ROUNDED HERO BOX (same border-line view as reference image) */}
      <div className="relative w-full h-[85vh] min-h-[550px] max-h-[800px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5">
        
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Shadow overlay to make text highly legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
        </div>

        {/* Content overlay (Left-aligned, premium minimal layout) */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-28 z-20">
          <div className="max-w-3xl flex flex-col items-start gap-5">
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium leading-[1.1] text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              {settings.heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 font-sans max-w-xl text-left drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] leading-relaxed"
            >
              {settings.heroSubheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              {/* Pill-shaped Book Now button */}
              <a
                href={`https://wa.me/917356462150?text=${encodeURIComponent(
                  "Hi! I want to book a houseboat in Alleppey."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-sm transition duration-200 shadow hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Book now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              {/* Contact Call Link */}
              <a
                href="tel:+917356462150"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-xs border border-white/20 transition backdrop-blur-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call Us</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* 5. GLASSMORPHIC STATS BAR AT BOTTOM OF HERO (Horizontal on all devices including mobile) */}
        <div className="absolute bottom-4 inset-x-0 bg-transparent py-2 px-3 sm:px-6 md:px-12 lg:px-20 z-30">
          <div className="max-w-6xl mx-auto flex flex-row items-center justify-around gap-2 sm:gap-4 w-full">
            
            {/* Stat 1: Happy Guests */}
            <div className="flex items-center gap-1.5 sm:gap-3 text-white">
              <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#25D366] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-sans text-sm sm:text-lg md:text-xl font-extrabold leading-none">
                  {(settings.reviewCount + 1000).toLocaleString()}+
                </span>
                <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-wider text-white/60 font-bold mt-1">
                  HAPPY GUESTS
                </span>
              </div>
            </div>

            {/* Stat 2: Google Rating */}
            <div className="flex items-center gap-1.5 sm:gap-3 text-white">
              {/* Colorful Google G Logo */}
              <svg className="w-4 h-4 sm:w-5.5 sm:h-5.5 shrink-0" viewBox="0 0 24 24">
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
              <div className="flex flex-col text-left">
                <span className="font-sans text-sm sm:text-lg md:text-xl font-extrabold leading-none">
                  {settings.googleRating}★
                </span>
                <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-wider text-white/60 font-bold mt-1">
                  RATING
                </span>
              </div>
            </div>

            {/* Stat 3: Years Running */}
            <div className="flex items-center gap-1.5 sm:gap-3 text-white">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#25D366] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-sans text-sm sm:text-lg md:text-xl font-extrabold leading-none">
                  {settings.yearsRunning}+
                </span>
                <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-wider text-white/60 font-bold mt-1">
                  YEARS RUNNING
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
