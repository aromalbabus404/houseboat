import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import HouseboatsCatalog from "@/components/HouseboatsCatalog";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

export default async function HouseboatsPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HouseboatsCatalog packages={packages} initialCategory="all" videoSrc={videoSrc} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
