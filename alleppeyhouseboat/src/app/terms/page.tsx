import Link from "next/link";
import { getSiteSettings } from "@/lib/cms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

export default async function TermsPage() {
  const settings = await getSiteSettings();
  const videoSrc = "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

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
                Terms of Service
              </h1>
              <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                Please read our rules regarding bookings, refunds, and onboard safety guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CONTENT */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-sm space-y-8 font-sans text-sm md:text-base text-charcoal/80 leading-relaxed">
            
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-primary-dark font-bold mb-4">
                1. Booking & Payment Terms
              </h2>
              <p>
                To secure a houseboat or daytime activity reservation, a 30% advance deposit is required. The remaining 70% balance is payable in full at the time of check-in at the jetty prior to boarding.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-primary-dark font-bold mb-4">
                2. Cancellation & Refund Policy
              </h2>
              <p>
                Cancellations made more than 15 days prior to check-in will receive a full refund of the deposit. Cancellations made between 7 and 15 days will receive a 50% refund. Cancellations made less than 7 days prior to travel date are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-primary-dark font-bold mb-4">
                3. Onboard Conduct & Safety Guidelines
              </h2>
              <p>
                Guests must strictly follow the safety instructions given by the captain and crew. Life jackets must be worn during cruising when requested by the captain. Damaging onboard property, illegal activities, or unsafe conduct will result in immediate termination of the trip without refund.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl md:text-2xl text-primary-dark font-bold mb-4">
                4. Weather & Force Majeure
              </h2>
              <p>
                In cases of extreme weather conditions, government restrictions, or safety concerns, we reserve the right to modify the cruise route or offer a reschedule date. If rescheduling is not possible, a full refund of the booking amount will be issued.
              </p>
            </section>

            <p className="text-xs text-charcoal/50 border-t border-primary/10 pt-6">
              Last updated: October 24, 2024. For queries regarding our service terms, email booking@alleppyhouseboat.com.
            </p>

          </div>
        </div>
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
