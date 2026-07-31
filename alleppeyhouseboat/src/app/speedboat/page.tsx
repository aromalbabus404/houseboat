import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import ActivityLandingPage from "@/components/ActivityLandingPage";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600;

export default async function SpeedboatPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ActivityLandingPage
          category="speedboat"
          title="Speedboat Rides"
          tagline="Thrills on the Lake"
          description="Zip across the vast open lakes of Alleppey. Ideal for families and small groups seeking a fast, high-energy tour of the main waterways and racing tracks."
          packages={packages}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
