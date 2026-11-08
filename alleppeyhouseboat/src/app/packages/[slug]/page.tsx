import { notFound } from "next/navigation";
import { getSiteSettings, getPackage, getPackages } from "@/lib/cms";
import Header from "@/components/Header";
import PackageDetailsView from "@/components/PackageDetailsView";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const revalidate = 60; // Revalidate every 60 seconds so CMS changes appear promptly
export const dynamicParams = true; // Always allow dynamic rendering for newly created packages in CMS

// Support static generation of all existing package pages at build time
export async function generateStaticParams() {
  const packages = await getPackages();
  const slugs: { slug: string }[] = [];
  packages.forEach((pkg) => {
    if (!pkg.slug) return;
    slugs.push({ slug: pkg.slug });
    try {
      const decoded = decodeURIComponent(pkg.slug);
      if (decoded !== pkg.slug) {
        slugs.push({ slug: decoded });
      }
      const dashed = decoded.toLowerCase().replace(/\s+/g, "-");
      if (dashed !== pkg.slug && dashed !== decoded) {
        slugs.push({ slug: dashed });
      }
    } catch {}
  });
  return slugs;
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
