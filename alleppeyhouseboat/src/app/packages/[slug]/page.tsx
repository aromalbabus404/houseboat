import { notFound } from "next/navigation";
import { getSiteSettings, getPackage, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import PackageDetailsView from "@/components/PackageDetailsView";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 3600; // ISR cache hourly

// Support static generation of all existing package pages at build time
export async function generateStaticParams() {
  const packages = await getPackages();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const [settings, pkg] = await Promise.all([
    getSiteSettings(),
    getPackage(resolvedParams.slug),
  ]);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        <PackageDetailsView pkg={pkg} settings={settings} />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp />
    </>
  );
}
