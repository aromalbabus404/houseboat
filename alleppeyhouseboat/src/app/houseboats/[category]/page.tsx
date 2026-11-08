import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import HouseboatsCatalog from "@/components/HouseboatsCatalog";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

// Support static generation of category routes: only private and sharing
export async function generateStaticParams() {
  return [
    { category: "private" },
    { category: "sharing" },
  ];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function HouseboatCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const normalizedCategory = ["luxury", "premium", "deluxe"].includes(resolvedParams.category.toLowerCase())
    ? "private"
    : resolvedParams.category;

  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HouseboatsCatalog packages={packages} initialCategory={normalizedCategory} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
