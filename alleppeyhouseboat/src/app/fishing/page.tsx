import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import ActivityLandingPage from "@/components/ActivityLandingPage";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600;

export default async function FishingPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ActivityLandingPage
          category="fishing"
          title="Backwater Fishing"
          tagline="Traditional Angling"
          description="Fish like a local! Try bamboo rod angling in calm spots or operate massive Chinese fishing nets along the shores under the guidance of local fishermen."
          packages={packages}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
