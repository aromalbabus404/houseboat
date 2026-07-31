"use client";

import { Star } from "lucide-react";
import { Testimonial } from "@/lib/mockData";

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
  // Duplicate testimonials multiple times to ensure seamless infinite looping ticker
  const duplicatedReviews = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-[50px] bg-bg-cream overflow-hidden">
      {/* Self-contained CSS for smooth infinite left-to-right marquee ticker */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-horizontal {
          display: flex;
          width: max-content;
          animation: marquee-ltr 35s linear infinite;
        }
        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-6">
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

        {/* Endless scrolling reviews container with edge fading */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Fading gradient masks on left/right borders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-cream to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-cream to-transparent z-20 pointer-events-none" />

          {/* Scrolling track */}
          <div className="animate-marquee-horizontal">
            {duplicatedReviews.map((review, index) => {
              const avatarColor = avatarColors[index % avatarColors.length];

              return (
                <div
                  key={`${review.name}-${index}`}
                  className="bg-white border border-primary/5 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[230px] w-[340px] shrink-0 mx-4 text-left relative"
                >
                  {/* Google G Logo in corner */}
                  <div className="absolute top-6 right-6">
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-full ${avatarColor} text-white flex items-center justify-center font-sans font-bold text-base shadow-sm uppercase shrink-0`}>
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans text-sm font-extrabold text-primary-dark truncate pr-6">
                        {review.name}
                      </span>
                      <span className="font-sans text-[10px] text-charcoal/45 font-medium mt-0.5">
                        Local Guide • Google Reviewer
                      </span>
                    </div>
                  </div>

                  {/* Middle: Review text content */}
                  <p className="font-sans text-xs text-charcoal/75 leading-relaxed italic line-clamp-3 my-3">
                    "{review.quote}"
                  </p>

                  {/* Bottom: Stars & date review meta */}
                  <div className="flex items-center justify-between border-t border-primary/5 pt-3.5 mt-auto">
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] text-charcoal/40 font-semibold">
                      {review.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
