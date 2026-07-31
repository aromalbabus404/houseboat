import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import ActivityLandingPage from "@/components/ActivityLandingPage";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600;

export default async function VillageTourPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <ActivityLandingPage
          category="village-tour"
          title="Village Canoe Tour"
          tagline="Local Life Exploration"
          description="Immerse yourself in traditional backwater villages. Witness coconut fiber weaving, toddy tapping, and explore quiet micro-canals in a non-motorized canoe steered by locals."
          packages={packages}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
