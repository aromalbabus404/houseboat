"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryImage } from "@/lib/mockData";

interface GallerySectionProps {
  images: GalleryImage[];
  limit?: number;
}

export default function GallerySection({ images, limit }: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Slice the images to display only up to the limit if specified
  const displayedImages = limit ? images.slice(0, limit) : images;
  const hasMore = limit ? images.length > limit : false;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % displayedImages.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + displayedImages.length) % displayedImages.length);
  };

  return (
    <section className="py-[50px] bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
            Guest Moments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-4">
            Memories on the Water
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70">
            Real photos shared by our guests during their houseboat, kayaking, and activities in Alleppey.
          </p>
        </div>

        {/* 2-Column Mobile & 3-Column Desktop Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {displayedImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg border border-primary/5 bg-primary-dark/5"
            >
              <Image
                src={img.imageUrl}
                alt={img.caption || "Guest Photo"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-[1.03] transition duration-300"
                loading="lazy"
              />
              
              {/* Overlay on hover (visible on desktop hover, tap on mobile) */}
              <div className="absolute inset-0 bg-primary-dark/65 opacity-0 group-hover:opacity-100 transition duration-350 flex flex-col justify-end p-3 sm:p-6 z-10">
                <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-accent mb-1 md:mb-2" />
                <p className="font-sans text-[10px] md:text-sm text-cream font-medium line-clamp-2 leading-snug">
                  {img.caption}
                </p>
                <span className="font-sans text-[8px] md:text-[10px] text-accent font-semibold uppercase tracking-widest mt-1">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Photos CTA (shown only if limit is set) */}
        {limit && (
          <div className="flex justify-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-light text-white font-sans font-bold text-xs uppercase tracking-wider shadow hover:scale-[1.02] active:scale-95 transition duration-150 cursor-pointer"
            >
              <span>View Full Gallery</span>
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[200] flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-cream rounded-full transition focus:outline-none z-[210] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-cream rounded-full transition focus:outline-none z-[210] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-cream rounded-full transition focus:outline-none z-[210] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full max-w-4xl h-[70vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={displayedImages[lightboxIndex].imageUrl}
                  alt={displayedImages[lightboxIndex].caption || "Enlarged Guest Photo"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              {displayedImages[lightboxIndex].caption && (
                <div className="text-center mt-4 max-w-2xl px-4">
                  <p className="text-cream font-sans text-xs md:text-sm leading-relaxed">
                    {displayedImages[lightboxIndex].caption}
                  </p>
                  <span className="text-accent font-sans text-[10px] uppercase tracking-widest mt-1 block font-semibold">
                    {displayedImages[lightboxIndex].category}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
