import Link from "next/link";
import { getSiteSettings, getGalleryImages } from "@/lib/cms";
import Header from "@/components/Header";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

export default async function GalleryPage() {
  const [settings, galleryImages] = await Promise.all([
    getSiteSettings(),
    getGalleryImages(),
  ]);

  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <>
      <Header />
      <main className="flex-grow bg-bg-cream">
        {/* 1. HERO BANNER (same as homepage hero style) */}
        <div className="px-4 md:px-8 py-4 bg-bg-cream">
          <div className="relative w-full min-h-[320px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5 flex flex-col justify-center py-16 text-center">
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
              <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-20">
              <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 drop-shadow-sm">
                Guest Photo Gallery
              </h1>
              <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                Real moments, smiles, and gorgeous sunset captures shared by our backwater travelers.
              </p>
            </div>
          </div>
        </div>

        {/* 2. GALLERY MASONRY SECTION */}
        <GallerySection images={galleryImages} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
