import { getSiteSettings, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import HouseboatsCatalog from "@/components/HouseboatsCatalog";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

// Support static generation of category routes
export async function generateStaticParams() {
  return [
    { category: "private" },
    { category: "luxury" },
    { category: "premium" },
    { category: "deluxe" },
    { category: "sharing" },
  ];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function HouseboatCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getPackages(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HouseboatsCatalog packages={packages} initialCategory={resolvedParams.category} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
