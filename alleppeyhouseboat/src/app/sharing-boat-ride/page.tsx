import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import ActivityLandingPage from "@/components/ActivityLandingPage";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600;

export default async function SharingBoatRidePage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ActivityLandingPage
          category="sharing-boat-ride"
          title="Sharing Boat Rides"
          tagline="Affordable Backwater Adventures"
          description="Cruise Alleppey's scenic backwaters on a shared boat ride at a fraction of the cost. Ideal for solo travelers, couples, and small groups looking for budget-friendly backwater cruising without booking an entire private boat."
          packages={packages}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}

