import { getSiteSettings, getPackages, getTestimonials, getGalleryImages, getFAQs } from "@/lib/cms";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HouseboatsGrid from "@/components/HouseboatsGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // Revalidate cache hourly (ISR)

export default async function Home() {
  // Fetch all data in parallel
  const [settings, packages, testimonials, galleryImages, faqs] = await Promise.all([
    getSiteSettings(),
    getPackages(),
    getTestimonials(),
    getGalleryImages(),
    getFAQs(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Animated WebGL 3D Hero */}
        <Hero settings={settings} />

        {/* Houseboat Category Showcase */}
        <HouseboatsGrid packages={packages} />

        {/* Masonry guest photo gallery with lightbox (limited to 8 on home page) */}
        <GallerySection images={galleryImages} limit={8} />

        {/* Testimonials Carousel */}
        <TestimonialsSection testimonials={testimonials} />

        {/* FAQ Accordions */}
        <FAQSection faqs={faqs} />

        {/* Map & Office Address */}
        <LocationSection settings={settings} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
