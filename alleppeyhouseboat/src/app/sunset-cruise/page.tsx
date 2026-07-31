import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import ActivityLandingPage from "@/components/ActivityLandingPage";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600;

export default async function SunsetCruisePage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ActivityLandingPage
          category="sunset-cruise"
          title="Sunset Cruise"
          tagline="Golden Hour Magic"
          description="Cruise across the vast waters of Vembanad Lake to watch the sunset paint the sky in gold. Perfect for couples and families looking for a relaxing evening."
          packages={packages}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
