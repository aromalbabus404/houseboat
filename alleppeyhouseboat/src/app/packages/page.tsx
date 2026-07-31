import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PackagesCatalog from "@/components/PackagesCatalog";

export const revalidate = 3600; // ISR cache hourly

export default async function PackagesPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  const videoSrc = settings.heroVideoFileUrl || settings.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  return (
    <>
      <Header />
      <main className="flex-grow">
        <PackagesCatalog packages={packages} videoSrc={videoSrc} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
