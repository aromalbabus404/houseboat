import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@/lib/cms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Award, Compass, Heart, ShieldCheck } from "lucide-react";

export const revalidate = 3600; // ISR cache hourly

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <>
      <Header />
      <main className="flex-grow bg-bg-cream pb-20">
        
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
                Our Backwater Story
              </h1>
              <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                Dedicated to offering premium, safe, and transparent backwater experiences in Kerala's Venice.
              </p>
            </div>
          </div>
        </div>

        {/* 2. ABOUT US SECTION CONTENT */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-dark font-bold leading-tight mb-6">
                Premium Backwater Journeys Since 2018
              </h2>
              <div className="space-y-4 font-sans text-sm md:text-base text-charcoal/75 leading-relaxed">
                <p>
                  Alleppy Houseboat was founded with a single mission: to redefine hospitality in the Alappuzha backwaters. We noticed that booking houseboats was often plagued by lack of price transparency, inconsistent safety standards, and middleman markups.
                </p>
                <p>
                  By partnering directly with verified boat owners, inspecting every vessel ourselves, and prioritizing high-quality locally-sourced food, we've built a reputation for delivering cruises that match traveler expectations perfectly.
                </p>
                <p>
                  Whether you are planning a romantic luxury escape, a memorable family vacation, or a daytime kayaking adventure, our dedicated on-shore coordinators and certified crew ensure your absolute safety and satisfaction.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md border border-primary/5">
              <Image
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
                alt="Houseboat cruising in Alleppey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* 3. VALUES ROW */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-2">
                Our Foundation
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-primary-dark font-bold">
                Core Values We Live By
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Safety Verified",
                  desc: "Every vessel in our fleet features certified captains, life jackets, and adheres strictly to maritime safety protocols.",
                },
                {
                  icon: Award,
                  title: "No Hidden Costs",
                  desc: "We stand for absolute price transparency. The price you book is the final price you pay. No exceptions.",
                },
                {
                  icon: Heart,
                  title: "Local Hospitality",
                  desc: "Enjoy authentic traditional Kerala cuisine freshly cooked onboard by our talented private chefs.",
                },
                {
                  icon: Compass,
                  title: "Eco-Conscious Tourism",
                  desc: "We practice responsible waste disposal and respect the delicate backwater ecosystems and local villages.",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-primary/5 shadow-sm text-center flex flex-col items-center"
                >
                  <div className="p-3 bg-primary/5 rounded-2xl text-primary mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-primary-dark mb-2">
                    {value.title}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
