"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { SiteSettings } from "@/lib/mockData";

interface HeroProps {
  settings: SiteSettings;
}

export default function Hero({ settings }: HeroProps) {
  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <section className="px-4 md:px-8 py-4 bg-bg-cream">
      {/* ROUNDED HERO BOX (same border-line view as reference image) */}
      <div className="relative w-full h-[80vh] md:h-[85vh] min-h-[480px] md:min-h-[550px] max-h-[800px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5">
        
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
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 pb-8 md:pb-12 z-20">
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

          </div>
        </div>

        {/* Bottom Left Button: Call Us */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 left-6 md:left-12 z-30"
        >
          <a
            href="tel:+917356462150"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-[10px] sm:text-xs border border-white/20 transition backdrop-blur-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>Call Us</span>
          </a>
        </motion.div>

        {/* Bottom Right Button: Book Now */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 right-6 md:right-12 z-30"
        >
          <a
            href={`https://wa.me/917356462150?text=${encodeURIComponent(
              "Hi! I want to book a houseboat in Alleppey."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-xs sm:text-sm transition duration-200 shadow hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Book now</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
